import { motion } from 'framer-motion';

const successStories = [
  {
    brand: "TechCorp",
    title: "Convention Annuelle",
    description: "Une soirée mémorable mêlant humour et innovation pour 500 collaborateurs.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2070",
    stats: ["500 participants", "95% satisfaction", "3M vues en ligne"],
    gradient: "from-pink-500/20 to-purple-500/20"
  },
  {
    brand: "EcoVert",
    title: "Campagne Digitale",
    description: "Une série de contenus engageants sur le développement durable avec nos artistes.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2070",
    stats: ["2.5M impressions", "+40% engagement", "15 vidéos"],
    gradient: "from-purple-500/20 to-blue-500/20"
  },
  {
    brand: "BanqueNext",
    title: "Tournée Régionale",
    description: "10 événements clients alliant finance et divertissement dans toute la France.",
    image: "https://images.unsplash.com/photo-1559523182-a284c3fb7cff?auto=format&fit=crop&q=80&w=2070",
    stats: ["10 villes", "2000+ clients", "98% recommandation"],
    gradient: "from-blue-500/20 to-pink-500/20"
  }
];

const SuccessStoryCard = ({ story, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group"
  >
    <div className="relative glass-card rounded-2xl overflow-hidden">
      <div className="relative h-48">
        <img
          src={story.image}
          alt={story.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${story.gradient} mix-blend-overlay opacity-40`} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F29] via-transparent to-transparent" />
      </div>

      <div className="relative p-6">
        <div className="mb-4">
          <div className="text-sm text-white/70 mb-1">{story.brand}</div>
          <h3 className="text-xl font-bold text-white group-hover:text-glow transition-all duration-300">
            {story.title}
          </h3>
        </div>

        <p className="text-white/70 mb-6">{story.description}</p>

        <div className="flex flex-wrap gap-2">
          {story.stats.map((stat, i) => (
            <div
              key={i}
              className="px-3 py-1 rounded-full text-xs bg-white/5 text-white/60 border border-white/10"
            >
              {stat}
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

export const SuccessStoriesSection = () => {
  return (
    <section className="relative py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            <span className="block text-gradient from-white via-blue-100 to-white">
              Ils nous font
            </span>
            <span className="block text-gradient from-pink-300 via-pink-200 to-pink-300 mt-2">
              confiance
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {successStories.map((story, index) => (
            <SuccessStoryCard key={story.brand} story={story} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};