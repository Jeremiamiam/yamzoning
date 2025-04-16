'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ABTestingToggle } from '@/components/atoms/ABTestingToggle';

interface HomePageAProps {
  showToggleButton: boolean;
  onToggle: () => void;
}

export const HomePageA = ({ showToggleButton, onToggle }: HomePageAProps) => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="hero min-h-[70vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold">EXPLOREZ SANS LIMITES</h1>
            <p className="py-6 text-xl">Des solutions de mobilité électrique tout-terrain rechargeables à l'énergie solaire</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/products/2-roues" className="btn btn-primary">DÉCOUVRIR NOS VÉHICULES</Link>
              <Link href="/contact" className="btn btn-outline">PRENDRE RENDEZ-VOUS POUR UN ESSAI</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-base-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">MOBILITÉ ÉLECTRIQUE POUR LE MONDE RURAL</h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg">
            TR-AVEL propose des solutions de transport électrique tout-terrain, conçues pour les professionnels et particuliers en milieu rural. 
            Nos véhicules allient puissance, autonomie et respect de l'environnement, offrant une alternative écologique aux quads thermiques traditionnels.
          </p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">Années d'expertise</div>
                <div className="stat-value">15+</div>
                <div className="stat-desc">Dans les batteries</div>
              </div>
            </div>
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">Fabrication</div>
                <div className="stat-value">100%</div>
                <div className="stat-desc">Française</div>
              </div>
            </div>
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">Autonomie</div>
                <div className="stat-value">90km</div>
                <div className="stat-desc">Maximum</div>
              </div>
            </div>
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">Recharge solaire</div>
                <div className="stat-value">100%</div>
                <div className="stat-desc">Compatible</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catégories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Nos solutions de mobilité</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* 2 roues */}
            <Link href="/products/2-roues" className="card bg-base-200 transition-transform hover:-translate-y-2">
              <figure className="px-4 pt-4">
                <div className="h-48 w-full bg-base-300"></div>
              </figure>
              <div className="card-body">
                <h3 className="card-title">2 roues</h3>
                <p className="text-sm">Trottinettes électriques tout-terrain</p>
              </div>
            </Link>

            {/* 3 roues */}
            <div className="card bg-base-200 relative">
              <div className="absolute right-4 top-4 z-10">
                <div className="badge badge-primary">Bientôt disponible</div>
              </div>
              <figure className="px-4 pt-4">
                <div className="h-48 w-full bg-base-300 opacity-60"></div>
              </figure>
              <div className="card-body opacity-60">
                <h3 className="card-title">3 roues</h3>
                <p className="text-sm">Tricycles électriques tout-terrain</p>
              </div>
            </div>

            {/* 4 roues */}
            <div className="card bg-base-200 relative">
              <div className="absolute right-4 top-4 z-10">
                <div className="badge badge-primary">Bientôt disponible</div>
              </div>
              <figure className="px-4 pt-4">
                <div className="h-48 w-full bg-base-300 opacity-60"></div>
              </figure>
              <div className="card-body opacity-60">
                <h3 className="card-title">4 roues</h3>
                <p className="text-sm">Voiturettes électriques tout-terrain</p>
              </div>
            </div>

            {/* Accessoires */}
            <Link href="/products/accessoires" className="card bg-base-200 transition-transform hover:-translate-y-2">
              <figure className="px-4 pt-4">
                <div className="h-48 w-full bg-base-300"></div>
              </figure>
              <div className="card-body">
                <h3 className="card-title">Accessoires</h3>
                <p className="text-sm">Équipements et pièces détachées</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Produit Phare Section */}
      <section className="bg-base-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">NOTRE PRODUIT PHARE</h2>
          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="flex-1">
              <div className="h-96 w-full bg-base-300"></div> {/* Placeholder pour image */}
            </div>
            <div className="flex-1 space-y-6">
              <h3 className="text-2xl font-bold">TROTTINETTE ÉLECTRIQUE TOUT-TERRAIN TR-AVEL</h3>
              <p className="text-lg">
                La trottinette électrique tout-terrain qui redéfinit la mobilité en milieu rural. 
                Conçue et fabriquée en France, elle offre puissance, autonomie et robustesse pour tous vos déplacements.
              </p>
              <ul className="space-y-3">
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
                  70 à 90 km d'autonomie
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Batterie française 1680 Wh
                </li>
              </ul>
              <div className="space-y-4">
                <p className="text-2xl font-bold">À partir de 5 000€ TTC</p>
                <Link href="/products/trottinette-electrique" className="btn btn-primary">DÉCOUVRIR</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">POURQUOI CHOISIR TR-AVEL ?</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="card bg-base-100">
              <div className="card-body items-center text-center">
                <div className="mb-4 rounded-full bg-primary p-3">
                  <svg className="h-6 w-6 text-primary-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                </div>
                <h3 className="card-title">FABRICATION FRANÇAISE</h3>
                <p>Nos véhicules sont conçus et assemblés en France, garantissant qualité et circuits courts.</p>
              </div>
            </div>
            <div className="card bg-base-100">
              <div className="card-body items-center text-center">
                <div className="mb-4 rounded-full bg-primary p-3">
                  <svg className="h-6 w-6 text-primary-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="card-title">AUTONOMIE SUPÉRIEURE</h3>
                <p>Une batterie haute performance pour une autonomie allant jusqu'à 90 km selon les modèles.</p>
              </div>
            </div>
            <div className="card bg-base-100">
              <div className="card-body items-center text-center">
                <div className="mb-4 rounded-full bg-primary p-3">
                  <svg className="h-6 w-6 text-primary-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="card-title">RECHARGE SOLAIRE</h3>
                <p>Compatible avec nos kits solaires AVEL HEOL pour une indépendance énergétique totale.</p>
              </div>
            </div>
            <div className="card bg-base-100">
              <div className="card-body items-center text-center">
                <div className="mb-4 rounded-full bg-primary p-3">
                  <svg className="h-6 w-6 text-primary-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="card-title">ROBUSTESSE TOUT-TERRAIN</h3>
                <p>Construits pour durer et affronter tous types de terrains, même les plus difficiles.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages Section */}
      <section className="bg-base-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">CE QUE NOS CLIENTS DISENT</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card bg-base-200">
              <div className="card-body">
                <div className="flex items-center gap-4">
                  <div className="avatar">
                    <div className="w-16 rounded-full bg-base-300"></div> {/* Placeholder pour photo */}
                  </div>
                  <div>
                    <h3 className="font-bold">Jean D.</h3>
                    <p className="text-sm">Exploitant agricole</p>
                  </div>
                </div>
                <p className="mt-4">La Trottinette TR-AVEL a révolutionné mes déplacements sur l'exploitation. Autonomie impressionnante et solidité à toute épreuve.</p>
              </div>
            </div>
            <div className="card bg-base-200">
              <div className="card-body">
                <div className="flex items-center gap-4">
                  <div className="avatar">
                    <div className="w-16 rounded-full bg-base-300"></div> {/* Placeholder pour photo */}
                  </div>
                  <div>
                    <h3 className="font-bold">Marie L.</h3>
                    <p className="text-sm">Gérante de gîtes ruraux</p>
                  </div>
                </div>
                <p className="mt-4">Le triporteur permet à nos clients de découvrir les environs sans bruit ni pollution. Un investissement rentabilisé en une saison.</p>
              </div>
            </div>
            <div className="card bg-base-200">
              <div className="card-body">
                <div className="flex items-center gap-4">
                  <div className="avatar">
                    <div className="w-16 rounded-full bg-base-300"></div> {/* Placeholder pour photo */}
                  </div>
                  <div>
                    <h3 className="font-bold">Collectivité de Merdrignac</h3>
                    <p className="text-sm">Services techniques</p>
                  </div>
                </div>
                <p className="mt-4">Nos agents techniques utilisent les véhicules TR-AVEL quotidiennement. Fiabilité et économies substantielles.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl">RESTEZ INFORMÉ</h2>
              <p>Recevez nos actualités, nouveaux produits et offres exclusives directement dans votre boîte mail.</p>
              <div className="form-control w-full max-w-md">
                <div className="input-group">
                  <input type="text" placeholder="Votre email" className="input input-bordered flex-1" />
                  <button className="btn btn-primary">S'inscrire</button>
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

export default HomePageA; 