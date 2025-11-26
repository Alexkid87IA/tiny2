import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, ArrowUpRight, Sparkles } from 'lucide-react';

const socialLinks = [
  { 
    icon: Instagram, 
    href: 'https://www.instagram.com/latinyteam/', 
    label: 'Instagram',
    gradient: 'from-pink-400 to-purple-400'
  },
  { 
    icon: Linkedin, 
    href: 'https://www.linkedin.com/in/b%C3%A9n%C3%A9dicte-lecoq-426083138/', 
    label: 'LinkedIn',
    gradient: 'from-blue-400 to-cyan-400'
  },
];

const footerLinks = [
  { label: 'Notre Histoire', href: '/equipe', icon: '✨' },
  { label: 'Artistes', href: '/artistes', icon: '🎭' },
  { label: 'Services', href: '/services', icon: '🚀' },
];

// Composant pour les particules flottantes du footer
const FooterParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-full"
        initial={{
          x: Math.random() * 100 + '%',
          y: 100 + '%',
        }}
        animate={{
          y: -100 + '%',
          x: Math.random() * 100 + '%',
        }}
        transition={{
          duration: Math.random() * 20 + 20,
          repeat: Infinity,
          ease: "linear",
          delay: Math.random() * 10,
        }}
      />
    ))}
  </div>
);

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#0A0F29] to-[#050817] overflow-hidden">
      {/* Effet de vague en haut du footer */}
      <div className="absolute top-0 left-0 right-0 h-px">
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Background Effects améliorés */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 20% 80%, rgba(236, 72, 153, 0.08) 0%, transparent 50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.08) 0%, transparent 50%)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <FooterParticles />

      <div className="relative pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Section principale avec glass effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card rounded-3xl p-10 md:p-12 mb-12 backdrop-blur-xl bg-white/[0.02] border border-white/10"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                
                {/* Colonne Logo et Description */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {/* Logo avec effet de lueur */}
                  <Link to="/" className="inline-block mb-6 group">
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="absolute -inset-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <img 
                        src="https://res.cloudinary.com/dafo6bvhc/image/upload/v1764182992/Logo_TT_blanc_1_tlyut9.png"
                        alt="Tiny Team"
                        className="relative h-14 w-auto"
                      />
                    </motion.div>
                  </Link>
                  
                  <h3 className="text-white font-semibold text-lg mb-3">
                    Production & Management
                  </h3>
                  
                  <p className="text-white/50 text-sm leading-relaxed mb-6">
                    Nous transformons les rêves en spectacles inoubliables.
                    Une équipe passionnée au service du talent.
                  </p>

                  {/* Email avec animation */}
                  <motion.a 
                    href="mailto:contact@tinyteam.fr" 
                    className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Mail className="w-4 h-4 text-pink-400" />
                    <span className="text-white/70 group-hover:text-white text-sm transition-colors">
                      contact@tinyteam.fr
                    </span>
                  </motion.a>
                </motion.div>

                {/* Colonne Navigation avec effet cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-pink-400" />
                    Découvrir
                  </h3>
                  
                  <ul className="space-y-3">
                    {footerLinks.map((link, index) => (
                      <motion.li 
                        key={link.label}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        <Link
                          to={link.href}
                          className="group flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300"
                        >
                          <span className="text-lg">{link.icon}</span>
                          <span className="text-white/60 group-hover:text-white transition-colors">
                            {link.label}
                          </span>
                          <ArrowUpRight className="w-4 h-4 text-white/20 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ml-auto" />
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Colonne Réseaux sociaux avec design premium */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="text-white font-semibold text-lg mb-6">
                    Suivez-nous
                  </h3>
                  
                  {/* Boutons sociaux spectaculaires */}
                  <div className="flex gap-4 mb-8">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="relative group"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {/* Effet de brillance au hover */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                          style={{
                            background: `linear-gradient(135deg, ${social.gradient === 'from-pink-400 to-purple-400' ? 'rgba(236, 72, 153, 0.4)' : 'rgba(59, 130, 246, 0.4)'}, transparent)`,
                          }}
                        />
                        
                        {/* Card du bouton */}
                        <div className="relative w-12 h-12 rounded-2xl glass-card backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden">
                          <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                          <social.icon className="w-6 h-6 text-white/70 group-hover:text-white transition-colors duration-300 relative z-10" />
                        </div>
                      </motion.a>
                    ))}
                  </div>

                  {/* Message avec style */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-500/5 to-purple-500/5 border border-white/5">
                    <p className="text-white/40 text-sm leading-relaxed">
                      <span className="text-pink-400/60 font-medium">Rejoignez notre communauté</span>
                      <br />
                      Ne ratez aucune actualité et suivez nos artistes au quotidien.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Bottom Bar avec design raffiné */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              {/* Slogan animé */}
              <motion.div 
                className="mb-8"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <p className="text-3xl font-light">
                  <span className="text-white/30">Tiny Team</span>
                  <span className="text-white/20 mx-3">·</span>
                  <span className="text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text font-medium">
                    Big Dreams
                  </span>
                </p>
              </motion.div>

              {/* Copyright et liens légaux */}
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-xs text-white/30">
                <p>© 2024 Tiny Team. Tous droits réservés.</p>
                
                <div className="flex items-center gap-6">
                  <Link 
                    to="/mentions-legales" 
                    className="hover:text-white/50 transition-colors duration-300 relative group"
                  >
                    Mentions légales
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white/50 group-hover:w-full transition-all duration-300" />
                  </Link>
                  
                  <Link 
                    to="/confidentialite" 
                    className="hover:text-white/50 transition-colors duration-300 relative group"
                  >
                    Confidentialité
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white/50 group-hover:w-full transition-all duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};