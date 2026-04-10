import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Sparkles, Brain } from 'lucide-react';
import baianaLogo from '../../doc/Logo holográfico de balAna LABS_transparent.png';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [model, setModel] = useState<'gemini' | 'openai'>('gemini');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    const newMessages = [...messages, { role: 'user', content: userMessage } as Message];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          model: model,
          history: messages,
        }),
      });

      const data = await response.json();
      if (data.response) {
        setMessages([...newMessages, { role: 'assistant', content: data.response }]);
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      setMessages([...newMessages, { role: 'assistant', content: 'Desculpe, tive um problema na conexão. Pode tentar novamente?' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] md:w-[400px] h-[550px] glass-card rounded-3xl overflow-hidden flex flex-col border border-white/10 shadow-2xl relative"
          >
            {/* Header */}
            <div className="bg-linear-to-r from-primary/20 to-secondary/20 p-6 flex justify-between items-center border-b border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 blur-xl animate-pulse" />
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-full border border-primary/30 p-1 bg-surface/50">
                  <img src={baianaLogo} alt="baIAna" className="w-full h-full object-contain brightness-125" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-white text-lg tracking-tight">baIAna</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/40 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
              {messages.length === 0 && (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <Sparkles className="text-primary w-8 h-8 animate-pulse" />
                  </div>
                  <p className="text-white/60 text-sm font-body px-8">
                    Olá! Eu sou a **baIAna**. Como posso te ajudar a escalar sua operação com IA hoje?
                  </p>
                </div>
              )}
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm font-body leading-relaxed ${
                    msg.role === 'user' 
                    ? 'bg-primary/20 text-white border border-primary/20 rounded-tr-none' 
                    : 'bg-white/5 text-white/90 border border-white/10 rounded-tl-none'
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/10 flex gap-1">
                    <span className="w-1.5 h-1.5 bg-white/30 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-white/30 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-white/30 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-4 bg-surface/50 border-t border-white/10 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escreva sua dúvida..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-hidden focus:border-primary/50"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-primary hover:bg-primary/80 text-white p-3 rounded-xl transition-all disabled:opacity-50 cursor-pointer"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(51,193,255,0.4)] cursor-pointer group relative"
      >
        <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
        {isOpen ? (
          <X className="text-white w-8 h-8" />
        ) : (
          <div className="relative w-10 h-10">
            <img src={baianaLogo} alt="baIAna Chat" className="w-full h-full object-contain brightness-125" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-surface animate-pulse" />
          </div>
        )}
      </motion.button>
    </div>
  );
}
