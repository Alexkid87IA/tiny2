import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const paths = [
  {
    eyebrow: 'Artistes',
    num: '01',
    title: 'Vous êtes artiste',
    desc: 'Vous cherchez une équipe qui comprend votre univers et sait le défendre, de la création à la scène.',
    link: '/artistes',
    linkLabel: 'Voir l’accompagnement',
  },
  {
    eyebrow: 'Programmateurs',
    num: '02',
    title: 'Vous programmez',
    desc: 'Salle, festival ou événement d’entreprise : on vous aide à trouver le bon spectacle pour le bon public.',
    link: '/programmateur',
    linkLabel: 'Voir les spectacles',
  },
];

export const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section ref={sectionRef} id="contact" className="relative overflow-hidden bg-paper py-24 text-ink md:py-32 lg:py-36">
      <div className="mx-auto max-w-container px-6 md:px-12">
        <motion.div
          className="grid gap-10 lg:grid-cols-12 lg:items-end"
          initial={false}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="lg:col-span-7">
            <span className="premium-kicker text-ink/46">Contact</span>
            <h2 className="premium-title mt-6 text-[clamp(2.7rem,6vw,5.8rem)]">
              Vous avez un
              <span className="block font-serif font-normal italic text-accent-dark">
                projet ?
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pb-2">
            <p className="premium-copy max-w-lg text-base text-ink/62 md:text-lg">
              Artiste, programmateur ou entreprise : on commence toujours par une conversation.
              Simple, directe, utile.
            </p>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {paths.map((path, i) => (
            <motion.div
              key={path.eyebrow}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
            >
              <Link
                to={path.link}
                className="group flex min-h-[270px] flex-col justify-between rounded-[10px] border border-ink/10 bg-ink px-5 py-6 text-paper transition duration-200 hover:border-accent/35 hover:bg-[#151018] sm:px-6 md:px-8 md:py-8"
              >
                <div>
                  <div className="mb-10 flex items-center justify-between gap-4">
                    <span className="premium-kicker text-paper/42">{path.eyebrow}</span>
                    <span className="premium-kicker text-paper/22">{path.num}</span>
                  </div>
                  <h3 className="premium-title max-w-lg text-3xl md:text-4xl">
                    {path.title}
                  </h3>
                  <p className="premium-copy mt-5 max-w-md text-base text-paper/60">
                    {path.desc}
                  </p>
                </div>

                <div className="mt-10 flex items-center gap-3 text-paper/70 transition group-hover:text-paper">
                  <span className="premium-kicker">{path.linkLabel}</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-paper/12 transition group-hover:border-accent/40 group-hover:text-accent-light">
                    <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 rounded-[10px] border border-ink/10 bg-white px-6 py-6 md:px-8 md:py-7"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink text-paper">
                <Mail size={19} />
              </span>
              <div>
                <span className="premium-kicker text-ink/42">Ou écrivez-nous directement</span>
                <a
                  href="mailto:contact@tinyteam.fr"
                  className="premium-title mt-1 block text-xl text-ink transition hover:text-accent-dark sm:text-2xl md:text-4xl break-all"
                >
                  contact@tinyteam.fr
                </a>
              </div>
            </div>

            <a href="mailto:contact@tinyteam.fr" className="premium-btn premium-btn-dark group">
              On discute ?
              <span className="premium-btn-icon">
                <ArrowUpRight size={15} strokeWidth={2.4} />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
