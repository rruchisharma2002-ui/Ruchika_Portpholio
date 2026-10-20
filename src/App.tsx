import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const SECTIONS = ['about', 'experience', 'projects', 'skills', 'education', 'contact'];

export function App() {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection(SECTIONS, 120);

  return (
    <div className="portfolio-app">
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
      />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
