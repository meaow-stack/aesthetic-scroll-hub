import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, 
  Database, 
  Brain, 
  Palette, 
  Server, 
  Smartphone,
  Globe,
  GitBranch
} from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Programming Languages",
    description: "Python, C, JavaScript",
    color: "text-blue-400"
  },
  {
    icon: Server,
    title: "Web Development", 
    description: "Django, React.js, Node.js, Next.js, REST APIs",
    color: "text-green-400"
  },
  {
    icon: Database,
    title: "Database & Tools",
    description: "SQL, SQLite, Git, GitHub",
    color: "text-purple-400"
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "NLP, TensorFlow, HuggingFace BERT, Scikit-Learn",
    color: "text-pink-400"
  },
  {
    icon: Palette,
    title: "Frontend Styling",
    description: "Bootstrap, Tailwind CSS, Responsive Design",
    color: "text-orange-400"
  },
  {
    icon: Globe,
    title: "Core Concepts",
    description: "OOP, Data Structures & Algorithms, Computer Networks",
    color: "text-cyan-400"
  },
  {
    icon: Server,
    title: "AI Specialization",
    description: "Reinforcement Learning, Model Training & Tuning",
    color: "text-red-400"
  },
  {
    icon: GitBranch,
    title: "Development Tools",
    description: "Streamlit, Pandas, Matplotlib, EDA",
    color: "text-yellow-400"
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gradient-card">
      <div className="max-w-6xl mx-auto">
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
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="glass-card h-full group cursor-pointer">
                <CardContent className="p-6 text-center space-y-4">
                  <motion.div
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                    className="mx-auto w-16 h-16 flex items-center justify-center"
                  >
                    <skill.icon className={`h-12 w-12 ${skill.color} group-hover:drop-shadow-lg transition-all duration-300`} />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {skill.title}
                  </h3>
                  
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;