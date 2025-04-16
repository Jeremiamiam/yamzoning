'use client';

import React from 'react';
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

        {/* Actions (Search, Cart, Account) */}
        <div className="flex-none gap-2">
          {/* Search */}
          <div className="form-control hidden lg:flex">
            <input
              type="text"
              placeholder="Rechercher"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>

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

          {/* Account */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </label>
          </div>

          {/* Menu mobile */}
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu dropdown-content menu-sm z-[1] mt-3 fixed top-[4rem] left-0 w-full h-[calc(100vh-4rem)] rounded-none bg-base-100 p-4 shadow">
              <li><Link href="/products/2-roues">2 roues</Link></li>
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
              <li><Link href="/products/accessories">Accessoires</Link></li>
              <li className="mt-2">
                <input
                  type="text"
                  placeholder="Rechercher"
                  className="input input-bordered w-full"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
