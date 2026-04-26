import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const paths = [
  {
    eyebrow: 'Artistes',
    num: '01',
    title: 'Vous êtes artiste',
    desc: 'Vous cherchez une équipe qui comprend votre univers et sait le défendre. De la création à la scène, on construit ensemble.',
    link: '/artistes',
    linkLabel: 'Découvrir nos artistes',
  },
  {
    eyebrow: 'Pro',
    num: '02',
    title: 'Vous programmez ou organisez',
    desc: 'Salle, festival, corporate — on a les artistes, vous avez la scène. Trouvons le bon spectacle pour votre public.',
    link: '/programmateur',
    linkLabel: 'Espace programmateurs',
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="perf-section contact relative bg-deep overflow-hidden py-28 md:py-40 lg:py-48">

      {/* Orbs */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none blur-[80px]"
        style={{
          top: '10%', right: '-10%',
          background: 'radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full pointer-events-none blur-[80px]"
        style={{
          bottom: '15%', left: '-8%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-container mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.span
          className="font-mono text-[13px] tracking-[0.18em] uppercase text-accent block mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.span>
        <motion.p
          className="font-body text-paper/40 text-base md:text-lg mb-8 md:mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Artiste, programmateur ou marque — on commence toujours par un café (ou un appel).
        </motion.p>

        <motion.h2
          className="font-display font-black text-paper tracking-tight leading-[0.88]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
        >
          <span className="block text-[clamp(2.6rem,7vw,6.5rem)]">
            Vous avez un
          </span>
          <span className="block text-[clamp(2.6rem,7vw,6.5rem)] mt-1 md:mt-2">
            <span className="font-serif italic font-normal text-accent-light">projet ?</span>
          </span>
        </motion.h2>

        <motion.p
          className="font-body text-paper/40 text-lg md:text-xl leading-[1.7] max-w-xl mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          Artiste, programmateur ou entreprise — on commence toujours par une conversation.
        </motion.p>

        {/* Two paths */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-16 md:mt-24" style={{ gridAutoRows: '1fr' }}>
          {paths.map((path, i) => (
            <motion.div
              key={path.eyebrow}
              className="h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
            >
              <Link to={path.link} className="contact-card group block relative h-full">
                <div className="contact-card-inner relative p-8 md:p-10 lg:p-12 h-full">
                  {/* Number */}
                  <span className="mission-card-num font-display font-black absolute top-8 right-9 md:top-10 md:right-10">
                    {path.num}
                  </span>

                  <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-accent/50 block mb-4">
                    {path.eyebrow}
                  </span>

                  <h3 className="font-display font-bold text-paper text-xl md:text-2xl tracking-tight group-hover:text-accent transition-colors duration-300 pr-12">
                    {path.title}
                  </h3>

                  <p className="font-body text-paper/30 text-sm md:text-base leading-relaxed mt-3 max-w-sm">
                    {path.desc}
                  </p>

                  {/* CTA */}
                  <div className="mt-8 inline-flex items-center gap-3">
                    <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-paper/10 font-mono text-[11px] tracking-[0.14em] uppercase text-paper/60 group-hover:text-paper group-hover:border-accent/40 group-hover:bg-accent/[0.06] transition-all duration-300">
                      {path.linkLabel}
                    </span>
                    <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_24px_rgba(236,72,153,0.35)]">
                      <ArrowRight size={15} className="text-ink group-hover:translate-x-0.5 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Email CTA */}
        <motion.div
          className="contact-email mt-20 md:mt-28 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="contact-email-line mx-auto mb-10" />

          <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-paper/25 block mb-6">
            Ou écrivez-nous directement
          </span>

          <a
            href="mailto:contact@tinyteam.fr"
            className="contact-email-link group inline-flex items-center gap-4"
          >
            <span className="w-14 h-14 rounded-full border border-accent/20 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/40 transition-all duration-300">
              <Mail size={22} className="text-accent" />
            </span>
            <span className="font-display font-bold text-paper/60 text-2xl md:text-4xl lg:text-5xl tracking-tight group-hover:text-accent transition-colors duration-300">
              contact@tinyteam.fr
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
