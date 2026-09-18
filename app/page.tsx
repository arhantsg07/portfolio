import Introduction from "./components/Introduction";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import SkillSet from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";
import ThemeProviderWrapper from "./components/themeProviderWrapper";
import Activity from "./components/activity";

export default function Home() {
  return (
    <ThemeProviderWrapper>
      <div className="min-h-screen pb-6">
        <Navbar />
        <main>
          <section id="introduction">
            <Introduction />
          </section>
          <section id="skills">
            <SkillSet />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="activity">
            <Activity />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <Footer />
        </main>
      </div>
    </ThemeProviderWrapper>
  );
}