import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded"> {/* Simplified structure */}
      <nav className="grid grid-flow-col gap-4">
        <Link href="/" className="link link-hover">Accueil</Link> 
        <Link href="/theme" className="link link-hover">Thème</Link> 
        {/* Add more generic links if needed */}
      </nav> 
      <aside>
        <p>Copyright © {currentYear} - Lotissime Project</p> {/* Updated copyright */}
      </aside>
    </footer>
  );
};

export default Footer;
