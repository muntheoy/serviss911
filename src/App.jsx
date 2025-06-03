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
import Footer from "./components/Footer";


function App() {
  return (
    <div className="app">
      <Header />
      
      <section id="start">
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
      <Footer/>
    </div>
  );
}

export default App;
