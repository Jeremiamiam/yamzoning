import React from 'react';
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import '@/styles/globals.css';
// Removed duplicate imports below
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import Providers from './providers';
// Removed import for DesignSystemPanel as it will be moved to /theme page
// import DesignSystemPanel from '@/components/ui/DesignSystemPanel'; 

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat'
});

export const metadata: Metadata = {
  title: 'Lotissime - UX Prototyping Tool', // Updated title
  description: 'Outil de prototypage rapide pour interfaces web interactives avec DaisyUI et A/B Testing.', // Updated description
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr"> {/* Removed data-theme="dracula" */}
      <body className={`${inter.className} ${montserrat.variable} tracking-[0.11em] font-sans`}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
          {/* Panel removed from layout */}
        </Providers>
      </body>
    </html>
  );
}
