"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart, Home, Coffee } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState<string>("");
  const [clicks, setClicks] = useState<number>(0); // Easter Egg counter

  // Handle newsletter subscription (mock)
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  // Easter Egg message (appears after clicks)
  const easterEggMessages = [
    "Psst... You found me! 🐱",
    "Still clicking? 👀",
    "Okay, you win! Here's a cookie 🍪",
    "Enough! Go build something amazing 🚀",
  ];

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

  const navLinks = ["About", "Skills", "Projects", "Contact"];

  return (
    <footer className="relative w-full py-8 px-6 border-t border-primary/20 bg-gradient-to-b from-background to-primary/5 flex items-center pb-[calc(3rem+env(safe-area-inset-bottom))]">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          {/* Newsletter Subscription */}
          <div className="max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Stay in the loop
            </h3>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md bg-primary/5 border border-primary/20 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="px-5 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/80 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-muted-foreground ${link.color} transition-all duration-300 hover:bg-primary/20`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.15,
                  rotate: 8,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Visit my ${link.label}`}
              >
                <link.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </div>

          {/* Navigation Links */}
          <nav className="flex justify-center flex-wrap gap-8 text-base font-medium">
            {navLinks.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline underline-offset-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Easter Egg Section */}
          <div
            className="text-xs text-muted-foreground cursor-pointer select-none"
            onClick={() => setClicks((prev) => prev + 1)}
          >
            {clicks > 0 && (
              <motion.span
                key={clicks}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {easterEggMessages[Math.min(clicks - 1, easterEggMessages.length - 1)]}
              </motion.span>
            )}
          </div>

          {/* Copyright */}
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
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
              <Heart className="h-4 w-4 fill-current" />
            </motion.div>
            <span>and ☕ coffee.</span>
          </div>

          {/* Back to Top Button */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-3 rounded-full bg-primary/20 hover:bg-primary/30 text-primary shadow-lg transition-colors fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom))] right-6"
            aria-label="Scroll to top"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Home size={20} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
