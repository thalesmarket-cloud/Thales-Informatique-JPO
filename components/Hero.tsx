
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-[85vh] flex flex-col bg-[#05162a] overflow-hidden">
      {/* Image de fond avec overlay sombre */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
          alt="Casablanca Architecture" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05162a]/90 via-[#05162a]/70 to-[#05162a]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-20 md:pt-28 flex-grow flex flex-col justify-center">
        <div className="max-w-4xl">
          {/* Badge Date - Très compact */}
          <div className="inline-flex items-center space-x-2 bg-[#1e3a5f]/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 mb-4 animate-fade-in shadow-lg">
            <i className="far fa-calendar-alt text-blue-400 text-[10px]"></i>
            <span className="text-[9px] md:text-xs font-bold uppercase tracking-wider text-white">4 FÉVRIER 2026 | 09:30 – 12:30</span>
          </div>
          
          {/* Titre Principal - Taille optimisée */}
          <h1 className="text-3xl md:text-[56px] font-extrabold leading-[1.1] mb-6 tracking-tight animate-fade-in text-white">
            Journée Porte Ouverte <br/>
            <span className="text-[#64b5f6] block mt-1">Thalès Informatique</span>
          </h1>
          
          {/* Bloc Thématique - Plus fin */}
          <div className="mb-8 bg-[#0a192f]/50 backdrop-blur-xl p-5 md:p-7 rounded-2xl border border-white/5 inline-block max-w-2xl animate-fade-in">
            <span className="block text-[#448aff] font-bold uppercase tracking-[0.15em] text-[9px] mb-2">THÉMATIQUE DE L'ÉVÉNEMENT :</span>
            <p className="text-lg md:text-[22px] text-white font-bold leading-tight mb-3">
              Le DAF acteur du pilotage de la performance
            </p>
            <div className="flex items-start pt-3 border-t border-white/5">
               <div className="w-0.5 h-6 bg-blue-500 rounded-full mr-3 shrink-0"></div>
               <p className="text-sm md:text-base text-slate-300 font-medium italic">
                Du closing au pilotage financier en temps réel avec Sage FRP 1000.
              </p>
            </div>
          </div>
        </div>

        {/* Barre d'action - Remontée dans le flux (plus d'absolute bottom) */}
        <div className="mt-4 md:mt-8 animate-fade-in">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-10">
            
            {/* Bouton Blanc */}
            <a 
              href="#reservation" 
              className="bg-white text-[#003366] px-8 py-4 rounded-xl font-bold text-base hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-1 text-center min-w-[220px]"
            >
              Réserver ma place
            </a>

            {/* Infos Lieu et Capacité */}
            <div className="flex flex-wrap items-center gap-6 md:gap-10">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 bg-[#1e3a5f]/90 backdrop-blur-lg rounded-lg flex items-center justify-center border border-white/10">
                  <i className="fas fa-map-marker-alt text-base text-blue-400"></i>
                </div>
                <div className="text-white">
                  <p className="font-bold text-sm leading-none mb-0.5">Marina Casablanca</p>
                  <p className="text-slate-400 text-[10px]">Tour Crystal 1, Niveau 9</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 bg-[#1e3a5f]/90 backdrop-blur-lg rounded-lg flex items-center justify-center border border-white/10">
                  <i className="fas fa-users text-base text-blue-400"></i>
                </div>
                <div className="text-white">
                  <p className="font-bold text-sm leading-none mb-0.5">Capacité Limitée</p>
                  <p className="text-slate-400 text-[10px]">Exclusivement B2B</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Spacer pour le bas de section */}
      <div className="h-12 md:h-16"></div>
    </section>
  );
};

export default Hero;
