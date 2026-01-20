
import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Details from './components/Details.tsx';
import Speakers from './components/Speakers.tsx';
import Location from './components/Location.tsx';
import RegistrationForm from './components/RegistrationForm.tsx';
import Footer from './components/Footer.tsx';
import Assistant from './components/Assistant.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Details />
        <Speakers />
        <Location />
        <div id="register" className="py-20 bg-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 sage-gradient p-12 text-white flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-6">Réservez votre place</h2>
                  <p className="text-blue-100 mb-8">
                    L'événement est limité en capacité pour garantir la qualité des échanges. Merci de confirmer votre présence dès que possible.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-3">
                      <div className="bg-blue-400/30 p-2 rounded-full">
                        <i className="fas fa-check text-sm"></i>
                      </div>
                      <span className="text-sm">Expertise Sage France</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="bg-blue-400/30 p-2 rounded-full">
                        <i className="fas fa-check text-sm"></i>
                      </div>
                      <span className="text-sm">Networking VIP</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="bg-blue-400/30 p-2 rounded-full">
                        <i className="fas fa-check text-sm"></i>
                      </div>
                      <span className="text-sm">Accès Démo Exclusive</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-2/3 p-8 md:p-12">
                  <RegistrationForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Assistant />
      <Footer />
    </div>
  );
};

export default App;
