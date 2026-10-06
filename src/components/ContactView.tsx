import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    parcelaProvincia: '',
    estadoParcela: 'en_propiedad',
    tipoVivienda: 'MG 100',
    mensaje: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
          Atención a Autopromotores & Visitas a Planta
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#16181B]">
          Contacto Técnico & Cita en Fábrica
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
                <Mail className="w-5 h-5 text-[#0DA836] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#16181B] block">Correo Electrónico:</strong>
                  <a href="mailto:info@medgon.com" className="text-[#0DA836] hover:underline">info@medgon.com</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#0DA836] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#16181B] block">Horario de Visitas a Fábrica:</strong>
                  Lunes a Viernes: 08:30 – 18:00 h (Cita previa requerida)
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
              Respuesta técnica en menos de 48 horas laborales con evaluación previa de viabilidad urbanística y orientación pasiva de tu terreno.
            </p>
          </div>
        </div>

        {/* Lead Form Column */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-[#16181B]/10 rounded-xl p-8 sm:p-10 shadow-xs space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-[#16181B]">
                Cuéntanos tu proyecto
              </h3>
              <p className="text-sm text-[#5A606A] mt-1">
                Completa este formulario para agendar una visita a fábrica o solicitar presupuesto de tu parcela.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 bg-[#FAF8F5] border border-[#0DA836] rounded-lg text-center space-y-3 animate-in fade-in">
                <CheckCircle2 className="w-12 h-12 text-[#0DA836] mx-auto" />
                <h4 className="text-lg font-bold text-[#16181B]">¡Mensaje recibido con éxito!</h4>
                <p className="text-sm text-[#5A606A]">
                  Gracias por contactar con Medgón Passivhaus. Un ingeniero de nuestro equipo de Carrión de los Condes se pondrá en contacto contigo en breve para coordinar tu visita o resolver tus dudas.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs font-bold text-[#0DA836] hover:underline pt-2 cursor-pointer"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#16181B] uppercase mb-1">
                      Nombre y Apellidos *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      placeholder="Ej. Roberto Sánchez"
                      className="w-full px-3.5 py-2.5 text-sm border border-[#16181B]/20 rounded focus:outline-none focus:border-[#16181B]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#16181B] uppercase mb-1">
                      Teléfono de Contacto *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      placeholder="600 000 000"
                      className="w-full px-3.5 py-2.5 text-sm border border-[#16181B]/20 rounded focus:outline-none focus:border-[#16181B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#16181B] uppercase mb-1">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tunombre@ejemplo.com"
                    className="w-full px-3.5 py-2.5 text-sm border border-[#16181B]/20 rounded focus:outline-none focus:border-[#16181B]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#16181B] uppercase mb-1">
                      Provincia de la parcela *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.parcelaProvincia}
                      onChange={(e) => setFormData({ ...formData, parcelaProvincia: e.target.value })}
                      placeholder="Ej. Palencia, Valladolid, Madrid..."
                      className="w-full px-3.5 py-2.5 text-sm border border-[#16181B]/20 rounded focus:outline-none focus:border-[#16181B]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#16181B] uppercase mb-1">
                      Estado del terreno *
                    </label>
                    <select
                      value={formData.estadoParcela}
                      onChange={(e) => setFormData({ ...formData, estadoParcela: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-[#16181B]/20 rounded bg-white focus:outline-none focus:border-[#16181B]"
                    >
                      <option value="en_propiedad">En propiedad</option>
                      <option value="en_proceso">En proceso de compra</option>
                      <option value="buscando">Buscando terreno</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#16181B] uppercase mb-1">
                    Modelo de interés principal
                  </label>
                  <select
                    value={formData.tipoVivienda}
                    onChange={(e) => setFormData({ ...formData, tipoVivienda: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-[#16181B]/20 rounded bg-white focus:outline-none focus:border-[#16181B]"
                  >
                    <option value="MG 87">MG 87 (87 m² · 2 dorm)</option>
                    <option value="MG 100">MG 100 (100 m² · 3 dorm)</option>
                    <option value="MG 105">MG 105 (105 m² · 3 dorm)</option>
                    <option value="MG 128">MG 128 (128 m² · 3-4 dorm)</option>
                    <option value="MG 148">MG 148 (148 m² · 4 dorm)</option>
                    <option value="MG 165">MG 165 (165 m² · Alta Gama)</option>
                    <option value="Otro">Otro modelo de catálogo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#16181B] uppercase mb-1">
                    ¿Te gustaría concertar visita a la fábrica en Carrión de los Condes?
                  </label>
                  <textarea
                    rows={3}
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    placeholder="Indícanos si prefieres una fecha orientativa para la visita técnica o detalles sobre tu parcela..."
                    className="w-full px-3.5 py-2.5 text-sm border border-[#16181B]/20 rounded focus:outline-none focus:border-[#16181B]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 text-sm font-bold text-white bg-[#16181B] hover:bg-[#F35843] rounded transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Consulta & Solicitar Cita &rarr;</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};
