import { LanguageProvider } from "i18n";
import { ThemeProvider } from "themes/ThemeContext";
import { GlobalStyles } from "styles/GlobalStyles";
import Navbar from "components/navbar/Navbar";
import Layout from "components/layout/layout.component";
import Contact from "components/sections/contact/Contact";
import Hero from "components/sections/hero/Hero";
import About from "components/sections/about/About";
import Skills from "components/sections/skills/Skills";
import Education from "components/sections/education/Education";
import Experience from "components/sections/experience/Experience";
import ThemeToggle from "components/theme-toggle/theme-toggle.component";
import LanguageToggle from "components/language-toggle/language-toggle.component";

const AppContent = () => {
  return (
    <>
      <ThemeToggle />
      <LanguageToggle />
      <Layout>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Contact />
      </Layout>
    </>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <GlobalStyles />
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
