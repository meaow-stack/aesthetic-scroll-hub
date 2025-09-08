import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
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

  return (
    <footer className="py-8 px-6 border-t border-primary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
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
                  transition: { duration: 0.3 }
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
            className="flex justify-center space-x-6 text-sm"
          >
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline underline-offset-4"
              >
                {item}
              </a>
            ))}
          </motion.nav>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-2 text-xs text-muted-foreground"
          >
            <span>© 2024 Sayantan Mukherjee. Made with</span>
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
              <Heart className="h-3.5 w-3.5 fill-current" />
            </motion.div>
            <span>and lots of coffee.</span>
          </motion.div>

          {/* Back to Top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mx-auto block text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -1 }}
            whileTap={{ y: 0 }}
          >
            Back to Top ↑
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
