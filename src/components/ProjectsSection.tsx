import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "AI-Powered Health Symptom Checker",
    description: "Full-stack application predicting symptoms using NLP and wearable data. Used BERT (HuggingFace) for symptom extraction from user input, integrated real-time health monitoring API with 90% model accuracy, and developed interactive chatbot for diagnostics.",
    image: project1,
    technologies: ["Next.js", "Tailwind", "TensorFlow", "HuggingFace BERT", "NLP"],
    github: "hhttps://github.com/meaow-stack/health_checker-",
    live: "#",
    featured: true
  },
  {
    title: "Crop Prediction System",
    description: "ML project predicting optimal crops based on soil & weather data. Trained Random Forest & SVM models achieving 90%+ accuracy, used EDA and visualizations to analyze feature impact, and applied hyperparameter tuning for performance optimization.",
    image: project2,
    technologies: ["Python", "Scikit-Learn", "Pandas", "Matplotlib", "Streamlit", "React.js"],
    github: https://github.com/meaow-stack/Agriculture",
    live: "#",
    featured: true
  },
  {
    title: "E-Commerce Website (Amazon Clone)",
    description: "Responsive e-commerce platform with real-time cart & search functionality. Built secure login, payment system, and admin dashboard. Developed REST APIs with Django consumed via dynamic frontend with separate admin and customer interfaces.",
    image: project3,
    technologies: ["Django", "HTML", "SQLite", "Bootstrap", "REST APIs"],
    github: "https://github.com/meaow-stack/amazon",
    live: "#",
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
            <a href="https://github.com/meaow-stack" target="_blank" rel="noopener noreferrer">
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
