import React from 'react';
import { MapPin, Mail, Phone, Clock, ShieldCheck, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';

export const ContactView: React.FC = () => {
  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
          Atención a Autopromotores & Visitas a Planta
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#16181B]">
          Hablemos de tu proyecto
        </h1>
        <p className="text-base sm:text-lg text-[#5A606A] leading-relaxed">
          Ven a conocer nuestras instalaciones de producción robotizada en Carrión de los Condes (Palencia) y analiza la viabilidad de tu parcela con nuestros ingenieros.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Contact info column */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-[#FAF8F5] border border-[#16181B]/10 rounded-xl p-8 space-y-6">
            <h3 className="text-xl font-bold text-[#16181B]">
              Medgón Passivhaus S.L.
            </h3>

            <div className="space-y-4 text-sm text-[#5A606A]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0DA836] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#16181B] block">Planta de Fabricación & Oficinas Técnicas:</strong>
                  Polígono Industrial, Vial B, Parcela 1<br />
                  34120 Carrión de los Condes (Palencia), España
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#0DA836] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#16181B] block">Atención Telefónica Directa:</strong>
                  <a href="tel:979881010" className="text-[#16181B] font-bold hover:text-[#0DA836] transition-colors">979 88 10 10</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#0DA836] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#16181B] block">Correo Electrónico:</strong>
                  <a href="mailto:informacion@medgon.com" className="text-[#0DA836] hover:underline">informacion@medgon.com</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#0DA836] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#16181B] block">Horario de Visitas a Fábrica:</strong>
                  Lunes a Viernes: 08:30 – 18:00 h (Cita previa recomendada)
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#16181B]/10 text-xs text-[#8E95A2]">
              Ubicación estratégica con acceso directo desde la Autovía del Camino de Santiago (A-231).
            </div>
          </div>

          <div className="p-6 bg-white border border-[#16181B]/10 rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0DA836] uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>Garantía de Certeza Medgón</span>
            </div>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              Respuesta técnica en menos de 48 horas laborales con evaluación previa de viabilidad urbanística, soleamiento y opciones de adaptación del modelo a tu parcela.
            </p>
          </div>
        </div>

        {/* Lead Form Column (CSS Selector 2 targeted element) */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-[#16181B]/10 rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0DA836]/10 text-[#0DA836] text-xs font-bold">
                <Calendar className="w-3.5 h-3.5" />
                <span>Estudio de Viabilidad & Llamada Técnica</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16181B] tracking-tight">
                Hablemos de tu proyecto
              </h2>
              <p className="text-sm text-[#5A606A] leading-relaxed">
                Para poder orientarte con la máxima precisión sobre qué modelo de vivienda Passivhaus encaja mejor en tu forma de vivir y ofrecerte una estimación realista de costes, necesitamos conocer los detalles de tu caso: ubicación de la parcela, normativa urbanística municipal, orientación solar y preferencias de distribución.
              </p>
              <p className="text-xs text-[#8E95A2] leading-relaxed">
                Con esta información, nuestro equipo de ingeniería en Carrión de los Condes (Palencia) preparará un análisis preliminar para que en nuestra llamada técnica o cita presencial dispongas de respuestas claras, certezas y números fiables desde el primer minuto.
              </p>
            </div>

            {/* Embedded Google Form Component */}
            <div className="rounded-lg border border-[#16181B]/15 overflow-hidden bg-[#FAF8F5]">
              <div className="bg-[#16181B] text-white px-4 py-3 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-semibold text-white/90">
                  Formulario Oficial de Consulta Técnica · Medgón Passivhaus
                </span>
                <a
                  href="https://docs.google.com/forms/d/1K81cA16qp76ZQL_nTo17DmTT5CD_gj8Jruep2FHTYfU/viewform?edit_requested=true#start=embed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#78E639] hover:underline font-bold"
                >
                  <span>Abrir en ventana completa</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="p-2 sm:p-3 bg-white">
                <iframe
                  src="https://docs.google.com/forms/d/1K81cA16qp76ZQL_nTo17DmTT5CD_gj8Jruep2FHTYfU/viewform?embedded=true"
                  width="100%"
                  height="880"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Formulario Oficial Hablemos de tu proyecto"
                  className="w-full min-h-[750px] border-none"
                >
                  Cargando formulario oficial de Medgón...
                </iframe>
              </div>
            </div>

            <div className="pt-2 border-t border-[#16181B]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#5A606A]">
              <span>Atención telefónica directa de lunes a viernes: <strong>979 88 10 10</strong></span>
              <span className="text-[#0DA836] font-semibold">Respuesta técnica garantizada</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
