"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Heart,
  Sun,
  Moon,
  Home,
} from "lucide-react";

const Footer = () => {
  const [visits, setVisits] = useState<number>(0);
  const [uniqueVisits, setUniqueVisits] = useState<number>(0);
  const [todayVisits, setTodayVisits] = useState<number>(0);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [displayCount, setDisplayCount] = useState<number>(0);

  // Fetch from Counter API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://api.counterapi.dev/v1/meaow-stack/portfolio", {
          headers: {
            Authorization: "Bearer ut_Of7eZFljtzzstOZ34fWxpdVKeDVOH6Y2kf4xNETL",
          },
        });
        const data = await res.json();

        setVisits(data.count || 0);
        setUniqueVisits(data.unique || 0);
        setTodayVisits(data.today || 0);
      } catch (err) {
        console.error("Error fetching counter:", err);
      }
    };

    fetchData();
  }, []);

  // Animate the counter from 0 → visits
  useEffect(() => {
    if (visits > 0) {
      let start = 0;
      const duration = 1500; // 1.5s
      const stepTime = 20;
      const increment = Math.ceil(visits / (duration / stepTime));

      const timer = setInterval(() => {
        start += increment;
        if (start >= visits) {
          setDisplayCount(visits);
          clearInterval(timer);
        } else {
          setDisplayCount(start);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [visits]);

  // Toggle dark mode
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/meaow-stack",
      label: "GitHub",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sayantan-mukherjee-5a4b46293/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: Twitter,
      href: "https://x.com/chainghoul_4",
      label: "Twitter",
      color: "hover:text-cyan-400",
    },
    {
      icon: Mail,
      href: "mailto:sayantanmukherjee000@gmail.com",
      label: "Email",
      color: "hover:text-green-400",
    },
  ];

  return (
    <footer className="relative py-10 px-6 border-t border-primary/20 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          {/* Social Links */}
          <div className="flex justify-center space-x-5">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-muted-foreground ${link.color} transition-all duration-300 hover:bg-primary/20 hover:scale-110`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>

          {/* Navigation Links */}
          <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center flex-wrap gap-6 text-sm"
          >
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline underline-offset-4"
              >
                {item}
              </a>
            ))}
          </motion.nav>

          {/* Visitor Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xs text-muted-foreground space-y-1"
          >
            <div>
              👀 Total Visitors:{" "}
              <span className="font-semibold text-primary">{displayCount}</span>
            </div>
            <div>
              🔥 Today’s Visitors:{" "}
              <span className="font-semibold text-primary">{todayVisits}</span>
            </div>
            <div>
              ⭐ Unique Visitors:{" "}
              <span className="font-semibold text-primary">{uniqueVisits}</span>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-2 text-xs text-muted-foreground"
          >
            <span>© 2025 Sayantan Mukherjee. Made with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                color: ["#8B5CF6", "#EC4899", "#8B5CF6"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="h-3.5 w-3.5 fill-current" />
            </motion.div>
            <span>and ☕ coffee.</span>
          </motion.div>

          {/* Toolbar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="fixed bottom-6 right-6 flex flex-col space-y-3"
          >
            {/* Dark/Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-3 rounded-full bg-primary/20 hover:bg-primary/30 text-primary shadow-lg transition"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Back to Top */}
            <button
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="p-3 rounded-full bg-primary/20 hover:bg-primary/30 text-primary shadow-lg transition"
              aria-label="Back to Top"
            >
              ↑
            </button>

            {/* Home Shortcut */}
            <a
              href="#"
              className="p-3 rounded-full bg-primary/20 hover:bg-primary/30 text-primary shadow-lg transition"
              aria-label="Home"
            >
              <Home size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
