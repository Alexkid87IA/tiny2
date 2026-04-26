import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const serviceItems = [
  { title: 'Production', href: '/services/production' },
  { title: 'Management', href: '/services/management' },
  { title: 'Digital', href: '/services/digital' },
  { title: 'Communication', href: '/services/communication' },
  { title: 'Diffusion', href: '/services/diffusion' },
  { title: 'Événements', href: '/services/evenements' },
];

const menuItems = [
  { title: 'Artistes', href: '/artistes' },
  { title: 'L\'équipe', href: '/equipe' },
  { title: 'Services', href: '/services', hasDropdown: true },
  { title: 'Programmateurs', href: '/programmateur' },
  { title: 'Entreprises', href: '/marque' },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          setIsScrolled(y > 20);
          if (y <= 50) setIsVisible(true);
          else if (y > lastScrollYRef.current && y > 100) setIsVisible(false);
          else if (y < lastScrollYRef.current) setIsVisible(true);
          lastScrollYRef.current = y;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
        style={{
          backgroundColor: isScrolled ? 'rgba(10, 15, 41, 0.88)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(24px) saturate(1.4)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(24px) saturate(1.4)' : 'none',
          borderBottom: 'none',
          boxShadow: isScrolled ? '0 4px 30px rgba(0,0,0,0.25)' : 'none',
        }}
      >
        <div className="max-w-container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src="/logo_tiny_team.png"
                alt="Tiny Team"
                className="h-14 md:h-20 w-auto"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {menuItems.map((item) => {
                if (item.hasDropdown) {
                  const isActive = location.pathname.startsWith('/services');
                  return (
                    <div
                      key={item.href}
                      className="relative px-4 py-2 group cursor-pointer"
                      onMouseEnter={() => {
                        clearTimeout(servicesTimeoutRef.current);
                        setIsServicesOpen(true);
                      }}
                      onMouseLeave={() => {
                        servicesTimeoutRef.current = setTimeout(() => setIsServicesOpen(false), 150);
                      }}
                    >
                      <span className={`font-body text-sm font-medium transition-colors duration-200 ${
                        isActive ? 'text-paper' : 'text-paper/50 group-hover:text-paper/80'
                      }`}>
                        {item.title}
                      </span>
                      <ChevronDown size={14} className={`inline-block ml-1 align-middle transition-all duration-200 ${
                        isActive ? 'text-paper' : 'text-paper/30 group-hover:text-paper/60'
                      } ${isServicesOpen ? 'rotate-180' : ''}`} />
                      {isActive && (
                        <motion.div
                          layoutId="nav-active"
                          className="absolute bottom-0 left-4 right-4 h-px bg-accent"
                          transition={{ duration: 0.25 }}
                        />
                      )}

                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-0 pt-2 z-[110]"
                          >
                            <div className="w-56 rounded-xl bg-surface/95 backdrop-blur-xl border border-paper/[0.08] shadow-[0_8px_40px_rgba(0,0,0,0.4)] overflow-hidden">
                              {serviceItems.map((service) => (
                                <Link
                                  key={service.href}
                                  to={service.href}
                                  className={`block px-5 py-3 font-body text-sm transition-colors duration-150 ${
                                    location.pathname === service.href
                                      ? 'text-accent bg-accent/[0.06]'
                                      : 'text-paper/60 hover:text-paper hover:bg-paper/[0.04]'
                                  }`}
                                >
                                  {service.title}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="relative px-4 py-2 group"
                  >
                    <span className={`font-body text-sm font-medium transition-colors duration-200 ${
                      location.pathname === item.href
                        ? 'text-paper'
                        : 'text-paper/50 group-hover:text-paper/80'
                    }`}>
                      {item.title}
                    </span>
                    {location.pathname === item.href && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute bottom-0 left-4 right-4 h-px bg-accent"
                        transition={{ duration: 0.25 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA Desktop */}
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-pill bg-accent text-ink font-body text-sm font-semibold hover:bg-accent-light transition-colors duration-200"
            >
              On discute ?
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-paper/70"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[90] bg-deep/98 backdrop-blur-xl flex flex-col pt-24 px-6"
          >
            <nav className="flex flex-col gap-2">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="flex items-center gap-4 py-4 border-b border-paper/6 w-full text-left"
                      >
                        <span className="eyebrow text-paper/30">{String(i + 1).padStart(2, '0')}</span>
                        <span className={`font-display text-2xl font-bold tracking-display ${
                          location.pathname.startsWith('/services') ? 'text-paper' : 'text-paper/60'
                        }`}>
                          {item.title}
                        </span>
                        <ChevronDown size={18} className={`ml-auto text-paper/30 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-12 pb-2">
                              {serviceItems.map((service) => (
                                <Link
                                  key={service.href}
                                  to={service.href}
                                  onClick={() => setIsMenuOpen(false)}
                                  className={`block py-3 font-body text-base ${
                                    location.pathname === service.href ? 'text-accent' : 'text-paper/40'
                                  }`}
                                >
                                  {service.title}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-4 py-4 border-b border-paper/6"
                    >
                      <span className="eyebrow text-paper/30">{String(i + 1).padStart(2, '0')}</span>
                      <span className={`font-display text-2xl font-bold tracking-display ${
                        location.pathname === item.href ? 'text-paper' : 'text-paper/60'
                      }`}>
                        {item.title}
                      </span>
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto pb-8">
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center py-4 rounded-pill bg-accent text-ink font-body font-semibold text-base"
              >
                On discute ?
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
