
import React from 'react';

const Agenda: React.FC = () => {
  const schedule = [
    { time: "09h00", title: "Accueil & Petit-déjeuner", duration: "30 min", icon: "fa-coffee", color: "bg-slate-100 text-slate-500" },
    { time: "09h30", title: "Présentation Thales", duration: "10 min", icon: "fa-building", color: "bg-blue-100 text-blue-600" },
    { time: "09h40", title: "Challenge de la DAF au Maroc en 2026", duration: "10 min", icon: "fa-trophy", color: "bg-blue-100 text-blue-600" },
    { time: "09h50", title: "Overview Sage FRP 1000", duration: "30 min", icon: "fa-search", color: "bg-blue-100 text-blue-600" },
    { time: "10h20", title: "Valeur ajoutée Thales", duration: "10 min", icon: "fa-plus-circle", color: "bg-blue-100 text-blue-600" },
    { time: "10h30", title: "Impact nouveautés / Modules", duration: "40 min", icon: "fa-cubes", color: "bg-blue-100 text-blue-600" },
    { time: "11h10", title: "SBE / SFD / SBE", duration: "30 min", icon: "fa-layer-group", color: "bg-blue-100 text-blue-600" },
    { time: "11h40", title: "Session Q/R (Questions & Réponses)", duration: "20 min", icon: "fa-comments", color: "bg-blue-100 text-blue-600" },
    { time: "12h00", title: "Clôture de la matinée", duration: "", icon: "fa-flag-checkered", color: "bg-slate-900 text-white" }
  ];

  return (
    <section id="agenda" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-[10px] md:text-sm">Déroulement</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#003366] mt-2">Programme de la matinée</h2>
          <div className="h-1 w-12 md:h-1.5 md:w-20 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-100 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-6 md:space-y-12">
            {schedule.map((item, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row items-start md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Desktop Time Center Circle */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full -translate-x-1/2 z-10 hidden md:block"></div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] pl-10 md:pl-0 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="bg-slate-50 hover:bg-white p-5 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group">
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-3 ${item.color} shadow-sm`}>
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <div className={`flex flex-col ${idx % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                        <span className="text-blue-600 font-bold text-lg mb-1">{item.time}</span>
                        <h3 className="text-base md:text-lg font-bold text-slate-900 leading-tight">{item.title}</h3>
                        {item.duration && (
                          <span className="mt-2 inline-block px-3 py-1 bg-white text-slate-400 text-[10px] font-bold uppercase rounded-full border border-slate-100">
                            Durée : {item.duration}
                          </span>
                        )}
                    </div>
                  </div>
                </div>

                {/* Mobile specific line/dot */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-100 md:hidden"></div>
                <div className="absolute left-4 top-6 w-3 h-3 bg-blue-500 rounded-full -translate-x-1/2 md:hidden"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
            <p className="text-slate-400 text-sm italic">
                * Le programme est susceptible d'être ajusté pour favoriser les échanges.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
