import "./App.css";
import HowWeWork from "./components/HowWeWork";
import Services from "./components/Services";
import StartBlock from "./components/StartBlock";
import WorkExperience from "./components/WorkExperience";
import FAQ from "./components/FAQ";
import Reviews from "./components/Reviews";
import ContactsBlock from "./components/ContactsBlock";
import AboutUsBlock from "./components/AboutUs";
import Header from "./components/Header";

 const mechanismsData = [
    {
      title: "CISA (Италия)",
      description: "Высоконадежные замки с защитой от взлома и перепикирования"
    },
    {
      title: "KALE (Турция)",
      description: "Доступные и качественные системы для металлических дверей"
    },
    {
      title: "MOTTURA (Италия)",
      description: "Премиальные замки с многоуровневой защитой"
    },
    {
      title: "ABLOY (Финляндия)",
      description: "Инновационные дисковые механизмы высокой секретности"
    }
  ];

function App() {
  return (
    <div className="app">
      <Header />
      
      <section id="start" style={{ scrollMarginTop: "120px", paddingTop: "120px" }}>
        <StartBlock />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="how">
        <HowWeWork />
      </section>

      <section id="about">
        <AboutUsBlock />
      </section>

      <section id="experience">
        <WorkExperience />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <section id="reviews">
        <Reviews />
      </section>

      <section id="contacts">
        <ContactsBlock />
      </section>
    </div>
  );
}

export default App;
