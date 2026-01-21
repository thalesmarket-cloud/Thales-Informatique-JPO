
import React from 'react';
import Hero from './components/Hero.tsx';
import Details from './components/Details.tsx';
import Agenda from './components/Agenda.tsx';
import Speakers from './components/Speakers.tsx';
import Location from './components/Location.tsx';
import RegistrationForm from './components/RegistrationForm.tsx';
import Footer from './components/Footer.tsx';
import Assistant from './components/Assistant.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 scroll-smooth flex flex-col">
      {/* Navigation Header - Style Screenshot */}
      <header className="absolute top-0 w-full z-50 py-6 md:py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://i.ibb.co/p6F8sRrQ/Logo-Thales-White.png" 
              alt="Thalès Informatique" 
              className="h-7 md:h-10 w-auto object-contain"
            />
          </div>
          <div className="hidden md:block">
            <a 
              href="#reservation" 
              className="bg-[#2563eb] hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold text-sm transition-all shadow-lg"
            >
              Réserver ma place
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section: Design exact du screenshot, optimisé en hauteur */}
        <Hero />

        {/* Section Suivante: Plus de padding géant car le bouton est remonté */}
        <Details />

        <Agenda />
        <Speakers />
        <Location />

        {/* Section Inscription */}
        <section id="reservation" className="py-24 bg-[#003366] relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-16">
              <div className="text-center mb-12">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Inscription</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#003366] mt-2">Confirmez votre présence</h2>
                <p className="text-slate-500 mt-4 max-w-md mx-auto text-sm md:text-base">
                  La participation est exclusive et strictement limitée.
                </p>
              </div>
              <RegistrationForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Assistant />
    </div>
  );
};

export default App;
