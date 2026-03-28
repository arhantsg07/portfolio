import { Mail } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { useTheme } from "../context/themeContext";

function Contact() {
  const { themeClasses } = useTheme();

  return (
    <section id="contact" className="zen-shell py-8 md:py-10">
      <div className="zen-panel p-6 md:p-10">
        <h2 className="text-3xl md:text-4xl">Let us build something calm and meaningful</h2>
        <p className={`mt-3 max-w-2xl text-sm leading-relaxed md:text-base ${themeClasses.textSecondary}`}>
          Open to internships, full-time opportunities, and project collaborations where thoughtful design and
          robust engineering both matter.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="mailto:sfarhant098@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-stone-800/80 bg-stone-800 px-5 py-2 text-sm font-semibold text-stone-100 transition-colors hover:bg-stone-700 dark:border-stone-200/80 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200"
          >
            <Mail className="h-4 w-4" />
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/arhant-gourkhede-9b3515285"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-stone-400/80 px-5 py-2 text-sm font-semibold transition-colors hover:bg-stone-100 dark:border-stone-600 dark:hover:bg-stone-800/70"
          >
            LinkedIn
          </a>

          <a
            href="https://x.com/s_arhant"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-stone-400/80 px-5 py-2 text-sm font-semibold transition-colors hover:bg-stone-100 dark:border-stone-600 dark:hover:bg-stone-800/70"
          >
            <FaXTwitter className="h-4 w-4" />
            @s_arhant
          </a>
        </div>

        <div className={`mt-8 rounded-2xl border p-5 ${themeClasses.projectCardBg} ${themeClasses.border}`}>
          <p className={`text-sm leading-relaxed ${themeClasses.textSecondary}`}>
            Currently debugging the gap between theory and production. Open to internships where I can ship real things, contribute to impactful projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
