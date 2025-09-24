import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: "Bénédicte",
    lastName: "Lecoq",
    role: "Fondatrice & Directrice",
    description: "Visionnaire et passionnée, Bénédicte a créé Tiny Team avec la conviction que chaque artiste mérite un accompagnement aussi unique que son talent. Forte de plus de 15 ans d'expérience dans l'industrie du spectacle, elle guide l'équipe avec une approche humaine et professionnelle.",
    quote: "L'art est un pont entre les rêves et la réalité",
    skills: ["Direction stratégique", "Production artistique", "Développement de talents", "Vision créative"],
    image: "https://static.eno.do/x/fs-207406-default/2584a08dbb3b3d9c470bee9fb6019dd1/media.jpg",
    color: "#EC4899", // Rose
    contact: {
      linkedin: "benedicte-lecoq",
      email: "benedicte@tinyteam.fr"
    }
  },
  {
    name: "Isabelle",
    lastName: "Sabatier",
    role: "Responsable Diffusion & Tournées",
    description: "Experte en diffusion artistique, Isabelle transforme les spectacles en succès nationaux grâce à sa connaissance approfondie du secteur et son réseau exceptionnel. Elle orchestre chaque tournée avec précision et passion.",
    quote: "Chaque ville est une nouvelle scène à conquérir",
    skills: ["Programmation culturelle", "Gestion de tournées", "Relations publiques", "Booking national"],
    image: "https://static.eno.do/x/fs-207410-default/af6d91411c60335f407220493c043763/media.jpg",
    color: "#8B5CF6", // Violet
    contact: {
      linkedin: "isabelle-sabatier",
      email: "booking@tinyteam.fr"
    }
  },
  {
    name: "Elodie",
    lastName: "Biffi",
    role: "Responsable Administrative",
    description: "Gardienne de l'excellence opérationnelle, Elodie assure une gestion irréprochable permettant aux artistes de se concentrer sur leur art. Son attention aux détails et sa rigueur garantissent le bon fonctionnement de tous nos projets.",
    quote: "L'organisation est la clé de la liberté artistique",
    skills: ["Gestion administrative", "Optimisation des process", "Veille juridique", "Coordination équipes"],
    image: "https://static.eno.do/x/fs-207411-default/0ed25e6fe47508a9f55ceb7a0ee6fc4c/media.jpg",
    color: "#3B82F6", // Bleu
    contact: {
      linkedin: "elodie-biffi",
      email: "administratif@tinyteam.fr"
    }
  },
  {
    name: "Jérémy",
    lastName: "Dravigny",
    role: "Responsable Communication & Production",
    description: "Stratège digital et expert en communication, Jérémy crée des narratifs percutants qui connectent les artistes à leur public de manière authentique et innovante. Il maîtrise tous les aspects de la communication moderne.",
    quote: "L'innovation au service de l'émotion",
    skills: ["Communication digitale", "Marketing artistique", "Relations presse", "Production de contenu"],
    image: "https://static.eno.do/x/fs-207412-default/b0bd97d300f452b564d515009f33562b/media.jpg",
    color: "#10B981", // Vert
    contact: {
      linkedin: "jeremy-dravigny",
      email: "tourmanager@tinyteam.fr"
    }
  },
  {
    name: "Margaux",
    lastName: "Morel",
    role: "Chargée de Production & Events",
    description: "Créative et méthodique, Margaux donne vie aux projets les plus ambitieux en conjuguant vision artistique et excellence opérationnelle. Elle transforme chaque idée en expérience mémorable.",
    quote: "Créer des connexions, construire des ponts",
    skills: ["Production artistique", "Direction technique", "Gestion de projet", "Événementiel"],
    image: "https://static.eno.do/x/fs-207407-default/6f534256453179693776055b70110e0e/media.jpg",
    color: "#F59E0B", // Jaune
    contact: {
      linkedin: "margaux-morel",
      email: "diffusion@tinyteam.fr"
    }
  }
];

const MemberBlock = ({ member, index, isReversed = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    className={`grid gap-12 lg:gap-20 items-center mb-32 ${
      isReversed ? 'lg:grid-cols-[3fr_2fr]' : 'lg:grid-cols-[2fr_3fr]'
    } grid-cols-1`}
  >
    {/* Photo Container */}
    <motion.div
      className={`relative aspect-[4/5] rounded-3xl overflow-hidden group ${
        isReversed ? 'lg:order-2' : ''
      }`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Glow */}
      <div 
        className="absolute -inset-4 rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"
        style={{ backgroundColor: member.color + '40' }}
      />
      
      {/* Main Image */}
      <div className="relative w-full h-full rounded-3xl overflow-hidden">
        <img
          src={member.image}
          alt={`${member.name} ${member.lastName}`}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        
        {/* Glass Border */}
        <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 group-hover:ring-white/30 transition-all duration-500" />
        
        {/* Quote Overlay (appears on hover) */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
          <motion.blockquote
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl italic text-white font-light leading-relaxed"
          >
            "{member.quote}"
          </motion.blockquote>
        </div>
      </div>

      {/* Role Badge */}
      <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm border border-white/20">
        <span className="text-sm font-semibold text-white uppercase tracking-wider">
          {member.role}
        </span>
      </div>
    </motion.div>

    {/* Info Container */}
    <motion.div
      initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
      className={`space-y-8 ${isReversed ? 'lg:order-1 lg:text-right' : ''}`}
    >
      {/* Name */}
      <div className="space-y-2">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
          className="text-xl font-light text-white/70"
        >
          {member.name}
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none"
          style={{ 
            background: `linear-gradient(135deg, ${member.color}, #ffffff)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          {member.lastName}
        </motion.h3>
      </div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
        className="text-lg text-white/80 leading-relaxed"
      >
        {member.description}
      </motion.p>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
        className={`flex flex-wrap gap-3 ${isReversed ? 'lg:justify-end' : ''}`}
      >
        {member.skills.map((skill, skillIndex) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 + 0.8 + skillIndex * 0.1 }}
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              transition: { duration: 0.2 }
            }}
            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300 cursor-default"
            style={{
              borderColor: `${member.color}20`,
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = member.color + '60';
              e.target.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = member.color + '20';
              e.target.style.color = 'rgba(255, 255, 255, 0.7)';
            }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>

      {/* Contact Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.9 }}
        className={`${isReversed ? 'lg:flex lg:justify-end' : ''}`}
      >
        <motion.a
          href={`mailto:${member.contact.email}`}
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full overflow-hidden"
          whileHover={{ scale: 1.05, x: isReversed ? -6 : 6 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: `linear-gradient(135deg, ${member.color}20, ${member.color}10)`
            }}
            whileHover={{
              background: `linear-gradient(135deg, ${member.color}30, ${member.color}20)`
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Border */}
          <div 
            className="absolute inset-0 rounded-full border-2 transition-all duration-300"
            style={{ borderColor: member.color + '60' }}
          />
          
          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
            style={{ backgroundColor: member.color }}
          />

          {/* Content */}
          <div className="relative flex items-center gap-3">
            <Mail className="w-5 h-5 text-white" />
            <span className="font-semibold text-white">Contacter {member.name}</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-5 h-5 text-white" />
            </motion.div>
          </div>
        </motion.a>
      </motion.div>
    </motion.div>
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

export const TeamMembersSection = () => {
  return (
    <section id="team-members" className="relative py-32 bg-[#0A0F29] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.1),transparent_50%)]" />
        <FloatingParticles />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-pink-500/20 via-pink-500/5 to-pink-500/10 blur-3xl" />
            <h2 className="relative text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block text-gradient from-white via-blue-100 to-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
                Notre Force,
              </span>
              <span className="block text-gradient from-pink-300 via-pink-200 to-pink-300 mt-2 text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
                Notre Team
              </span>
            </h2>
          </div>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Découvrez les visages passionnés qui donnent vie à Tiny Team.
            Une équipe unie par l'amour du spectacle vivant et l'excellence.
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <MemberBlock
              key={member.name}
              member={member}
              index={index}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 blur-3xl" />
            <h3 className="relative text-2xl md:text-4xl font-bold text-gradient from-pink-300 via-pink-200 to-pink-300 mb-6">
              Ensemble, nous créons l'excellence
            </h3>
          </div>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Une équipe passionnée, des expertises complémentaires, 
            une vision commune : faire rayonner votre talent.
          </p>
        </motion.div>
      </div>
    </section>
  );
};