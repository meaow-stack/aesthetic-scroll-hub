"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code2,
  Database,
  Brain,
  Palette,
  Server,
  Globe,
  GitBranch,
  Star,
} from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Programming Languages",
    description: "Python, C, JavaScript",
    color: "text-blue-400",
  },
  {
    icon: Server,
    title: "Web Development",
    description: "Django, React.js, Node.js, Next.js, REST APIs",
    color: "text-green-400",
  },
  {
    icon: Database,
    title: "Database & Tools",
    description: "SQL, SQLite, Git, GitHub",
    color: "text-purple-400",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "NLP, TensorFlow, HuggingFace BERT, Scikit-Learn",
    color: "text-pink-400",
  },
  {
    icon: Palette,
    title: "Frontend Styling",
    description: "Bootstrap, Tailwind CSS, Responsive Design",
    color: "text-orange-400",
  },
  {
    icon: Globe,
    title: "Core Concepts",
    description: "OOP, Data Structures & Algorithms, Computer Networks",
    color: "text-cyan-400",
  },
  {
    icon: Server,
    title: "AI Specialization",
    description: "Reinforcement Learning, Model Training & Tuning",
    color: "text-red-400",
  },
  {
    icon: GitBranch,
    title: "Development Tools",
    description: "Streamlit, Pandas, Matplotlib, EDA",
    color: "text-yellow-400",
  },
];

const SkillsSection = () => {
  const [levels, setLevels] = useState(
    skills.reduce((acc, skill) => ({ ...acc, [skill.title]: 1 }), {})
  );

  // Auto level-up on scroll
  useEffect(() => {
    const handleScroll = () => {
      setLevels((prev) =>
        Object.fromEntries(
          Object.entries(prev).map(([title, lvl]) => [
            title,
            Math.min(lvl + 0.01, 5), // XP slowly increases while scrolling
          ])
        )
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Manual click level-up
  const levelUp = (title: string) => {
    setLevels((prev) => ({
      ...prev,
      [title]: Math.min(prev[title] + 1, 5),
    }));
  };

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-card relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Unlock skills as you scroll ⚡ or{" "}
            <span className="font-semibold">tap to level up</span> 🎮
          </p>
        </motion.div>

        {/* Pinterest-style columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className="break-inside-avoid"
            >
              <Card
                className={`glass-card group cursor-pointer relative overflow-hidden ${
                  index % 2 === 0 ? "h-[280px]" : "h-[360px]"
                }`}
                onClick={() => levelUp(skill.title)}
              >
                <CardContent className="p-6 flex flex-col justify-between h-full text-center">
                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.6 },
                    }}
                    className="mx-auto w-16 h-16 flex items-center justify-center"
                  >
                    <skill.icon
                      className={`h-12 w-12 ${skill.color} group-hover:drop-shadow-lg transition-all duration-300`}
                    />
                  </motion.div>

                  {/* Title + Description */}
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {skill.title}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-sm mt-2">
                      {skill.description}
                    </p>
                  </div>

                  {/* Gamified Progress */}
                  <div className="mt-4">
                    <div className="flex justify-center mb-2 space-x-1">
                      {Array.from({
                        length: Math.round(levels[skill.title]),
                      }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-yellow-400 animate-pulse"
                        />
                      ))}
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-secondary"
                        initial={{ width: "0%" }}
                        animate={{
                          width: `${(levels[skill.title] / 5) * 100}%`,
                        }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                    <p className="text-sm mt-1 text-muted-foreground">
                      Level {Math.round(levels[skill.title])} / 5
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 blur-3xl -z-10"></div>
    </section>
  );
};

export default SkillsSection;
