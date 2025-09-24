import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Building2, Calendar, MessageSquare, Users } from 'lucide-react';

const menuItems = [
  { 
    title: 'Artistes', 
    href: '/#artistes',
    isAnchor: true,
    icon: <Users className="w-4 h-4" />
  },
  { 
    title: 'Services', 
    href: '/services',
    hasDropdown: true,
    dropdownItems: [
      { title: 'Production de Spectacles', href: '/services/production', icon: '🎭' },
      { title: 'Management d\'Artistes', href: '/services/management', icon: '⭐' },
      { title: 'Développement Digital', href: '/services/digital', icon: '🚀' },
      { title: 'Communication & Image', href: '/services/communication', icon: '📸' },
      { title: 'Diffusion & Tournées', href: '/services/diffusion', icon: '🌐' },
      { title: 'Événements Spéciaux', href: '/services/evenements', icon: '✨' },
    ]
  },
  { title: 'La Team', href: '/equipe' },
  { 
    title: 'Programmateurs', 
    href: '/#programmateurs',
    isAnchor: true,
    icon: <Calendar className="w-4 h-4" />
  },
  { 
    title: 'Entreprises', 
    href: '/#entreprises',
    isAnchor: true,
    icon: <Building2 className="w-4 h-4" />
  },
];

const DropdownMenu = ({ items, isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40"
          onClick={onClose}
        />
        
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.15 }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-[#0A0F29] backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl shadow-black/50 z-50"
        >
          <div className="p-2">
            {items.map((item, index) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-purple-500/20 transition-all duration-200"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.title}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      
      if (currentScrollY <= 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleAnchorClick = (e, href) => {
    e.preventDefault();
    e.stopPropagation();
    
    console.log('Anchor clicked:', href); // Debug log
    
    const anchor = href.split('#')[1];
    console.log('Looking for element:', anchor); // Debug log
    
    if (location.pathname !== '/') {
      console.log('Navigating to home first'); // Debug log
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(anchor);
        console.log('Element found after navigation:', element); // Debug log
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500); // Augmenté à 500ms
    } else {
      const element = document.getElementById(anchor);
      console.log('Element found:', element); // Debug log
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        console.error('Element not found with ID:', anchor); // Debug log
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: isScrolled ? 'rgba(10, 15, 41, 0.98)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
        }}
      >
        <div className="container mx-auto px-6">
          {/* Desktop Navigation */}
          <div className="hidden lg:grid grid-cols-3 items-center h-20">
            {/* Logo - Left aligned */}
            <div className="flex justify-start">
              <Link to="/" className="inline-flex">
                <motion.img 
                  src="https://res.cloudinary.com/diqco2njt/image/upload/v1746189362/Logo_TT_blanc_th9klb.png" 
                  alt="Tiny Team"
                  className="h-12 w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                />
              </Link>
            </div>

            {/* Menu Items - Center aligned */}
            <nav className="flex items-center justify-center gap-1 xl:gap-2">
              {menuItems.map((item) => {
                if (item.hasDropdown) {
                  return (
                    <div 
                      key={item.href}
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(item.title)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        className={`flex items-center gap-1 px-2 xl:px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-all whitespace-nowrap ${
                          location.pathname === item.href ? 'bg-white/10 text-white' : ''
                        }`}
                      >
                        <span className="font-medium text-sm">{item.title}</span>
                        <ChevronDown className="w-3.5 h-3.5" />
                      </button>
                      <DropdownMenu 
                        items={item.dropdownItems} 
                        isOpen={openDropdown === item.title}
                        onClose={() => setOpenDropdown(null)}
                      />
                    </div>
                  );
                }

                if (item.isAnchor) {
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleAnchorClick(e, item.href)}
                      className={`flex items-center gap-1.5 px-2 xl:px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-all whitespace-nowrap cursor-pointer ${
                        location.pathname + location.hash === item.href ? 'bg-white/10 text-white' : ''
                      }`}
                      style={{ pointerEvents: 'auto', position: 'relative', zIndex: 10 }}
                    >
                      {item.icon}
                      <span className="font-medium text-sm">{item.title}</span>
                    </a>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`px-2 xl:px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-all whitespace-nowrap ${
                      location.pathname === item.href ? 'bg-white/10 text-white' : ''
                    }`}
                  >
                    <span className="font-medium text-sm">{item.title}</span>
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button - Right aligned */}
            <div className="flex justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold text-sm rounded-lg shadow-lg shadow-pink-500/20 hover:shadow-xl hover:shadow-pink-500/30 transform hover:scale-105 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Discutons</span>
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center justify-between h-16">
            <Link to="/">
              <img 
                src="https://res.cloudinary.com/diqco2njt/image/upload/v1746189362/Logo_TT_blanc_th9klb.png" 
                alt="Tiny Team"
                className="h-10 w-auto"
              />
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-40"
          >
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-72 bg-[#0A0F29]/98 backdrop-blur-xl border-l border-white/10"
            >
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-white">Menu</span>
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center"
                    >
                      <X className="w-4 h-4 text-white/60" />
                    </button>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-2">
                  {menuItems.map((item) => {
                    if (item.hasDropdown) {
                      return (
                        <div key={item.href}>
                          <div className="text-xs font-semibold text-white/50 px-4 py-2 uppercase tracking-wider">
                            {item.title}
                          </div>
                          {item.dropdownItems.map((subItem) => (
                            <Link
                              key={subItem.href}
                              to={subItem.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="flex items-center gap-3 px-4 py-2.5 text-white/80 hover:text-white hover:bg-white/5 rounded-lg"
                            >
                              <span className="text-lg">{subItem.icon}</span>
                              <span className="text-sm">{subItem.title}</span>
                            </Link>
                          ))}
                        </div>
                      );
                    }

                    if (item.isAnchor) {
                      return (
                        <a
                          key={item.href}
                          href={item.href}
                          onClick={(e) => {
                            handleAnchorClick(e, item.href);
                            setIsMenuOpen(false);
                          }}
                          className="flex items-center gap-2 px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg"
                        >
                          {item.icon}
                          <span className="font-medium">{item.title}</span>
                        </a>
                      );
                    }

                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg"
                      >
                        <span className="font-medium">{item.title}</span>
                      </Link>
                    );
                  })}
                </div>

                <div className="p-4 border-t border-white/10">
                  <Link
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Discutons</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};