'use client';

import { useState, useRef, useEffect } from 'react';

interface Country {
  code: string;
  name: string;
  region: string;
}

// Sample countries - in a real app, this would come from an API
const countries: Country[] = [
  { code: 'us', name: 'United States', region: 'North America' },
  { code: 'ca', name: 'Canada', region: 'North America' },
  { code: 'mx', name: 'Mexico', region: 'North America' },
  { code: 'gb', name: 'United Kingdom', region: 'Europe' },
  { code: 'fr', name: 'France', region: 'Europe' },
  { code: 'de', name: 'Germany', region: 'Europe' },
  { code: 'es', name: 'Spain', region: 'Europe' },
  { code: 'it', name: 'Italy', region: 'Europe' },
  { code: 'jp', name: 'Japan', region: 'Asia' },
  { code: 'cn', name: 'China', region: 'Asia' },
  { code: 'in', name: 'India', region: 'Asia' },
  { code: 'au', name: 'Australia', region: 'Oceania' },
  { code: 'nz', name: 'New Zealand', region: 'Oceania' },
  { code: 'br', name: 'Brazil', region: 'South America' },
  { code: 'ar', name: 'Argentina', region: 'South America' },
  { code: 'za', name: 'South Africa', region: 'Africa' },
  { code: 'ng', name: 'Nigeria', region: 'Africa' },
  { code: 'eg', name: 'Egypt', region: 'Africa' },
];

interface CountrySelectorProps {
  onCountryChange?: (country: Country) => void;
  className?: string;
  onDropdownToggle?: (isOpen: boolean) => void;
}

export default function CountrySelector({
  onCountryChange,
  className = '',
  onDropdownToggle,
}: CountrySelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        if (onDropdownToggle) onDropdownToggle(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onDropdownToggle]);

  // Group countries by region
  const groupedCountries = countries.reduce((acc, country) => {
    if (!acc[country.region]) {
      acc[country.region] = [];
    }
    acc[country.region].push(country);
    return acc;
  }, {} as Record<string, Country[]>);

  // Filter countries based on search term
  const filteredRegions = Object.keys(groupedCountries).filter(region => {
    return groupedCountries[region].some(country => 
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setIsOpen(false);
    if (onCountryChange) {
      onCountryChange(country);
    }
    if (onDropdownToggle) onDropdownToggle(false);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Selected country or placeholder */}
      <button
        type="button"
        className="flex items-center space-x-2 bg-gradient-to-r from-netflix-red-500 via-netflix-dark-gray to-netflix-red-500 border border-white/20 rounded-lg px-4 py-3 text-base w-full text-white transition-colors hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-netflix-red-500"
        onClick={() => {
          setIsOpen(!isOpen);
          if (onDropdownToggle) onDropdownToggle(!isOpen);
        }}
      >
        {selectedCountry ? (
          <span>{selectedCountry.name}</span>
        ) : (
          <span className="text-white/70">Select your country</span>
        )}
        
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="w-5 h-5 ml-auto"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute bottom-full mb-2 w-full bg-netflix-dark-gray border border-white/10 rounded-lg shadow-lg overflow-hidden animate-fade-in origin-bottom z-[100]">
          {/* Search input */}
          <div className="p-3 border-b border-white/10">
            <input
              type="text"
              placeholder="Search countries..."
              className="w-full p-3 text-base bg-black/40 border border-white/10 rounded-md text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-netflix-red-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Country list */}
          <div className="max-h-72 overflow-y-auto py-2">
            {filteredRegions.length > 0 ? (
              filteredRegions.map((region) => (
                <div key={region}>
                  <div className="px-4 py-2 text-xs text-white/50 uppercase font-semibold">
                    {region}
                  </div>
                  {groupedCountries[region]
                    .filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map((country) => (
                      <button
                        key={country.code}
                        type="button"
                        className="flex items-center w-full px-4 py-3 text-base hover:bg-white/10 text-left text-white transition-colors"
                        onClick={() => handleCountrySelect(country)}
                      >
                        <span>{country.name}</span>
                      </button>
                    ))}
                </div>
              ))
            ) : (
              <div className="px-4 py-3 text-base text-white/50 text-center">No countries found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 