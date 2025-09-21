"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Avatar,
  Box,
  TextField,
  Button,
} from "@mui/material";
import { Code2, Database, Brain, Palette, Server, Globe, GitBranch, Star } from "lucide-react";

// Falling stars/particles
const generateStars = (count: number) =>
  Array.from({ length: count }, () => ({
    x: Math.random() * 100 + "%",
    y: Math.random() * -100 + "vh",
    size: Math.random() * 3 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 8,
    color: ["#3B82F6", "#EC4899", "#FACC15", "#10B981"][Math.floor(Math.random() * 4)],
  }));

const skills = [
  { 
    icon: Code2, 
    title: "Programming Languages", 
    description: "Python, C, JavaScript", 
    details: "Experienced in Python for scripting, ML, and backend, C for low-level programming, and JavaScript for web development.",
    color: "#3B82F6" 
  },
  { 
    icon: Server, 
    title: "Web Development", 
    description: "Django, React.js, Node.js, Next.js, REST APIs", 
    details: "Full-stack development skills using Django and React.js. Experience in REST APIs, Next.js SSR, and Node.js backend development.",
    color: "#10B981" 
  },
  { 
    icon: Database, 
    title: "Database & Tools", 
    description: "SQL, SQLite, Git, GitHub", 
    details: "Proficient in SQL queries, database design, version control using Git, and managing projects on GitHub.",
    color: "#8B5CF6" 
  },
  { 
    icon: Brain, 
    title: "Machine Learning", 
    description: "NLP, TensorFlow, HuggingFace BERT, Scikit-Learn", 
    details: "Worked with NLP models, BERT transformers, TensorFlow for model training, and Scikit-Learn for classic ML tasks.",
    color: "#EC4899" 
  },
  { 
    icon: Palette, 
    title: "Frontend Styling", 
    description: "Bootstrap, Tailwind CSS, Responsive Design", 
    details: "Expertise in creating responsive, modern UIs using Tailwind CSS and Bootstrap.",
    color: "#F97316" 
  },
  { 
    icon: Globe, 
    title: "Core Concepts", 
    description: "OOP, Data Structures & Algorithms, Computer Networks", 
    details: "Strong understanding of OOP principles, classic data structures and algorithms, and basic computer networks.",
    color: "#06B6D4" 
  },
  { 
    icon: Server, 
    title: "AI Specialization", 
    description: "Reinforcement Learning, Model Training & Tuning", 
    details: "Experience in RL algorithms, model optimization, and hyperparameter tuning for AI models.",
    color: "#EF4444" 
  },
  { 
    icon: GitBranch, 
    title: "Development Tools", 
    description: "Streamlit, Pandas, Matplotlib, EDA", 
    details: "Data analysis with Pandas, visualization with Matplotlib, and building dashboards with Streamlit.",
    color: "#FACC15" 
  },
];

const SkillsSection = () => {
  const [levels, setLevels] = useState(skills.reduce((acc, skill) => ({ ...acc, [skill.title]: 2 }), {}));
  const [stars] = useState(generateStars(80));
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setLevels((prev) =>
        Object.fromEntries(Object.entries(prev).map(([title, lvl]) => [title, Math.min(lvl + 0.01, 5)]))
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const codeSnippet = `let x = 5;\nlet y = x++;\nconsole.log(x, y);`;

  const handleSubmit = () => setResult(answer.trim() === "6 5" ? "✅ Correct! Well done." : "❌ Wrong! Try again.");

  const toggleSkill = (title: string) => {
    setExpandedSkill(prev => (prev === title ? null : title));
  };

  return (
    <Box
      id="skills"
      sx={{
        py: 12,
        px: 4,
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, #0f0f0f 0%, #1a1a1a 100%)",
        color: "#fff",
      }}
    >
      {/* Background glow */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at top left, #3B82F6, transparent 70%), radial-gradient(circle at bottom right, #EC4899, transparent 70%)",
          filter: "blur(200px)",
          zIndex: -1,
        }}
      />

      {/* Falling stars */}
      {stars.map((s, i) => (
        <motion.div
          key={i}
          initial={{ y: s.y, opacity: 0 }}
          animate={{ y: "110vh", opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, repeatType: "loop", duration: s.duration, delay: s.delay, ease: "linear" }}
          style={{
            position: "absolute",
            top: 0,
            left: s.x,
            width: s.size,
            height: s.size,
            borderRadius: "50%",
            backgroundColor: s.color,
            zIndex: 0,
          }}
        />
      ))}

      {/* Header */}
      <Box textAlign="center" mb={8} position="relative" zIndex={1}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            background: "linear-gradient(90deg,#3B82F6,#EC4899)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Skills & Expertise
        </Typography>
        <Typography variant="h6" sx={{ color: "#ccc", maxWidth: 600, mx: "auto", mt: 1 }}>
          Unlock skills as you scroll ⚡ or <strong>click to view details</strong> 🎮
        </Typography>
      </Box>

      {/* Skills Grid */}
      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }}
        gap={4}
        zIndex={1}
        position="relative"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileTap={{ scale: 0.95, boxShadow: `0 0 25px ${skill.color}80` }}
              onClick={() => toggleSkill(skill.title)}
            >
              <Card
                sx={{
                  cursor: "pointer",
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  backgroundColor: "#1a1a1a",
                  border: `1px solid ${skill.color}30`,
                  borderRadius: 3,
                  "&:hover": { transform: "scale(1.06)", boxShadow: `0 0 25px ${skill.color}50`, transition: "0.3s" },
                }}
              >
                <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
                  <Avatar
                    sx={{
                      bgcolor: skill.color,
                      width: 56,
                      height: 56,
                      mb: 2,
                      boxShadow: `0 0 12px ${skill.color}, 0 0 20px ${skill.color}80`,
                    }}
                  >
                    <skill.icon size={28} />
                  </Avatar>
                  <Typography variant="h6" fontWeight="bold" sx={{ color: "#fff" }}>{skill.title}</Typography>
                  <Typography variant="body2" sx={{ color: "#ccc", mb: 2 }}>{skill.description}</Typography>
                </Box>

                <Box>
                  <Box display="flex" justifyContent="center" mb={1}>
                    {Array.from({ length: Math.round(levels[skill.title]) }).map((_, i) => (
                      <Star key={i} color="#FACC15" size={18} style={{ margin: "0 2px" }} />
                    ))}
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={(levels[skill.title] / 5) * 100}
                    sx={{
                      height: 10,
                      borderRadius: 5,
                      backgroundColor: "#2a2a2a",
                      "& .MuiLinearProgress-bar": { background: `linear-gradient(90deg, ${skill.color}, #fff)` },
                    }}
                  />
                  <Typography variant="subtitle2" display="block" textAlign="center" mt={0.5} sx={{ color: "#fff" }}>
                    Level {Math.round(levels[skill.title])} / 5
                  </Typography>
                </Box>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </Box>

      {/* Expanded Skill Panel */}
      <AnimatePresence>
        {expandedSkill && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, height: 0 }}
            animate={{ opacity: 1, scale: 1, height: "auto" }}
            exit={{ opacity: 0, scale: 0.95, height: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card
              sx={{
                mt: 4,
                p: 3,
                maxWidth: 800,
                mx: "auto",
                backgroundColor: skills.find(s => s.title === expandedSkill)?.color + "10",
                border: `1px solid ${skills.find(s => s.title === expandedSkill)?.color}50`,
                borderRadius: 3,
                boxShadow: `0 0 20px ${skills.find(s => s.title === expandedSkill)?.color}60`,
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: "#fff" }}>
                  {skills.find(s => s.title === expandedSkill)?.title}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: "#ccc" }}>
                  {skills.find(s => s.title === expandedSkill)?.details}
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: "bold", color: "#fff" }}>
                  For projects, scroll below ⬇️
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Code Game */}
      <Card
        sx={{
          mt: 10,
          p: 3,
          maxWidth: 600,
          mx: "auto",
          boxShadow: 4,
          borderRadius: 3,
          backgroundColor: "#1a1a1a",
          border: "1px solid #3B82F630",
        }}
      >
        <CardContent>
          <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: "#fff" }}>
            Interactive Code Game: Guess the Output
          </Typography>
          <Box
            sx={{
              bgcolor: "#2a2a2a",
              p: 2,
              borderRadius: 2,
              fontFamily: "monospace",
              whiteSpace: "pre",
              mb: 2,
              color: "#fff",
            }}
          >
            {codeSnippet}
          </Box>
          <TextField
            label="Your Answer"
            variant="outlined"
            fullWidth
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            sx={{ mb: 2, input: { color: "#fff" }, label: { color: "#ccc" }, fieldset: { borderColor: "#555" } }}
          />
          <Button variant="contained" onClick={handleSubmit} sx={{ backgroundColor: "#3B82F6" }}>
            Check Answer
          </Button>
          {result && (
            <Typography variant="body1" mt={2} fontWeight="medium" sx={{ color: result.startsWith("✅") ? "#10B981" : "#EF4444" }}>
              {result}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default SkillsSection;
