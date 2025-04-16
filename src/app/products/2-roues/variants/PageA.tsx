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
          <h1 className="mb-6 text-center text-4xl font-bold">TROTTINETTES ÉLECTRIQUES TOUT-TERRAIN</h1>
          <p className="mx-auto mb-8 max-w-3xl text-center text-lg">
            Des solutions de mobilité à deux roues alliant puissance et autonomie pour tous vos déplacements en milieu rural.
          </p>
        </div>
      </section>

      {/* Liste Produits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Produit 1 */}
            <div className="card bg-base-200">
              <figure className="px-4 pt-4">
                <div className="h-48 w-full bg-base-300"></div>
              </figure>
              <div className="card-body">
                <h3 className="card-title">Trottinette Électrique Tout-Terrain TR-AVEL</h3>
                <div className="space-y-2">
                  <p className="text-sm">
                    • Bi-moteur électrique 2×750 W
                    <br />• 70-90 km d'autonomie
                    <br />• Homologuée route
                  </p>
                  <p className="text-xl font-bold">5 000 €</p>
                  <div className="badge badge-success">En stock</div>
                </div>
                <div className="card-actions mt-4">
                  <Link href="/products/trottinette-electrique" className="btn btn-primary btn-block">
                    Voir le produit
                  </Link>
                </div>
              </div>
            </div>

            {/* Produit 2 */}
            <div className="card bg-base-200">
              <figure className="px-4 pt-4">
                <div className="h-48 w-full bg-base-300"></div>
              </figure>
              <div className="card-body">
                <h3 className="card-title">TR-AVEL Series X</h3>
                <div className="space-y-2">
                  <p className="text-sm">
                    • Moteur 500 W
                    <br />• 50-70 km d'autonomie
                    <br />• Homologuée route
                  </p>
                  <p className="text-xl font-bold">4 500 €</p>
                  <div className="badge badge-warning">Sur commande</div>
                </div>
                <div className="card-actions mt-4">
                  <Link href="/products/series-x" className="btn btn-primary btn-block">
                    Voir le produit
                  </Link>
                </div>
              </div>
            </div>

            {/* Produit 3 */}
            <div className="card bg-base-200">
              <figure className="px-4 pt-4">
                <div className="h-48 w-full bg-base-300"></div>
              </figure>
              <div className="card-body">
                <h3 className="card-title">TR-AVEL Explorer</h3>
                <div className="space-y-2">
                  <p className="text-sm">
                    • Moteur 350 W
                    <br />• 40-60 km d'autonomie
                    <br />• Homologuée route
                  </p>
                  <p className="text-xl font-bold">3 800 €</p>
                  <div className="badge badge-success">En stock</div>
                </div>
                <div className="card-actions mt-4">
                  <Link href="/products/explorer" className="btn btn-primary btn-block">
                    Voir le produit
                  </Link>
                </div>
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