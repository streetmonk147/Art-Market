import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Artwork Details | Artistry',
  description: 'View and purchase unique artwork from talented artists around the world.',
};

// Mock artwork data - in a real app, this would be fetched from an API
const artwork = {
  id: "1",
  title: "Abstract Harmony",
  description: "A vibrant exploration of color and form, this abstract piece invites viewers to find their own meaning within its dynamic composition. Layers of paint create depth and movement, while bold brushstrokes convey emotion and energy.",
  image: "https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=1965&auto=format&fit=crop",
  price: 1200,
  currency: "$",
  medium: "Oil on Canvas",
  year: 2023,
  dimensions: "80 x 100 cm",
  inStock: true,
  tags: ["abstract", "contemporary", "colorful", "large"],
  artist: {
    id: "a1",
    name: "Elena Rodriguez",
    country: "Spain",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    bio: "Contemporary artist specializing in abstract expressionism with vibrant colors and bold strokes.",
    artworks: 24,
    isVerified: true,
  },
};

// Mock related artworks
const relatedArtworks = [
  {
    id: "2",
    title: "Urban Reflections",
    image: "https://images.unsplash.com/photo-1573221566340-81bdde00e00b?q=80&w=1965&auto=format&fit=crop",
    price: 950,
    currency: "$",
    artist: {
      name: "James Wilson",
      country: "United Kingdom",
    },
  },
  {
    id: "3",
    title: "Serenity in Blue",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2145&auto=format&fit=crop",
    price: 1500,
    currency: "$",
    artist: {
      name: "Yuki Tanaka",
      country: "Japan",
    },
  },
  {
    id: "4",
    title: "Spirit of Nature",
    image: "https://images.unsplash.com/photo-1578926288207-32356a42541c?q=80&w=1964&auto=format&fit=crop",
    price: 1100,
    currency: "$",
    artist: {
      name: "Nia Adebayo",
      country: "Nigeria",
    },
  },
];

export default function ArtworkDetailPage({ params }: { params: { id: string } }) {
  // In a real app, we would fetch the artwork data based on params.id
  
  return (
    <div className="min-h-screen bg-netflix-black text-white pb-20">
      {/* Artwork Hero */}
      <div className="relative pt-20 pb-10 overflow-hidden">
        <div className="absolute inset-0 opacity-20 blur-xl z-0">
          <Image
            src={artwork.image}
            alt={artwork.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-netflix-black/80 to-netflix-black z-0"></div>
        
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Artwork Image */}
            <div className="w-full lg:w-3/5 aspect-[4/3] relative rounded-lg overflow-hidden shadow-2xl group">
              <Image
                src={artwork.image}
                alt={artwork.title}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Zoom button */}
              <button className="absolute bottom-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
                </svg>
              </button>
            </div>
            
            {/* Artwork Details */}
            <div className="w-full lg:w-2/5 space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{artwork.title}</h1>
                <div className="flex items-center space-x-2">
                  <Link href={`/artists/${artwork.artist.id}`} className="text-lg text-white/80 hover:text-white transition-colors">
                    {artwork.artist.name}
                  </Link>
                  {artwork.artist.isVerified && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500">
                      <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53-1.471-1.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.137-.089l4-5.598Z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-sm text-white/70">
                  {artwork.artist.country}
                </span>
                <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-sm text-white/70">
                  {artwork.year}
                </span>
                <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-sm text-white/70">
                  {artwork.medium}
                </span>
              </div>
              
              <div className="text-3xl font-bold text-netflix-red-500">
                {artwork.currency}{artwork.price.toLocaleString()}
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Description</h3>
                <p className="text-white/80 leading-relaxed">{artwork.description}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm text-white/70">
                <div>
                  <span className="block font-medium text-white">Dimensions</span>
                  <span>{artwork.dimensions}</span>
                </div>
                <div>
                  <span className="block font-medium text-white">Medium</span>
                  <span>{artwork.medium}</span>
                </div>
                <div>
                  <span className="block font-medium text-white">Year</span>
                  <span>{artwork.year}</span>
                </div>
                <div>
                  <span className="block font-medium text-white">Availability</span>
                  <span className={artwork.inStock ? "text-green-500" : "text-red-500"}>
                    {artwork.inStock ? "In Stock" : "Sold Out"}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  href="/cart" 
                  variant="netflix" 
                  size="lg"
                  className="flex-1 transform hover:-translate-y-1 transition-transform duration-300"
                >
                  Add to Cart
                </Button>
                <Button 
                  href="/checkout" 
                  variant="outline" 
                  size="lg"
                  className="flex-1 bg-transparent border-white/30 text-white hover:bg-white/10 transform hover:-translate-y-1 transition-transform duration-300"
                >
                  Buy Now
                </Button>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <button className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                  <span>Add to Favorites</span>
                </button>
                <button className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                  </svg>
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Artist Section */}
      <section className="py-12 bg-netflix-dark-gray">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 relative inline-block group">
            About the Artist
            <span className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 bg-netflix-red-500 transition-all duration-500"></span>
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/4">
              <div className="relative w-40 h-40 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-white/10">
                <Image
                  src={artwork.artist.image}
                  alt={artwork.artist.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="w-full md:w-3/4 space-y-4">
              <div className="flex items-center">
                <h3 className="text-xl font-bold">{artwork.artist.name}</h3>
                {artwork.artist.isVerified && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500 ml-2">
                    <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53-1.471-1.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.137-.089l4-5.598Z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-sm text-white/70">
                  {artwork.artist.country}
                </span>
                <span className="text-white/70 text-sm">{artwork.artist.artworks} artworks</span>
              </div>
              
              <p className="text-white/80">{artwork.artist.bio}</p>
              
              <Button 
                href={`/artists/${artwork.artist.id}`} 
                variant="outline"
                className="bg-transparent border-white/30 text-white hover:bg-white/10 transform hover:-translate-y-1 transition-transform duration-300"
              >
                View Artist Profile
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Artworks */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 relative inline-block group">
            You May Also Like
            <span className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 bg-netflix-red-500 transition-all duration-500"></span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedArtworks.map((relatedArtwork) => (
              <Link 
                key={relatedArtwork.id} 
                href={`/artworks/${relatedArtwork.id}`}
                className="group bg-netflix-dark-gray rounded overflow-hidden hover:scale-[1.03] transition-all duration-300 hover:shadow-[0_0_20px_rgba(229,9,20,0.2)]"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={relatedArtwork.image}
                    alt={relatedArtwork.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white bg-netflix-red-500/80 px-4 py-2 rounded text-sm font-medium transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      View Details
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg group-hover:text-netflix-red-500 transition-colors duration-300">{relatedArtwork.title}</h3>
                  <p className="text-white/70 text-sm">{relatedArtwork.artist.name}, {relatedArtwork.artist.country}</p>
                  <p className="text-netflix-red-500 font-bold mt-2">{relatedArtwork.currency}{relatedArtwork.price.toLocaleString()}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 