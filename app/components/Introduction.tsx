import Image from "next/image";

// const tools = ["Next.js", "TypeScript", "Node.js", "Python", "Go", "PostgreSQL"];
const tools = ["TypeScript", "Python", "Go", "PostgreSQL", "Pandas", "Numpy", "PyTorch"];

const Introduction: React.FC = () => {

    return (
        <section className="zen-shell pt-28 pb-10 md:pt-32">
            <div className="zen-panel animate-reveal overflow-hidden">
                <div className="relative h-36 md:h-52">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(180,208,191,0.35),transparent_50%),linear-gradient(145deg,#8ea498_0%,#6f8478_42%,#425048_100%)]" />
                    <div className="absolute inset-0 hidden overflow-hidden md:block">
                        <Image
                            src="/images/terminal.png"
                            alt="Linux terminal showing system information and active processes"
                            fill
                            sizes="100vw"
                            className="object-cover object-center opacity-35 mix-blend-multiply"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,#71887c_0%,#71887c_28%,rgba(113,136,124,0.58)_52%,rgba(66,80,72,0.1)_100%)]" />
                    </div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(17,24,22,0.55),transparent_55%)]" />
                    <div className="absolute -bottom-11 left-7 h-24 w-24 overflow-hidden rounded-full border-4 border-stone-100 shadow-lg md:left-10 md:h-32 md:w-32 dark:border-stone-800">
                        <Image
                            src="/images/Title.png"
                            alt="Arhant profile"
                            fill
                            sizes="128px"
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="px-6 pb-8 pt-16 md:px-10">
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="zen-chip">AI / Web Developer</span>
                        <span className="zen-chip">SIH 2024 Finalist</span>
                    </div>

                    <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                        <div className="max-w-2xl">
                            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] theme-text-muted">
                                Software engineer building useful systems
                            </p>
                            <h1 className="text-4xl leading-tight md:text-6xl">Arhant Gourkhede</h1>
                            <p className="mt-3 text-base leading-relaxed theme-text-secondary md:text-lg">
                                I turn complex workflows into robust, dependable products across the stack.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {tools.map((item) => (
                                <span key={item} className="zen-chip">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
                        <a
                            href={process.env.NEXT_PUBLIC_DRIVE_LINK}
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

                </div>
            </div>
        </section>
    );
};

export default Introduction;
