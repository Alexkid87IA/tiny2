import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, Ticket, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const events = [
  {
    id: 1,
    title: "Sans Filtre - Clara Martin",
    type: "Stand-up",
    date: "15 Mars 2024",
    time: "20:30",
    location: "Théâtre du Rire, Paris",
    image: "https://static.eno.do/x/fs-200336-default/f5fcb736ef4f4b4854368f6aa4d32c0d/media.jpg",
    capacity: "300 places",
    price: "À partir de 25€",
    status: "Bientôt complet",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 2,
    title: "Décalé - Thomas Rey",
    type: "One Man Show",
    date: "22 Mars 2024",
    time: "21:00",
    location: "Le Point Virgule, Paris",
    image: "https://static.eno.do/x/fs-200337-default/aaab2c27a2fcd27cf2d3e994fcc88b37/media.jpg",
    capacity: "120 places",
    price: "À partir de 22€",
    status: "Disponible",
    gradient: "from-pink-500/20 to-pink-300/20"
  },
  {
    id: 3,
    title: "Perspectives - Sarah Chen",
    type: "Stand-up",
    date: "30 Mars 2024",
    time: "20:00",
    location: "La Comédie, Lyon",
    image: "https://static.eno.do/x/fs-200338-default/46312bd0996c1a72b97878f32f9d8c3c/media.jpg",
    capacity: "250 places",
    price: "À partir de 28€",
    status: "Dernières places",
    gradient: "from-pink-300/20 to-pink-500/20"
  },
  {
    id: 4,
    title: "Réalités - Lucas Dubois",
    type: "One Man Show",
    date: "5 Avril 2024",
    time: "20:30",
    location: "Théâtre de la Ville, Marseille",
    image: "https://static.eno.do/x/fs-200339-default/907c92a7b73faa18e06a213d15563cc1/media.jpg",
    capacity: "400 places",
    price: "À partir de 30€",
    status: "Disponible",
    gradient: "from-pink-400/20 to-pink-600/20"
  },
  {
    id: 5,
    title: "Festival de l'Humour",
    type: "Festival",
    date: "12-14 Avril 2024",
    time: "19:00",
    location: "L'Européen, Paris",
    image: "https://static.eno.do/x/fs-200340-default/79b52a23b5d3cd783872504614b254d7/media.jpg",
    capacity: "500 places",
    price: "À partir de 45€",
    status: "Prévente",
    gradient: "from-pink-500/20 to-purple-500/20"
  },
  {
    id: 6,
    title: "Soirée Découvertes",
    type: "Plateau d'Artistes",
    date: "20 Avril 2024",
    time: "20:00",
    location: "La Nouvelle Seine, Paris",
    image: "https://static.eno.do/x/fs-200341-default/121282c743359ed74605d439a5cc44b5/media.jpg",
    capacity: "150 places",
    price: "À partir de 20€",
    status: "Ouverture bientôt",
    gradient: "from-pink-300/20 to-pink-500/20"
  }
];

const EventCard = ({ event, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group"
  >
    <div className="relative h-full glass-card rounded-2xl overflow-hidden">
      {/* Image and Overlay */}
      <div className="relative h-48 md:h-56">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${event.gradient} mix-blend-overlay opacity-40`} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F29] via-transparent to-transparent" />
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <div className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 backdrop-blur-sm border border-white/20">
            {event.status}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-4 md:p-6">
        <div className="mb-4">
          <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-glow transition-all duration-300">
            {event.title}
          </h3>
          <p className="text-white/70 text-sm">{event.type}</p>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-white/60">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{event.date} - {event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{event.location}</span>
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <Users className="w-4 h-4" />
            <span className="text-sm">{event.capacity}</span>
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <Ticket className="w-4 h-4" />
            <span className="text-sm">{event.price}</span>
          </div>
        </div>

        <button className="w-full py-2 rounded-xl bg-gradient-to-r from-pink-400 to-pink-500 text-black font-medium hover:from-pink-300 hover:to-pink-400 transition-all duration-300 flex items-center justify-center gap-2">
          <span>Réserver</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  </motion.div>
);

const MobileSlider = ({ events, currentIndex, setCurrentIndex }) => (
  <div className="relative">
    <AnimatePresence mode="wait">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <EventCard event={events[currentIndex]} index={0} />
      </motion.div>
    </AnimatePresence>

    {/* Navigation Buttons */}
    <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2">
      <button
        onClick={() => setCurrentIndex((prev) => (prev - 1 + events.length) % events.length)}
        className="p-2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-colors"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>
      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % events.length)}
        className="p-2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-colors"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>
    </div>

    {/* Pagination Dots */}
    <div className="flex justify-center gap-2 mt-6">
      {events.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentIndex(index)}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            index === currentIndex
              ? 'bg-white w-6'
              : 'bg-white/30 hover:bg-white/50'
          }`}
        />
      ))}
    </div>
  </div>
);

const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-white/20 rounded-full"
        initial={{
          x: Math.random() * 100 + "%",
          y: Math.random() * 100 + "%",
          scale: 0,
          opacity: 0
        }}
        animate={{
          y: [null, `${Math.random() * 30 - 15}%`],
          x: [null, `${Math.random() * 30 - 15}%`],
          scale: [0, 1, 0],
          opacity: [0, 0.8, 0]
        }}
        transition={{
          duration: Math.random() * 5 + 3,
          repeat: Infinity,
          repeatDelay: Math.random() * 2
        }}
      />
    ))}
  </div>
);

export const EventsPage = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  return (
    <main className="min-h-screen bg-[#0A0F29]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center py-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.15),transparent_70%)]" />
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.1),transparent_50%)]"
          />
          <FloatingParticles />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative px-2 md:px-0"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute -inset-x-4 -inset-y-8 md:-inset-y-16 bg-gradient-to-r from-pink-500/10 via-pink-500/5 to-pink-500/10 rounded-[40px] blur-3xl"
              />
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9] md:leading-[0.9]">
                  <span className="inline-block bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent">
                    Les prochains
                  </span>
                  <br />
                  <span className="inline-block bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 bg-clip-text text-transparent">
                    spectacles
                  </span>
                </h1>
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mt-8"
            >
              Découvrez notre programmation et réservez vos places pour les prochains spectacles.
              Des moments uniques à partager avec nos artistes.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="relative py-32">
        <div className="container mx-auto px-4">
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {events.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="md:hidden">
            <MobileSlider
              events={events}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};