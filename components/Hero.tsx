
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-[#003366] overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
          alt="Casablanca Marina" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366] via-[#003366]/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 mb-6">
            <i className="far fa-calendar-alt text-blue-400"></i>
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest">4 Février 2026 | Casablanca</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6">
            Journée Porte Ouverte <br/>
            <span className="text-blue-400">Thalès Informatique</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-300 mb-10 leading-relaxed font-medium">
            Découvrez comment Sage FRP 1000 transforme le rôle du DAF en véritable acteur du pilotage de la performance.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-8 mb-12">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <p className="text-sm font-bold">Marina Casablanca</p>
                <p className="text-xs text-slate-400">Tour Crystal 1, Niveau 9</p>
              </div>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block"></div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-clock"></i>
              </div>
              <div>
                <p className="text-sm font-bold">09:30 – 12:30</p>
                <p className="text-xs text-slate-400">Matinée d'échanges</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#reservation" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-blue-900/40 hover:-translate-y-1"
            >
              Réserver ma place
            </a>
            <a 
              href="#agenda" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/10"
            >
              Voir le programme
            </a>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-600/10 to-transparent hidden lg:block"></div>
    </section>
  );
};

export default Hero;
