'use client';

import Link from 'next/link';
import { ABTestingToggle } from '@/components/atoms/ABTestingToggle';

interface CategoryPageAProps {
  showToggleButton: boolean;
  onToggle: () => void;
}

export const CategoryPageA = ({ showToggleButton, onToggle }: CategoryPageAProps) => {
  return (
    <main className="min-h-screen bg-base-100">
      {/* En-tête Catégorie */}
      <section className="bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <h1 className="mb-6 text-center text-4xl font-bold">TROTTINETTE ÉLECTRIQUE PROFESSIONNELLE</h1>
          <p className="mx-auto mb-8 max-w-3xl text-center text-lg">
            La solution de mobilité tout-terrain conçue pour les professionnels, adaptée à tous vos besoins de déplacement.
          </p>
        </div>
      </section>

      {/* Produit Principal */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="card bg-base-200">
                <figure className="px-4 pt-4">
                  <div className="h-96 w-full bg-base-300"></div>
                </figure>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-square bg-base-300"></div>
                <div className="aspect-square bg-base-300"></div>
                <div className="aspect-square bg-base-300"></div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold">Trottinette Électrique Tout-Terrain TR-AVEL PRO</h2>
                <p className="mt-4 text-xl font-bold text-primary">5 000 €</p>
                <div className="mt-2">
                  <div className="badge badge-success">En stock</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Caractéristiques principales</h3>
                <ul className="list-inside list-disc space-y-2">
                  <li>Bi-moteur électrique 2×750 W</li>
                  <li>70-90 km d'autonomie</li>
                  <li>Batterie française 1680 Wh</li>
                  <li>Homologuée route</li>
                  <li>Pneus tout-terrain haute performance</li>
                  <li>Système de freinage hydraulique</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Accessoires disponibles</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <input type="checkbox" className="checkbox" />
                    <div>
                      <p className="font-bold">Panier avant</p>
                      <p className="text-sm">Capacité 10kg - 150 €</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <input type="checkbox" className="checkbox" />
                    <div>
                      <p className="font-bold">Porte-bagage arrière</p>
                      <p className="text-sm">Capacité 25kg - 200 €</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <input type="checkbox" className="checkbox" />
                    <div>
                      <p className="font-bold">Siège confort</p>
                      <p className="text-sm">Amortisseurs intégrés - 250 €</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <button className="btn btn-primary btn-block">Ajouter au panier</button>
                <button className="btn btn-outline btn-block">Demander un devis pro</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Avantages */}
      <section className="bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Pourquoi choisir la TR-AVEL PRO ?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="card bg-base-100">
              <div className="card-body">
                <h3 className="card-title">Robustesse</h3>
                <p>Conçue pour résister aux conditions les plus exigeantes du terrain.</p>
              </div>
            </div>
            <div className="card bg-base-100">
              <div className="card-body">
                <h3 className="card-title">Autonomie</h3>
                <p>Une journée complète d'utilisation sans recharge nécessaire.</p>
              </div>
            </div>
            <div className="card bg-base-100">
              <div className="card-body">
                <h3 className="card-title">Personnalisation</h3>
                <p>Adaptez votre trottinette à vos besoins avec nos accessoires.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showToggleButton && <ABTestingToggle onToggle={onToggle} />}
    </main>
  );
};

export default CategoryPageA; 