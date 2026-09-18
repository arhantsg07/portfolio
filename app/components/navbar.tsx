"use client";
import React, { useState } from "react";
import { useTheme } from "../context/themeContext";
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "Garden", id: "introduction" },
    { label: "Practice", id: "skills" },
    { label: "Works", id: "projects" },
    { label: "Activity", id: "activity" },
    { label: "Contact", id: "contact" },
];

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { isDark, toggleTheme } = useTheme();

    const linkVariants = {
        hover: {
            y: -1,
            scale: 1.02,
            transition: { duration: 0.2 },
        },
    };

    const mobileMenuVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    const mobileLinkVariants = {
        hidden: { opacity: 0, x: -16 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.25 } },
    };

    const handleNav = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
            <div className="zen-shell theme-text-primary">
                <div className="surface-header mx-auto flex h-16 items-center justify-between rounded-full border px-5 shadow-[0_14px_48px_-30px_rgba(32,46,40,0.8)] backdrop-blur-xl">

                    <span className="text-sm font-semibold uppercase tracking-[0.24em] md:text-base">
                        Arhant
                    </span>

                    <div className="hidden md:flex items-center space-x-7 text-sm font-medium">
                        <a href="https://github.com/arhantsg07" target="_blank" rel="noopener noreferrer">
                            <svg className="github-icon h-5 w-5 transition-colors duration-200"
                                role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>GitHub</title>
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>
                        </a>

                        {navLinks.map(link => (
                            <motion.a
                                key={link.id}
                                variants={linkVariants}
                                whileHover="hover"
                                href={`#${link.id}`}
                                onClick={handleNav}
                                className="tracking-wide"
                            >
                                {link.label}
                            </motion.a>
                        ))}

                        <button
                            type="button"
                            onClick={toggleTheme}
                            className="surface-control rounded-full border p-2 transition-all duration-300"
                            aria-label="Toggle theme"
                        >
                            {isDark ? (
                                <Sun className="h-4 w-4 text-amber-300" />
                            ) : (
                                <Moon className="h-4 w-4 text-stone-600" />
                            )}
                        </button>
                    </div>

                    <div className="flex md:hidden items-center gap-3">
                        <button
                            type="button"
                            onClick={toggleTheme}
                            className="surface-control rounded-full border p-2 transition-all duration-300"
                            aria-label="Toggle theme"
                        >
                            {isDark ? (
                                <Sun className="h-4 w-4 text-amber-300" />
                            ) : (
                                <Moon className="h-4 w-4 text-stone-600" />
                            )}
                        </button>

                        <motion.button
                            type="button"
                            onClick={() => setMenuOpen(prev => !prev)}
                            className="surface-control rounded-full border p-2 transition-colors"
                            aria-label="Toggle menu"
                            aria-expanded={menuOpen}
                            aria-controls="mobile-navigation"
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
                                        <X className="w-5 h-5" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate:  90, opacity: 0 }}
                                        animate={{ rotate: 0,   opacity: 1 }}
                                        exit={{   rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu className="w-5 h-5" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>

                </div>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        id="mobile-navigation"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="surface-header zen-shell mt-2 overflow-hidden rounded-2xl border md:hidden"
                    >
                        <motion.div
                            variants={mobileMenuVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-col gap-4 px-6 py-4 text-sm"
                        >
                            <motion.a
                                variants={mobileLinkVariants}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.95, opacity: 0.7 }}
                                href="https://github.com/arhantsg07"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                                onClick={() => setMenuOpen(false)}
                            >
                                GitHub ↗
                            </motion.a>

                            {navLinks.map(link => (
                                <motion.a
                                    key={link.id}
                                    variants={mobileLinkVariants}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.95, opacity: 0.7 }}
                                    href={`#${link.id}`}
                                    onClick={handleNav}
                                    className="text-left"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </nav>
    );
};

export default Navbar;