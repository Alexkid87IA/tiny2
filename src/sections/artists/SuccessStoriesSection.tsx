import { motion } from 'framer-motion';

const successStories = [
  {
    name: "Clara Martin",
    title: "Sans Filtre",
    description: "Un spectacle qui cartonne avec plus de 100 dates et une nomination aux Molières 2023.",
    image: "https://static.eno.do/x/fs-200336-default/f5fcb736ef4f4b4854368f6aa4d32c0d/media.jpg",
    stats: ["100+ dates", "95% complet", "3M vues"],
    gradient: "from-pink-500/20 to-purple-500/20"
  },
  {
    name: "Thomas Rey",
    title: "Décalé",
    description: "Une tournée nationale qui affiche complet et un succès viral sur les réseaux sociaux.",
    image: "https://static.eno.do/x/fs-200337-default/aaab2c27a2fcd27cf2d3e994fcc88b37/media.jpg",
    stats: ["50 villes", "2.5M vues", "15 festivals"],
    gradient: "from-purple-500/20 to-blue-500/20"
  },
  {
    name: "Sarah Chen",
    title: "Perspectives",
    description: "Un premier spectacle qui révolutionne les codes du stand-up et séduit la critique.",
    image: "https://static.eno.do/x/fs-200338-default/46312bd0996c1a72b97878f32f9d8c3c/media.jpg",
    stats: ["Prix révélation", "Presse unanime", "Netflix 2024"],
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
          alt={story.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${story.gradient} mix-blend-overlay opacity-40`} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F29] via-transparent to-transparent" />
      </div>

      <div className="relative p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-glow transition-all duration-300">
            {story.name}
          </h3>
          <p className="text-white/70 mb-1">{story.title}</p>
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
    <section className="relative py-32 bg-[#080C20]">
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
            <SuccessStoryCard key={story.name} story={story} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};