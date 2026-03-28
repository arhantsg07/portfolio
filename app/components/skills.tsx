import { Code, Database, Server, Terminal } from "lucide-react";
import { useTheme } from "../context/themeContext";

function SkillSet() {
  const { themeClasses } = useTheme();

  const skills = [
    { name: "Node.js", icon: <Server className="h-5 w-5" />, category: "Backend" },
    { name: "React", icon: <Code className="h-5 w-5" />, category: "Frontend" },
    { name: "Vite", icon: <Code className="h-5 w-5" />, category: "Frontend" },
    { name: "Next.js", icon: <Code className="h-5 w-5" />, category: "Frontend" },
    { name: "Tailwind", icon: <Code className="h-5 w-5" />, category: "Frontend" },
    // { name: "Python", icon: <Code className="h-5 w-5" />, category: "Backend" },
    { name: "Express", icon: <Server className="h-5 w-5" />, category: "Backend" },
    { name: "FastAPI", icon: <Server className="h-5 w-5" />, category: "Backend" },
    { name: "Git", icon: <Terminal className="h-5 w-5" />, category: "Tools" },
    { name: "Linux", icon: <Terminal className="h-5 w-5" />, category: "Tools" },
    { name: "SQL", icon: <Database className="h-5 w-5" />, category: "Database" },
    { name: "MongoDB", icon: <Database className="h-5 w-5" />, category: "Database" },
    { name: "Docker", icon: <Terminal className="h-5 w-5" />, category: "Tools" },
  ];

  const skillCategories = ["Frontend", "Backend", "Database", "Tools"];

  return (
    <section id="skills" className="zen-shell py-8 md:py-10">
      <div className="zen-panel p-6 md:p-10">
        <h2 className="text-3xl md:text-4xl">Practice</h2>
        <p className={`mt-2 text-sm md:text-base ${themeClasses.textSecondary}`}>
          Tools I use to keep engineering focused, maintainable, and quietly powerful.
        </p>

        <div className="mt-8 space-y-7">
          {skillCategories.map((category) => (
            <div key={category}>
              <h3 className="mb-3 text-xl">{category}</h3>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div
                      key={skill.name}
                      className={`group rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-0.5 ${themeClasses.cardBg} ${themeClasses.border} ${themeClasses.hoverBg}`}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="mb-2 text-emerald-700 dark:text-emerald-300">{skill.icon}</div>
                        <span className={`text-sm font-medium ${themeClasses.skillText}`}>{skill.name}</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillSet;
