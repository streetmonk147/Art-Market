import Image from 'next/image';
import Link from 'next/link';

interface Artist {
  id: string;
  name: string;
  country: string;
  isVerified: boolean;
}

interface Artwork {
  id: string;
  title: string;
  image: string;
  price: number;
  currency: string;
  medium: string;
  year: number;
  dimensions: string;
  artist: Artist;
}

interface ArtworkCardProps {
  artwork: Artwork;
  className?: string;
}

export default function ArtworkCard({ artwork, className = '' }: ArtworkCardProps) {
  return (
    <div className={`group bg-black rounded overflow-hidden hover:scale-[1.05] transition-all duration-300 hover:shadow-[0_0_20px_rgba(229,9,20,0.2)] ${className}`}>
      {/* Artwork Image */}
      <Link href={`/artworks/${artwork.id}`} className="relative block aspect-square overflow-hidden">
        <Image 
          src={artwork.image} 
          alt={artwork.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 bg-netflix-red-500 text-white px-4 py-2 rounded text-sm font-medium opacity-0 group-hover:opacity-100">
            View Details
          </div>
          
          {/* Quick actions */}
          <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
            <button 
              className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Like artwork"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </button>
            <button 
              className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Add to collection"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
          </div>
        </div>
      </Link>

      {/* Artwork Info */}
      <div className="p-4 text-white relative">
        {/* Price tag */}
        <div className="absolute -top-6 right-3 bg-netflix-red-500 text-white text-sm font-bold px-3 py-1 rounded shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
          {artwork.currency}{artwork.price.toLocaleString()}
        </div>
        
        <div className="flex items-start justify-between mt-2">
          <h3 className="font-bold text-base line-clamp-1 group-hover:text-netflix-red-500 transition-colors duration-300">{artwork.title}</h3>
        </div>

        <div className="flex items-center space-x-1 mt-1">
          <Link href={`/artists/${artwork.artist.id}`} className="text-sm text-white/70 hover:text-white group-hover:text-white/90 transition-colors duration-300">
            {artwork.artist.name}
          </Link>
          
          {artwork.artist.isVerified && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-blue-500">
              <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53-1.471-1.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.137-.089l4-5.598Z" clipRule="evenodd" />
            </svg>
          )}
        </div>

        <div className="flex items-center text-xs text-white/50 space-x-2 mt-2">
          <span>{artwork.medium}</span>
          <span>•</span>
          <span>{artwork.year}</span>
          <span>•</span>
          <span>{artwork.dimensions}</span>
        </div>

        {/* Country Badge */}
        <div className="flex items-center mt-3">
          <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/70 hover:bg-white/20 transition-colors duration-300">
            {artwork.artist.country}
          </span>
        </div>
        
        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-netflix-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
} 