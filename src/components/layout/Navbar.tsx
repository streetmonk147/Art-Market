'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Artworks', href: '/artworks' },
  { name: 'Events', href: '/events' },
  { name: 'Community', href: '/community' },
  { name: 'About', href: '/about' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality will be implemented later
    console.log('Search for:', searchQuery);
  };

  return (
    <nav 
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-netflix-black/90 backdrop-blur-sm shadow' 
          : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-accent">
            Artistry
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-white ${
                pathname === link.href ? 'text-white' : 'text-white/70'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Secondary Navigation and Auth */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Search */}
          <button 
            className="text-white/70 hover:text-white"
            aria-label="Search"
            onClick={() => document.getElementById('search-input')?.focus()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>

          {/* Login/Signup */}
          <Link 
            href="/login" 
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            Sign In
          </Link>
          
          <Link 
            href="/signup" 
            className="netflix-button text-sm py-1.5 px-4"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white/70 hover:text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-netflix-black border-t border-neutral-800">
          <div className="container py-4 space-y-3">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="relative">
              <input
                id="search-input"
                type="text"
                placeholder="Search artists, artworks..."
                className="w-full py-2 px-3 text-sm bg-neutral-800 rounded border-none text-white placeholder:text-white/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit" 
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white/50"
                aria-label="Search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>
            </form>

            {/* Mobile Navigation */}
            <div className="space-y-1 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-2 text-base ${
                    pathname === link.href
                      ? 'text-white'
                      : 'text-white/70 hover:text-white'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Auth */}
            <div className="flex flex-col space-y-2 pt-2 border-t border-neutral-800">
              <Link 
                href="/login" 
                className="w-full py-2 text-center text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link 
                href="/signup" 
                className="netflix-button text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
              <Link 
                href="/become-artist" 
                className="w-full py-2 text-center border border-white/20 rounded text-white bg-transparent hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Become an Artist
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 