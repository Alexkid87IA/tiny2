import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const posters = [
  'https://static.eno.do/x/fs-200359-default/9fb343deaad6dbe750cd731b4c0564b8/media.jpg',
  'https://static.eno.do/x/fs-200360-default/a0c4d924ae52585a517dd76531300e5b/media.jpg',
  'https://static.eno.do/x/fs-200361-default/ce4d47f8d131e7971b4f3fc0de45b470/media.jpg',
  'https://static.eno.do/x/fs-200362-default/0743597244e1da871493bfbf5d13b7f7/media.jpg',
  'https://static.eno.do/x/fs-200363-default/d71c4d77228d3718029f4f81a43190b6/media.jpg',
  'https://static.eno.do/x/fs-200364-default/2cf3c8b262adfc3c6e72e95639c39cf8/media.jpg',
  'https://static.eno.do/x/fs-200365-default/cda1d9f46d486a0ba2357daa5a79f6bd/media.jpg',
  'https://static.eno.do/x/fs-200366-default/cdc3aba992ae1735c4a9b7a3fd8befc4/media.jpg',
  'https://26.staticbtf.eno.do/v1/29-default/caa1da7f867fc1ad334621eba4d80b76/media.jpg',
  'https://26.staticbtf.eno.do/v1/30-default/975e3fdd1700df5c9bd53662949e3fda/media.jpg'
];

const FloatingStars = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute"
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          scale: Math.random() * 0.5 + 0.5,
          opacity: Math.random() * 0.3 + 0.1
        }}
        animate={{
          y: [null, '-100%'],
          opacity: [null, 0]
        }}
        transition={{
          duration: Math.random() * 10 + 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        <div className="w-1 h-1 bg-white/20 rounded-full" />
      </motion.div>
    ))}
  </div>
);

export const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const { scrollY } = useScroll();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % posters.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8
    })
  };

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#0A0F29]"
    >
      {/* Premium background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-blue-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(44,62,153,0.1),transparent_70%)]" />
        <FloatingStars />
        <div className="absolute inset-0 backdrop-blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4">
        <motion.div 
          className="pt-20 md:pt-28"
          style={{ opacity }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative mb-4 md:mb-8 text-center"
          >
            <div className="relative px-4 md:px-0">
              <motion.div
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute -inset-x-8 -inset-y-16 md:-inset-y-24 bg-gradient-to-r from-pink-500/10 via-pink-500/5 to-pink-500/10 rounded-[40px] blur-3xl"
              />
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight px-2">
                  <span className="block md:inline bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent leading-[1.1] mb-1 md:mb-0">
                    Tiny Team,
                  </span>
                  {' '}
                  <span className="block md:inline bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 bg-clip-text text-transparent leading-[1.1]">
                    Big Dreams
                  </span>
                </h1>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Posters */}
      <motion.div 
        className="relative flex-grow flex items-center justify-center mt-8 md:-mt-16"
        style={{ opacity }}
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 200, damping: 30 },
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 }
            }}
            className="absolute inset-0 w-full h-full"
          >
            <div className="relative w-full h-full flex justify-center items-center">
              <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-8 px-4 md:px-4">
                {[-2, -1, 0, 1, 2].map((offset) => {
                  const index = (currentIndex + offset + posters.length) % posters.length;
                  const isMobile = window.innerWidth < 640;
                  const visibleOnMobile = offset >= -1 && offset <= 1;
                  
                  if (isMobile && !visibleOnMobile) return null;
                  
                  return (
                    <motion.div
                      key={index}
                      className="relative flex-shrink-0"
                      style={{
                        width: isMobile ? '200px' : '240px',
                        height: isMobile ? '300px' : '360px',
                        perspective: 1000
                      }}
                      initial={false}
                      animate={{
                        scale: offset === 0 ? 1 : 0.8,
                        opacity: offset === 0 ? 1 : 0.5,
                        y: offset === 0 ? 0 : Math.abs(offset) * 20,
                        rotateY: offset * 15,
                        filter: offset === 0 ? 'brightness(1)' : 'brightness(0.7)',
                        z: offset === 0 ? 0 : -100
                      }}
                      transition={{ 
                        duration: 1,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.1 * Math.abs(offset)
                      }}
                    >
                      <motion.div
                        className="relative w-full h-full group"
                        whileHover={{ 
                          scale: 1.05,
                          rotateY: 0,
                          z: 50,
                          transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-xl" />
                        <motion.img
                          src={posters[index]}
                          alt={`Poster ${index + 1}`}
                          className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.3)] transition-all duration-700"
                          initial={{ scale: 1.2 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        />
                        <div className="absolute inset-0 rounded-xl ring-1 ring-white/10 group-hover:ring-white/30 transition-all duration-500" />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Hover Effect */}
                        <motion.div
                          className="absolute inset-0 bg-black/40 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                          initial={false}
                          whileHover={{ opacity: 1 }}
                        >
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                              initial={{ scale: 0.8, opacity: 0 }}
                              whileHover={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                              className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                            >
                              <ArrowRight className="w-6 h-6 text-white" />
                            </motion.div>
                          </div>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="absolute -bottom-4 md:-bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {posters.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                index === currentIndex
                  ? 'bg-white w-6'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* Call to Action - Desktop */}
      <div className="relative z-20 hidden sm:flex flex-row items-center justify-center gap-4 pb-16 mt-8 md:mt-12">
        <motion.a
          href="#artists"
          className="group relative inline-flex items-center justify-center gap-2 px-8 md:px-10 py-4 md:py-5"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 rounded-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-300/50 via-transparent to-pink-300/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative font-semibold text-black text-lg">En savoir plus</span>
          <motion.div
            className="relative"
            initial={false}
            animate={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight className="w-6 h-6 text-black" />
          </motion.div>
        </motion.a>

        <Link
          to="/artistes"
          className="group relative inline-flex items-center justify-center gap-2 px-8 md:px-10 py-4 md:py-5"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 glass-effect rounded-full border border-white/10 group-hover:border-white/20 transition-colors duration-500" />
          <div className="absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative font-medium text-white text-lg group-hover:text-glow transition-all duration-300">Découvrir nos artistes</span>
        </Link>
      </div>

      {/* Call to Action - Mobile */}
      <div className="relative z-20 sm:hidden flex flex-col items-center justify-center gap-3 px-4 pb-8 mt-8">
        <motion.a
          href="#artists"
          className="group relative w-full inline-flex items-center justify-center gap-2 px-6 py-4"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 rounded-xl" />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-300/50 via-transparent to-pink-300/50 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative font-semibold text-black">En savoir plus</span>
          <motion.div
            className="relative"
            initial={false}
            animate={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight className="w-5 h-5 text-black" />
          </motion.div>
        </motion.a>

        <Link
          to="/artistes"
          className="group relative w-full inline-flex items-center justify-center gap-2 px-6 py-4"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 glass-effect rounded-xl border border-white/10 group-hover:border-white/20 transition-colors duration-500" />
          <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative font-medium text-white group-hover:text-glow transition-all duration-300">Découvrir nos artistes</span>
        </Link>
      </div>
    </section>
  );
};