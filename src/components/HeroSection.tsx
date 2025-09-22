"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail, ChevronDown, Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import { useEffect, useState } from "react";

const quotes = [
  "“Code is like humor. When you have to explain it, it’s bad.” – Cory House",
  "“The best way to predict the future is to invent it.” – Alan Kay",
  "“First, solve the problem. Then, write the code.” – John Johnson",
];

const roles = [
  "Full Stack Web Developer",
  "AI/ML Enthusiast",
  "ECE Student",
];

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        console.warn(`Element with ID "${sectionId}" not found. Ensure the target section has id="${sectionId}".`);
      }
    }, 100);
  };

  const [currentQuote, setCurrentQuote] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const [currentRole, setCurrentRole] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-gray-950/70 to-indigo-950/80" />
      <div className="absolute inset-0 z-20 bg-indigo-950/10 blur-3xl animate-pulse" />

      <div className="relative z-30 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Sayantan Mukherjee
          </motion.h1>

          <motion.div
            className="flex items-center justify-center gap-2 text-lg md:text-xl text-indigo-300 mb-6 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Sparkles className="h-5 w-5 text-indigo-500 animate-pulse" />
            <span>Turning ideas into code & code into impact 🚀</span>
          </motion.div>

          <motion.p
            key={roles[currentRole]}
            className="text-xl md:text-2xl text-indigo-200 mb-6 font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {roles[currentRole]}
          </motion.p>

          <motion.p
            key={quotes[currentQuote]}
            className="italic text-lg md:text-xl text-indigo-400 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {quotes[currentQuote]}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="px-8 py-6 text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-800 hover:scale-105 hover:shadow-[0_0_15px_rgba(79,70,229,0.5)] transition-all duration-300 group rounded-2xl"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                View Resume
              </Button>
            </a>

            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg font-semibold border-indigo-600 text-indigo-400 hover:bg-indigo-600 hover:text-white hover:scale-105 transition-all duration-300 rounded-2xl"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="h-10 w-10 border-2 border-indigo-500 rounded-full flex items-center justify-center animate-pulse mb-2">
          <ChevronDown className="h-5 w-5 text-indigo-500 animate-bounce" />
        </div>
        <button
          onClick={() => scrollToSection("about")}
          className="text-sm text-indigo-400 hover:text-indigo-200 transition-colors duration-300"
        >
          Scroll Down
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;