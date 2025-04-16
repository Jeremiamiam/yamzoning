'use client';

import Link from 'next/link';
import { ABTestingToggle } from '@/components/atoms/ABTestingToggle';

interface ProductPageAProps {
  showToggleButton: boolean;
  onToggle: () => void;
}

export const ProductPageA = ({ showToggleButton, onToggle }: ProductPageAProps) => {
  return (
    <main className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <h1 className="mb-6 text-4xl font-bold">Trottinette Électrique TR-AVEL</h1>
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Images */}
            <div className="w-full lg:w-1/2">
              <div className="card bg-base-100">
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

            {/* Informations produit */}
            <div className="w-full lg:w-1/2">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="rating rating-lg">
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
                  <span>(12 avis)</span>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">5 000 € TTC</h2>
                  <p className="text-sm">TVA incluse - Livraison gratuite</p>
                  <div className="badge badge-success">En stock</div>
                </div>

                <div className="divider"></div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Caractéristiques principales</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Bi-moteur électrique 2×750 W
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Autonomie jusqu'à 90 km
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Batterie française 1680 Wh
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Compatible recharge solaire
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <button className="btn btn-primary btn-block">Ajouter au panier</button>
                  <Link href="/contact" className="btn btn-outline btn-block">
                    Réserver un essai
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description détaillée */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="prose max-w-none">
            <h2>Description détaillée</h2>
            <p>
              La trottinette électrique TR-AVEL est conçue et fabriquée en France pour répondre aux besoins 
              spécifiques des utilisateurs en milieu rural. Sa puissance exceptionnelle de 1500W, répartie 
              sur deux moteurs de 750W chacun, lui permet d'affronter tous types de terrains.
            </p>
            <p>
              Sa batterie française de 1680Wh offre une autonomie record allant jusqu'à 90km, vous permettant 
              de parcourir de longues distances sans vous soucier de la recharge. Compatible avec nos kits 
              solaires AVEL HEOL, elle peut être rechargée en totale autonomie.
            </p>
          </div>
        </div>
      </section>

      {/* Caractéristiques techniques */}
      <section className="bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold">Caractéristiques techniques</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="card bg-base-100">
              <div className="card-body">
                <h3 className="card-title">Motorisation</h3>
                <ul className="space-y-2">
                  <li>Bi-moteur 2×750W</li>
                  <li>Couple maximal : 80 Nm</li>
                  <li>Vitesse max : 25 km/h</li>
                </ul>
              </div>
            </div>
            <div className="card bg-base-100">
              <div className="card-body">
                <h3 className="card-title">Batterie</h3>
                <ul className="space-y-2">
                  <li>Capacité : 1680 Wh</li>
                  <li>Tension : 48V</li>
                  <li>Temps de charge : 6h</li>
                </ul>
              </div>
            </div>
            <div className="card bg-base-100">
              <div className="card-body">
                <h3 className="card-title">Châssis</h3>
                <ul className="space-y-2">
                  <li>Aluminium 6061-T6</li>
                  <li>Suspension avant et arrière</li>
                  <li>Poids total : 35 kg</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showToggleButton && <ABTestingToggle onToggle={onToggle} />}
    </main>
  );
}; 