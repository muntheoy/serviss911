import "./App.css";
import HowWeWork from "./components/HowWeWork";
import Services from "./components/Services";
import StartBlock from "./components/StartBlock";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React, { lazy, Suspense, useEffect } from 'react';

const WorkExperience = lazy(() => import('./components/WorkExperience'));
const FAQ = lazy(() => import('./components/FAQ'));
const Reviews = lazy(() => import('./components/Reviews'));
const ContactsBlock = lazy(() => import('./components/ContactsBlock'));
const AboutUsBlock = lazy(() => import('./components/AboutUs'));

function App() {
  useEffect(() => {
    const loadFonts = async () => {
      try {
        await import('./assets/fonts/fonts.css');
        const fontLoader = await import('./utils/fontLoader');

        await fontLoader.loadFonts();
      } catch (error) {
        console.error('Ошибка при загрузке шрифтов:', error);
      }
    };

    loadFonts();
  }, []);

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

      <Suspense fallback={<div>Загрузка...</div>}>
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
      </Suspense>
      <Footer/>
    </div>
  );
}

export default App;
