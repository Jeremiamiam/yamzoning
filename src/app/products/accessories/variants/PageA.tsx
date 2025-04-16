'use client';

import Link from 'next/link';
import { ABTestingToggle } from '@/components/atoms/ABTestingToggle';

interface AccessoriesPageAProps {
  showToggleButton?: boolean;
  onToggle?: () => void;
}

export const AccessoriesPageA = ({ showToggleButton = false, onToggle = () => {} }: AccessoriesPageAProps) => {
  return (
    <main className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="bg-base-200 py-12">
        <div className="container mx-auto px-4">
          <h1 className="mb-6 text-4xl font-bold">Accessoires TR-AVEL</h1>
          <p className="mb-8 text-xl">
            Optimisez votre expérience avec nos accessoires spécialement conçus pour votre véhicule électrique.
          </p>
        </div>
      </section>

      {/* Liste des accessoires */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Kit solaire AVEL HEOL */}
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-4 pt-4">
                <div className="h-48 w-full bg-base-300"></div>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Kit Solaire AVEL HEOL</h2>
                <p>Rechargez votre véhicule en toute autonomie grâce à l'énergie solaire.</p>
                <div className="card-actions justify-between items-end">
                  <span className="text-2xl font-bold">1 299 €</span>
                  <Link href="/contact" className="btn btn-primary">
                    Nous contacter
                  </Link>
                </div>
              </div>
            </div>

            {/* Sacoche de rangement */}
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-4 pt-4">
                <div className="h-48 w-full bg-base-300"></div>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Sacoche de Rangement</h2>
                <p>Sacoche étanche et robuste, parfaitement adaptée à votre véhicule.</p>
                <div className="card-actions justify-between items-end">
                  <span className="text-2xl font-bold">129 €</span>
                  <Link href="/contact" className="btn btn-primary">
                    Nous contacter
                  </Link>
                </div>
              </div>
            </div>

            {/* Support smartphone */}
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-4 pt-4">
                <div className="h-48 w-full bg-base-300"></div>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Support Smartphone</h2>
                <p>Support sécurisé et étanche pour garder votre téléphone à portée de main.</p>
                <div className="card-actions justify-between items-end">
                  <span className="text-2xl font-bold">49 €</span>
                  <Link href="/contact" className="btn btn-primary">
                    Nous contacter
                  </Link>
                </div>
              </div>
            </div>

            {/* Antivol haute sécurité */}
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-4 pt-4">
                <div className="h-48 w-full bg-base-300"></div>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Antivol Haute Sécurité</h2>
                <p>Protégez votre investissement avec notre antivol certifié.</p>
                <div className="card-actions justify-between items-end">
                  <span className="text-2xl font-bold">89 €</span>
                  <Link href="/contact" className="btn btn-primary">
                    Nous contacter
                  </Link>
                </div>
              </div>
            </div>

            {/* Kit d'entretien */}
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-4 pt-4">
                <div className="h-48 w-full bg-base-300"></div>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Kit d'Entretien</h2>
                <p>Tout le nécessaire pour maintenir votre véhicule en parfait état.</p>
                <div className="card-actions justify-between items-end">
                  <span className="text-2xl font-bold">79 €</span>
                  <Link href="/contact" className="btn btn-primary">
                    Nous contacter
                  </Link>
                </div>
              </div>
            </div>

            {/* Éclairage additionnel */}
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-4 pt-4">
                <div className="h-48 w-full bg-base-300"></div>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Éclairage Additionnel</h2>
                <p>Phares LED haute performance pour une visibilité optimale.</p>
                <div className="card-actions justify-between items-end">
                  <span className="text-2xl font-bold">149 €</span>
                  <Link href="/contact" className="btn btn-primary">
                    Nous contacter
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section className="bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <div className="card bg-base-100">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-3xl">Besoin d'un conseil ?</h2>
              <p className="max-w-2xl">
                Notre équipe est à votre disposition pour vous guider dans le choix de vos accessoires.
              </p>
              <div className="mt-8">
                <Link href="/contact" className="btn btn-primary">
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showToggleButton && <ABTestingToggle onToggle={onToggle} />}
    </main>
  );
}; 