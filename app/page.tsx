"use client";
import { useState, useEffect, useRef } from "react";
import Introduction from "./components/Introduction";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import SkillSet from "./components/skills";
import Contact from "./components/contact";
import { ThemeProvider } from "./context/themeContext";
import Footer from "./components/footer";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

type SectionRefs = {
  [key: string]: React.RefObject<HTMLElement | null>;
}

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  const sectionRefs: SectionRefs = {
    introduction: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  const scrollToSection = (sectionId: string) => {
    const section = sectionRefs[sectionId].current;
    if (section) {
      const offset = 80; // Adjust for fixed navbar height
      const y = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen pb-6">
        <Navbar scrollToSection={scrollToSection} />
        <motion.div
          key="portfolio"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: isMounted ? 1 : 0, y: isMounted ? 0 : 12 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.section
            id="introduction"
            ref={sectionRefs.introduction}
            initial="hidden"
            animate="visible"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <Introduction />
          </motion.section>
          <motion.section
            id="skills"
            ref={sectionRefs.skills}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <SkillSet />
          </motion.section>
          <motion.section
            id="projects"
            ref={sectionRefs.projects}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <Projects />
          </motion.section>
          <motion.section
            id="contact"
            ref={sectionRefs.contact}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <Contact />
          </motion.section>
          <Footer />
        </motion.div>
      </div>
    </ThemeProvider>
  );
}