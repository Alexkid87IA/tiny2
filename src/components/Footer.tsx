import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/tinyteam', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com/tinyteam', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com/tinyteam', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com/@tinyteam', label: 'Youtube' },
];

const contactInfo = [
  { icon: Mail, text: 'contact@tinyteam.fr' },
  { icon: Phone, text: '+33 1 23 45 67 89' },
  { icon: MapPin, text: '123 Avenue de l\'Humour, Paris' },
];

const footerLinks = [
  {
    title: 'Services',
    links: [
      { label: 'Production de Spectacles', href: '/services/production' },
      { label: 'Management d\'Artistes', href: '/services/management' },
      { label: 'Développement Digital', href: '/services/digital' },
      { label: 'Communication & Image', href: '/services/communication' },
      { label: 'Diffusion & Tournées', href: '/services/diffusion' },
      { label: 'Événements Spéciaux', href: '/services/evenements' },
    ],
  },
  {
    title: 'Découvrir',
    links: [
      { label: 'Notre Histoire', href: '/notre-histoire' },
      { label: 'L\'Équipe', href: '/equipe' },
      { label: 'Team Stories', href: '/team-stories' },
      { label: 'Événements', href: '/evenements' },
    ],
  },
  {
    title: 'Espace Pro',
    links: [
      { label: 'Programmateurs', href: '/programmateur' },
      { label: 'Marques', href: '/marque' },
      { label: 'Artistes', href: '/artiste' },
      { label: 'Services', href: '/services' },
    ],
  },
];

const SocialIcon = ({ icon: Icon, href, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="relative group"
  >
    <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative w-10 h-10 rounded-full glass-effect flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
      <Icon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
    </div>
  </motion.a>
);

const FooterLinkColumn = ({ title, links }) => (
  <div>
    <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            to={link.href}
            className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export const Footer = () => {
  return (
    <footer className="relative bg-[#0A0F29] pt-20 pb-10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,50,255,0.1),transparent_50%)]" />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="block mb-6">
                <img 
                  src="https://res.cloudinary.com/diqco2njt/image/upload/v1746189362/Logo_TT_blanc_th9klb.png"
                  alt="Tiny Team"
                  className="h-16 w-auto"
                />
              </Link>
              <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-md">
                Production et management d'artistes. Nous accompagnons les talents de demain
                dans leur développement artistique et professionnel.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-white/60">
                    <item.icon className="w-4 h-4" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <SocialIcon key={social.label} {...social} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column, index) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FooterLinkColumn {...column} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="relative pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © 2024 Tiny Team. Tous droits réservés.
              Tiny Team accompagne les artistes du spectacle vivant avec passion et expertise.
              Une équipe dédiée pour transformer vos rêves en succès.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/accessibilite" className="text-white/50 hover:text-white text-sm transition-colors duration-300">
                Accessibilité
              </Link>
              <Link to="/plan-du-site" className="text-white/50 hover:text-white text-sm transition-colors duration-300">
                Plan du site
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};