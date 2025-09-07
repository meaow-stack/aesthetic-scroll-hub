import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "AI-Powered Dashboard",
    description: "A comprehensive analytics dashboard with machine learning insights and real-time data visualization. Built with React, TypeScript, and Python backend.",
    image: project1,
    technologies: ["React", "TypeScript", "Python", "TensorFlow", "PostgreSQL"],
    github: "https://github.com/alexthompson/ai-dashboard",
    live: "https://ai-dashboard.alexthompson.dev",
    featured: true
  },
  {
    title: "Smart Mobile App",
    description: "Cross-platform mobile application with AI-driven features for personalized user experiences. Includes offline capabilities and cloud sync.",
    image: project2,
    technologies: ["React Native", "Node.js", "MongoDB", "OpenAI API"],
    github: "https://github.com/alexthompson/smart-mobile-app",
    live: "https://apps.apple.com/app/smart-mobile-app",
    featured: true
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with advanced features like inventory management, payment processing, and analytics dashboard.",
    image: project3,
    technologies: ["Next.js", "Django", "Stripe", "Redis", "AWS"],
    github: "https://github.com/alexthompson/ecommerce-platform",
    live: "https://ecommerce.alexthompson.dev",
    featured: false
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and innovative solutions
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2 
              }}
              viewport={{ once: true }}
              className={`${project.featured ? "lg:grid-cols-2" : ""}`}
            >
              <Card className="glass-card overflow-hidden group hover:shadow-elegant transition-all duration-500">
                <div className={`grid ${project.featured ? "lg:grid-cols-2" : "grid-cols-1"} gap-0`}>
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </div>

                  {/* Project Content */}
                  <CardContent className="p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4 group-hover/btn:animate-spin" />
                          Code
                        </a>
                      </Button>
                      
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300 group/btn"
                        asChild
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:animate-bounce" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-6 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            asChild
          >
            <a href="https://github.com/alexthompson" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;