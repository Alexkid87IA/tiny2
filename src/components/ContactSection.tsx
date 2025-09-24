import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@tinyteam.fr",
    href: "mailto:contact@tinyteam.fr",
    gradient: "from-pink-500/20 to-purple-500/20"
  },
  {
    icon: MapPin,
    title: "Adresse",
    value: "Paris, France",
    href: "#",
    gradient: "from-purple-500/20 to-blue-500/20"
  }
];

const ContactInfoCard = ({ info, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group"
  >
    <a
      href={info.href}
      target={info.href.startsWith('http') ? '_blank' : undefined}
      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="block"
    >
      <div className="relative glass-card rounded-2xl p-8 overflow-hidden hover:scale-105 transition-transform duration-300">
        <div className="absolute inset-0">
          <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="relative text-center">
          <div className="relative mb-6">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-pink-500/20 to-pink-300/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-16 h-16 mx-auto rounded-2xl glass-effect flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <info.icon className="w-8 h-8 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white/70 mb-2">{info.title}</h3>
            <p className="text-xl text-white group-hover:text-glow transition-all duration-300 font-medium">{info.value}</p>
          </div>
        </div>
      </div>
    </a>
  </motion.div>
);

const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-white/20 rounded-full"
        initial={{
          x: Math.random() * 100 + "%",
          y: Math.random() * 100 + "%",
          scale: 0,
          opacity: 0
        }}
        animate={{
          y: [null, `${Math.random() * 30 - 15}%`],
          x: [null, `${Math.random() * 30 - 15}%`],
          scale: [0, 1, 0],
          opacity: [0, 0.8, 0]
        }}
        transition={{
          duration: Math.random() * 5 + 3,
          repeat: Infinity,
          repeatDelay: Math.random() * 2
        }}
      />
    ))}
  </div>
);

export const ContactSection = () => {
  return (
    <section className="relative min-h-screen py-32 bg-[#0A0F29] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.15),transparent_70%)]" />
        <FloatingParticles />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative px-2 md:px-0"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute -inset-x-4 -inset-y-8 md:-inset-y-16 bg-gradient-to-r from-pink-500/10 via-pink-500/5 to-pink-500/10 rounded-[40px] blur-3xl"
            />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9] md:leading-[0.9]">
                <span className="inline-block bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent">
                  Contactez-nous
                </span>
                <br />
                <span className="inline-block bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 bg-clip-text text-transparent">
                  directement
                </span>
              </h2>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mt-8"
          >
            Que vous soyez artiste, programmateur ou marque, nous sommes là pour vous accompagner.
            Contactez-nous pour discuter de votre projet.
          </motion.p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
          {contactInfo.map((info, index) => (
            <ContactInfoCard key={info.title} info={info} index={index} />
          ))}
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="relative glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl glass-effect flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-pink-400" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white">Parlons de votre projet</h3>
                <p className="text-white/70">Une équipe dédiée à votre réussite</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Nous répondons généralement sous 24h. N'hésitez pas à nous contacter 
              pour toute question ou demande d'information.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};