import React from 'react';
import Image from 'next/image';

export default function ProPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-content">
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold lg:text-5xl">Solutions de mobilité pour professionnels et collectivités</h1>
              <p className="text-lg">Optimisez la mobilité de vos équipes avec nos trottinettes électriques tout-terrain, conçues et fabriquées en France.</p>
              <button className="btn btn-secondary">Demander un devis</button>
            </div>
            <div className="relative h-64 lg:h-96">
              {/* Placeholder pour l'image - à remplacer */}
              <div className="absolute inset-0 bg-base-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Pourquoi choisir TR-AVEL ?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="card bg-base-100">
              <div className="card-body">
                <h3 className="card-title">Personnalisation</h3>
                <p>Adaptez vos trottinettes aux couleurs de votre entreprise ou de votre ville.</p>
              </div>
            </div>
            <div className="card bg-base-100">
              <div className="card-body">
                <h3 className="card-title">Gestion de flotte</h3>
                <p>Solution complète pour gérer votre parc de trottinettes avec maintenance incluse.</p>
              </div>
            </div>
            <div className="card bg-base-100">
              <div className="card-body">
                <h3 className="card-title">Made in France</h3>
                <p>Fabrication française, garantissant qualité et service de proximité.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Nos solutions sur mesure</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="card bg-base-100">
              <div className="card-body">
                <h3 className="card-title">Pour les entreprises</h3>
                <ul className="list-inside list-disc space-y-2">
                  <li>Flottes personnalisées aux couleurs de votre entreprise</li>
                  <li>Solutions de stockage et de recharge</li>
                  <li>Formation des utilisateurs</li>
                  <li>Service maintenance dédié</li>
                </ul>
              </div>
            </div>
            <div className="card bg-base-100">
              <div className="card-body">
                <h3 className="card-title">Pour les collectivités</h3>
                <ul className="list-inside list-disc space-y-2">
                  <li>Intégration aux services municipaux</li>
                  <li>Solutions adaptées aux agents territoriaux</li>
                  <li>Accompagnement dans la transition écologique</li>
                  <li>Support technique local</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="card bg-primary text-primary-content">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl">Intéressé par nos solutions ?</h2>
              <p>Contactez-nous pour une étude personnalisée de vos besoins</p>
              <div className="card-actions">
                <button className="btn btn-secondary">Nous contacter</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 