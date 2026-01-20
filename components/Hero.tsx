
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
          alt="Casablanca Marina" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 sage-gradient opacity-90 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-8 animate-fade-in">
            <i className="far fa-calendar-alt text-blue-300"></i>
            <span className="text-sm font-bold uppercase tracking-wider">4 Février 2026 | 09:30 – 12:30</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Journée Découverte <br/>
            <span className="text-blue-400">Sage Maroc</span>
          </h1>
          
          <div className="mb-10">
            <span className="block text-blue-400 font-bold uppercase tracking-widest text-sm mb-2">Thématique de l'événement :</span>
            <p className="text-2xl md:text-3xl text-white font-bold leading-relaxed">
              Le DAF acteur du pilotage de la performance
            </p>
            <p className="text-lg text-blue-100 font-light mt-4 italic">
              Optimisation de la performance financière avec Sage FRP 1000.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#reservation" 
              className="px-10 py-5 bg-white text-[#003366] rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl hover:-translate-y-1 text-center"
            >
              Réserver ma place
            </a>
            <a 
              href="#about" 
              className="px-10 py-5 bg-transparent border-2 border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all text-center"
            >
              En savoir plus
            </a>
          </div>

          <div className="mt-16 flex items-center space-x-12 opacity-80 border-t border-white/10 pt-8">
            <div className="flex items-center space-x-3">
              <i className="fas fa-map-marker-alt text-2xl text-blue-400"></i>
              <div className="text-sm">
                <p className="font-bold">Marina Casablanca</p>
                <p className="text-blue-200">Tour Crystal 1</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fas fa-users text-2xl text-blue-400"></i>
              <div className="text-sm">
                <p className="font-bold">Capacité Limitée</p>
                <p className="text-blue-200">Exclusivement B2B</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute right-0 bottom-0 w-1/3 h-2/3 bg-blue-400/10 blur-[100px] rounded-full -mr-20 -mb-20"></div>
    </section>
  );
};

export default Hero;
