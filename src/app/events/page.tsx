import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Events | Artistry',
  description: 'Discover art exhibitions, workshops, and cultural events from around the world on Artistry.',
};

// Mock data for events
const events = [
  {
    id: "e1",
    title: "Global Art Exchange",
    date: "June 15-20, 2024",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    description: "A week-long exhibition featuring artists from over 30 countries, showcasing diverse cultural perspectives through various art forms.",
    featured: true,
    type: "Exhibition",
  },
  {
    id: "e2",
    title: "Contemporary Visions",
    date: "July 8-15, 2024",
    location: "Paris, France",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=2070&auto=format&fit=crop",
    description: "An exploration of cutting-edge contemporary art trends, featuring installations, digital art, and mixed media works.",
    featured: true,
    type: "Exhibition",
  },
  {
    id: "e3",
    title: "Art & Culture Festival",
    date: "August 3-10, 2024",
    location: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1635321593217-40050ad13c74?q=80&w=1992&auto=format&fit=crop",
    description: "A celebration of traditional and modern Japanese art forms, with workshops, performances, and exhibitions.",
    featured: false,
    type: "Festival",
  },
  {
    id: "e4",
    title: "Watercolor Masterclass",
    date: "May 25, 2024",
    location: "Online",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2080&auto=format&fit=crop",
    description: "Learn advanced watercolor techniques from master artist Elena Rodriguez in this interactive online workshop.",
    featured: false,
    type: "Workshop",
  },
  {
    id: "e5",
    title: "Urban Art Walk",
    date: "June 5, 2024",
    location: "Berlin, Germany",
    image: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?q=80&w=2015&auto=format&fit=crop",
    description: "A guided tour of Berlin's most iconic street art and murals, with insights into the artists and their inspirations.",
    featured: false,
    type: "Tour",
  },
  {
    id: "e6",
    title: "African Art Symposium",
    date: "July 20-22, 2024",
    location: "Lagos, Nigeria",
    image: "https://images.unsplash.com/photo-1561195761-c83d027c96b6?q=80&w=1974&auto=format&fit=crop",
    description: "A three-day symposium exploring the rich traditions and contemporary expressions of African art.",
    featured: true,
    type: "Conference",
  },
  {
    id: "e7",
    title: "Digital Art & NFT Summit",
    date: "August 15, 2024",
    location: "San Francisco, USA",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    description: "A one-day summit on the intersection of digital art, blockchain technology, and the future of art collecting.",
    featured: false,
    type: "Conference",
  },
  {
    id: "e8",
    title: "Portrait Photography Workshop",
    date: "June 12, 2024",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?q=80&w=2089&auto=format&fit=crop",
    description: "A hands-on workshop teaching the art of portrait photography with professional models and lighting equipment.",
    featured: false,
    type: "Workshop",
  },
];

export default function EventsPage() {
  // Get featured events
  const featuredEvents = events.filter(event => event.featured);
  // Get non-featured events
  const regularEvents = events.filter(event => !event.featured);

  return (
    <div className="min-h-screen bg-netflix-black text-white pb-20">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop"
          alt="Events"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 netflix-gradient" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">Art Events & Exhibitions</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Discover art exhibitions, workshops, and cultural events from around the world
            </p>
          </div>
        </div>
      </div>

      {/* Filters and Content */}
      <div className="container py-12">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Upcoming Events</h2>
            <p className="text-white/60">Explore {events.length} events from around the world</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <select className="bg-netflix-dark-gray border border-white/10 text-white rounded px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-netflix-red-500">
              <option value="">All Locations</option>
              <option value="New York, USA">New York, USA</option>
              <option value="Paris, France">Paris, France</option>
              <option value="Tokyo, Japan">Tokyo, Japan</option>
              <option value="Online">Online</option>
              <option value="Berlin, Germany">Berlin, Germany</option>
              <option value="Lagos, Nigeria">Lagos, Nigeria</option>
              <option value="San Francisco, USA">San Francisco, USA</option>
              <option value="London, UK">London, UK</option>
            </select>
            
            <select className="bg-netflix-dark-gray border border-white/10 text-white rounded px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-netflix-red-500">
              <option value="">All Event Types</option>
              <option value="Exhibition">Exhibition</option>
              <option value="Festival">Festival</option>
              <option value="Workshop">Workshop</option>
              <option value="Tour">Tour</option>
              <option value="Conference">Conference</option>
            </select>
            
            <select className="bg-netflix-dark-gray border border-white/10 text-white rounded px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-netflix-red-500">
              <option value="date-asc">Sort: Soonest First</option>
              <option value="date-desc">Sort: Latest First</option>
              <option value="featured">Sort: Featured</option>
            </select>
          </div>
        </div>
        
        {/* Featured Events */}
        {featuredEvents.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2">Featured Events</span>
              <span className="bg-netflix-red-500 text-white text-xs px-2 py-1 rounded">Hot</span>
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredEvents.map(event => (
                <div key={event.id} className="bg-netflix-dark-gray rounded overflow-hidden hover:scale-[1.01] transition-transform duration-300 flex flex-col md:flex-row">
                  <div className="relative h-64 md:h-auto md:w-2/5">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-netflix-red-500 text-white text-xs px-2 py-1 rounded">
                      Featured
                    </div>
                  </div>
                  <div className="p-6 md:w-3/5 flex flex-col">
                    <h4 className="text-xl font-bold mb-2">{event.title}</h4>
                    <div className="flex items-center text-white/70 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                      </svg>
                      {event.date}
                    </div>
                    <div className="flex items-center text-white/70 mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                      {event.location}
                    </div>
                    <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/70 mb-4 w-fit">
                      {event.type}
                    </span>
                    <p className="text-white/70 text-sm mb-6 flex-grow">{event.description}</p>
                    <Button 
                      href={`/events/${event.id}`} 
                      variant="netflix" 
                      className="mt-auto self-start"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* All Events */}
        <div>
          <h3 className="text-2xl font-bold mb-6">All Events</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {regularEvents.map(event => (
              <Link 
                key={event.id} 
                href={`/events/${event.id}`}
                className="group bg-netflix-dark-gray rounded overflow-hidden hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="relative h-56">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                </div>
                <div className="p-5">
                  <h4 className="text-xl font-bold mb-3">{event.title}</h4>
                  <div className="flex items-center text-white/70 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                    {event.date}
                  </div>
                  <div className="flex items-center text-white/70 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    {event.location}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/70">
                      {event.type}
                    </span>
                    <span className="text-netflix-red-500 group-hover:translate-x-1 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Submit Event CTA */}
        <div className="mt-16 bg-netflix-dark-gray rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Hosting an Art Event?</h3>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Submit your exhibition, workshop, or art event to be featured on our platform and reach art enthusiasts worldwide.
          </p>
          <Button 
            href="/submit-event" 
            variant="netflix" 
            size="lg"
          >
            Submit Your Event
          </Button>
        </div>
      </div>
    </div>
  );
} 