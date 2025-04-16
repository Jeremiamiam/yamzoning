'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ABTestingToggle } from '@/components/atoms/ABTestingToggle';

interface HomePageBProps {
  showToggleButton: boolean;
  onToggle: () => void;
}

export const HomePageB = ({ showToggleButton, onToggle }: HomePageBProps) => {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Full screen with lifestyle image */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-base-300"></div> {/* Placeholder pour une image lifestyle */}
        </div>
        <div className="relative flex min-h-screen items-center bg-black/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="mb-6 text-5xl font-bold">LIBÉREZ VOTRE AVENTURE</h1>
              <p className="mb-8 text-xl">
                Explorez la nature, respectez l'environnement. Découvrez une nouvelle façon de vivre vos déplacements.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/products/2-roues" className="btn btn-primary">COMMENCER L'AVENTURE</Link>
                <Link href="/contact" className="btn btn-outline text-white hover:bg-white hover:text-black">
                  ESSAI GRATUIT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Stories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="card bg-base-100">
              <figure className="relative h-96">
                <div className="h-full w-full bg-base-300"></div> {/* Placeholder pour image agriculteur */}
              </figure>
              <div className="card-body">
                <h3 className="card-title">L'AGRICULTURE RÉINVENTÉE</h3>
                <p>"Avec ma TR-AVEL, je parcours mon exploitation en silence, sans perturber mes bêtes."</p>
                <p className="text-sm italic">- Jean, éleveur en Bretagne</p>
              </div>
            </div>

            <div className="card bg-base-100">
              <figure className="relative h-96">
                <div className="h-full w-full bg-base-300"></div> {/* Placeholder pour image guide */}
              </figure>
              <div className="card-body">
                <h3 className="card-title">L'ÉCOTOURISME EN ACTION</h3>
                <p>"Nos clients adorent découvrir la région en silence, au plus près de la nature."</p>
                <p className="text-sm italic">- Marie, guide touristique</p>
              </div>
            </div>

            <div className="card bg-base-100">
              <figure className="relative h-96">
                <div className="h-full w-full bg-base-300"></div> {/* Placeholder pour image aventurier */}
              </figure>
              <div className="card-body">
                <h3 className="card-title">L'AVENTURE RESPONSABLE</h3>
                <p>"Je peux explorer les chemins les plus reculés sans impact sur l'environnement."</p>
                <p className="text-sm italic">- Thomas, passionné d'outdoor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Lifestyle Approach */}
      <section className="bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-16 md:grid-cols-2">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">VIVEZ L'EXPÉRIENCE TR-AVEL</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary p-2">
                    <svg className="h-6 w-6 text-primary-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Liberté Silencieuse</h3>
                    <p>Explorez sans bruit, respectez la nature et la faune locale.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary p-2">
                    <svg className="h-6 w-6 text-primary-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Autonomie Totale</h3>
                    <p>90 km d'autonomie et recharge solaire pour une liberté sans compromis.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary p-2">
                    <svg className="h-6 w-6 text-primary-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Puissance Maîtrisée</h3>
                    <p>1500W de puissance pour affronter tous les terrains.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px]">
              <div className="h-full w-full bg-base-300"></div> {/* Placeholder pour image lifestyle */}
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">REJOIGNEZ LA COMMUNAUTÉ TR-AVEL</h2>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="aspect-square bg-base-300"></div> {/* Placeholder pour photo Instagram */}
            <div className="aspect-square bg-base-300"></div>
            <div className="aspect-square bg-base-300"></div>
            <div className="aspect-square bg-base-300"></div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/contact" className="btn btn-primary">REJOINDRE L'AVENTURE</Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section with Lifestyle Focus */}
      <section className="bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <div className="card bg-base-100">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-3xl">RESTEZ CONNECTÉ À L'AVENTURE</h2>
              <p className="max-w-2xl">
                Recevez nos dernières actualités, conseils d'utilisation et histoires inspirantes de notre communauté.
              </p>
              <div className="mt-8 flex w-full max-w-md flex-col gap-4">
                <input type="email" placeholder="Votre email" className="input input-bordered w-full" />
                <button className="btn btn-primary w-full">S'ABONNER À LA NEWSLETTER</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showToggleButton && <ABTestingToggle onToggle={onToggle} />}
    </main>
  );
}; 