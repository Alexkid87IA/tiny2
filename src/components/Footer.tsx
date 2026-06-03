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
    <footer className="bg-deep text-paper">
      <div className="mx-auto max-w-container px-6 pb-8 pt-12 md:px-12 md:pt-16">
        <div className="grid gap-10 md:grid-cols-[1fr_auto_auto] md:gap-12">
          <div className="max-w-xs">
            <Link to="/" className="group flex items-center gap-3" aria-label="Accueil">
              <span className="h-10 w-10 rounded-full bg-paper" />
              <span className="font-display text-[14px] font-black uppercase leading-[0.82]">
                <span className="block">La Tiny</span>
                <span className="block">Team</span>
              </span>
            </Link>
            <p className="mt-4 font-body text-sm leading-relaxed text-paper/50">
              Production, management et diffusion de spectacles vivants.
            </p>
            <div className="mt-4 flex gap-3">
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

          {navColumns.map((col) => (
            <nav key={col.title}>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper/30">
                {col.title}
              </span>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="group inline-flex items-center gap-1.5 font-body text-sm text-paper/60 transition hover:text-paper"
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

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-paper/8 pt-6 text-paper/30 sm:flex-row sm:items-center">
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
