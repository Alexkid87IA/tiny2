import { ArrowUpRight, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const navColumns = [
  {
    title: 'Plateau',
    links: [
      { label: 'Artistes', href: '/artistes' },
      { label: 'Programmateurs', href: '/programmateur' },
      { label: 'Entreprises', href: '/marque' },
    ],
  },
  {
    title: 'Métiers',
    links: [
      { label: 'Production', href: '/services#production' },
      { label: 'Management', href: '/services#management' },
      { label: 'Diffusion', href: '/services#diffusion' },
      { label: 'Communication', href: '/services#communication' },
      { label: 'Digital', href: '/services#digital' },
      { label: 'Événements', href: '/services#evenements' },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-paper/8 bg-[linear-gradient(180deg,#091025_0%,#070b1f_100%)] text-paper">
      <div className="mx-auto max-w-container px-6 pb-7 pt-8 md:px-12 md:pb-8 md:pt-16">
        <div className="grid gap-5 md:grid-cols-[1fr_auto_auto] md:gap-12">
          <div className="rounded-[10px] border border-paper/10 bg-paper/[0.035] p-4 md:max-w-xs md:border-0 md:bg-transparent md:p-0">
            <div className="flex items-center justify-between gap-4 md:block">
              <Link to="/" className="group flex items-center gap-3" aria-label="Accueil">
                <span className="h-11 w-11 rounded-full bg-paper shadow-[0_0_0_1px_rgba(247,245,240,0.18)] md:h-10 md:w-10" />
                <span className="font-display text-[14px] font-black uppercase leading-[0.82]">
                  <span className="block">La Tiny</span>
                  <span className="block">Team</span>
                </span>
              </Link>
              <div className="flex gap-2 md:hidden">
                <a
                  href="mailto:contact@tinyteam.fr"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/12 text-paper/64 transition hover:border-accent/40 hover:text-accent-light"
                  aria-label="Email"
                >
                  <Mail size={15} />
                </a>
                <a
                  href="https://www.instagram.com/latinyteam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/12 text-paper/64 transition hover:border-accent/40 hover:text-accent-light"
                  aria-label="Instagram"
                >
                  <Instagram size={15} />
                </a>
              </div>
            </div>
            <p className="mt-4 max-w-[19rem] font-body text-[15px] leading-relaxed text-paper/58 md:text-sm md:text-paper/50">
              Production, management et diffusion de spectacles vivants.
            </p>
            <div className="mt-4 hidden gap-3 md:flex">
              <a
                href="mailto:contact@tinyteam.fr"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/10 text-paper/50 transition hover:border-accent/40 hover:text-accent-light"
                aria-label="Email"
              >
                <Mail size={15} />
              </a>
              <a
                href="https://www.instagram.com/latinyteam/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/10 text-paper/50 transition hover:border-accent/40 hover:text-accent-light"
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:contents">
            {navColumns.map((col) => (
              <nav key={col.title} className="rounded-[10px] border border-paper/10 bg-paper/[0.035] p-4 md:border-0 md:bg-transparent md:p-0">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper/30">
                  {col.title}
                </span>
                <ul className="mt-3 space-y-2.5 md:space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="group inline-flex items-center gap-1.5 font-body text-[15px] text-paper/68 transition hover:text-paper md:text-sm md:text-paper/60"
                      >
                        {link.label}
                        <ArrowUpRight size={11} className="opacity-0 transition group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-col items-center justify-between gap-3 border-t border-paper/10 pt-5 text-center text-paper/34 sm:flex-row sm:items-center sm:text-left md:mt-10 md:border-paper/8 md:pt-6 md:text-paper/30">
          <span className="font-mono text-[10px] uppercase tracking-[0.12em]">
            © {new Date().getFullYear()} Tiny Team
          </span>
          <a
            href="mailto:contact@tinyteam.fr"
            className="font-mono text-[10px] uppercase tracking-[0.12em] transition hover:text-paper/60"
          >
            contact@tinyteam.fr
          </a>
        </div>
      </div>
    </footer>
  );
};
