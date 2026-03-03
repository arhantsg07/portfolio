"use client";
import React, { useState } from "react";
import { useTheme } from "../context/themeContext";
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
    scrollToSection: (sectionId: string) => void;
}

const navLinks = [
    { label: "About",   id: "introduction" },
    { label: "Skills",  id: "skills" },
    { label: "Works",   id: "projects" },
    { label: "Contact", id: "contact" },
];

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { isDark, toggleTheme, themeClasses } = useTheme();

    // ── same as desktop ──
    const linkVariants = {
        hover: {
            scale: 1.1,
            color: "#cccccc",
            transition: { duration: 0.3 },
        },
    };

    // ── stagger container for mobile links ──
    const mobileMenuVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    // ── each mobile link slides in from left ──
    const mobileLinkVariants = {
        hidden: { opacity: 0, x: -16 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.25 } },
    };

    const handleNav = (id: string) => {
        scrollToSection(id);
        setMenuOpen(false);
    };

    return (
        <nav className={`${themeClasses.headerBg} w-full fixed top-0 left-0 right-0 z-50 border-b shadow-xl/30 px-4 ${themeClasses.border} backdrop-blur-md`}>
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <span className={`text-2xl ${themeClasses.text} font-semibold font-[HNF]`}>
                        [ arhant@dev ]
                    </span>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-8">

                        {/* GitHub */}
                        <a href="https://github.com/arhantsg07" target="_blank" rel="noopener noreferrer">
                            <svg className={`w-6 h-6 ${isDark ? 'fill-white' : 'fill-gray-800'} hover:fill-gray-400 transition-colors`}
                                role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>GitHub</title>
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>
                        </a>

                        {/* Nav Links */}
                        {navLinks.map(link => (
                            <motion.button
                                key={link.id}
                                variants={linkVariants}
                                whileHover="hover"
                                onClick={() => handleNav(link.id)}
                            >
                                <span className={`${themeClasses.text}`}>{link.label}</span>
                            </motion.button>
                        ))}

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-lg ${themeClasses.cardBg} ${themeClasses.hoverBg} transition-all duration-300 ${themeClasses.border} border`}
                            aria-label="Toggle theme"
                        >
                            {isDark ? (
                                <Sun className="w-3 h-3 text-yellow-400" />
                            ) : (
                                <Moon className="w-3 h-3 text-blue-400" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Right — theme toggle + hamburger */}
                    <div className="flex md:hidden items-center gap-3">
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-lg ${themeClasses.cardBg} ${themeClasses.hoverBg} transition-all duration-300 ${themeClasses.border} border`}
                            aria-label="Toggle theme"
                        >
                            {isDark ? (
                                <Sun className="w-3 h-3 text-yellow-400" />
                            ) : (
                                <Moon className="w-3 h-3 text-blue-400" />
                            )}
                        </button>

                        {/* Animated hamburger / close icon */}
                        <motion.button
                            onClick={() => setMenuOpen(prev => !prev)}
                            className={`p-2 rounded-lg ${themeClasses.hoverBg} transition-colors`}
                            aria-label="Toggle menu"
                            whileTap={{ scale: 0.85 }}
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {menuOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0,   opacity: 1 }}
                                        exit={{   rotate:  90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X className={`w-5 h-5 ${themeClasses.text}`} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate:  90, opacity: 0 }}
                                        animate={{ rotate: 0,   opacity: 1 }}
                                        exit={{   rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu className={`w-5 h-5 ${themeClasses.text}`} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>

                </div>
            </div>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className={`md:hidden border-t ${themeClasses.border} ${themeClasses.headerBg} overflow-hidden`}
                    >
                        {/* Staggered links container */}
                        <motion.div
                            variants={mobileMenuVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-col px-6 py-4 gap-4"
                        >
                            {/* GitHub */}
                            <motion.a
                                variants={mobileLinkVariants}
                                whileHover={{ scale: 1.05, color: "#cccccc" }}
                                whileTap={{ scale: 0.95, opacity: 0.7 }}
                                href="https://github.com/arhantsg07"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${themeClasses.text} text-sm flex items-center gap-2`}
                                onClick={() => setMenuOpen(false)}
                            >
                                GitHub ↗
                            </motion.a>

                            {/* Nav Links */}
                            {navLinks.map(link => (
                                <motion.button
                                    key={link.id}
                                    variants={mobileLinkVariants}
                                    whileHover={{ scale: 1.05, color: "#cccccc" }}
                                    whileTap={{ scale: 0.95, opacity: 0.7 }}
                                    onClick={() => handleNav(link.id)}
                                    className={`${themeClasses.text} text-sm text-left`}
                                >
                                    {link.label}
                                </motion.button>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </nav>
    );
};

export default Navbar;