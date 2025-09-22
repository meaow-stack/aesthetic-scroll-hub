"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Card,
  Typography,
  Avatar,
  Box,
  LinearProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  Code2,
  Database,
  Brain,
  Palette,
  Server,
  Globe,
  GitBranch,
  Star,
} from "lucide-react";

// Skills data
const skills = [
  {
    icon: Code2,
    title: "Programming Languages",
    description: "Python, C, JavaScript",
    details:
      "Experienced in Python for scripting, ML, and backend, C for low-level programming, and JavaScript for web development.",
    color: "#3B82F6",
  },
  {
    icon: Server,
    title: "Web Development",
    description: "Django, React.js, Node.js, Next.js, REST APIs",
    details:
      "Full-stack development skills using Django and React.js. Experience in REST APIs, Next.js SSR, and Node.js backend development.",
    color: "#10B981",
  },
  {
    icon: Database,
    title: "Database & Tools",
    description: "SQL, SQLite, Git, GitHub",
    details:
      "Proficient in SQL queries, database design, version control using Git, and managing projects on GitHub.",
    color: "#8B5CF6",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "NLP, TensorFlow, HuggingFace BERT, Scikit-Learn",
    details:
      "Worked with NLP models, BERT transformers, TensorFlow for model training, and Scikit-Learn for classic ML tasks.",
    color: "#EC4899",
  },
  {
    icon: Palette,
    title: "Frontend Styling",
    description: "Bootstrap, Tailwind CSS, Responsive Design",
    details:
      "Expertise in creating responsive, modern UIs using Tailwind CSS and Bootstrap.",
    color: "#F97316",
  },
  {
    icon: Globe,
    title: "Core Concepts",
    description: "OOP, Data Structures & Algorithms, Computer Networks",
    details:
      "Strong understanding of OOP principles, classic data structures and algorithms, and basic computer networks.",
    color: "#06B6D4",
  },
  {
    icon: Server,
    title: "AI Specialization",
    description: "Reinforcement Learning, Model Training & Tuning",
    details:
      "Experience in RL algorithms, model optimization, and hyperparameter tuning for AI models.",
    color: "#EF4444",
  },
  {
    icon: GitBranch,
    title: "Development Tools",
    description: "Streamlit, Pandas, Matplotlib, EDA",
    details:
      "Data analysis with Pandas, visualization with Matplotlib, and building dashboards with Streamlit.",
    color: "#FACC15",
  },
];

const SkillsSection = () => {
  const [levels, setLevels] = useState(
    skills.reduce((acc, skill) => ({ ...acc, [skill.title]: 2 }), {})
  );
  const [openSkill, setOpenSkill] = useState<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setLevels((prev) =>
        Object.fromEntries(
          Object.entries(prev).map(([title, lvl]) => [
            title,
            Math.min(lvl + 0.01, 5),
          ])
        )
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      id="skills"
      sx={{
        py: 10,
        px: 3,
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, #0f0f0f 0%, #1a1a1a 100%)",
        color: "#fff",
      }}
    >
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(270deg, #3B82F6, #EC4899, #FACC15, #10B981)",
          backgroundSize: "400% 400%",
          opacity: 0.1,
          zIndex: 0,
        }}
      />

      <Box textAlign="center" mb={6} position="relative" zIndex={1}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            background: "linear-gradient(90deg, #3B82F6, #EC4899)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Skills & Expertise
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: "#ccc", maxWidth: 600, mx: "auto", mt: 1 }}
        >
          Tap a card to view details or scroll to level up 🎮
        </Typography>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }}
        gap={3}
        position="relative"
        zIndex={1}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <Card
              onClick={() => setOpenSkill(skill)}
              sx={{
                cursor: "pointer",
                p: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#1a1a1a",
                border: `1px solid ${skill.color}30`,
                borderRadius: 3,
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: `0 0 18px ${skill.color}60`,
                  transition: "0.3s",
                },
              }}
            >
              <Avatar
                sx={{
                  bgcolor: skill.color,
                  width: 56,
                  height: 56,
                  mb: 2,
                  boxShadow: `0 0 10px ${skill.color}`,
                }}
              >
                <skill.icon size={28} />
              </Avatar>
              <Typography variant="h6" fontWeight="bold" sx={{ color: "#fff" }}>
                {skill.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "#ccc", mb: 2 }}>
                {skill.description}
              </Typography>

              <Box display="flex" justifyContent="center" mb={1}>
                {Array.from({ length: Math.round(levels[skill.title]) }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      color="#FACC15"
                      size={18}
                      style={{ margin: "0 2px" }}
                    />
                  )
                )}
              </Box>
              <LinearProgress
                variant="determinate"
                value={(levels[skill.title] / 5) * 100}
                sx={{
                  height: 8,
                  borderRadius: 5,
                  backgroundColor: "#2a2a2a",
                  width: "100%",
                  "& .MuiLinearProgress-bar": {
                    background: `linear-gradient(90deg, ${skill.color}, #fff)`,
                  },
                }}
              />
              <Typography
                variant="subtitle2"
                textAlign="center"
                mt={0.5}
                sx={{ color: "#fff" }}
              >
                Level {Math.round(levels[skill.title])} / 5
              </Typography>
            </Card>
          </motion.div>
        ))}
      </Box>

      <Dialog
        open={!!openSkill}
        onClose={() => setOpenSkill(null)}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: {
            backgroundColor: "#1a1a1a",
            border: `1px solid ${openSkill?.color || "#666"}50`,
            borderRadius: 3,
            p: 2,
          },
        }}
      >
        <DialogTitle
          sx={{
            color: "#fff",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {openSkill?.title}
          <IconButton onClick={() => setOpenSkill(null)} sx={{ color: "#fff" }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ color: "#ccc" }}>
            {openSkill?.details}
          </Typography>
          <Typography
            variant="body2"
            sx={{ mt: 2, fontWeight: "bold", color: "#fff" }}
          >
            For projects, scroll below ⬇️
          </Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default SkillsSection;