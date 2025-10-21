import React from 'react';
import { motion } from 'framer-motion';

const history = {
  title: "Notre Histoire",
  description: "Depuis notre création en 2014, nous avons évolué d'une équipe de prestations de services pour devenir en 2020 une boîte de production à part entière.",
  milestones: [
    {
      year: "2014",
      title: "Création",
      description: "Naissance de la Tiny Team avec des contrats de prestations de services pour accompagner producteurs et promoteurs du spectacle vivant."
    },
    {
      year: "2015-2019",
      title: "Développement",
      description: "Croissance progressive et développement de notre expertise dans l'accompagnement d'artistes."
    },
    {
      year: "2020",
      title: "Évolution majeure",
      description: "Transformation en boîte de production à part entière. Une nouvelle dimension pour accompagner nos artistes."
    },
    {
      year: "2021-2024",
      title: "Expansion",
      description: "Élargissement de notre équipe et de notre catalogue d'artistes tout en développant une approche unique dans la production de spectacles."
    },
    {
      year: "2025",
      title: "Aujourd'hui",
      description: "Une famille de passionnés au service de vos projets artistiques et une excellence reconnue."
    }
  ]
};

export const TeamHistorySection = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="block text-gradient from-white via-blue-100 to-white text-3xl sm:text-4xl md:text-5xl">
              {history.title}
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {history.description}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {history.milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-pink-500/50 to-transparent" />
              <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-pink-500" />
              
              <div className="glass-card rounded-xl p-6">
                <div className="text-pink-400 font-bold mb-2">{milestone.year}</div>
                <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                <p className="text-white/70">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};