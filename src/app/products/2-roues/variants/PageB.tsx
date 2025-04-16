'use client';

import Link from 'next/link';
import { ABTestingToggle } from '@/components/atoms/ABTestingToggle';

interface CategoryPageBProps {
  showToggleButton: boolean;
  onToggle: () => void;
}

export const CategoryPageB = ({ showToggleButton, onToggle }: CategoryPageBProps) => {
  return (
    <main className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="relative min-h-[80vh]">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-base-300"></div> {/* Placeholder pour une image de trottinette en action */}
        </div>
        <div className="relative flex min-h-[80vh] items-center bg-black/40">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="mb-6 text-5xl font-bold">ESSAYEZ LA TROTTINETTE ÉLECTRIQUE LA PLUS PUISSANTE DU MARCHÉ</h1>
              <p className="mb-8 text-xl">
                Découvrez la puissance de 1500W et une autonomie de 90km lors d'un essai gratuit sur votre terrain.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="btn btn-primary">RÉSERVER MON ESSAI GRATUIT</Link>
                <Link href="#details" className="btn btn-outline text-white hover:bg-white hover:text-black">
                  EN SAVOIR PLUS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Points Clés */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="card bg-base-200">
              <div className="card-body items-center text-center">
                <div className="mb-4 rounded-full bg-primary p-4">
                  <svg className="h-8 w-8 text-primary-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="card-title">ESSAI DE 30 MINUTES</h3>
                <p>Sur votre terrain, dans vos conditions réelles d'utilisation</p>
              </div>
            </div>

            <div className="card bg-base-200">
              <div className="card-body items-center text-center">
                <div className="mb-4 rounded-full bg-primary p-4">
                  <svg className="h-8 w-8 text-primary-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="card-title">SANS ENGAGEMENT</h3>
                <p>Aucune obligation d'achat, juste votre satisfaction</p>
              </div>
            </div>

            <div className="card bg-base-200">
              <div className="card-body items-center text-center">
                <div className="mb-4 rounded-full bg-primary p-4">
                  <svg className="h-8 w-8 text-primary-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="card-title">ACCOMPAGNEMENT</h3>
                <p>Un expert TR-AVEL à vos côtés pendant l'essai</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Caractéristiques */}
      <section id="details" className="bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">CE QUE VOUS ALLEZ DÉCOUVRIR</h2>
          <div className="grid gap-16 md:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary p-2">
                    <svg className="h-6 w-6 text-primary-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Bi-moteur 2×750 W</h3>
                    <p>Une puissance inégalée pour affronter tous les terrains</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary p-2">
                    <svg className="h-6 w-6 text-primary-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">90 km d'autonomie</h3>
                    <p>Une batterie française de 1680 Wh pour une liberté totale</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary p-2">
                    <svg className="h-6 w-6 text-primary-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Recharge solaire</h3>
                    <p>Compatible avec nos kits solaires pour une autonomie totale</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px]">
              <div className="h-full w-full bg-base-300"></div> {/* Placeholder pour image produit */}
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">ILS ONT TESTÉ ET ADOPTÉ</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="card bg-base-200">
              <div className="card-body">
                <div className="flex items-center gap-4">
                  <div className="avatar">
                    <div className="w-16 rounded-full bg-base-300"></div>
                  </div>
                  <div>
                    <h3 className="font-bold">Jean Dupont</h3>
                    <p className="text-sm">Exploitant agricole - Loire-Atlantique</p>
                  </div>
                </div>
                <p className="mt-4">
                  "L'essai m'a convaincu immédiatement. La puissance est impressionnante et l'autonomie 
                  parfaite pour mes besoins quotidiens. J'ai commandé la mienne le jour même !"
                </p>
              </div>
            </div>

            <div className="card bg-base-200">
              <div className="card-body">
                <div className="flex items-center gap-4">
                  <div className="avatar">
                    <div className="w-16 rounded-full bg-base-300"></div>
                  </div>
                  <div>
                    <h3 className="font-bold">Marie Lambert</h3>
                    <p className="text-sm">Gérante de gîtes ruraux - Bretagne</p>
                  </div>
                </div>
                <p className="mt-4">
                  "J'hésitais avant l'essai, mais la prise en main est vraiment facile. La recharge solaire 
                  est un vrai plus pour notre activité touristique éco-responsable."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <div className="card bg-base-100">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-3xl">PRÊT À VIVRE L'EXPÉRIENCE TR-AVEL ?</h2>
              <p className="max-w-2xl">
                Réservez votre essai gratuit dès maintenant et découvrez la puissance de la TR-AVEL 
                dans vos conditions réelles d'utilisation.
              </p>
              <form className="mt-8 flex w-full max-w-md flex-col gap-4">
                <input type="text" placeholder="Votre nom" className="input input-bordered w-full" />
                <input type="email" placeholder="Votre email" className="input input-bordered w-full" />
                <input type="tel" placeholder="Votre téléphone" className="input input-bordered w-full" />
                <textarea className="textarea textarea-bordered" placeholder="Décrivez votre utilisation"></textarea>
                <button className="btn btn-primary w-full">RÉSERVER MON ESSAI GRATUIT</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {showToggleButton && <ABTestingToggle onToggle={onToggle} />}
    </main>
  );
};

export default CategoryPageB; 