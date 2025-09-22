"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Cpu, Target } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { useState, useEffect } from "react";

// Generate random particles
const generateParticles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2, // 2px to 6px
    x: Math.random() * 100, // percent
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 8 + 5,
    opacity: Math.random() * 0.4 + 0.2,
  }));
};

const funFacts = [
  "💡 I debug faster with coffee ☕",
  "🎵 I love coding while listening to Lo-fi beats",
  "📚 Currently exploring Reinforcement Learning",
  "🌱 Believe in lifelong learning & growth",
];

const skills = [
  { name: "React & Next.js", level: 90 },
  { name: "Django & Python", level: 85 },
  { name: "AI/ML (TensorFlow, NLP)", level: 80 },
];

const AboutSection = () => {
  const [factIndex, setFactIndex] = useState(0);
  const particles = generateParticles(40); // 40 subtle particles

  useEffect(() => {
    const interval = setInterval(() => {
      setFactIndex((prev) => (prev + 1) % funFacts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-black via-gray-950 to-indigo-950"
    >
      {/* Particle Glow Background */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-indigo-600/10"
          style={{
            width: p.size,
            height: p.size,
            top: `${p.y}%`,
            left: `${p.x}%`,
          }}
          animate={{ y: [`${p.y}%`, `${p.y + 2}%`, `${p.y}%`] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}

      {/* Central Glow */}
      <div className="absolute inset-0 -z-10 bg-indigo-950/10 blur-3xl animate-pulse" />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white relative inline-block">
            About Me
            <span className="absolute left-1/2 -bottom-2 w-16 h-1 bg-indigo-600 rounded-full transform -translate-x-1/2 shadow-[0_0_12px_rgba(79,70,229,0.7)]" />
          </h2>
          <p className="text-lg text-indigo-400 max-w-2xl mx-auto">
            Passionate about creating innovative solutions that bridge technology and user experience ✨
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo & Fun Fact */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center gap-6"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Glowing aura */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-950 rounded-full opacity-30 blur-3xl animate-pulse" />
              <motion.img
                src={profilePhoto}
                alt="Sayantan Mukherjee - Full Stack Developer"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-indigo-600 shadow-[0_0_25px_rgba(79,70,229,0.4)]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            {/* Fun Fact Rotator */}
            <motion.p
              key={factIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="italic text-indigo-400 text-lg text-center"
            >
              {funFacts[factIndex]}
            </motion.p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* My Story */}
            <motion.div
              whileHover={{ scale: 1.02, rotate: -1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="glass-card bg-indigo-950/40 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all duration-300 backdrop-blur-md border border-indigo-700/25">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-indigo-400 flex items-center gap-2">
                    <Code className="h-6 w-6" /> My Story
                  </h3>
                  <p className="text-indigo-300 text-lg leading-relaxed">
                    I’m currently pursuing my degree at <strong>Asansol Engineering College</strong>,
                    with a deep passion for full-stack development and machine learning.
                    My academic foundation comes from <strong>St. Patrick's Higher Secondary School</strong>
                    and <strong>St. Vincent's High and Technical School</strong>, both prestigious institutions
                    in eastern India.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* What I Do + Skill Bars */}
            <motion.div
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="glass-card bg-indigo-950/40 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all duration-300 backdrop-blur-md border border-indigo-700/25">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-indigo-400 flex items-center gap-2">
                    <Cpu className="h-6 w-6" /> What I Do
                  </h3>
                  <ul className="list-disc list-inside text-indigo-300 text-lg space-y-2 mb-6">
                    <li>Build full-stack apps with <strong>React, Django & Python</strong></li>
                    <li>Develop AI/ML projects in <strong>healthcare & agriculture</strong></li>
                    <li>Create user-friendly and scalable digital solutions</li>
                  </ul>

                  {/* Skill Bars */}
                  <div className="space-y-4">
                    {skills.map((skill, i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-1 text-sm font-medium text-indigo-400">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: i * 0.2 }}
                          viewport={{ once: true }}
                          className="h-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-800 shadow-md"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* My Mission */}
            <motion.div
              whileHover={{ scale: 1.02, rotate: -1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="glass-card bg-indigo-950/40 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all duration-300 backdrop-blur-md border border-indigo-700/25">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-indigo-400 flex items-center gap-2">
                    <Target className="h-6 w-6" /> My Mission
                  </h3>
                  <p className="text-indigo-300 text-lg leading-relaxed">
                    My mission is to <strong>leverage technology and machine learning</strong> to
                    deliver impactful solutions that improve lives. I believe in continuous learning,
                    clean code practices, and building applications that are both robust and
                    user-centric.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
