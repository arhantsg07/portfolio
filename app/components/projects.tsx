import Image from "next/image";
import { useTheme } from "../context/themeContext";

function Projects() {
  const { themeClasses } = useTheme();

  const projects = [
    {
      title: "SafeWatch",
      description:
        "A real-time crime reporting platform with emergency reports, image evidence analysis, and user/admin dashboards.",
      tech: ["Next.js", "Python", "Supabase", "FastAPI"],
      github: "https://github.com/arhantsg07/Safewatch",
      image: "/images/safewatch2.jpg",
    },
    {
      title: "Inference System",
      description:
        "A production-oriented gRPC ML inference service in Go, designed for clean model extensibility.",
      tech: ["Go", "gRPC", "Python", "FastAPI"],
      github: "https://github.com/arhantsg07/inference-system-go",
      image: "/images/IE.png",
    },
    {
      title: "CrypDesc",
      description:
        "A desktop crypto dashboard built in C and raylib, focused on lightweight interactions and system-level control.",
      tech: ["C", "Raylib", "libcurl"],
      github: "https://github.com/arhantsg07/raylib_crypdesc",
      image: "/images/crypdesc.png",
    },
  ];

  return (
    <section id="projects" className="zen-shell py-8 md:py-10">
      <div className="zen-panel p-6 md:p-10">
        <h2 className="text-3xl md:text-4xl">Selected Works</h2>
        <p className={`mt-2 text-sm md:text-base ${themeClasses.textSecondary}`}>
          A few projects where product thinking and engineering discipline meet.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${themeClasses.projectCardBg} ${themeClasses.border}`}
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="text-2xl">{project.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${themeClasses.textSecondary}`}>
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="zen-chip">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-stone-400/80 px-4 py-2 text-sm font-medium transition-colors hover:bg-stone-100 dark:border-stone-600 dark:hover:bg-stone-800/70"
                >
                  <svg className="h-4 w-4" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  View Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
