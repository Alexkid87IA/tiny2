import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const socialLinks = [
  { 
    icon: Instagram, 
    href: 'https://www.instagram.com/latinyteam/', 
    label: 'Instagram',
    color: 'hover:text-pink-400'
  },
  { 
    icon: Linkedin, 
    href: 'https://www.linkedin.com/in/b%C3%A9n%C3%A9dicte-lecoq-426083138/', 
    label: 'LinkedIn',
    color: 'hover:text-blue-400'
  },
];

const footerLinks = [
  {
    title: 'Découvrir',
    links: [
      { label: 'Notre Histoire', href: '/equipe' },
      { label: 'Artistes', href: '/artistes' },
      { label: 'Services', href: '/services' },
      { label: 'Événements', href: '/evenements' },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="relative bg-[#0A0F29] pt-20 pb-10 overflow-hidden border-t border-white/5">
      {/* Background Effects subtils */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.05),transparent_70%)]" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-1"
            >
              <Link to="/" className="block mb-6">
                <img 
                  src="https://res.cloudinary.com/diqco2njt/image/upload/v1746189362/Logo_TT_blanc_th9klb.png"
                  alt="Tiny Team"
                  className="h-12 w-auto"
                />
              </Link>
              
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Production et management d'artistes.<br/>
                Nous transformons les rêves en spectacles.
              </p>

              {/* Contact simple */}
              <a 
                href="mailto:contact@tinyteam.fr" 
                className="inline-flex items-center gap-2 text-white/60 hover:text-pink-300 transition-colors duration-300 group"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">contact@tinyteam.fr</span>
              </a>
            </motion.div>

            {/* Links Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-1"
            >
              <h3 className="text-white font-semibold mb-4">Découvrir</h3>
              <ul className="space-y-3">
                {footerLinks[0].links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-white/60 hover:text-white transition-colors duration-300 text-sm inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-1"
            >
              <h3 className="text-white font-semibold mb-4">Suivez-nous</h3>
              
              <div className="flex gap-4 mb-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group"
                  >
                    <div className="relative">
                      <div className={`absolute -inset-2 rounded-lg bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      <div className="relative w-10 h-10 rounded-lg glass-card flex items-center justify-center">
                        <social.icon className={`w-5 h-5 text-white/60 ${social.color} transition-colors duration-300`} />
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <p className="text-white/40 text-xs">
                Rejoignez notre communauté<br/>
                et ne ratez aucune actualité
              </p>
            </motion.div>
          </div>

          {/* Bottom Bar simplifié */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />
            
            <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-white/40 text-xs">
                  © 2024 Tiny Team. Tous droits réservés.
                </p>
                <p className="text-white/30 text-xs mt-1">
                  Tiny Team - Big Dreams
                </p>
              </div>
              
              {/* Liens légaux minimalistes */}
              <div className="flex items-center gap-6">
                <Link 
                  to="/mentions-legales" 
                  className="text-white/40 hover:text-white/60 text-xs transition-colors duration-300"
                >
                  Mentions légales
                </Link>
                <Link 
                  to="/confidentialite" 
                  className="text-white/40 hover:text-white/60 text-xs transition-colors duration-300"
                >
                  Confidentialité
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};