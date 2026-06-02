import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Smile } from 'lucide-react';

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Here you would typically send the message to your backend
    console.log('Message sent:', message);
    setMessage('');
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center group z-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageSquare className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-28 right-8 w-[400px] max-w-[calc(100vw-2rem)] bg-[#0A0F29] rounded-2xl shadow-2xl overflow-hidden z-50"
          >
            {/* Header */}
            <div className="relative p-6 bg-gradient-to-r from-pink-400 to-pink-500">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>
              <h3 className="text-xl font-bold text-white">Discuter avec l'équipe</h3>
              <p className="text-white/80 text-sm">Nous vous répondons en quelques minutes</p>
            </div>

            {/* Messages */}
            <div className="h-[300px] overflow-y-auto p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-medium text-sm">TT</span>
                </div>
                <div className="glass-card rounded-xl rounded-tl-none p-4 text-white/90">
                  Bonjour ! Comment pouvons-nous vous aider aujourd'hui ?
                </div>
              </div>
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
              <div className="relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Votre message..."
                  className="w-full bg-white/5 rounded-xl pl-4 pr-24 py-3 text-white placeholder-white/40 outline-none focus:ring-2 ring-pink-500/50 transition-all duration-300"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <button
                    type="button"
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white/60 hover:text-white/80 transition-colors duration-300"
                  >
                    <Smile className="w-5 h-5" />
                  </button>
                  <button
                    type="submit"
                    disabled={!message.trim()}
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};