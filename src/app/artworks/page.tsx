import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ArtworkCard from '@/components/ui/ArtworkCard';

export const metadata: Metadata = {
  title: 'Artworks | Artistry',
  description: 'Explore unique artworks from talented artists around the world on Artistry, the global art marketplace.',
};

// Mock data for artworks
const artworks = [
  {
    id: "1",
    title: "Abstract Harmony",
    image: "https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=1965&auto=format&fit=crop",
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
    title: "Spirit of Nature",
    image: "https://images.unsplash.com/photo-1578926288207-32356a42541c?q=80&w=1964&auto=format&fit=crop",
    price: 1100,
    currency: "$",
    medium: "Watercolor",
    year: 2022,
    dimensions: "50 x 70 cm",
    artist: {
      id: "a4",
      name: "Nia Adebayo",
      country: "Nigeria",
      isVerified: true,
    },
  },
  {
    id: "5",
    title: "Vibrant Cityscape",
    image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=2070&auto=format&fit=crop",
    price: 1800,
    currency: "$",
    medium: "Acrylic on Canvas",
    year: 2023,
    dimensions: "100 x 120 cm",
    artist: {
      id: "a5",
      name: "Carlos Mendez",
      country: "Mexico",
      isVerified: true,
    },
  },
  {
    id: "6",
    title: "Patterns of Heritage",
    image: "https://images.unsplash.com/photo-1576769267415-9242c9cd2180?q=80&w=1974&auto=format&fit=crop",
    price: 950,
    currency: "$",
    medium: "Textile",
    year: 2022,
    dimensions: "70 x 90 cm",
    artist: {
      id: "a6",
      name: "Aisha Khan",
      country: "India",
      isVerified: false,
    },
  },
  {
    id: "7",
    title: "Northern Lights",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1994&auto=format&fit=crop",
    price: 2200,
    currency: "$",
    medium: "Photography",
    year: 2023,
    dimensions: "60 x 80 cm",
    artist: {
      id: "a7",
      name: "David Chen",
      country: "Canada",
      isVerified: true,
    },
  },
  {
    id: "8",
    title: "Rainforest Dreams",
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=1964&auto=format&fit=crop",
    price: 1300,
    currency: "$",
    medium: "Mixed Media",
    year: 2022,
    dimensions: "80 x 100 cm",
    artist: {
      id: "a8",
      name: "Sofia Oliveira",
      country: "Brazil",
      isVerified: false,
    },
  },
  {
    id: "9",
    title: "Geometric Abstraction",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1958&auto=format&fit=crop",
    price: 1650,
    currency: "$",
    medium: "Digital Print",
    year: 2023,
    dimensions: "70 x 70 cm",
    artist: {
      id: "a2",
      name: "James Wilson",
      country: "United Kingdom",
      isVerified: true,
    },
  },
  {
    id: "10",
    title: "Cherry Blossom Season",
    image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=1976&auto=format&fit=crop",
    price: 1900,
    currency: "$",
    medium: "Oil on Canvas",
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
    id: "11",
    title: "Desert Sunset",
    image: "https://images.unsplash.com/photo-1544867885-2333f61544ad?q=80&w=1974&auto=format&fit=crop",
    price: 1400,
    currency: "$",
    medium: "Acrylic on Canvas",
    year: 2022,
    dimensions: "80 x 100 cm",
    artist: {
      id: "a4",
      name: "Nia Adebayo",
      country: "Nigeria",
      isVerified: true,
    },
  },
  {
    id: "12",
    title: "Urban Jungle",
    image: "https://images.unsplash.com/photo-1581337234723-8c22934e2c6b?q=80&w=1974&auto=format&fit=crop",
    price: 1750,
    currency: "$",
    medium: "Mixed Media",
    year: 2023,
    dimensions: "100 x 120 cm",
    artist: {
      id: "a1",
      name: "Elena Rodriguez",
      country: "Spain",
      isVerified: true,
    },
  },
];

export default function ArtworksPage() {
  return (
    <div className="min-h-screen bg-netflix-black text-white pb-20">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop"
          alt="Artworks"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 netflix-gradient" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">Explore Artworks</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Discover unique pieces from talented artists around the world
            </p>
          </div>
        </div>
      </div>

      {/* Filters and Content */}
      <div className="container py-12">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Browse Artworks</h2>
            <p className="text-white/60">Explore {artworks.length} artworks from global artists</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <select className="bg-netflix-dark-gray border border-white/10 text-white rounded px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-netflix-red-500">
              <option value="">All Countries</option>
              <option value="Spain">Spain</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Japan">Japan</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Mexico">Mexico</option>
              <option value="India">India</option>
              <option value="Canada">Canada</option>
              <option value="Brazil">Brazil</option>
            </select>
            
            <select className="bg-netflix-dark-gray border border-white/10 text-white rounded px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-netflix-red-500">
              <option value="">All Mediums</option>
              <option value="Oil on Canvas">Oil on Canvas</option>
              <option value="Acrylic on Canvas">Acrylic on Canvas</option>
              <option value="Mixed Media">Mixed Media</option>
              <option value="Watercolor">Watercolor</option>
              <option value="Photography">Photography</option>
              <option value="Digital Print">Digital Print</option>
              <option value="Textile">Textile</option>
            </select>
            
            <select className="bg-netflix-dark-gray border border-white/10 text-white rounded px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-netflix-red-500">
              <option value="featured">Sort: Featured</option>
              <option value="price-asc">Price (Low to High)</option>
              <option value="price-desc">Price (High to Low)</option>
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>
        
        {/* Price Range Filter */}
        <div className="mb-10 bg-netflix-dark-gray p-6 rounded">
          <h3 className="text-lg font-bold mb-4">Price Range</h3>
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <div className="w-full sm:w-2/3 px-4">
              <div className="relative h-1 bg-white/20 rounded-full">
                <div className="absolute h-1 bg-netflix-red-500 rounded-full left-[20%] right-[30%]"></div>
                <div className="absolute w-4 h-4 bg-white rounded-full border-2 border-netflix-red-500 -mt-1.5 cursor-pointer" style={{ left: '20%' }}></div>
                <div className="absolute w-4 h-4 bg-white rounded-full border-2 border-netflix-red-500 -mt-1.5 cursor-pointer" style={{ left: '70%' }}></div>
              </div>
            </div>
            <div className="flex gap-4 w-full sm:w-1/3">
              <div className="w-1/2">
                <label className="block text-xs text-white/60 mb-1">Min Price</label>
                <input 
                  type="text" 
                  value="$900" 
                  className="w-full bg-black/30 border border-white/10 rounded px-3 py-2 text-sm text-white"
                  readOnly
                />
              </div>
              <div className="w-1/2">
                <label className="block text-xs text-white/60 mb-1">Max Price</label>
                <input 
                  type="text" 
                  value="$2000" 
                  className="w-full bg-black/30 border border-white/10 rounded px-3 py-2 text-sm text-white"
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Artworks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {artworks.map(artwork => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
        
        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-netflix-red-500 flex items-center justify-center text-white">1</button>
            <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/10">2</button>
            <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/10">3</button>
            <span className="text-white/50 mx-1">...</span>
            <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/10">8</button>
            <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 