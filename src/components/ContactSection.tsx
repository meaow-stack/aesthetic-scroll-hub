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
        "service_6748lqm", // your service ID
        "template_t9pfc8t", // your template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "IiHy4RlqqzFxb7I47" // your public key
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
    <section id="contact" className="py-20 px-6 bg-gradient-card relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Let’s Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have an idea, project, or just want to say hi? Drop me a message —
            I’ll be happy to connect.
          </p>
        </motion.div>

        {/* Two Columns */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Info + Why Work With Me */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4">Why Work With Me?</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <span>Creative & detail-oriented developer</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <span>Passionate about AI, ML & full-stack projects</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <span>Quick learner, collaborative & adaptive</span>
                </li>
              </ul>
            </Card>

            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>sayantanmukherjee000@gmail.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Github className="h-5 w-5 text-primary" />
                  <a
                    href="https://github.com/meaow-stack"
                    target="_blank"
                    className="hover:underline"
                  >
                    https://github.com/meaow-stack
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Kolkata, India</span>
                </li>
              </ul>
            </Card>
          </motion.div>

          {/* Right Column: Contact Form */}
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

      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 blur-3xl -z-10"></div>
    </section>
  );
};

export default ContactSection;
