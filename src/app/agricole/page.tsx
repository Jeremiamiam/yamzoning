import React from 'react';
import Image from 'next/image';

export default function AgricolePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-content">
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold lg:text-5xl">Mobilité innovante pour le monde agricole</h1>
              <p className="text-lg">Découvrez comment nos trottinettes électriques tout-terrain révolutionnent les déplacements dans les exploitations agricoles.</p>
              <button className="btn btn-secondary">Découvrir nos solutions</button>
            </div>
            <div className="relative h-64 lg:h-96">
              {/* Placeholder pour l'image - à remplacer */}
              <div className="absolute inset-0 bg-base-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Cas d'usage Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Applications pratiques</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="card bg-base-100">
              <div className="card-body">
                <h3 className="card-title">Déplacements rapides</h3>
                <p>Passez rapidement d'un silo à un entrepôt ou d'une parcelle à une autre sans perdre de temps.</p>
              </div>
            </div>
            <div className="card bg-base-100">
              <div className="card-body">
                <h3 className="card-title">Transport de matériel</h3>
                <p>Grâce à la remorque compatible, transportez facilement vos outils et petits équipements.</p>
              </div>
            </div>
            <div className="card bg-base-100">
              <div className="card-body">
                <h3 className="card-title">Surveillance des cultures</h3>
                <p>Inspectez vos cultures et parcelles efficacement avec un moyen de transport écologique.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Caractéristiques Section */}
      <section className="bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Adaptée au monde agricole</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Caractéristiques techniques</h3>
              <ul className="list-inside list-disc space-y-2">
                <li>Autonomie jusqu'à 45 km</li>
                <li>Pneus tout-terrain adaptés aux chemins agricoles</li>
                <li>Capacité de charge importante</li>
                <li>Compatible avec notre remorque agricole</li>
                <li>Résistante aux conditions difficiles</li>
                <li>Maintenance simplifiée</li>
              </ul>
            </div>
            <div className="relative h-64">
              {/* Placeholder pour l'image technique - à remplacer */}
              <div className="absolute inset-0 bg-base-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Remorque Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="relative h-64 lg:h-96">
              {/* Placeholder pour l'image de la remorque - à remplacer */}
              <div className="absolute inset-0 bg-base-300"></div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Remorque agricole adaptable</h2>
              <p className="text-lg">Notre remorque spécialement conçue pour le monde agricole s'adapte parfaitement à votre trottinette TR-AVEL.</p>
              <ul className="list-inside list-disc space-y-2">
                <li>Capacité de charge : 40kg</li>
                <li>Système d'attache sécurisé</li>
                <li>Benne basculante</li>
                <li>Matériaux résistants</li>
              </ul>
              <button className="btn btn-primary">En savoir plus</button>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages Section */}
      <section className="bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Ils nous font confiance</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="card bg-base-100">
              <div className="card-body">
                <p className="italic">« La trottinette TR-AVEL a révolutionné nos déplacements sur l'exploitation. Gain de temps considérable et vraiment pratique avec la remorque. »</p>
                <div className="mt-4">
                  <p className="font-bold">Jean Dupont</p>
                  <p className="text-sm">Agriculteur en Bretagne</p>
                </div>
              </div>
            </div>
            <div className="card bg-base-100">
              <div className="card-body">
                <p className="italic">« Un investissement rentabilisé en quelques mois grâce au temps gagné dans nos déplacements quotidiens. »</p>
                <div className="mt-4">
                  <p className="font-bold">Marie Martin</p>
                  <p className="text-sm">Éleveuse en Normandie</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="card bg-primary text-primary-content">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl">Prêt à optimiser vos déplacements ?</h2>
              <p>Contactez-nous pour une démonstration sur votre exploitation</p>
              <div className="card-actions">
                <button className="btn btn-secondary">Demander une démo</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 