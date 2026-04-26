import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Instagram, Youtube } from 'lucide-react';

const footerLinks = [
  {
    title: 'Services',
    links: [
      { label: 'Production', href: '/services/production' },
      { label: 'Management', href: '/services/management' },
      { label: 'Digital', href: '/services/digital' },
      { label: 'Communication', href: '/services/communication' },
      { label: 'Diffusion', href: '/services/diffusion' },
      { label: 'Événements', href: '/services/evenements' },
    ],
  },
  {
    title: 'Découvrir',
    links: [
      { label: 'Nos artistes', href: '/artistes' },
      { label: 'L\'équipe', href: '/equipe' },
      { label: 'Spectacles', href: '/evenements' },
    ],
  },
  {
    title: 'Travailler ensemble',
    links: [
      { label: 'Programmateurs', href: '/programmateur' },
      { label: 'Entreprises', href: '/marque' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="relative bg-ink overflow-hidden">

      {/* CTA band */}
      <div className="border-b border-paper/[0.06]">
        <div className="max-w-container mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="font-display font-black text-paper text-2xl md:text-4xl tracking-tight leading-[0.92]">
              Un projet en tête ?
            </h3>
            <p className="font-body text-paper/35 text-sm md:text-base mt-3 max-w-md">
              Artiste, programmateur ou entreprise — on commence toujours par une conversation.
            </p>
          </div>
          <a
            href="mailto:contact@tinyteam.fr"
            className="group inline-flex items-center gap-3 flex-shrink-0"
          >
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-paper/10 font-mono text-[11px] tracking-[0.14em] uppercase text-paper/60 group-hover:text-paper group-hover:border-accent/40 group-hover:bg-accent/[0.06] transition-all duration-300">
              On discute ?
            </span>
            <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_24px_rgba(236,72,153,0.35)]">
              <ArrowRight size={15} className="text-ink group-hover:translate-x-0.5 transition-transform duration-300" />
            </span>
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-container mx-auto px-6 md:px-12 pt-16 md:pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/logo_tiny_team.png"
                alt="Tiny Team"
                className="h-16 md:h-20 w-auto"
              />
            </Link>
            <p className="font-body text-paper/30 text-sm max-w-xs leading-relaxed mb-8">
              Production, management & diffusion de spectacles vivants. On accompagne les artistes de scène — de l'idée au rideau final.
            </p>

            {/* Email */}
            <a
              href="mailto:contact@tinyteam.fr"
              className="group inline-flex items-center gap-3 mb-6"
            >
              <span className="w-10 h-10 rounded-full border border-paper/10 flex items-center justify-center group-hover:border-accent/30 group-hover:bg-accent/[0.06] transition-all duration-300">
                <Mail size={16} className="text-paper/40 group-hover:text-accent transition-colors duration-300" />
              </span>
              <span className="font-body text-sm text-paper/50 group-hover:text-paper transition-colors duration-300">
                contact@tinyteam.fr
              </span>
            </a>

            {/* Socials */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/latinyteam/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-paper/10 flex items-center justify-center hover:border-accent/30 hover:bg-accent/[0.06] transition-all duration-300 group"
              >
                <Instagram size={16} className="text-paper/40 group-hover:text-accent transition-colors duration-300" />
              </a>
              <a
                href="https://www.youtube.com/@latinyteam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-paper/10 flex items-center justify-center hover:border-accent/30 hover:bg-accent/[0.06] transition-all duration-300 group"
              >
                <Youtube size={16} className="text-paper/40 group-hover:text-accent transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12 lg:pl-12">
            {footerLinks.map((col) => (
              <div key={col.title}>
                <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-accent/50 block mb-5">
                  {col.title}
                </span>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="font-body text-sm text-paper/40 hover:text-paper transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-paper/[0.06] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-paper/20">
            © {new Date().getFullYear()} Tiny Team — Paris, France
          </span>
          <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-paper/15">
            Fait avec soin par{' '}
            <a
              href="https://www.instagram.com/alex______kid/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper/25 hover:text-accent transition-colors duration-200"
            >
              alexkid
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};
