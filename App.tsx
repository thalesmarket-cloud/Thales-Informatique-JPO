
import React from 'react';
import Hero from './components/Hero.tsx';
import Details from './components/Details.tsx';
import Speakers from './components/Speakers.tsx';
import Location from './components/Location.tsx';
import RegistrationForm from './components/RegistrationForm.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 scroll-smooth">
      {/* Navigation Header */}
      <header className="absolute top-0 w-full z-50 py-6 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://i.ibb.co/p6F8sRrQ/Logo-Thales-White.png" 
              alt="Thalès Informatique" 
              className="h-10 md:h-14 w-auto object-contain"
            />
          </div>
          <div className="hidden md:block">
            <a 
              href="#reservation" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold text-sm transition-all shadow-lg shadow-blue-900/20"
            >
              Réserver ma place
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section: Présentation de l'événement */}
        <Hero />

        {/* Section Cible: "Pour qui cet événement ?" */}
        <Details />

        {/* Section Intervenants: Experts Sage & Thalès */}
        <Speakers />

        {/* Section Lieu: Tour Crystal 1 */}
        <Location />

        {/* Section Inscription: Formulaire final */}
        <section id="reservation" className="py-24 bg-[#003366] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>
          
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-16 border border-slate-100">
              <div className="text-center mb-12">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Inscription</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#003366] mt-2">Confirmez votre présence</h2>
                <p className="text-slate-500 mt-4 max-w-md mx-auto">
                  La participation est exclusive et strictement limitée. Merci de renseigner vos coordonnées professionnelles ci-dessous.
                </p>
              </div>
              <RegistrationForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
