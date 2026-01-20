
import React from 'react';
import RegistrationForm from './components/RegistrationForm.tsx';
import Assistant from './components/Assistant.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Header avec fond sombre pour garantir la visibilité du logo */}
      <header className="w-full bg-[#003366] py-6 px-4 mb-8 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://i.ibb.co/7qJYP8w/1.png" 
              alt="Thalès Informatique | Sage" 
              className="h-10 md:h-14 w-auto object-contain"
              onLoad={() => console.log('Logo loaded')}
              onError={(e) => {
                console.error('Logo failed to load');
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
          <div className="hidden sm:block text-blue-200 text-sm font-medium italic border-l border-blue-400/30 pl-6">
            Invitation Exclusive B2B
          </div>
        </div>
      </header>

      <main className="max-w-6xl w-full px-4 mb-20 animate-fade-in">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Section gauche : Détails */}
          <div className="space-y-10">
            <div>
              <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                Invitation Prioritaire
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#003366] leading-tight mb-6">
                Le DAF acteur du pilotage de la performance
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Une matinée exclusive dédiée aux directions financières pour découvrir comment automatiser vos processus et sécuriser votre pilotage stratégique avec les solutions Sage.
              </p>
            </div>

            {/* Cartes Info Mise à jour avec la Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start space-x-4">
                <div className="text-blue-600 bg-blue-50 p-3 rounded-lg">
                  <i className="fas fa-calendar-alt text-xl"></i>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Date & Horaires</p>
                  <p className="font-bold text-slate-800">4 Février 2026</p>
                  <p className="text-sm text-slate-500 font-medium">09:30 – 12:30</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start space-x-4">
                <div className="text-blue-600 bg-blue-50 p-3 rounded-lg">
                  <i className="fas fa-map-marker-alt text-xl"></i>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Lieu de l'événement</p>
                  <p className="font-bold text-slate-800">Marina Casablanca</p>
                  <p className="text-sm text-slate-500">Tour Crystal 1, Niv. 9</p>
                </div>
              </div>
            </div>

            {/* Intervenants */}
            <div>
              <h3 className="text-xl font-bold text-[#003366] mb-6 flex items-center">
                <i className="fas fa-microphone-alt mr-3 text-blue-500"></i>
                Intervenants
              </h3>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center space-x-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-blue-200 transition-colors cursor-default">
                  <div className="w-14 h-14 overflow-hidden rounded-full border-2 border-slate-100 shadow-inner">
                    <img 
                      src="https://i.ibb.co/MkgmG56k/1560775947214.jpg" 
                      alt="Chupa FLOSY" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">Chupa FLOSY</p>
                    <p className="text-xs text-slate-500">Expert Avant-Vente, Sage France</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-blue-200 transition-colors cursor-default">
                  <div className="w-14 h-14 overflow-hidden rounded-full border-2 border-slate-100 shadow-inner">
                    <img 
                      src="https://i.ibb.co/Wp3SXps8/Sans-titre.jpg" 
                      alt="Yassine REDA" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">Yassine REDA</p>
                    <p className="text-xs text-slate-500">Dir. Commercial, Thalès Informatique</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section droite : Formulaire */}
          <div id="reservation" className="bg-white p-8 md:p-10 rounded-[32px] shadow-2xl border border-slate-100 relative">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900">Réserver ma place</h2>
              <p className="text-slate-500 mt-1">Merci de confirmer votre présence.</p>
            </div>
            <RegistrationForm />
          </div>

        </div>
      </main>

      <Assistant />
      <Footer />
    </div>
  );
};

export default App;
