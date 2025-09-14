"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart, Sun, Moon, Home } from "lucide-react";

const Footer = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  // Toggle dark mode
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  // Handle newsletter subscription (mock)
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/meaow-stack",
      label: "GitHub",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sayantan-mukherjee-5a4b46293/",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: Twitter,
      href: "https://x.com/chainghoul_4",
      label: "Twitter",
      color: "hover:text-cyan-400"
    },
    {
      icon: Mail,
      href: "mailto:sayantanmukherjee000@gmail.com",
      label: "Email",
      color: "hover:text-green-400"
    }
  ];

  const navLinks = ["About", "Skills", "Projects", "Contact"];

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-primary/20 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-10"
        >
          {/* Newsletter Subscription */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto"
          >
            <h3 className="text-lg font-semibold text-primary mb-4">Stay Updated</h3>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md bg-primary/10 border border-primary/20 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Email for newsletter"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/80 transition-colors"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </form>
          </motion.div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-muted-foreground ${link.color} transition-all duration-300 hover:bg-primary/20 hover:scale-110`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Visit my ${link.label} profile`}
              >
                <link.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </div>

          {/* Navigation Links */}
          <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center flex-wrap gap-8 text-base font-medium"
            role="navigation"
            aria-label="Footer navigation"
          >
            {navLinks.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline underline-offset-4"
                whileHover={{ scale: 1.05, color: "#8B5CF6" }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.nav>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-2 text-sm text-muted-foreground"
          >
            <span>© 2025 Sayantan Mukherjee. Made with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                color: ["#8B5CF6", "#EC4899", "#8B5CF6"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="h-4 w-4 fill-current" />
            </motion.div>
            <span>and ☕ coffee.</span>
          </motion.div>

          {/* Toolbar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="fixed bottom-6 right-6 flex flex-col space-y-4 z-50"
            role="region"
            aria-label="Footer toolbar"
          >
            {/* Dark/Light Mode Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-3 rounded-full bg-primary/20 hover:bg-primary/30 text-primary shadow-lg transition-colors"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            {/* Back to Top */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="p-3 rounded-full bg-primary/20 hover:bg-primary/30 text-primary shadow-lg transition-colors"
              aria-label="Scroll to top"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Home size={20} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;