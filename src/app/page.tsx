"use client";

import HeroBanner from "@/components/ui/HeroBanner";
import ArtworkCard from "@/components/ui/ArtworkCard";
import CountrySelector from "@/components/ui/CountrySelector";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

// Mock data for featured artworks
const featuredArtworks = [
  {
    id: "1",
    title: "Abstract Harmony",
    image: "https://images.unsplash.com/photo-1615184061969-7310af7f92df?q=80&w=1965&auto=format&fit=crop",
    price: 1200,
    currency: "$",
    medium: "Oil on Canvas",
    year: 2023,
    dimensions: "80 x 100 cm",
    artist: {
      id: "a1",
      name: "Elena Rodriguez",
      country: "Spain",
      isVerified: true,
    },
  },
  {
    id: "2",
    title: "Urban Reflections",
    image: "https://images.unsplash.com/photo-1573221566340-81bdde00e00b?q=80&w=1965&auto=format&fit=crop",
    price: 950,
    currency: "$",
    medium: "Acrylic on Canvas",
    year: 2022,
    dimensions: "60 x 75 cm",
    artist: {
      id: "a2",
      name: "James Wilson",
      country: "United Kingdom",
      isVerified: true,
    },
  },
  {
    id: "3",
    title: "Serenity in Blue",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2145&auto=format&fit=crop",
    price: 1500,
    currency: "$",
    medium: "Mixed Media",
    year: 2023,
    dimensions: "90 x 120 cm",
    artist: {
      id: "a3",
      name: "Yuki Tanaka",
      country: "Japan",
      isVerified: false,
    },
  },
  {
    id: "4",
    title: "Golden Memories",
    image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1964&auto=format&fit=crop",
    price: 820,
    currency: "$",
    medium: "Mixed Media",
    year: 2021,
    dimensions: "50 x 65 cm",
    artist: {
      id: "a4",
      name: "Sofia Chen",
      country: "China",
      isVerified: false,
    },
  },
];

// Mock data for featured artists
const featuredArtists = [
  {
    id: "a1",
    name: "Elena Rodriguez",
    country: "Spain",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    bio: "Contemporary artist specializing in abstract expressionism.",
    artworks: 24,
    isVerified: true,
  },
  {
    id: "a2",
    name: "James Wilson",
    country: "United Kingdom",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    bio: "Urban landscape painter with a focus on architectural elements.",
    artworks: 17,
    isVerified: true,
  },
  {
    id: "a3",
    name: "Yuki Tanaka",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    bio: "Mixed media artist exploring the relationship between tradition and modernity.",
    artworks: 31,
    isVerified: false,
  },
];

// Mock data for upcoming events
const upcomingEvents = [
  {
    id: "e1",
    title: "Global Art Exchange",
    date: "June 15-20, 2024",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "e2",
    title: "Contemporary Visions",
    date: "July 8-15, 2024",
    location: "Paris, France",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "e3",
    title: "Art & Culture Festival",
    date: "August 3-10, 2024",
    location: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1635321593217-40050ad13c74?q=80&w=1992&auto=format&fit=crop",
  },
];

export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner */}
      <HeroBanner
        title="Where Art Finds Its Home"
        subtitle="Discover, collect, and connect with extraordinary creations from artists across the globe. Every brushstroke has a story waiting for you."
        backgroundImage="https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop"
        primaryButtonText="Explore Art"
        primaryButtonHref="/artworks"
        secondaryButtonText="Sell Your Art"
        secondaryButtonHref="/become-artist"
      />

      {/* Country Selection */}
      <section className="py-20 bg-netflix-black text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute w-72 h-72 -top-24 -left-24 rounded-full bg-primary-600/10 blur-3xl animate-pulse-light"></div>
        <div className="absolute w-64 h-64 -bottom-32 -right-32 rounded-full bg-netflix-red-500/10 blur-3xl animate-pulse-light"></div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 animate-slide-up">
              Where are you joining us from?
            </h2>
            <p className="text-lg text-white/70 mb-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
              For a more personalized journey through the world of art.
            </p>
            <div className="max-w-md mx-auto mb-8 transform hover:scale-[1.02] transition-all duration-300 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <CountrySelector className="mb-6" onDropdownToggle={setIsDropdownOpen} />
            </div>
            {!isDropdownOpen && (
              <Button 
                href="/artworks" 
                variant="netflix" 
                size="lg"
                className="animate-slide-up transform hover:-translate-y-1 transition-transform duration-300 hover:shadow-[0_0_15px_rgba(229,9,20,0.5)]"
                style={{ animationDelay: '300ms' }}
              >
                Explore
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Featured Artworks */}
      <section className="py-20 bg-netflix-dark-gray text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(15,15,15,1)_70%)]"></div>
        
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 animate-reveal">
            <div>
              <h2 className="text-4xl font-black mb-3 relative inline-block group">
                Popular Artworks
                <span className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 bg-netflix-red-500 transition-all duration-500"></span>
              </h2>
              <p className="text-white/70">Trending pieces from our global marketplace, updated daily.</p>
            </div>
            <Button 
              href="/artworks" 
              variant="netflix" 
              className="mt-4 md:mt-0 transform hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(229,9,20,0.4)] transition-all duration-300"
            >
              Browse All Artworks
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredArtworks.map((artwork, index) => (
              <div 
                key={artwork.id} 
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ArtworkCard artwork={artwork} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="py-20 bg-netflix-black text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute w-96 h-96 top-0 right-0 rounded-full bg-primary-600/5 blur-3xl"></div>
        <div className="absolute w-80 h-80 bottom-20 left-0 rounded-full bg-netflix-red-500/5 blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 animate-reveal">
            <div>
              <h2 className="text-4xl font-black mb-3 relative inline-block group">
                Top Sellers
                <span className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 bg-netflix-red-500 transition-all duration-500"></span>
              </h2>
              <p className="text-white/70">Meet some of our most successful artists selling on the platform.</p>
            </div>
            <Button 
              href="/artists" 
              variant="netflix" 
              className="mt-4 md:mt-0 transform hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(229,9,20,0.4)] transition-all duration-300"
            >
              Find Artists
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArtists.map((artist, index) => (
              <div 
                key={artist.id} 
                className="bg-netflix-dark-gray rounded overflow-hidden hover:scale-[1.03] transition-all duration-300 hover:shadow-[0_0_20px_rgba(229,9,20,0.2)] group animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-netflix-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 relative">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold group-hover:text-netflix-red-500 transition-colors duration-300">{artist.name}</h3>
                    {artist.isVerified && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500">
                        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53-1.471-1.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.137-.089l4-5.598Z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <div className="flex items-center mb-4">
                    <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm">
                      {artist.country}
                    </span>
                    <span className="ml-4 text-white/60 text-sm">{artist.artworks} artworks</span>
                  </div>
                  <p className="text-white/70 mb-5 group-hover:text-white/90 transition-colors duration-300">{artist.bio}</p>
                  <Button 
                    href={`/artists/${artist.id}`} 
                    variant="netflix" 
                    fullWidth
                    className="transform group-hover:-translate-y-1 transition-transform duration-300"
                  >
                    View Profile
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-netflix-dark-gray text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,0,0,0)_0%,rgba(15,15,15,1)_70%)]"></div>
        
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 animate-reveal">
            <div>
              <h2 className="text-4xl font-black mb-3 relative inline-block group">
                Art Market Events
                <span className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 bg-netflix-red-500 transition-all duration-500"></span>
              </h2>
              <p className="text-white/70">Exhibitions, fairs, and opportunities to connect with buyers and sellers.</p>
            </div>
            <Button 
              href="/events" 
              variant="netflix" 
              className="mt-4 md:mt-0 transform hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(229,9,20,0.4)] transition-all duration-300"
            >
              Discover Events
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Link 
                key={event.id} 
                href={`/events/${event.id}`}
                className="group bg-black rounded overflow-hidden hover:scale-[1.03] transition-all duration-300 hover:shadow-[0_0_20px_rgba(229,9,20,0.2)] animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                </div>
                <div className="p-5 group-hover:bg-netflix-dark-gray transition-colors duration-300">
                  <h4 className="text-xl font-bold mb-3 group-hover:text-netflix-red-500 transition-colors duration-300">{event.title}</h4>
                  <div className="flex items-center text-white/70 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                    {event.date}
                  </div>
                  <div className="flex items-center text-white/70 group-hover:text-white/90 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    {event.location}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-netflix-black via-accent to-netflix-black text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-netflix-red-500/30 filter blur-2xl animate-pulse-light"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-primary-600/30 filter blur-2xl animate-pulse-light" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-reveal">
            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight drop-shadow-lg">
              Join Our <span className="text-white">Global Art Marketplace</span>
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Whether you're an artist looking to sell your creations or a collector searching for your next masterpiece, Artistry connects you with a worldwide community.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button 
                href="/signup" 
                variant="netflix"
                size="xl"
                className="text-lg font-medium transform hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
              >
                Sign Up to Buy
              </Button>
              <Button 
                href="/become-artist" 
                variant="outline"
                size="xl"
                className="bg-transparent border-white/30 text-white hover:bg-white/10 text-lg font-medium transform hover:-translate-y-2 transition-all duration-300"
              >
                Start Selling
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
