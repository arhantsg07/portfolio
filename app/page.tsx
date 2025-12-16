"use client";
import { useState, useEffect, useRef } from "react";
import Introduction from "./components/Introduction";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import SkillSet from "./components/skills";
import Contact from "./components/contact";
import TerminalIntro from "./components/terminalAnimation"
import { ThemeProvider } from "./context/themeContext";
import Footer from "./components/footer";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";

type SectionRefs = {
  [key: string]: React.RefObject<HTMLElement | null>;
}

export default function Home() {
  const [showIntro, setShowIntro] = useState(false);

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
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1], // easeOutBack-ish for a natural roll-in
      },
    },

  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowIntro(true);
    }, 6000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <ThemeProvider>
        <div className="">
          <Navbar scrollToSection={scrollToSection} />
          {!showIntro ? (
            <AnimatePresence>
              <motion.div
                key="terminal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1 }}
              >
                <TerminalIntro />
              </motion.div>
            </AnimatePresence>
          ) : (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.section
                id="introduction"
                ref={sectionRefs.introduction}
                initial="hidden"
                animate="visible"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={ sectionVariants }
              >
                <Introduction />
              </motion.section>
              <motion.section
                id="skills"
                ref={sectionRefs.skills}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={ sectionVariants }
              >
                <SkillSet />
              </motion.section>
              <motion.section
                id="projects"
                ref={sectionRefs.projects}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={ sectionVariants }

              >
                <Projects />
              </motion.section>
              <motion.section
                id="contact"
                ref={sectionRefs.contact}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={ sectionVariants }
              >
                <Contact />
              </motion.section>
              <Footer />
            </motion.div>
          )}
        </div>
      </ThemeProvider>
    </>
  );
}