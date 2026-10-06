import React from 'react';
import { Layers, ShieldCheck, Check, Clock, Award, Building2 } from 'lucide-react';

interface SiemModalitiesViewProps {
  onNavigate: (view: string, modelId?: string) => void;
  onOpenExportModal: () => void;
}

export const SiemModalitiesView: React.FC<SiemModalitiesViewProps> = ({
  onNavigate,
  onOpenExportModal,
}) => {
  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      
      {/* Header Lockup */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
          Contratos & Envolvente Técnica Medgón
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#16181B]">
          Modalidades de Contrato & Alcance de Obra
        </h1>
        <p className="text-base sm:text-lg text-[#5A606A] leading-relaxed">
          Libertad y transparencia: tú decides el tipo de contrato y hasta qué punto técnico interviene Medgón con precisión milimétrica de fábrica y qué partidas contratas con tus gremios de confianza.
        </p>
      </div>

      {/* 4 Modalities Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Modality 1 */}
        <div className="bg-white border border-[#16181B]/10 rounded-lg p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#8E95A2] uppercase tracking-wider block">
              Modalidad 01
            </span>
            <h3 className="text-xl font-bold text-[#16181B]">
              Suministro de Estructura
            </h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              Suministro de la estructura técnica de madera mecanizada con CNC en nuestro taller de Carrión de los Condes. Pensada para empresas constructoras y arquitectos que gestionan su propio montaje.
            </p>
            <div className="pt-2 border-t border-[#16181B]/10 space-y-2 text-xs text-[#16181B]">
              <div className="font-semibold text-[#0DA836]">Incluye:</div>
              <ul className="space-y-1.5 text-[#5A606A]">
                <li>• Madera técnica LVL / entramado ligero mecanizado</li>
                <li>• Planos de montaje tridimensional numerados</li>
                <li>• Herrajes estructurales y tornillería técnica</li>
                <li>• Transporte hasta la parcela</li>
              </ul>
            </div>
          </div>
          <div className="pt-4 border-t border-[#16181B]/5 text-xs text-[#8E95A2]">
            Perfil: Constructores y técnicos
          </div>
        </div>

        {/* Modality 2 */}
        <div className="bg-white border border-[#16181B]/10 rounded-lg p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#8E95A2] uppercase tracking-wider block">
              Modalidad 02
            </span>
            <h3 className="text-xl font-bold text-[#16181B]">
              Suministro + Montaje
            </h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              Envolvente estructural montada en parcela por las cuadrillas oficiales de Medgón. Garantizamos el aplomado y la hermeticidad primaria de la madera.
            </p>
            <div className="pt-2 border-t border-[#16181B]/10 space-y-2 text-xs text-[#16181B]">
              <div className="font-semibold text-[#0DA836]">Incluye:</div>
              <ul className="space-y-1.5 text-[#5A606A]">
                <li>• Estructura completa de madera técnica</li>
                <li>• Montaje oficial en parcela con grúa y cuadrilla</li>
                <li>• Láminas de estanqueidad y hermeticidad base</li>
                <li>• Control topográfico y nivelación</li>
              </ul>
            </div>
          </div>
          <div className="pt-4 border-t border-[#16181B]/5 text-xs text-[#8E95A2]">
            Perfil: Autopromotores con gremios propios
          </div>
        </div>

        {/* Modality 3 (Highlight) */}
        <div className="bg-white border-2 border-[#16181B] rounded-lg p-6 flex flex-col justify-between space-y-6 relative shadow-sm">
          <div className="absolute -top-3 right-4 bg-[#F35843] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
            Opción Más Solicitada
          </div>
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#8E95A2] uppercase tracking-wider block">
              Modalidad 03
            </span>
            <h3 className="text-xl font-bold text-[#16181B]">
              Suministro + Montaje + Instalaciones
            </h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              La solución preferida por la mayoría de autopromotores: toda la fase técnica cerrada al 100%, con envolvente aislada, fachada SATE, cubierta, aerotermia y ventilación VMC.
            </p>
            <div className="pt-2 border-t border-[#16181B]/10 space-y-2 text-xs text-[#16181B]">
              <div className="font-semibold text-[#16181B]">Incluye:</div>
              <ul className="space-y-1.5 text-[#5A606A]">
                <li>• Cimentación a libros abiertos</li>
                <li>• Estructura montada con insuflado de madera</li>
                <li>• Fachada continua SATE e impermeabilización</li>
                <li>• Cubierta terminada (plana o inclinada)</li>
                <li>• Carpintería triple vidrio Passivhaus (0.6 Ug)</li>
                <li>• Climatización Aerotermia + VMC Zehnder</li>
              </ul>
            </div>
          </div>
          <div className="pt-4 border-t border-[#16181B]/5 text-xs font-bold text-[#0DA836]">
            Fase técnica 1.700 - 1.900 €/m² + IVA
          </div>
        </div>

        {/* Modality 4 */}
        <div className="bg-white border border-[#16181B]/10 rounded-lg p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#8E95A2] uppercase tracking-wider block">
              Modalidad 04
            </span>
            <h3 className="text-xl font-bold text-[#16181B]">
              Llave en Mano
            </h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              Solución integral desde la primera estaca hasta la entrega de llaves con todos los acabados interiores (solados, alicatados, baños y puertas).
            </p>
            <div className="pt-2 border-t border-[#16181B]/10 space-y-2 text-xs text-[#16181B]">
              <div className="font-semibold text-[#0DA836]">Ámbito territorial:</div>
              <ul className="space-y-1.5 text-[#5A606A]">
                <li>• Radio habitual de 150 km desde Palencia</li>
                <li>• En Cataluña a través de empresas asociadas</li>
                <li>• Gestión integral de todos los oficios</li>
                <li>• Certificación Passivhaus y prueba Blower Door</li>
              </ul>
            </div>
          </div>
          <div className="pt-4 border-t border-[#16181B]/5 text-xs text-[#8E95A2]">
            Perfil: Máxima comodidad sin gestionar obras
          </div>
        </div>

      </div>

      {/* MATRIX TABLE OF RESPONSIBILITIES */}
      <div className="bg-white border border-[#16181B]/10 rounded-xl overflow-hidden shadow-xs">
        <div className="p-6 bg-[#FAF8F5] border-b border-[#16181B]/10">
          <h3 className="text-xl font-bold text-[#16181B]">
            Matriz Comparativa de Partidas
          </h3>
          <p className="text-xs text-[#5A606A] mt-1">
            Desglose visual de responsabilidades según la modalidad contratada.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#16181B]/10 bg-white font-bold text-[#16181B]">
                <th className="p-4">Partida Constructiva</th>
                <th className="p-4 text-center">Suministro de Estructura</th>
                <th className="p-4 text-center">Suministro + Montaje</th>
                <th className="p-4 text-center bg-[#F5E7D3]/40">Suministro + Montaje + Instalaciones</th>
                <th className="p-4 text-center">Llave en Mano</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#16181B]/5 text-[#5A606A]">
              <tr>
                <td className="p-4 font-semibold text-[#16181B]">Cimentación (Libros abiertos)</td>
                <td className="p-4 text-center text-[#8E95A2]">Cliente</td>
                <td className="p-4 text-center text-[#8E95A2]">Cliente</td>
                <td className="p-4 text-center font-bold text-[#0DA836] bg-[#F5E7D3]/20">Medgón</td>
                <td className="p-4 text-center font-bold text-[#0DA836]">Medgón</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-[#16181B]">Estructura Madera Técnica mecanizada</td>
                <td className="p-4 text-center font-bold text-[#0DA836]">Medgón (Suministro)</td>
                <td className="p-4 text-center font-bold text-[#0DA836]">Medgón (Montada)</td>
                <td className="p-4 text-center font-bold text-[#0DA836] bg-[#F5E7D3]/20">Medgón (Montada)</td>
                <td className="p-4 text-center font-bold text-[#0DA836]">Medgón (Montada)</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-[#16181B]">Aislamiento continuo SATE y Fachada</td>
                <td className="p-4 text-center text-[#8E95A2]">Cliente</td>
                <td className="p-4 text-center text-[#8E95A2]">Cliente</td>
                <td className="p-4 text-center font-bold text-[#0DA836] bg-[#F5E7D3]/20">Medgón</td>
                <td className="p-4 text-center font-bold text-[#0DA836]">Medgón</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-[#16181B]">Cubierta aislada e impermeable</td>
                <td className="p-4 text-center text-[#8E95A2]">Cliente</td>
                <td className="p-4 text-center text-[#8E95A2]">Cliente</td>
                <td className="p-4 text-center font-bold text-[#0DA836] bg-[#F5E7D3]/20">Medgón</td>
                <td className="p-4 text-center font-bold text-[#0DA836]">Medgón</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-[#16181B]">Carpintería Passivhaus (Triple Vidrio 0.6 Ug)</td>
                <td className="p-4 text-center text-[#8E95A2]">Cliente</td>
                <td className="p-4 text-center text-[#8E95A2]">Cliente</td>
                <td className="p-4 text-center font-bold text-[#0DA836] bg-[#F5E7D3]/20">Medgón</td>
                <td className="p-4 text-center font-bold text-[#0DA836]">Medgón</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-[#16181B]">Ventilación Mecánica Controlada (VMC Zehnder)</td>
                <td className="p-4 text-center text-[#8E95A2]">Cliente</td>
                <td className="p-4 text-center text-[#8E95A2]">Cliente</td>
                <td className="p-4 text-center font-bold text-[#0DA836] bg-[#F5E7D3]/20">Medgón</td>
                <td className="p-4 text-center font-bold text-[#0DA836]">Medgón</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-[#16181B]">Aerotermia y Suelo Radiante / Refrescante</td>
                <td className="p-4 text-center text-[#8E95A2]">Cliente</td>
                <td className="p-4 text-center text-[#8E95A2]">Cliente</td>
                <td className="p-4 text-center font-bold text-[#0DA836] bg-[#F5E7D3]/20">Medgón</td>
                <td className="p-4 text-center font-bold text-[#0DA836]">Medgón</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-[#16181B]">Acabados interiores (Suelos, alicatados, puertas)</td>
                <td className="p-4 text-center text-[#8E95A2]">Cliente</td>
                <td className="p-4 text-center text-[#8E95A2]">Cliente</td>
                <td className="p-4 text-center text-[#8E95A2] bg-[#F5E7D3]/20">Gremios locales</td>
                <td className="p-4 text-center font-bold text-[#0DA836]">Medgón</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* CALENDAR OF PAYMENTS AND CERTAINTY */}
      <div className="bg-[#FAF8F5] border border-[#16181B]/10 rounded-xl p-8 space-y-6">
        <h3 className="text-xl font-bold text-[#16181B]">
          Estructura de Pagos por Hitos Verificables
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white rounded border border-[#16181B]/10 space-y-1">
            <span className="text-xs font-bold text-[#8E95A2] uppercase">Hito 1 · Reserva</span>
            <div className="text-2xl font-black text-[#16181B]">5.000 €</div>
            <p className="text-xs text-[#5A606A]">
              Asignación de cupo en fábrica, redacción del proyecto técnico adaptado y bloqueo de precio cerrado.
            </p>
          </div>
          <div className="p-4 bg-white rounded border border-[#16181B]/10 space-y-1">
            <span className="text-xs font-bold text-[#8E95A2] uppercase">Hito 2 · Fabricación</span>
            <div className="text-2xl font-black text-[#16181B]">30% - 40%</div>
            <p className="text-xs text-[#5A606A]">
              Al inicio del mecanizado y corte robotizado de madera técnica e insuflado en planta de Carrión de los Condes.
            </p>
          </div>
          <div className="p-4 bg-white rounded border border-[#16181B]/10 space-y-1">
            <span className="text-xs font-bold text-[#8E95A2] uppercase">Hito 3 · Obra & Entrega</span>
            <div className="text-2xl font-black text-[#16181B]">Resto Certificaciones</div>
            <p className="text-xs text-[#5A606A]">
              Distribuido mediante certificaciones mensuales de avance real en obra o a la salida de fábrica.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
