
import React from 'react';

const Details: React.FC = () => {
  const audience = [
    { title: "DAF", desc: "Directeurs Administratifs et Financiers" },
    { title: "CFO", desc: "Chief Financial Officers" },
    { title: "Comptables", desc: "Responsables Comptabilité" },
    { title: "DG", desc: "Directeurs Généraux & Décideurs" }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800" 
              alt="Professional session" 
              className="relative z-10 rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          
          <div>
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">Thématique de l'événement</span>
            <h2 className="text-4xl font-extrabold text-[#003366] mb-6 leading-tight">
              Le DAF acteur du pilotage de la performance avec Sage FRP 1000
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Dans un environnement économique en constante mutation, la réactivité financière n'est plus une option. Cette journée découverte vous permettra d'explorer comment <strong>Sage FRP 1000</strong> transforme vos données complexes en leviers de croissance stratégiques.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-xl mt-1">
                  <i className="fas fa-chart-line text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Automatisation & Fiabilité</h4>
                  <p className="text-slate-500 text-sm">Réduisez les tâches chronophages et sécurisez vos clôtures comptables.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-xl mt-1">
                  <i className="fas fa-shield-alt text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Conformité Locale & Internationale</h4>
                  <p className="text-slate-500 text-sm">Gérez la complexité fiscale marocaine et multi-filiales avec sérénité.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 bg-slate-50 rounded-3xl p-10 md:p-16 border border-slate-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#003366]">À qui s'adresse cet événement ?</h3>
            <div className="h-1.5 w-20 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {audience.map((item, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:-translate-y-2 transition-transform duration-300">
                  <span className="text-xl font-black text-blue-600">{item.title}</span>
                </div>
                <p className="text-slate-600 font-medium text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
