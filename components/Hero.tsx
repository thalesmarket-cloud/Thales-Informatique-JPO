
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center bg-[#05162a] overflow-hidden">
      {/* Image de fond avec overlay sombre */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
          alt="Casablanca Architecture" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05162a]/80 via-[#05162a]/60 to-[#05162a]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-20 pb-20">
        <div className="max-w-5xl">
          {/* Badge Date */}
          <div className="inline-flex items-center space-x-2 bg-[#1e3a5f]/60 backdrop-blur-md px-5 py-2.5 rounded-xl border border-white/10 mb-8 animate-fade-in shadow-lg">
            <i className="far fa-calendar-alt text-blue-400 text-sm"></i>
            <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-white">4 FÉVRIER 2026 | 09:30 – 12:30</span>
          </div>
          
          {/* Titre Principal (Massif) */}
          <h1 className="text-5xl md:text-[84px] font-extrabold leading-[1] mb-10 tracking-tight animate-fade-in text-white">
            Journée Porte Ouverte <br/>
            <span className="text-[#64b5f6] block mt-2">Thalès Informatique</span>
          </h1>
          
          {/* Bloc Thématique (Card sombre translucide) */}
          <div className="mb-12 bg-[#0a192f]/50 backdrop-blur-xl p-8 rounded-3xl border border-white/5 inline-block max-w-3xl animate-fade-in">
            <span className="block text-[#448aff] font-bold uppercase tracking-[0.15em] text-[10px] md:text-xs mb-4">THÉMATIQUE DE L'ÉVÉNEMENT :</span>
            <p className="text-2xl md:text-[32px] text-white font-bold leading-tight mb-6">
              Le DAF acteur du pilotage de la performance
            </p>
            <div className="flex items-start">
               <div className="w-1 h-12 bg-blue-500 rounded-full mr-5 shrink-0"></div>
               <p className="text-lg md:text-xl text-slate-300 font-medium italic">
                Du closing au pilotage financier en temps réel avec Sage FRP 1000.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Barre d'action Flottante (Le "Chevauchement") */}
      <div className="absolute bottom-0 left-0 w-full z-20 translate-y-1/2">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-6 md:gap-12">
            
            {/* Bouton Blanc */}
            <a 
              href="#reservation" 
              className="bg-white text-[#003366] px-10 py-6 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1 text-center min-w-[260px]"
            >
              Réserver ma place
            </a>

            {/* Infos complètes (Lieu et Capacité) */}
            <div className="flex flex-wrap items-center gap-8 md:gap-12">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#1e3a5f]/80 backdrop-blur-lg rounded-xl flex items-center justify-center border border-white/10 shadow-xl">
                  <i className="fas fa-map-marker-alt text-xl text-blue-400"></i>
                </div>
                <div className="text-white">
                  <p className="font-bold text-lg leading-none mb-1">Marina Casablanca</p>
                  <p className="text-slate-400 text-sm">Tour Crystal 1, Niveau 9</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#1e3a5f]/80 backdrop-blur-lg rounded-xl flex items-center justify-center border border-white/10 shadow-xl">
                  <i className="fas fa-users text-xl text-blue-400"></i>
                </div>
                <div className="text-white">
                  <p className="font-bold text-lg leading-none mb-1">Capacité Limitée</p>
                  <p className="text-slate-400 text-sm">Exclusivement B2B</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
