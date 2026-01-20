
import React, { useState } from 'react';
import { FormData } from '../types.ts';

const RegistrationForm: React.FC = () => {
  const [formState, setFormState] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    confirmAttendance: 'Oui',
    participants: 1,
    expectations: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validate = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formState.firstName) newErrors.firstName = "Prénom requis";
    if (!formState.lastName) newErrors.lastName = "Nom requis";
    if (!formState.email) newErrors.email = "Email requis";
    else if (!/^\S+@\S+\.\S+$/.test(formState.email)) newErrors.email = "Email invalide";
    if (!formState.company) newErrors.company = "Société requise";
    if (!formState.consent) newErrors.consent = "Veuillez accepter les conditions";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12 animate-fade-in">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <i className="fas fa-check text-4xl"></i>
        </div>
        <h3 className="text-3xl font-bold text-slate-900 mb-4">Confirmation envoyée !</h3>
        <p className="text-slate-600 text-lg mb-8">
          Merci {formState.firstName}. Votre demande de réservation a bien été prise en compte. Un consultant Thalès Informatique vous contactera sous peu.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="text-blue-600 font-bold hover:underline"
        >
          Retour au site
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Prénom *</label>
          <input 
            type="text" 
            className={`w-full px-4 py-3 rounded-xl border ${errors.firstName ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-blue-500'} focus:ring-4 focus:ring-blue-500/10 outline-none transition-all`}
            value={formState.firstName}
            onChange={(e) => setFormState({...formState, firstName: e.target.value})}
          />
          {errors.firstName && <span className="text-red-500 text-xs mt-1">{errors.firstName}</span>}
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Nom *</label>
          <input 
            type="text" 
            className={`w-full px-4 py-3 rounded-xl border ${errors.lastName ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-blue-500'} focus:ring-4 focus:ring-blue-500/10 outline-none transition-all`}
            value={formState.lastName}
            onChange={(e) => setFormState({...formState, lastName: e.target.value})}
          />
          {errors.lastName && <span className="text-red-500 text-xs mt-1">{errors.lastName}</span>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Email Professionnel *</label>
          <input 
            type="email" 
            placeholder="exemple@votreentreprise.com"
            className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-blue-500'} focus:ring-4 focus:ring-blue-500/10 outline-none transition-all`}
            value={formState.email}
            onChange={(e) => setFormState({...formState, email: e.target.value})}
          />
          {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email}</span>}
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Téléphone</label>
          <input 
            type="tel" 
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
            value={formState.phone}
            onChange={(e) => setFormState({...formState, phone: e.target.value})}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Société *</label>
          <input 
            type="text" 
            className={`w-full px-4 py-3 rounded-xl border ${errors.company ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-blue-500'} focus:ring-4 focus:ring-blue-500/10 outline-none transition-all`}
            value={formState.company}
            onChange={(e) => setFormState({...formState, company: e.target.value})}
          />
          {errors.company && <span className="text-red-500 text-xs mt-1">{errors.company}</span>}
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Fonction / Poste</label>
          <input 
            type="text" 
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
            value={formState.position}
            onChange={(e) => setFormState({...formState, position: e.target.value})}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-slate-50 rounded-2xl border border-slate-100">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Confirmer la présence</label>
          <select 
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white outline-none"
            value={formState.confirmAttendance}
            onChange={(e) => setFormState({...formState, confirmAttendance: e.target.value as any})}
          >
            <option value="Oui">Oui, je serai présent</option>
            <option value="Non">Non, je ne pourrai pas</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Nombre de participants</label>
          <input 
            type="number" 
            min="1"
            max="5"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none"
            value={formState.participants}
            onChange={(e) => setFormState({...formState, participants: parseInt(e.target.value) || 1})}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2">Questions ou attentes (Optionnel)</label>
        <textarea 
          rows={3}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 outline-none transition-all resize-none"
          placeholder="Quels sujets souhaiteriez-vous approfondir ?"
          value={formState.expectations}
          onChange={(e) => setFormState({...formState, expectations: e.target.value})}
        ></textarea>
      </div>

      <div className="flex items-start space-x-3">
        <input 
          type="checkbox" 
          id="consent"
          className="mt-1.5 h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
          checked={formState.consent}
          onChange={(e) => setFormState({...formState, consent: e.target.checked})}
        />
        <label htmlFor="consent" className="text-sm text-slate-500">
          J’accepte d’être contacté par Thalès Informatique & Sage Maroc dans le cadre de cet événement et des suites commerciales éventuelles.
          {errors.consent && <span className="block text-red-500 text-xs font-bold mt-1">{errors.consent}</span>}
        </label>
      </div>

      <button 
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-[#003366] text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
      >
        {isSubmitting ? (
          <>
            <i className="fas fa-spinner fa-spin"></i>
            <span>Envoi en cours...</span>
          </>
        ) : (
          <span>Confirmer ma réservation</span>
        )}
      </button>
    </form>
  );
};

export default RegistrationForm;
