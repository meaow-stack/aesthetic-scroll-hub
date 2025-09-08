import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail, ChevronDown, Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      
      {/* Animated Glow Effect */}
      <div className="absolute inset-0 z-20 hero-glow" />

      {/* Content */}
      <div className="relative z-30 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Name */}
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold mb-4 gradient-text tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Sayantan Mukherjee
          </motion.h1>

          {/* Playful but professional tagline */}
          <motion.div 
            className="flex items-center justify-center gap-2 text-lg md:text-xl text-muted-foreground mb-6 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Sparkles className="h-5 w-5 text-primary animate-pulse" />
            <span>Turning ideas into code & code into impact 🚀</span>
          </motion.div>
          
          {/* Role description */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-10 font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Full Stack Developer • ML Engineer • Student
          </motion.p>
          
          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {/* Resume Preview Button */}
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="px-8 py-6 text-lg font-semibold bg-gradient-primary hover:scale-105 hover:shadow-glow transition-all duration-300 group rounded-2xl"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                View Resume
              </Button>
            </a>
            
            {/* Contact Me Button */}
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-lg font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 rounded-2xl"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="h-10 w-10 border-2 border-primary rounded-full flex items-center justify-center animate-pulse mb-2">
          <ChevronDown className="h-5 w-5 text-primary animate-bounce" />
        </div>
        <button 
          onClick={() => scrollToSection("about")}
          className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          Scroll Down
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
