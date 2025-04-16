'use client';

import Link from 'next/link';
import { ABTestingToggle } from '@/components/atoms/ABTestingToggle';
import { useState } from 'react';

interface ProductPageBProps {
  showToggleButton: boolean;
  onToggle: () => void;
}

interface Option {
  id: string;
  name: string;
  price: number;
  description: string;
}

export const ProductPageB = ({ showToggleButton, onToggle }: ProductPageBProps) => {
  const [selectedColor, setSelectedColor] = useState('noir');
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [showContactForm, setShowContactForm] = useState(false);

  const colors = [
    { id: 'noir', name: 'Noir Mat', hex: '#1a1a1a' },
    { id: 'gris', name: 'Gris Métallisé', hex: '#71797E' },
    { id: 'vert', name: 'Vert Kaki', hex: '#4B5320' },
    { id: 'bleu', name: 'Bleu Marine', hex: '#000080' }
  ];

  const options: Option[] = [
    { id: 'panier', name: 'Panier de rangement avant', price: 89, description: 'Capacité 10L, charge max 5kg' },
    { id: 'siege', name: 'Siège confort ajustable', price: 149, description: 'Assise ergonomique avec suspension' },
    { id: 'porte-bagage', name: 'Porte-bagage arrière', price: 129, description: 'Charge maximale 15kg' }
  ];

  const handleOptionToggle = (optionId: string) => {
    setSelectedOptions(prev => 
      prev.includes(optionId) 
        ? prev.filter(id => id !== optionId)
        : [...prev, optionId]
    );
  };

  const calculateTotalPrice = () => {
    const basePrice = 5000;
    const optionsPrice = selectedOptions.reduce((total, optionId) => {
      const option = options.find(opt => opt.id === optionId);
      return total + (option?.price || 0);
    }, 0);
    return basePrice + optionsPrice;
  };

  return (
    <main className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="relative min-h-[60vh]">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-base-300"></div> {/* Placeholder pour image produit */}
        </div>
        <div className="relative flex min-h-[60vh] items-center bg-black/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="mb-4 text-5xl font-bold">TR-AVEL : LA TROTTINETTE ÉLECTRIQUE LA PLUS PUISSANTE DU MARCHÉ</h1>
              <div className="mb-8 flex items-center gap-4">
                <div className="rating rating-md">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <input
                      key={i}
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-primary"
                      checked={i === 5}
                      readOnly
                    />
                  ))}
                </div>
                <span>(12 avis clients vérifiés)</span>
              </div>
              <div className="stats stats-vertical bg-base-100/10 text-white lg:stats-horizontal">
                <div className="stat">
                  <div className="stat-title opacity-80">Puissance</div>
                  <div className="stat-value">1500W</div>
                  <div className="stat-desc opacity-80">Bi-moteur 2×750W</div>
                </div>
                <div className="stat">
                  <div className="stat-title opacity-80">Autonomie</div>
                  <div className="stat-value">90km</div>
                  <div className="stat-desc opacity-80">Batterie française</div>
                </div>
                <div className="stat">
                  <div className="stat-title opacity-80">Garantie</div>
                  <div className="stat-value">2 ans</div>
                  <div className="stat-desc opacity-80">Pièces et main d'œuvre</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu Principal */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Galerie et Caractéristiques */}
            <div className="w-full lg:w-2/3">
              {/* Galerie */}
              <div className="mb-12">
                <div className="card bg-base-200">
                  <figure className="px-4 pt-4">
                    <div className="h-96 w-full bg-base-300"></div>
                  </figure>
                  <div className="card-body">
                    <div className="flex gap-4 overflow-x-auto">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-24 w-24 flex-none bg-base-300"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Caractéristiques détaillées */}
              <div className="space-y-8">
                <div className="card bg-base-200">
                  <div className="card-body">
                    <h2 className="card-title">Pourquoi choisir la TR-AVEL ?</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <div>
                            <h3 className="font-bold">Puissance inégalée</h3>
                            <p className="text-sm">Bi-moteur 2×750W pour une puissance totale de 1500W</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <div>
                            <h3 className="font-bold">Autonomie record</h3>
                            <p className="text-sm">Jusqu'à 90km avec la batterie française de 1680Wh</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <div>
                            <h3 className="font-bold">Fabrication française</h3>
                            <p className="text-sm">Conçue et assemblée en France pour une qualité optimale</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <div>
                            <h3 className="font-bold">Recharge solaire</h3>
                            <p className="text-sm">Compatible avec nos kits solaires pour une autonomie totale</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Témoignages */}
                <div className="card bg-base-200">
                  <div className="card-body">
                    <h2 className="card-title mb-6">Ce qu'en pensent nos clients</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="card bg-base-100">
                        <div className="card-body">
                          <div className="flex items-center gap-4">
                            <div className="avatar">
                              <div className="w-12 rounded-full bg-base-300"></div>
                            </div>
                            <div>
                              <p className="font-bold">Jean Dupont</p>
                              <p className="text-sm">Exploitant agricole</p>
                            </div>
                          </div>
                          <div className="rating rating-sm mt-2">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <input
                                key={i}
                                type="radio"
                                name="rating-1"
                                className="mask mask-star-2 bg-primary"
                                checked={i === 5}
                                readOnly
                              />
                            ))}
                          </div>
                          <p className="mt-2 text-sm">
                            "Incroyable puissance et autonomie. Je parcours mon exploitation sans effort et la batterie 
                            tient toute la journée. Un vrai gain de temps au quotidien."
                          </p>
                        </div>
                      </div>
                      <div className="card bg-base-100">
                        <div className="card-body">
                          <div className="flex items-center gap-4">
                            <div className="avatar">
                              <div className="w-12 rounded-full bg-base-300"></div>
                            </div>
                            <div>
                              <p className="font-bold">Marie Lambert</p>
                              <p className="text-sm">Guide touristique</p>
                            </div>
                          </div>
                          <div className="rating rating-sm mt-2">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <input
                                key={i}
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-primary"
                                checked={i === 5}
                                readOnly
                              />
                            ))}
                          </div>
                          <p className="mt-2 text-sm">
                            "La recharge solaire est un vrai plus pour notre activité touristique. Nos clients adorent 
                            l'aspect écologique et les performances sont au rendez-vous."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Panneau de commande */}
            <div className="w-full lg:w-1/3">
              <div className="sticky top-24 space-y-6">
                <div className="card bg-base-200">
                  <div className="card-body">
                    {/* Prix et stock */}
                    <div className="mb-6">
                      <div className="flex items-baseline justify-between">
                        <p className="text-3xl font-bold">{calculateTotalPrice().toLocaleString()} € TTC</p>
                        <div className="badge badge-success">En stock</div>
                      </div>
                      <p className="mt-2 text-sm">TVA incluse - Livraison gratuite</p>
                      <p className="text-sm">Expédition sous 3-5 jours ouvrés</p>
                    </div>

                    {/* Sélection de la couleur */}
                    <div className="mb-6">
                      <h3 className="font-bold mb-3">Couleur</h3>
                      <div className="flex gap-4">
                        {colors.map(color => (
                          <div 
                            key={color.id}
                            className="flex flex-col items-center gap-2"
                          >
                            <button
                              className={`w-8 h-8 rounded-full border-2 ${selectedColor === color.id ? 'border-primary' : 'border-transparent'}`}
                              style={{ backgroundColor: color.hex }}
                              onClick={() => setSelectedColor(color.id)}
                              title={color.name}
                            />
                            <span className="text-xs">{color.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Options et accessoires */}
                    <div className="mb-6">
                      <h3 className="font-bold mb-3">Options recommandées</h3>
                      <div className="space-y-4">
                        {options.map(option => (
                          <div key={option.id} className="flex items-start gap-3">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-primary mt-1"
                              checked={selectedOptions.includes(option.id)}
                              onChange={() => handleOptionToggle(option.id)}
                            />
                            <div className="flex-1">
                              <div className="flex justify-between">
                                <span className="font-medium">{option.name}</span>
                                <span className="font-bold">+{option.price} €</span>
                              </div>
                              <p className="text-sm text-base-content/70">{option.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Boutons d'action */}
                    <div className="space-y-4">
                      <button className="btn btn-primary btn-block">COMMANDER MAINTENANT</button>
                      <button 
                        className="btn btn-outline btn-block"
                        onClick={() => setShowContactForm(true)}
                      >
                        RÉSERVER UN ESSAI GRATUIT
                      </button>
                    </div>

                    {/* Garanties */}
                    <div className="mt-6 space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Garantie 2 ans pièces et main d'œuvre
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        SAV en France
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Satisfait ou remboursé sous 14 jours
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Formulaire de Contact */}
      {showContactForm && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="text-lg font-bold">Réserver votre essai gratuit</h3>
            <p className="py-4">
              Remplissez le formulaire ci-dessous pour réserver un essai gratuit de 30 minutes 
              avec un expert TR-AVEL.
            </p>
            <form className="space-y-4">
              <input type="text" placeholder="Votre nom" className="input input-bordered w-full" />
              <input type="email" placeholder="Votre email" className="input input-bordered w-full" />
              <input type="tel" placeholder="Votre téléphone" className="input input-bordered w-full" />
              <textarea 
                className="textarea textarea-bordered w-full" 
                placeholder="Décrivez votre utilisation prévue"
              ></textarea>
              <div className="modal-action">
                <button 
                  type="button" 
                  className="btn btn-ghost"
                  onClick={() => setShowContactForm(false)}
                >
                  Annuler
                </button>
                <button type="submit" className="btn btn-primary">Réserver mon essai</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showToggleButton && <ABTestingToggle onToggle={onToggle} />}
    </main>
  );
}; 