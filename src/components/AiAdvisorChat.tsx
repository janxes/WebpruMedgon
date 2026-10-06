import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { HouseConfig, CalculationResult, ChatMessage } from '../types';
import { FREQUENT_QUESTIONS } from '../data/medgonData';
import { Send, Sparkles, User, Bot, AlertCircle, RotateCcw, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

interface AiAdvisorChatProps {
  config: HouseConfig;
  result: CalculationResult;
  initialPrompt?: string;
  onClearInitialPrompt?: () => void;
  onOpenAdminLogs?: () => void;
}

interface ConversationTurn {
  id: string;
  userMessage: ChatMessage;
  advisorMessage?: ChatMessage;
  isLoading?: boolean;
}

export const AiAdvisorChat: React.FC<AiAdvisorChatProps> = ({
  config,
  result,
  initialPrompt,
  onClearInitialPrompt,
  onOpenAdminLogs,
}) => {
  const [sessionId, setSessionId] = useState<string>(() => {
    const existing = sessionStorage.getItem('medgon_advisor_session_id');
    if (existing) return existing;
    const newId = 'session_' + Math.random().toString(36).substring(2, 10);
    sessionStorage.setItem('medgon_advisor_session_id', newId);
    return newId;
  });

  const [resetFeedback, setResetFeedback] = useState<boolean>(false);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'advisor',
      content: `Hola. Fabricamos viviendas industrializadas de madera bajo el estándar Passivhaus, diseñadas para ofrecerte máxima eficiencia energética, confort y precio cerrado.

Actualmente tienes seleccionada en la calculadora una vivienda de ${result.m2} m2 (${result.categoryLabel}).

¿En qué puedo orientarte hoy sobre los modelos de nuestro catálogo?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const [inputPrompt, setInputPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const questionsScrollRef = useRef<HTMLDivElement>(null);
  const [canScrollQLeft, setCanScrollQLeft] = useState(false);
  const [canScrollQRight, setCanScrollQRight] = useState(false);

  const updateQuestionsScrollLimits = useCallback(() => {
    const el = questionsScrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollQLeft(scrollLeft > 4);
    setCanScrollQRight(scrollLeft + clientWidth < scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateQuestionsScrollLimits();
    const handleResize = () => updateQuestionsScrollLimits();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateQuestionsScrollLimits]);

  const handleScrollQuestions = (direction: 'left' | 'right') => {
    const el = questionsScrollRef.current;
    if (!el) return;
    const amount = direction === 'left' ? -200 : 200;
    el.scrollBy({ left: amount, behavior: 'smooth' });
    setTimeout(updateQuestionsScrollLimits, 250);
  };

  // Scroll to top of messages container so the latest question and answer are immediately in view
  useEffect(() => {
    messagesContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [messages, isLoading]);

  // Handle triggered initial prompt from other components
  useEffect(() => {
    if (initialPrompt && initialPrompt.trim()) {
      handleSendMessage(initialPrompt);
      if (onClearInitialPrompt) onClearInitialPrompt();
    }
  }, [initialPrompt]);

  const handleSendMessage = async (promptToSend?: string) => {
    const query = (promptToSend || inputPrompt).trim();
    if (!query || isLoading) return;

    setErrorMsg(null);
    setInputPrompt('');

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch('/api/advisor/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages,
          sessionId,
          houseContext: {
            m2: config.m2,
            selectedModel: config.selectedModelId || 'Personalizado',
            finishesRate: config.finishesRate,
            extras: {
              photovoltaic: config.includePhotovoltaic,
              domotics: config.includeDomotics,
              audio: config.includeAudio,
            },
            vatRate: config.includeVat ? 10 : 0,
            grandTotal: result.grandTotalBase,
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al conectar con el servidor.');
      }

      const advisorMessage: ChatMessage = {
        id: `advisor-${Date.now()}`,
        sender: 'advisor',
        content: data.reply || 'No he podido generar una respuesta en este momento.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, advisorMessage]);
    } catch (err: any) {
      console.error('Chat error:', err);
      setErrorMsg(err.message || 'Ha ocurrido un error al consultar al asesor.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClearChat = () => {
    const newId = 'session_' + Math.random().toString(36).substring(2, 10);
    sessionStorage.setItem('medgon_advisor_session_id', newId);
    setSessionId(newId);
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'advisor',
        content: `Hola. Fabricamos viviendas industrializadas de madera bajo el estándar Passivhaus, diseñadas para ofrecerte máxima eficiencia energética, confort y precio cerrado.

Actualmente tienes seleccionada en la calculadora una vivienda de ${result.m2} m2 (${result.categoryLabel}).

¿En qué puedo orientarte hoy sobre los modelos de nuestro catálogo?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
    setInputPrompt('');
    setErrorMsg(null);
    setResetFeedback(true);
    setTimeout(() => setResetFeedback(false), 3000);
  };

  // Group messages into question-answer turns for reverse-chronological feed display
  const { welcomeMessage, turns } = useMemo(() => {
    let welcome: ChatMessage | null = null;
    const turnList: ConversationTurn[] = [];
    let currentTurn: ConversationTurn | null = null;

    for (const msg of messages) {
      if (msg.sender === 'advisor' && !currentTurn && !welcome && (msg.id.includes('welcome') || turnList.length === 0)) {
        welcome = msg;
        continue;
      }

      if (msg.sender === 'user') {
        if (currentTurn) {
          turnList.push(currentTurn);
        }
        currentTurn = {
          id: `turn-${msg.id}`,
          userMessage: msg,
        };
      } else if (msg.sender === 'advisor') {
        if (currentTurn) {
          currentTurn.advisorMessage = msg;
          turnList.push(currentTurn);
          currentTurn = null;
        } else {
          if (!welcome) {
            welcome = msg;
          }
        }
      }
    }

    if (currentTurn) {
      if (isLoading) {
        currentTurn.isLoading = true;
      }
      turnList.push(currentTurn);
    }

    return { welcomeMessage: welcome, turns: turnList };
  }, [messages, isLoading]);

  const renderMarkdown = (content: string) => (
    <div className="advisor-markdown-content space-y-2">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h3: ({ children }) => (
            <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-2.5 mb-1.5 pb-1 border-b border-slate-100 flex items-center gap-1.5">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xs sm:text-sm font-bold text-slate-800 mt-2 mb-1">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2 last:mb-0 whitespace-pre-line">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-outside pl-4 space-y-1 mb-2 text-xs sm:text-sm text-slate-700">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-outside pl-4 space-y-1 mb-2 text-xs sm:text-sm text-slate-700">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="leading-relaxed">{children}</li>
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-slate-900">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-slate-600 text-xs">{children}</em>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2F5300] font-semibold underline decoration-[#569900]/50 hover:text-[#569900]"
            >
              {children}
            </a>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-2.5 border border-slate-200 rounded-lg">
              <table className="min-w-full text-xs text-left">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-slate-100 font-bold text-slate-800 border-b border-slate-200">
              {children}
            </thead>
          ),
          th: ({ children }) => (
            <th className="px-3 py-2 text-slate-800 font-bold border-b border-slate-200">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-3 py-2 text-slate-700 border-b border-slate-100 last:border-b-0">
              {children}
            </td>
          ),
          hr: () => <hr className="my-2.5 border-slate-200" />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-stone-200 flex flex-col h-[740px] overflow-hidden">
      {/* 1. Header del Asistente */}
      <div className="p-3.5 sm:p-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-9 h-9 rounded-lg bg-[#569900] flex items-center justify-center text-white shadow-xs">
              <Bot className="w-5 h-5" />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#A4E556] border-2 border-slate-900" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-xs sm:text-sm text-white">
                Asistente Virtual Medgón
              </h3>
              <span className="px-2 py-0.5 bg-[#569900] text-[#E1F7C3] text-[10px] font-bold rounded uppercase tracking-wider hidden sm:inline">
                Passivhaus Oficial
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Asesor técnico y comercial oficial Passivhaus
            </p>
          </div>
        </div>

        <button
          id="btn-new-chat-conversation"
          onClick={handleClearChat}
          className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 rounded-lg text-slate-200 hover:text-white text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
          title="Iniciar una nueva conversación"
        >
          <RotateCcw className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
          <span className="text-[11px] font-medium">Nueva conversación</span>
        </button>
      </div>

      {/* 2. Tarjetas y Botones del Chat al Principio del Asistente */}
      <div className="bg-white border-b border-slate-200 shadow-2xs shrink-0 z-10">
        {/* Barra de Entrada / Pregunta */}
        <div className="p-3 sm:p-4 pb-2">
          {resetFeedback && (
            <div className="mb-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-800 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Todas las consultas han sido reseteadas. Puedes escribir tu pregunta o seleccionar una sugerida abajo.</span>
            </div>
          )}

          <div className="flex items-center gap-2 sm:gap-2.5">
            <input
              id="advisor-chat-input"
              type="text"
              value={inputPrompt}
              onChange={(e) => setInputPrompt(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Escribe tu consulta sobre el catálogo Medgón (m², aerotermia, plazos, VMC...)"
              disabled={isLoading}
              className="flex-1 px-3.5 sm:px-4 py-2.5 sm:py-3 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#569900] focus:bg-white transition-all disabled:opacity-60 placeholder:text-slate-400"
            />
            <button
              id="btn-send-advisor-message"
              onClick={() => handleSendMessage()}
              disabled={isLoading || !inputPrompt.trim()}
              className="p-2.5 sm:p-3 bg-[#569900] hover:bg-[#427500] disabled:bg-slate-300 text-white rounded-xl shadow-xs transition-all active:scale-95 shrink-0 flex items-center justify-center cursor-pointer"
              title="Enviar consulta"
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Tarjetas y Botones de Preguntas Rápidas Sugeridas */}
        <div className="px-3 sm:px-4 pb-3">
          {/* Línea 1: Encabezado */}
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#569900]" />
            <span>Preguntas rápidas sugeridas:</span>
          </div>

          {/* Línea 2: Galería de preguntas */}
          <div className="relative flex items-center group/questions">
            {canScrollQLeft && (
              <button
                type="button"
                id="btn-questions-scroll-left"
                onClick={() => handleScrollQuestions('left')}
                className="absolute left-0 z-20 h-full px-1 bg-gradient-to-r from-white via-white/95 to-transparent flex items-center justify-center text-slate-700 hover:text-black cursor-pointer"
                aria-label="Desplazar preguntas a la izquierda"
              >
                <div className="w-5 h-5 rounded-full bg-white shadow-xs border border-slate-300 flex items-center justify-center hover:bg-slate-100 hover:border-[#569900]">
                  <ChevronLeft className="w-3 h-3" />
                </div>
              </button>
            )}

            <div
              ref={questionsScrollRef}
              onScroll={updateQuestionsScrollLimits}
              className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin scroll-smooth w-full px-1"
            >
              {FREQUENT_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  disabled={isLoading}
                  className="px-2.5 py-1.5 bg-slate-100 hover:bg-[#569900]/10 hover:border-[#569900]/40 border border-slate-200 text-slate-800 hover:text-[#2F5300] rounded-lg text-xs font-medium shrink-0 transition-colors shadow-2xs disabled:opacity-50 cursor-pointer whitespace-nowrap"
                >
                  {q}
                </button>
              ))}
            </div>

            {canScrollQRight && (
              <button
                type="button"
                id="btn-questions-scroll-right"
                onClick={() => handleScrollQuestions('right')}
                className="absolute right-0 z-20 h-full px-1 bg-gradient-to-l from-white via-white/95 to-transparent flex items-center justify-center text-slate-700 hover:text-black cursor-pointer"
                aria-label="Desplazar preguntas a la derecha"
              >
                <div className="w-5 h-5 rounded-full bg-white shadow-xs border border-slate-300 flex items-center justify-center hover:bg-slate-100 hover:border-[#569900]">
                  <ChevronRight className="w-3 h-3" />
                </div>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 3. Feed de Preguntas y Respuestas: la más reciente al principio del todo y las antiguas debajo */}
      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-[#F3F4F6]"
      >
        {/* Error notification if any */}
        {errorMsg && (
          <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-xs sm:text-sm text-rose-800 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 shrink-0 text-rose-600" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Turnos de conversación: most recent first ([...turns].reverse()) */}
        {turns.length > 0 && (
          <div className="space-y-4">
            {[...turns].reverse().map((turn, index) => (
              <div
                key={turn.id}
                className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden"
              >
                {/* Pregunta del Usuario */}
                <div className="p-3.5 sm:p-4 bg-slate-50 border-b border-slate-100 flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-slate-800 text-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                          Tu pregunta
                        </span>
                        {index === 0 && (
                          <span className="px-1.5 py-0.5 bg-[#E1F7C3] text-[#1D3300] text-[9px] font-bold rounded uppercase">
                            Más reciente
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {turn.userMessage.timestamp}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug whitespace-pre-wrap">
                      {turn.userMessage.content}
                    </p>
                  </div>
                </div>

                {/* Respuesta del Asesor Medgón (aparece después de la pregunta) */}
                <div className="p-3.5 sm:p-4 bg-white flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#569900] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#2F5300] flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-[#569900]" />
                        <span>Respuesta Oficial Medgón</span>
                      </span>
                      {turn.advisorMessage && (
                        <span className="text-[10px] text-slate-400 font-mono">
                          {turn.advisorMessage.timestamp}
                        </span>
                      )}
                    </div>

                    {turn.advisorMessage ? (
                      renderMarkdown(turn.advisorMessage.content)
                    ) : turn.isLoading ? (
                      <div className="flex items-center gap-2.5 py-2 text-slate-600">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#569900] animate-pulse" />
                        <span className="text-xs sm:text-sm text-slate-700 font-medium">
                          El Asesor Técnico Medgón está calculando la respuesta...
                        </span>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Mensaje de Bienvenida Oficial Medgón (en la base del feed o como bienvenida inicial) */}
        {welcomeMessage && (
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-2xs">
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-[#569900] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                <Bot className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#2F5300] flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#569900]" />
                      <span>Bienvenida Oficial Medgón</span>
                    </span>
                    <span className="px-1.5 py-0.5 bg-slate-100 text-slate-600 text-[9px] font-bold rounded uppercase">
                      Presentación
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {welcomeMessage.timestamp}
                  </span>
                </div>
                {renderMarkdown(welcomeMessage.content)}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
