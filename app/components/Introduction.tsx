"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "../context/themeContext";

// const tools = ["Next.js", "TypeScript", "Node.js", "Python", "Go", "PostgreSQL"];
const tools = ["TypeScript", "Python", "Go", "PostgreSQL"];

const socialLinks = [
    { label: "GitHub", href: "https://github.com/arhantsg07" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/arhant-gourkhede-9b3515285" },
    { label: "X", href: "https://x.com/s_arhant" },
    { label: "Email", href: "mailto:sfarhant098@gmail.com" },
];


interface ContributionCell {
    date: string;
    count: number;
    level: number;
}

function intensityClass(level: number, isDark: boolean) {
    if (level < 1) return isDark ? "bg-stone-800/40" : "bg-stone-200/55";
    if (level < 2) return isDark ? "bg-emerald-900/55" : "bg-emerald-200/70";
    if (level < 3) return isDark ? "bg-emerald-800/60" : "bg-emerald-300/80";
    if (level < 5) return isDark ? "bg-emerald-700/70" : "bg-emerald-400/85";
    return isDark ? "bg-emerald-600/80" : "bg-emerald-500/90";
}

const Introduction: React.FC = () => {
    const { isDark, themeClasses } = useTheme();
    const [contrib, setContrib] = useState<{ total: number; cells: ContributionCell[] }>({
        total: 0,
        cells: [],
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/github-contributions")
            .then((r) => r.json())
            .then((data) => {
                setContrib(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch contributions:", err);
                setLoading(false);
            });
    }, []);

    const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    // Group cells into weeks (arrays of 7)
    const weeks = [];
    for (let i = 0; i < contrib.cells.length; i += 7) {
        weeks.push(contrib.cells.slice(i, i + 7));
    }

    // Get month labels with their week index
    const monthLabels: { label: string; weekIdx: number }[] = [];
    weeks.forEach((week, weekIdx) => {
        const month = new Date(week[0].date).toLocaleString("default", { month: "short" });
        if (weekIdx === 0 || month !== monthLabels[monthLabels.length - 1]?.label) {
            monthLabels.push({ label: month, weekIdx });
        }
    });

    return (
        <section className="zen-shell pt-28 pb-10 md:pt-32">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="zen-panel overflow-hidden"
            >
                <div className="relative h-36 md:h-52">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(180,208,191,0.35),transparent_50%),linear-gradient(145deg,#8ea498_0%,#6f8478_42%,#425048_100%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(17,24,22,0.55),transparent_55%)]" />
                    <div className="absolute -bottom-11 left-7 h-24 w-24 overflow-hidden rounded-full border-4 border-stone-100 shadow-lg md:left-10 md:h-32 md:w-32 dark:border-stone-800">
                        <Image
                            src={isDark ? "/images/Title_light.png" : "/images/Title.png"}
                            alt="Arhant profile"
                            fill
                            sizes="128px"
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="px-6 pb-8 pt-16 md:px-10">
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="zen-chip">Zen Engineer</span>
                        <span className="zen-chip">Digital Craft</span>
                        <span className="zen-chip">Calm Systems</span>
                    </div>

                    <h1 className="mt-5 text-4xl leading-tight md:text-6xl">Arhant Gourkhede</h1>
                    <p className={`mt-3 max-w-2xl text-base leading-relaxed md:text-lg ${themeClasses.textSecondary}`}>
                        Everything I know, I learned by building it; Anything I don't, I am ready to put in effort. That's what works for me.
                        {/* I build with a quiet-first mindset: simple architecture,
            clear user journeys, and performant. */}
                    </p>

                    <div className="mt-5 flex max-w-3xl flex-wrap gap-2">
                        {tools.map((item) => (
                            <span key={item} className="zen-chip">
                                {item}
                            </span>
                        ))}
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
                        <a
                            href="https://drive.google.com/file/d/1cHMm75EG3YRYCy0P5_4j-6urQ6N039sL/view?usp=drivesdk"
                            className="rounded-full border border-stone-800/80 bg-stone-800 px-5 py-2 text-sm font-semibold tracking-wide text-stone-100 transition-colors hover:bg-stone-700 dark:border-stone-200/80 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200"
                        >
                            Resume / CV
                        </a>
                        <a
                            href="mailto:sfarhant098@gmail.com"
                            className="rounded-full border border-stone-400/80 px-5 py-2 text-sm font-semibold tracking-wide transition-colors hover:bg-stone-100 dark:border-stone-600 dark:hover:bg-stone-800/70"
                        >
                            Get in touch
                        </a>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target={link.label === "Email" ? undefined : "_blank"}
                                rel={link.label === "Email" ? undefined : "noopener noreferrer"}
                                className="text-stone-600 transition-colors hover:text-stone-900 dark:text-stone-300 dark:hover:text-stone-100"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className="mt-8 rounded-2xl border border-stone-300/80 bg-stone-100/70 p-4 dark:border-stone-700/70 dark:bg-stone-900/45">
                        <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">
                            <span>GitHub Contributions</span>
                            <span>{loading ? "loading..." : `${contrib.total} last year`}</span>
                        </div>
                        {/* <div className="grid grid-rows-7 grid-flow-col gap-[3px]">
                            {contrib.cells.length > 0 ? (
                                contrib.cells.map((cell) => (
                                    <div
                                        key={cell.date}
                                        title={`${cell.date}: ${cell.count} contribution${cell.count !== 1 ? "s" : ""}`}
                                        className={`aspect-square rounded-[2px] sm:h-3 sm:w-3 ${intensityClass(cell.level, isDark)} cursor-help transition-opacity hover:opacity-80`}
                                    />
                                ))
                            ) : (
                                <span className={`text-xs ${themeClasses.textSecondary}`}>No data yet</span>
                            )}
                        </div> */}
                        <div className="flex flex-col gap-1">
                            {/* Month labels */}
                            {/* <div className="flex" style={{ marginLeft: "28px" }}>
                                {weeks.map((week, weekIdx) => {
                                    const label = monthLabels.find((m) => m.weekIdx === weekIdx);
                                    return (
                                        <div key={weekIdx} className="w-3 text-[9px] text-gray-400" style={{ minWidth: "15px" }}>
                                            {label ? label.label : ""}
                                        </div>
                                    );
                                })}
                            </div> */}

                            {/* Day labels + Grid */}
                            <div className="flex gap-1">
                                {/* Day labels */}
                                <div className="flex flex-col gap-[3px]">
                                    {DAYS.map((day, i) => (
                                        <div key={day} className={`h-3 text-[9px] leading-3 text-gray-400 ${i % 2 === 0 ? "opacity-0" : ""}`}>
                                            {day}
                                        </div>
                                    ))}
                                </div>

                                {/* Contribution cells */}
                                <div className="grid grid-rows-7 grid-flow-col gap-[3px]">
                                    {contrib.cells.map((cell) => (
                                        <div
                                            key={cell.date}
                                            title={`${cell.date}: ${cell.count} contribution${cell.count !== 1 ? "s" : ""}`}
                                            className={`h-3 w-3 rounded-[2px] ${intensityClass(cell.level, isDark)} cursor-help transition-opacity hover:opacity-80`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Footer */}
                            <div className={`flex items-center justify-between text-[10px] ${themeClasses.textSecondary} mt-1`}>
                                <span>Total <strong>{contrib.total}</strong> contributions</span>
                                <div className="flex items-center gap-1">
                                    <span>Less</span>
                                    {[0, 1, 2, 3, 4].map((level) => (
                                        <div key={level} className={`h-3 w-3 rounded-[2px] ${intensityClass(level, isDark)}`} />
                                    ))}
                                    <span>More</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Introduction;
