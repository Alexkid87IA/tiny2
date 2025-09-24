import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Menu, X, ChevronDown, Sparkles, Star } from 'lucide-react';

const menuItems = [
  { title: 'La Team', href: '/equipe' },
  { title: 'Artistes', href: '/artistes' },
  { 
    title: 'Services', 
    href: '/services',
    hasDropdown: true,
    dropdownItems: [
      { title: 'Production de Spectacles', href: '/services/production', icon: '🎭' },
      { title: 'Management d\'Artistes', href: '/services/management', icon: '⭐' },
      { title: 'Développement Digital', href: '/services/digital', icon: '🚀' },
      { title: 'Communication & Image', href: '/services/communication', icon: '📸' },
      { title: 'Diffusion & Tournées', href: '/services/diffusion', icon: '🌍' },
      { title: 'Événements Spéciaux', href: '/services/evenements', icon: '✨' },
    ]
  },
  { 
    title: 'Espace Pro', 
    href: '#',
    hasDropdown: true,
    dropdownItems: [
      { title: 'Programmateurs', href: '/#programmateurs', icon: '🎪' },
      { title: 'Marques & Entreprises', href: '/marque', icon: '🏢' },
    ]
  },
];

const Logo = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="relative group"
  >
    {/* Glow effect behind logo */}
    <motion.div
      className="absolute -inset-6 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"
      animate={{
        background: [
          "radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)",
          "radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)",
          "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)",
          "radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)"
        ]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    
    {/* Floating particles around logo */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-pink-400/60 rounded-full"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>

    <motion.div
      className="relative"
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <img 
        src="https://res.cloudinary.com/diqco2njt/image/upload/v1746189362/Logo_TT_blanc_th9klb.png" 
        alt="Tiny Team"
        className="h-20 md:h-24 lg:h-28 w-auto filter drop-shadow-lg"
      />
    </motion.div>
  </motion.div>
);

const DropdownMenu = ({ items, isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <>
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={onClose}
        />
        
        {/* Dropdown */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute top-full left-0 mt-3 w-80 bg-[#0A0F29]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden"
        >
          {/* Gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-50" />
          
          <div className="relative p-3">
            {items.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={item.href}
                  onClick={onClose}
                  className="group flex items-center gap-4 px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icon */}
                  <span className="text-2xl relative z-10">{item.icon}</span>
                  
                  {/* Text */}
                  <div className="relative z-10">
                    <div className="font-medium">{item.title}</div>
                  </div>
                  
                  {/* Arrow */}
                  <motion.div
                    className="ml-auto opacity-0 group-hover:opacity-100 relative z-10"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <div className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

const NavItem = ({ item, isActive }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (item.hasDropdown) {
    return (
      <div 
        className="relative"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <motion.button
          className={`relative flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 group ${
            isActive
              ? 'text-white bg-white/10 shadow-lg'
              : 'text-white/70 hover:text-white hover:bg-white/5'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Background glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
          
          <span className="font-medium relative z-10">{item.title}</span>
          <motion.div
            animate={{ rotate: isDropdownOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative z-10"
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
          
          {/* Active indicator */}
          {isActive && (
            <motion.div
              layoutId="nav-indicator"
              className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-pink-500 via-pink-300 to-pink-500 rounded-full"
              transition={{ duration: 0.3 }}
            />
          )}
        </motion.button>
        
        <DropdownMenu 
          items={item.dropdownItems} 
          isOpen={isDropdownOpen}
          onClose={() => setIsDropdownOpen(false)}
        />
      </div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        to={item.href}
        className={`relative group flex items-center px-6 py-3 rounded-xl transition-all duration-300 ${
          isActive
            ? 'text-white bg-white/10 shadow-lg'
            : 'text-white/70 hover:text-white hover:bg-white/5'
        }`}
      >
        {/* Background glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
        
        <span className="font-medium relative z-10">{item.title}</span>
        
        {/* Active indicator */}
        {isActive && (
          <motion.div
            layoutId="nav-indicator"
            className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-pink-500 via-pink-300 to-pink-500 rounded-full"
            transition={{ duration: 0.3 }}
          />
        )}
      </Link>
    </motion.div>
  );
};

const CTAButton = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="relative group"
  >
    {/* Animated background */}
    <motion.div
      className="absolute inset-0 rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"
      animate={{
        background: [
          "linear-gradient(45deg, #ec4899, #8b5cf6, #3b82f6, #10b981, #f59e0b, #ec4899)",
          "linear-gradient(225deg, #ec4899, #8b5cf6, #3b82f6, #10b981, #f59e0b, #ec4899)",
          "linear-gradient(45deg, #ec4899, #8b5cf6, #3b82f6, #10b981, #f59e0b, #ec4899)"
        ]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }}
    />
    
    <motion.a
      href="/contact"
      className="relative flex items-center gap-3 px-6 py-3 rounded-2xl font-bold text-black transition-all duration-300 group-hover:scale-105"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageSquare className="w-5 h-5 text-black" />
      <span className="font-bold text-black">
        Discutons !
      </span>
    </motion.a>
  </motion.div>
);

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Background blur effect
          setIsScrolled(currentScrollY > 20);
          
          // Navbar visibility logic
          if (currentScrollY <= 50) {
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setIsVisible(false);
          } else if (currentScrollY < lastScrollY) {
            setIsVisible(true);
          }
          
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ 
          y: isVisible ? 0 : -100,
          transition: { duration: 0.4, ease: "easeInOut" }
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-3' : 'py-4'
        }`}
        style={{
          backgroundColor: isScrolled ? 'rgba(10, 15, 41, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        }}
      >
        {/* Animated border */}
        {isScrolled && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"
          />
        )}

        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="relative group flex-shrink-0 z-50">
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {menuItems.map((item) => (
                <NavItem
                  key={item.href}
                  item={item}
                  isActive={location.pathname === item.href}
                />
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <CTAButton />
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative w-12 h-12 rounded-xl glass-effect flex items-center justify-center z-50 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10"
                  >
                    <X className="w-6 h-6 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10"
                  >
                    <Menu className="w-6 h-6 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
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
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-40"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            
            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-0 right-0 h-full w-80 max-w-[90vw] bg-[#0A0F29]/95 backdrop-blur-2xl border-l border-white/10"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-blue-500/10" />
              
              <div className="relative h-full flex flex-col">
                {/* Header */}
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <Star className="w-6 h-6 text-pink-400" />
                    <span className="text-xl font-bold text-white">Menu</span>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="flex-1 p-6 space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.hasDropdown ? (
                        <div className="space-y-2">
                          <div className="text-lg font-medium text-white/90 px-4 py-3 flex items-center gap-3">
                            <span className="text-2xl">✨</span>
                            {item.title}
                          </div>
                          <div className="pl-4 space-y-1">
                            {item.dropdownItems.map((subItem) => (
                              <Link
                                key={subItem.href}
                                to={subItem.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="group flex items-center gap-3 px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
                              >
                                <span className="text-lg">{subItem.icon}</span>
                                <span>{subItem.title}</span>
                                <motion.div
                                  className="ml-auto opacity-0 group-hover:opacity-100"
                                  animate={{ x: [0, 4, 0] }}
                                  transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
                                </motion.div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`group flex items-center gap-3 px-4 py-3 rounded-xl text-lg transition-all duration-200 ${
                            location.pathname === item.href
                              ? 'text-white bg-white/10'
                              : 'text-white/70 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          <span className="text-2xl">🎭</span>
                          <span>{item.title}</span>
                          <motion.div
                            className="ml-auto opacity-0 group-hover:opacity-100"
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <div className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
                          </motion.div>
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>
                
                {/* Mobile CTA */}
                <div className="p-6 border-t border-white/10">
                  <motion.a
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="relative group flex items-center justify-center gap-3 w-full py-4 rounded-2xl overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Animated background */}
                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        background: [
                          "linear-gradient(45deg, #ec4899, #8b5cf6, #3b82f6, #10b981, #f59e0b, #ec4899)",
                          "linear-gradient(225deg, #ec4899, #8b5cf6, #3b82f6, #10b981, #f59e0b, #ec4899)",
                          "linear-gradient(45deg, #ec4899, #8b5cf6, #3b82f6, #10b981, #f59e0b, #ec4899)"
                        ]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    <MessageSquare className="w-5 h-5 text-black relative z-10" />
                    <span className="font-bold text-black relative z-10">Discutons !</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};