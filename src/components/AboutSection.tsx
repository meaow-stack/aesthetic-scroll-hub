import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Cpu, Target } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text relative inline-block">
            About Me
            <span className="absolute left-1/2 -bottom-2 w-16 h-1 bg-primary rounded-full transform -translate-x-1/2" />
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions that bridge technology and user experience ✨
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-25 blur-xl animate-pulse" />
              <motion.img
                src={profilePhoto}
                alt="Sayantan Mukherjee - Full Stack Developer"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-primary shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* My Story */}
            <Card className="glass-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary flex items-center gap-2">
                  <Code className="h-6 w-6" /> My Story
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I’m currently pursuing my degree at <strong>Asansol Engineering College</strong>,
                  with a deep passion for full-stack development and machine learning.
                  My academic foundation comes from <strong>St. Patrick's Higher Secondary School</strong>
                  and <strong>St. Vincent's High and Technical School</strong>, both prestigious institutions
                  in eastern India.
                </p>
              </CardContent>
            </Card>

            {/* What I Do */}
            <Card className="glass-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary flex items-center gap-2">
                  <Cpu className="h-6 w-6" /> What I Do
                </h3>
                <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2">
                  <li>Build full-stack apps with <strong>React, Django & Python</strong></li>
                  <li>Develop AI/ML projects in <strong>healthcare & agriculture</strong></li>
                  <li>Create user-friendly and scalable digital solutions</li>
                </ul>
              </CardContent>
            </Card>

            {/* My Mission */}
            <Card className="glass-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary flex items-center gap-2">
                  <Target className="h-6 w-6" /> My Mission
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My mission is to <strong>leverage technology and machine learning</strong> to
                  deliver impactful solutions that improve lives. I believe in continuous learning,
                  clean code practices, and building applications that are both robust and
                  user-centric.
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
