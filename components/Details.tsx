
import React from 'react';

const Details: React.FC = () => {
  const targets = [
    { 
      title: "DAF / CFO", 
      label: "Directions Financières", 
      desc: "Optimisez votre pilotage et fiabilisez vos reportings stratégiques en temps réel.",
      icon: "fa-chart-line" 
    },
    { 
      title: "Directeurs Généraux", 
      label: "Décideurs & DG", 
      desc: "Accédez à une vision consolidée pour des prises de décisions éclairées.",
      icon: "fa-user-tie" 
    },
    { 
      title: "Resp. Comptables", 
      label: "Experts Comptabilité", 
      desc: "Automatisez vos flux financiers et sécurisez votre conformité fiscale.",
      icon: "fa-calculator" 
    },
    { 
      title: "IT Managers", 
      label: "Responsables SI", 
      desc: "Découvrez une solution agile, scalable et parfaitement intégrée.",
      icon: "fa-server" 
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Subtile background element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-100 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section ciblé */}
        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3 block">Public Cible</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#003366]">Pour qui cet événement ?</h2>
          <div className="h-1.5 w-24 bg-blue-500 mx-auto mt-6 rounded-full"></div>
          <p className="text-slate-500 mt-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Cette matinée de découverte est spécifiquement conçue pour les acteurs de la transformation financière et les décideurs cherchant à optimiser leur performance avec Sage FRP 1000.
          </p>
        </div>

        {/* Grille des profils cibles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {targets.map((item, idx) => (
            <div 
              key={idx} 
              className="group bg-slate-50 hover:bg-white p-10 rounded-[40px] border border-transparent hover:border-blue-100 hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-white shadow-sm rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 text-blue-600 border border-slate-100">
                <i className={`fas ${item.icon} text-3xl`}></i>
              </div>
              <h4 className="text-xl font-bold text-[#003366] mb-2">{item.title}</h4>
              <p className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">{item.label}</p>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Note de bas de section */}
        <div className="mt-20 flex justify-center">
          <div className="inline-flex items-center space-x-3 bg-blue-50 px-8 py-4 rounded-full border border-blue-100 shadow-sm">
            <i className="fas fa-info-circle text-blue-600 text-lg"></i>
            <span className="text-blue-900 text-sm font-medium">
              Événement professionnel sur invitation uniquement. <strong>Places strictement limitées.</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
