'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Simplified nav links for the template
const navLinks = [
  { href: '/', label: 'Accueil', exact: true },
  { href: '/theme', label: 'Thème', exact: true }, // Link to the theme page
  // Add more generic links later if needed (e.g., /about, /contact)
];

export const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (link: typeof navLinks[0]): boolean => {
    if (link.exact) return pathname === link.href;
    return false; // Only exact match for now
  };

  const renderNavItems = (isMobile: boolean) => {
    return navLinks.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className={isActive(link) ? 'active' : ''}>
            {link.label}
          </Link>
        </li>
      ));
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-base-100 shadow-md">
      <div className="navbar container mx-auto">
        {/* Logo */}
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl normal-case">
            TR-AVEL
          </Link>
        </div>

        {/* Navigation principale - Desktop */}
        <div className="hidden flex-none lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/products/2-roues">2 roues</Link>
            </li>
            <li>
              <span className="flex items-center gap-1">
                3 roues
                <span className="text-xs font-light italic text-base-content/70">bientôt</span>
              </span>
            </li>
            <li>
              <span className="flex items-center gap-1">
                4 roues
                <span className="text-xs font-light italic text-base-content/70">bientôt</span>
              </span>
            </li>
            <li>
              <Link href="/products/accessories">Accessoires</Link>
            </li>
          </ul>
        </div>

        {/* Actions */}
        <div className="flex-none gap-2">
          {/* Cart */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="badge badge-sm indicator-item">0</span>
              </div>
            </label>
          </div>

          {/* Menu mobile */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="btn btn-ghost btn-circle"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </button>
            {isMobileMenuOpen && (
              <div className="fixed inset-0 top-[4rem] z-50 bg-base-100">
                <ul className="menu p-4">
                  <li><Link href="/products/2-roues" onClick={() => setIsMobileMenuOpen(false)}>2 roues</Link></li>
                  <li>
                    <span className="flex items-center gap-1">
                      3 roues
                      <span className="text-xs font-light italic text-base-content/70">bientôt</span>
                    </span>
                  </li>
                  <li>
                    <span className="flex items-center gap-1">
                      4 roues
                      <span className="text-xs font-light italic text-base-content/70">bientôt</span>
                    </span>
                  </li>
                  <li><Link href="/products/accessories" onClick={() => setIsMobileMenuOpen(false)}>Accessoires</Link></li>
                  <li className="mt-4">
                    <Link 
                      href="/products/2-roues" 
                      className="btn btn-primary w-full"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Découvrir nos véhicules
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
