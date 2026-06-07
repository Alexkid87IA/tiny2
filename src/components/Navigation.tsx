import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const menuItems = [
  { title: 'Artistes', eyebrow: 'Plateau', href: '/artistes' },
  { title: 'Services', eyebrow: 'Métiers', href: '/services' },
  { title: 'Programmateurs', eyebrow: 'Salles', href: '/programmateur' },
  { title: 'Entreprises', eyebrow: 'Marques', href: '/marque' },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverLight, setIsOverLight] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const getReadableBackground = (element: Element | null): string => {
      let current = element;

      while (current && current !== document.documentElement) {
        const backgroundColor = window.getComputedStyle(current).backgroundColor;
        if (backgroundColor && !backgroundColor.endsWith(', 0)') && backgroundColor !== 'transparent') {
          return backgroundColor;
        }
        current = current.parentElement;
      }

      return window.getComputedStyle(document.body).backgroundColor;
    };

    const isLightBackground = (backgroundColor: string) => {
      const match = backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (!match) return false;
      const [, r, g, b] = match.map(Number);
      return (0.299 * r + 0.587 * g + 0.114 * b) > 150;
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
      const elementBehindNav = document.elementFromPoint(window.innerWidth / 2, 104);
      setIsOverLight(isLightBackground(getReadableBackground(elementBehindNav)));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className="fixed left-0 right-0 top-0 z-[100] px-3 pt-3 transition-all duration-300"
      >
        <div className="mx-auto max-w-container md:px-4">
          <div
            className={`grid h-[76px] grid-cols-[auto_1fr_auto] items-center gap-4 rounded-full border px-4 shadow-[0_22px_80px_rgba(0,0,0,0.26)] backdrop-blur-2xl transition-all duration-300 md:px-6 ${
              isOverLight
                ? 'border-ink/[0.08] bg-paper/[0.78] text-ink shadow-[0_22px_80px_rgba(10,10,10,0.12)]'
                : isScrolled
                  ? 'border-paper/[0.16] bg-deep/[0.58] text-paper'
                  : 'border-paper/[0.12] bg-deep/[0.34] text-paper shadow-[0_22px_80px_rgba(0,0,0,0.18)]'
            }`}
          >
            <Link
              to="/"
              className="group flex min-w-[148px] flex-shrink-0 items-center gap-3"
              aria-label="Tiny Team - Accueil"
            >
              <span className={`h-12 w-12 rounded-full shadow-[0_0_0_1px_rgba(247,245,240,0.16),0_12px_36px_rgba(236,72,153,0.16)] transition-transform duration-300 group-hover:scale-105 ${
                isOverLight ? 'bg-ink' : 'bg-paper'
              }`} />
              <span className={`font-display text-[15px] font-black uppercase leading-[0.82] tracking-[0] ${
                isOverLight ? 'text-ink' : 'text-paper'
              }`}>
                <span className="block">La Tiny</span>
                <span className="block">Team</span>
              </span>
            </Link>

            <div className="hidden items-center justify-self-center lg:flex lg:gap-1 xl:gap-2">
              {menuItems.map((item, i) => {
                const active = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`nav-rubric ${active ? 'is-active' : ''} ${
                      isOverLight ? 'is-light' : 'is-dark'
                    }`}
                  >
                    <span className="nav-rubric-kicker">
                      <span>{String(i + 1).padStart(2, '0')}</span>
                      {item.eyebrow}
                    </span>
                    <span className="nav-rubric-title">
                      {item.title}
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="flex justify-self-end items-center gap-2">
              <a
                href="#contact"
                className="premium-btn premium-btn-paper premium-btn-sm group !hidden sm:!inline-flex"
              >
                On discute ?
                <span className="premium-btn-icon">
                  <ArrowUpRight size={14} strokeWidth={2.4} />
                </span>
              </a>

              <button
                onClick={() => setIsMenuOpen((open) => !open)}
                className={`flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-md transition lg:hidden ${
                  isOverLight
                    ? 'border-ink/[0.1] bg-ink text-paper shadow-[0_10px_28px_rgba(10,15,41,0.16)] hover:bg-ink/[0.88]'
                    : 'border-paper/[0.14] bg-paper/[0.055] text-paper/[0.82] hover:border-paper/[0.28] hover:text-paper'
                }`}
                type="button"
                aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={19} /> : <Menu size={19} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[90] flex flex-col bg-deep px-6 pb-8 pt-28"
          >
            <nav className="flex flex-col">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.045, duration: 0.28 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="grid grid-cols-[44px_1fr] items-center border-b border-paper/[0.08] py-5"
                  >
                    <span className="premium-kicker text-paper/[0.34]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>
                      <span className="premium-kicker block text-accent-light/70">
                        {item.eyebrow}
                      </span>
                      <span className={`mt-1 block font-display text-2xl font-black sm:text-3xl ${
                        location.pathname === item.href ? 'text-paper' : 'text-paper/[0.64]'
                      }`}>
                        {item.title}
                      </span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="premium-btn premium-btn-paper group mt-auto w-full"
            >
              On discute ?
              <span className="premium-btn-icon">
                <ArrowUpRight size={15} strokeWidth={2.4} />
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
