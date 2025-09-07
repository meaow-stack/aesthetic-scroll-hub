import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions that bridge technology and user experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 blur-xl animate-pulse"></div>
              <img
                src={profilePhoto}
                alt="Sayantan Mukherjee - Full Stack Developer"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-primary glow transition-transform duration-300 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">My Story</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Currently pursuing my degree at Asansol Engineering College, I'm passionate about 
                  full-stack development and machine learning. I completed my Class 12th from St. Patrick's 
                  Higher Secondary School and Class 10th from St. Vincent's High and Technical School, 
                  both prestigious institutions in eastern India.
                </p>
                
                <h3 className="text-2xl font-bold mb-4 text-primary">What I Do</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I build end-to-end solutions using React, Django, Python, and modern web technologies. 
                  My focus is on AI/ML applications, particularly in healthcare and agriculture, creating 
                  intelligent systems that solve real-world problems with high accuracy and user-friendly interfaces.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-primary">My Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To leverage technology and machine learning to create impactful solutions that improve 
                  lives. I believe in continuous learning, clean code practices, and building applications 
                  that are both technically robust and user-centric.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;