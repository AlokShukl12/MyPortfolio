
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import { Certifications } from "./components/certificates/Certificates";
import { Skills } from "./components/skills/Skills";

const App = () => {
  return (
    <div className="container">
      <section id="home">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="certifications">
        <Certifications />
      </section>
       <Portfolio />
      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
