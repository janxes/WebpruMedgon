import React, { useState, useEffect, useMemo } from 'react';
import { fetchAdvisorQueries, resetAdvisorQueriesInFirestore, AdvisorQueryLog } from '../lib/firebase';
import { SPREADSHEET_ID } from '../data/sheetsData';
import { 
  Shield, 
  Download, 
  RefreshCw, 
  Search, 
  FileSpreadsheet, 
  Calendar, 
  User, 
  Bot, 
  Home, 
  Copy, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Lock, 
  Unlock, 
  Sparkles, 
  BarChart3, 
  ExternalLink,
  Tag,
  Clock,
  HelpCircle,
  X,
  Trash2,
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';

interface AdminAdvisorLogsProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const DEFAULT_PIN = 'Medgon2027';

export const AdminAdvisorLogs: React.FC<AdminAdvisorLogsProps> = ({ isOpen = true, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('medgon_admin_auth') === 'true';
  });
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);

  const [logs, setLogs] = useState<AdvisorQueryLog[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [resetting, setResetting] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [resetSuccessMessage, setResetSuccessMessage] = useState<string | null>(null);

  // Cargar consultas desde Firestore
  const loadQueries = async () => {
    setLoading(true);
    try {
      const data = await fetchAdvisorQueries(100);
      setLogs(data);
    } catch (err) {
      console.error('Error al cargar consultas:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadQueries();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPin = pinInput.trim();
    if (cleanPin === DEFAULT_PIN || cleanPin.toLowerCase() === 'medgon2027') {
      setIsAuthenticated(true);
      sessionStorage.setItem('medgon_admin_auth', 'true');
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('medgon_admin_auth');
    setPinInput('');
  };

  // Extraer tags frecuentes
  const frequentTags = useMemo(() => {
    const keywords = [
      { tag: 'Passivhaus', term: 'passiv' },
      { tag: 'Aislamiento', term: 'aisla' },
      { tag: 'Coste / Precios', term: 'precio' },
      { tag: 'Acabados / Llave en mano', term: 'acabado' },
      { tag: 'Plazos / Montaje', term: 'plazo' },
      { tag: 'Cimentación', term: 'cimentac' },
      { tag: 'Aerotermia', term: 'aeroterm' },
      { tag: 'Fotovoltaica', term: 'fotovolt' },
      { tag: 'Cocina / Baños', term: 'cocina' },
      { tag: 'Certificación', term: 'certific' },
    ];

    return keywords.map((k) => {
      const count = logs.filter((log) => 
        log.userQuestion.toLowerCase().includes(k.term) || 
        log.advisorResponse.toLowerCase().includes(k.term)
      ).length;
      return { ...k, count };
    }).filter(k => k.count > 0);
  }, [logs]);

  // Filtrado de registros
  const filteredLogs = useMemo(() => {
    return logs.filter((log) => {
      const matchesSearch = 
        !searchTerm ||
        log.userQuestion.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.advisorResponse.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (log.houseConfig?.selectedModel && String(log.houseConfig.selectedModel).toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesTag = !selectedTag || (
        log.userQuestion.toLowerCase().includes(selectedTag.toLowerCase()) ||
        log.advisorResponse.toLowerCase().includes(selectedTag.toLowerCase())
      );

      return matchesSearch && matchesTag;
    });
  }, [logs, searchTerm, selectedTag]);

  // Métricas rápidas
  const metrics = useMemo(() => {
    const total = logs.length;
    let sumM2 = 0;
    let countWithM2 = 0;
    let sumGrandTotal = 0;
    let countWithTotal = 0;

    logs.forEach((l) => {
      if (l.houseConfig?.m2) {
        sumM2 += Number(l.houseConfig.m2);
        countWithM2++;
      }
      if (l.houseConfig?.grandTotal) {
        sumGrandTotal += Number(l.houseConfig.grandTotal);
        countWithTotal++;
      }
    });

    const avgM2 = countWithM2 > 0 ? Math.round(sumM2 / countWithM2) : 0;
    const avgBudget = countWithTotal > 0 ? Math.round(sumGrandTotal / countWithTotal) : 0;

    return { total, avgM2, avgBudget };
  }, [logs]);

  // Exportar a CSV compatible con Microsoft Excel en español (BOM + delimitador ;)
  const handleExportCSV = () => {
    if (logs.length === 0) {
      alert('No hay consultas registradas para exportar.');
      return;
    }

    const headers = [
      'Fecha',
      'Hora',
      'Pregunta del Usuario',
      'Respuesta del Asesor',
      'Superficie (m2)',
      'Modelo Seleccionado',
      'Tarifa Acabados (€/m2)',
      'Inversión Total (€)',
      'ID Sesión',
      'ID Registro Firestore'
    ];

    const escapeCsv = (val: any) => {
      if (val === null || val === undefined) return '""';
      const str = String(val).replace(/"/g, '""').replace(/\r\n|\r|\n/g, ' ');
      return `"${str}"`;
    };

    const rows = logs.map((log) => {
      const dateObj = new Date(log.timestamp || log.createdAt);
      const fecha = isNaN(dateObj.getTime()) ? log.createdAt : dateObj.toLocaleDateString('es-ES');
      const hora = isNaN(dateObj.getTime()) ? '' : dateObj.toLocaleTimeString('es-ES');
      const m2 = log.houseConfig?.m2 || '';
      const modelo = log.houseConfig?.selectedModel || '';
      const acabados = log.houseConfig?.finishesRate || '';
      const totalPresupuesto = log.houseConfig?.grandTotal ? Math.round(log.houseConfig.grandTotal) : '';

      return [
        escapeCsv(fecha),
        escapeCsv(hora),
        escapeCsv(log.userQuestion),
        escapeCsv(log.advisorResponse),
        escapeCsv(m2),
        escapeCsv(modelo),
        escapeCsv(acabados),
        escapeCsv(totalPresupuesto),
        escapeCsv(log.sessionId || ''),
        escapeCsv(log.id || '')
      ].join(';');
    });

    const csvContent = '\uFEFF' + [headers.join(';'), ...rows].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `medgon_consultas_asesor_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyRecord = (log: AdvisorQueryLog) => {
    const text = `PREGUNTA DEL CLIENTE:\n${log.userQuestion}\n\nRESPUESTA DEL ASESOR MEDGÓN:\n${log.advisorResponse}\n\nFECHA: ${new Date(log.timestamp).toLocaleString('es-ES')}`;
    navigator.clipboard.writeText(text);
    setCopiedId(log.id || log.userQuestion);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleResetAllConsultations = async () => {
    setResetting(true);
    try {
      const res = await resetAdvisorQueriesInFirestore();
      if (res.success) {
        setLogs([]);
        setResetSuccessMessage('Todas las consultas registradas han sido reseteadas y eliminadas de Firestore.');
        setTimeout(() => setResetSuccessMessage(null), 4500);
      } else {
        alert('No se pudieron resetear las consultas. Por favor, verifica la conexión.');
      }
    } catch (err) {
      console.error('Error al resetear consultas:', err);
      alert('Ocurrió un error al resetear las consultas.');
    } finally {
      setResetting(false);
      setShowResetConfirm(false);
    }
  };

  // Render: Pantalla de Login con PIN
  if (!isAuthenticated) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 max-w-md mx-auto text-center my-6">
        <div className="w-12 h-12 rounded-xl bg-[#F0F7E6] text-[#2F5300] flex items-center justify-center mx-auto mb-4 border border-[#D4EAB3]">
          <Shield className="w-6 h-6" />
        </div>
        <h2 className="text-lg sm:text-xl font-bold text-slate-900">
          Acceso Equipo Medgón
        </h2>
        <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
          Consulta y descarga el historial de dudas formuladas por los usuarios para perfeccionar respuestas comerciales y técnicas.
        </p>

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 text-left mb-1">
              PIN de Acceso
            </label>
            <input
              type="password"
              value={pinInput}
              onChange={(e) => {
                setPinInput(e.target.value);
                setPinError(false);
              }}
              placeholder="Introduce el PIN de acceso"
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none transition-all ${
                pinError 
                  ? 'border-red-500 bg-red-50 text-red-900 focus:ring-2 focus:ring-red-200' 
                  : 'border-slate-300 focus:border-[#569900] focus:ring-2 focus:ring-[#569900]/20'
              }`}
              autoFocus
            />
            {pinError && (
              <p className="text-xs text-red-600 text-left mt-1 font-medium">
                PIN de acceso incorrecto. Por favor, verifica tus credenciales.
              </p>
            )}
          </div>

          <div className="flex gap-2 pt-2">
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-2.5 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-all"
              >
                Cancelar
              </button>
            )}
            <button
              type="submit"
              className="flex-1 py-2.5 bg-[#569900] hover:bg-[#427500] text-white rounded-lg text-xs font-bold uppercase tracking-wider shadow-xs transition-all flex items-center justify-center gap-1.5"
            >
              <Unlock className="w-3.5 h-3.5" />
              Acceder
            </button>
          </div>
        </form>
      </div>
    );
  }

  // Render: Panel de Control Autenticado
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden space-y-6 p-4 sm:p-6">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-[#F0F7E6] text-[#2F5300] rounded-lg border border-[#D4EAB3]">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              Registro de Consultas al Asesor Medgón
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Visualiza todas las preguntas y descárgalas en Excel/CSV para detectar dudas recurrentes y enriquecer el conocimiento técnico.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            id="btn-refresh-queries"
            onClick={loadQueries}
            disabled={loading}
            className="flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-all disabled:opacity-50 cursor-pointer"
            title="Recargar datos de Firestore"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>{loading ? 'Cargando...' : 'Actualizar'}</span>
          </button>

          <button
            id="btn-export-csv"
            onClick={handleExportCSV}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-[#569900] hover:bg-[#427500] text-white rounded-lg text-xs font-bold uppercase tracking-wider shadow-xs transition-all active:scale-95 cursor-pointer"
            title="Descargar archivo .CSV compatible con Microsoft Excel"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Descargar CSV / Excel</span>
          </button>

          <button
            id="btn-reset-advisor-consultations"
            onClick={() => setShowResetConfirm(true)}
            disabled={loading || resetting || logs.length === 0}
            className="flex items-center gap-1.5 px-3 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 hover:border-rose-300 rounded-lg text-xs font-bold transition-all disabled:opacity-50 cursor-pointer shadow-xs active:scale-95"
            title="Resetear y eliminar todas las consultas almacenadas en la base de datos"
          >
            <Trash2 className="w-3.5 h-3.5 text-rose-600" />
            <span>{resetting ? 'Reseteando...' : 'Resetear Consultas'}</span>
          </button>

          <button
            id="btn-logout-advisor-logs"
            onClick={handleLogout}
            className="flex items-center gap-1 px-3 py-2 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-lg text-xs font-medium transition-all cursor-pointer"
            title="Cerrar sesión del panel de consultas"
          >
            <Lock className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden sm:inline">Cerrar Sesión</span>
          </button>

          {onClose && (
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-all cursor-pointer"
              title="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Banner informativo de Google Sheets en la zona privada */}
      <div className="p-3 sm:p-3.5 bg-gradient-to-r from-emerald-50 via-teal-50/50 to-slate-50 border border-emerald-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-2xs">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 bg-emerald-600 text-white rounded-md shrink-0 shadow-xs">
            <FileSpreadsheet className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <strong className="text-emerald-950 font-bold">Google Spreadsheet Oficial Medgón (Fuente Maestra de Datos)</strong>
              <span className="px-1.5 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded">11 Hojas Validadas</span>
            </div>
            <p className="text-slate-600 text-[11px] mt-0.5">
              Acceso privado para el equipo técnico: hojas de fabricación oficial, capítulos de estructura y mediciones de fábrica.
            </p>
          </div>
        </div>
        <a
          href={`https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[#569900] hover:bg-[#427500] text-white font-bold rounded-lg text-xs shadow-xs transition-all shrink-0 active:scale-95 cursor-pointer"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>Abrir Hoja de Cálculo</span>
        </a>
      </div>

      {/* Confirmation Modal to Reset All Consultations */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-4 border border-rose-200">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 text-center">
              ¿Resetear todas las consultas?
            </h3>
            <p className="text-xs text-slate-600 mt-2 text-center leading-relaxed">
              Esta acción eliminará de forma permanente todas las consultas y respuestas técnicas registradas en Firestore ({logs.length} registros). Esta acción no se puede deshacer.
            </p>
            <div className="flex gap-2.5 mt-6">
              <button
                type="button"
                onClick={() => setShowResetConfirm(false)}
                disabled={resetting}
                className="flex-1 py-2.5 px-3 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-all cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleResetAllConsultations}
                disabled={resetting}
                className="flex-1 py-2.5 px-3 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-bold uppercase tracking-wider shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>{resetting ? 'Reseteando...' : 'Sí, resetear todo'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reset Feedback Notification */}
      {resetSuccessMessage && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span className="font-medium">{resetSuccessMessage}</span>
        </div>
      )}

      {/* KPI Stats Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
            Total Consultas
          </div>
          <div className="text-2xl font-bold font-mono text-slate-900 mt-1">
            {metrics.total}
          </div>
          <div className="text-[10px] text-slate-400 mt-0.5">Guardadas en Firestore</div>
        </div>

        <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
            Superficie Media
          </div>
          <div className="text-2xl font-bold font-mono text-[#2F5300] mt-1">
            {metrics.avgM2 > 0 ? `${metrics.avgM2} m²` : '—'}
          </div>
          <div className="text-[10px] text-slate-400 mt-0.5">Demanda promedio</div>
        </div>

        <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
            Presupuesto Medio
          </div>
          <div className="text-2xl font-bold font-mono text-slate-900 mt-1">
            {metrics.avgBudget > 0 ? `${metrics.avgBudget.toLocaleString('es-ES')} €` : '—'}
          </div>
          <div className="text-[10px] text-slate-400 mt-0.5">Inversión calculada</div>
        </div>

        <div className="bg-[#F0F7E6] border border-[#D4EAB3] p-3.5 rounded-xl">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-[#2F5300]">
            Estado Base de Datos
          </div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#2F5300] mt-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Colección Activa
          </div>
          <div className="text-[10px] text-[#427500] font-mono mt-0.5 truncate" title="advisor_queries">
            advisor_queries
          </div>
        </div>
      </div>

      {/* Frequent Topics Tags */}
      {frequentTags.length > 0 && (
        <div className="bg-slate-50/80 p-3 rounded-xl border border-slate-200 space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
            <Tag className="w-3.5 h-3.5 text-[#569900]" />
            <span>Filtrar por temas recurrentes detectados:</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                selectedTag === null
                  ? 'bg-[#2F5300] text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              Todos ({logs.length})
            </button>
            {frequentTags.map((t) => (
              <button
                key={t.tag}
                onClick={() => setSelectedTag(selectedTag === t.term ? null : t.term)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 ${
                  selectedTag === t.term
                    ? 'bg-[#2F5300] text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                <span>{t.tag}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  selectedTag === t.term ? 'bg-white/25 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {t.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar por palabra clave en preguntas, respuestas o modelos de vivienda..."
          className="w-full pl-9 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:border-[#569900] focus:ring-2 focus:ring-[#569900]/20 transition-all"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
          >
            Limpiar
          </button>
        )}
      </div>

      {/* Questions List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-500 px-1">
          <span>Mostrando <strong>{filteredLogs.length}</strong> de {logs.length} consultas</span>
          <span>Ordenadas por fecha más reciente</span>
        </div>

        {loading && logs.length === 0 ? (
          <div className="p-8 text-center text-slate-500 bg-slate-50 rounded-xl border border-dashed border-slate-200">
            <RefreshCw className="w-6 h-6 animate-spin mx-auto text-[#569900] mb-2" />
            <p className="text-xs">Cargando consultas de Firestore...</p>
          </div>
        ) : filteredLogs.length === 0 ? (
          <div className="p-8 text-center text-slate-500 bg-slate-50 rounded-xl border border-dashed border-slate-200">
            <HelpCircle className="w-8 h-8 mx-auto text-slate-400 mb-2" />
            <p className="text-xs font-semibold text-slate-700">No se encontraron consultas registradas</p>
            <p className="text-[11px] text-slate-500 mt-1">
              Las consultas que realicen los usuarios en la pestaña del Asesor aparecerán aquí en tiempo real.
            </p>
          </div>
        ) : (
          filteredLogs.map((log) => {
            const isExpanded = expandedRow === log.id;
            const dateObj = new Date(log.timestamp || log.createdAt);
            const dateStr = !isNaN(dateObj.getTime())
              ? dateObj.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })
              : log.createdAt;
            const timeStr = !isNaN(dateObj.getTime())
              ? dateObj.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
              : '';

            return (
              <div
                key={log.id || log.timestamp}
                className={`border rounded-xl transition-all overflow-hidden ${
                  isExpanded ? 'border-[#569900] bg-white shadow-xs ring-1 ring-[#569900]/20' : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                {/* Row Summary Bar */}
                <div
                  onClick={() => setExpandedRow(isExpanded ? null : (log.id || ''))}
                  className="p-4 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 select-none"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                        <Clock className="w-3 h-3" />
                        {dateStr} {timeStr}
                      </span>

                      {log.houseConfig?.m2 && (
                        <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded border border-slate-200">
                          <Home className="w-2.5 h-2.5 text-[#569900]" />
                          {log.houseConfig.m2} m²
                        </span>
                      )}

                      {log.houseConfig?.selectedModel && log.houseConfig.selectedModel !== 'Personalizado' && (
                        <span className="bg-[#F0F7E6] text-[#2F5300] text-[10px] font-bold px-2 py-0.5 rounded border border-[#D4EAB3]">
                          {log.houseConfig.selectedModel}
                        </span>
                      )}

                      {log.houseConfig?.grandTotal && (
                        <span className="text-[10px] font-mono font-bold text-slate-600">
                          {Math.round(log.houseConfig.grandTotal).toLocaleString('es-ES')} €
                        </span>
                      )}
                    </div>

                    {/* Question text */}
                    <div className="flex items-start gap-2">
                      <User className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm font-semibold text-slate-900 line-clamp-2">
                        {log.userQuestion}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopyRecord(log);
                      }}
                      className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-all text-xs flex items-center gap-1"
                      title="Copiar consulta completa"
                    >
                      {copiedId === log.id ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>

                    <div className="text-slate-400">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Details: Full Response & Context */}
                {isExpanded && (
                  <div className="px-4 pb-4 pt-2 border-t border-slate-100 bg-slate-50/50 space-y-3">
                    <div>
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                        <Bot className="w-3.5 h-3.5 text-[#569900]" />
                        <span>Respuesta proporcionada por el Asesor Medgón</span>
                      </div>
                      <div className="p-3.5 bg-white rounded-lg border border-slate-200 text-xs text-slate-700 whitespace-pre-wrap leading-relaxed">
                        {log.advisorResponse}
                      </div>
                    </div>

                    {log.houseConfig && (
                      <div className="p-3 bg-white rounded-lg border border-slate-200 text-[11px] text-slate-600 space-y-1">
                        <div className="font-semibold text-slate-800 uppercase text-[10px] tracking-wider mb-1">
                          Parámetros del proyecto al consultar:
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          <div>
                            <span className="text-slate-400">Superficie:</span>{' '}
                            <strong>{log.houseConfig.m2 || '—'} m²</strong>
                          </div>
                          <div>
                            <span className="text-slate-400">Acabados:</span>{' '}
                            <strong>{log.houseConfig.finishesRate || '190'} €/m²</strong>
                          </div>
                          <div>
                            <span className="text-slate-400">Presupuesto:</span>{' '}
                            <strong>{log.houseConfig.grandTotal ? `${Math.round(log.houseConfig.grandTotal).toLocaleString('es-ES')} €` : '—'}</strong>
                          </div>
                          <div>
                            <span className="text-slate-400">ID Sesión:</span>{' '}
                            <code className="text-[10px] font-mono text-slate-500">{log.sessionId || '—'}</code>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
