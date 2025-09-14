import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Mail, Github, MapPin, CheckCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_6748lqm", // service ID
        "template_t9pfc8t", // template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "IiHy4RlqqzFxb7I47" // public key
      );

      toast.success("✅ Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("❌ Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-6 relative bg-gradient-to-b from-background via-background to-muted/30 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text inline-block relative">
            Let’s Work Together
            <span className="absolute left-1/2 -bottom-2 w-16 h-1 bg-primary rounded-full transform -translate-x-1/2" />
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have an idea, project, or just want to say hi? Drop me a message — I’ll be happy to connect.
          </p>
        </motion.div>

        {/* Two Columns */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="glass-card p-8 hover:shadow-glow transition-transform duration-300 hover:scale-[1.01]">
              <h3 className="text-2xl font-bold mb-4">Why Work With Me?</h3>
              <ul className="space-y-4 text-muted-foreground">
                {[
                  "Creative & detail-oriented developer",
                  "Passionate about AI, ML & full-stack projects",
                  "Quick learner, collaborative & adaptive",
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="glass-card p-8 hover:shadow-glow transition-transform duration-300 hover:scale-[1.01]">
              <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a
                    href="mailto:sayantanmukherjee000@gmail.com"
                    className="hover:underline"
                  >
                    sayantanmukherjee000@gmail.com
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Github className="h-5 w-5 text-primary" />
                  <a
                    href="https://github.com/meaow-stack"
                    target="_blank"
                    className="hover:underline"
                  >
                    github.com/meaow-stack
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Kolkata, India</span>
                </li>
              </ul>
            </Card>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card hover:shadow-glow transition-transform duration-300 hover:scale-[1.01]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">
                  Send Me a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="👋 Hey, what's your name?"
                      required
                      className="bg-muted/50 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-muted/50 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or just say hi 👇"
                      rows={6}
                      required
                      className="bg-muted/50 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/50 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <Send className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Subtle background glow & floating icons */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/20 blur-3xl -z-10"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-10 right-20 text-primary/30"
      >
        <Send className="h-24 w-24" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ repeat: Infinity, duration: 8, delay: 2 }}
        className="absolute bottom-10 left-20 text-primary/30"
      >
        <Mail className="h-20 w-20" />
      </motion.div>
    </section>
  );
};

export default ContactSection;
