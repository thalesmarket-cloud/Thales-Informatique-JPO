
import React, { useState } from 'react';

// REMPLACEZ CETTE URL par l'URL obtenue à l'étape 3 du déploiement Google Apps Script
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwJA6uTg9tv39pQjpF2_kERQLfj8a4X_iMcslPeF79u2BzBnjJuH_PioJ4q2FXxxmPCNw/exec';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  consent: boolean;
  submittedAt?: string;
}

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.email.includes('@')) {
      setError('Veuillez entrer une adresse email professionnelle valide.');
      return;
    }
    if (!formData.consent) {
      setError('Veuillez accepter d\'être contacté pour valider votre inscription.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // 1. Envoi vers Google Sheets (Excel Online) via App Script
      if (GOOGLE_SCRIPT_URL !== 'VOTRE_URL_APP_SCRIPT_ICI') {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors', // Mode nécessaire pour App Script
          cache: 'no-cache',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
      }

      // 2. Sauvegarde locale de secours
      const existingLeads = JSON.parse(localStorage.getItem('event_leads') || '[]');
      const newLead = { 
        ...formData, 
        submittedAt: new Date().toLocaleString('fr-FR') 
      };
      existingLeads.push(newLead);
      localStorage.setItem('event_leads', JSON.stringify(existingLeads));

      setIsSubmitted(true);
    } catch (err) {
      console.error("Erreur lors de l'envoi:", err);
      setError("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-10 animate-fade-in">
        <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <i className="fas fa-check-circle text-5xl"></i>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Demande reçue !</h3>
        <p className="text-slate-600 px-4">
          Merci <strong>{formData.fullName}</strong>. Votre inscription a été enregistrée avec succès.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="mt-8 text-blue-600 font-semibold hover:underline"
        >
          Nouvelle réservation
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1">
        <label className="text-xs font-bold text-slate-500 uppercase px-1">Nom complet</label>
        <input
          required
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          type="text"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all"
          placeholder="Ex: Jean Dupont"
        />
      </div>

      <div className="space-y-1">
        <label className="text-xs font-bold text-slate-500 uppercase px-1">Email Professionnel</label>
        <input
          required
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all"
          placeholder="email@entreprise.ma"
        />
      </div>

      <div className="space-y-1">
        <label className="text-xs font-bold text-slate-500 uppercase px-1">Téléphone</label>
        <input
          required
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          type="tel"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all"
          placeholder="06 00 00 00 00"
        />
      </div>

      <div className="space-y-1">
        <label className="text-xs font-bold text-slate-500 uppercase px-1">Société</label>
        <input
          required
          name="company"
          value={formData.company}
          onChange={handleChange}
          type="text"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all"
          placeholder="Nom de votre entreprise"
        />
      </div>

      <div className="pt-2">
        <label className="flex items-start space-x-3 cursor-pointer group">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-[11px] text-slate-500 leading-tight group-hover:text-slate-700 transition-colors">
            J'accepte d'être contacté par Thalès Informatique & Sage Maroc dans le cadre de cet événement.
          </span>
        </label>
      </div>

      {error && (
        <div className="p-3 bg-red-50 text-red-600 text-xs font-bold rounded-lg border border-red-100 flex items-center">
          <i className="fas fa-exclamation-circle mr-2"></i>
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-gradient-to-r from-[#003366] to-[#005bb5] text-white rounded-xl font-bold text-lg shadow-xl shadow-blue-900/10 hover:shadow-blue-900/20 hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-2"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <i className="fas fa-spinner fa-spin mr-2"></i> Envoi...
          </span>
        ) : "Confirmer ma participation"}
      </button>
    </form>
  );
};

export default RegistrationForm;
