import { Code, Database, Server, Terminal } from 'lucide-react';
import { useTheme } from '../context/themeContext';

function SkillSet () {
    const { themeClasses } = useTheme();

    const skills = [
    { name: 'Node.js', icon: <Server className="w-6 h-6" />, category: 'Backend' },
    { name: 'React', icon: <Code className="w-6 h-6" />, category: 'Frontend' },
    { name: 'Next.js', icon: <Code className="w-6 h-6" />, category: 'Frontend' },
    { name: 'Tailwind', icon: <Code className="w-6 h-6" />, category: 'Frontend'},
    { name: 'Python', icon: <Code className="w-6 h-6" />, category: 'Backend' },
    { name: 'Express', icon: <Server className="w-6 h-6" />, category: 'Backend' },
    { name: 'FastAPI', icon: <Server className="w-6 h-6" />, category: 'Backend' },
    { name: 'Git', icon: <Terminal className="w-6 h-6" />, category: 'Tools' },
    { name: 'Linux', icon: <Terminal className="w-6 h-6" />, category: 'Tools' },
    { name: 'SQL', icon: <Database className="w-6 h-6" />, category: 'Database' },
    { name: 'MongoDB', icon: <Database className="w-6 h-6" />, category: 'Database' },
    { name: 'Docker', icon: <Terminal className="w-6 h-6" />, category: 'Tools' }
  ];

  const skillCategories = ['Frontend', 'Backend', 'Database', 'Tools'];
    return (
        <section id="skills" className="py-16 px-6 flex items-center justify-center">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
          
          {skillCategories.map((category) => (
            <div key={category} className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <div
                      key={index}
                      className={`${themeClasses.cardBg} p-4 rounded-lg hover:${themeClasses.hoverBg} transition-all duration-300 hover:scale-105 border border-gray-700`}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="text-blue-400 mb-2">{skill.icon}</div>
                        <span className={`text-sm ${themeClasses.skillText} font-medium`}>{skill.name}</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
        </section>
    );
}

export default SkillSet;