
import React from 'react';
import * as XLSX from 'xlsx';

const Footer: React.FC = () => {
  const handleExportExcel = () => {
    const data = JSON.parse(localStorage.getItem('event_leads') || '[]');
    
    if (data.length === 0) {
      alert("Aucune inscription enregistrée pour le moment.");
      return;
    }

    // Préparation des données pour Excel avec des en-têtes propres
    const excelData = data.map((item: any) => ({
      "Date d'inscription": item.submittedAt,
      "Nom complet": item.fullName,
      "Email": item.email,
      "Téléphone": item.phone,
      "Société": item.company
    }));

    const worksheet = XLSX.utils.json_to_sheet(excelData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Inscriptions");

    // Génération et téléchargement du fichier
    XLSX.writeFile(workbook, `Inscriptions_Sage_Maroc_${new Date().toISOString().split('T')[0]}.xlsx`);
    
    if(confirm("Fichier exporté avec succès. Souhaitez-vous vider la liste des inscriptions locales ?")) {
        localStorage.removeItem('event_leads');
    }
  };

  return (
    <footer className="w-full bg-slate-900 text-slate-400 py-12 px-4 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="mb-6 opacity-80 hover:opacity-100 transition-opacity">
           <img 
            src="https://i.ibb.co/p6F8sRrQ/Logo-Thales-White.png" 
            alt="Thalès Informatique" 
            className="h-10 w-auto object-contain"
          />
        </div>
        <p className="text-sm mb-4 text-center">© 2026 Thalès Informatique & Sage Maroc. Tous droits réservés.</p>
        <div className="flex items-center space-x-2">
            <p className="text-xs italic opacity-60 text-center">
              Participation sur invitation uniquement. Nombre de places limité.
            </p>
            {/* Accès Admin discret */}
            <button 
              onClick={handleExportExcel}
              className="text-slate-700 hover:text-slate-500 transition-colors p-1"
              title="Admin: Exporter Excel"
            >
              <i className="fas fa-lock text-[10px]"></i>
            </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
