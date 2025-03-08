import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'About | Artistry',
  description: 'Learn about Artistry, our mission to connect artists and art lovers worldwide, and the story behind our platform.',
};

// Mock data for team members
const teamMembers = [
  {
    name: "Oluwaseun Adebayo",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1887&auto=format&fit=crop",
    bio: "Tech professional with a deep passion for art, bringing innovative solutions to the global art community.",
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    bio: "Tech innovator with a background in both art and computer science, specializing in user experience design.",
  },
  {
    name: "Priya Sharma",
    role: "Head of Artist Relations",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    bio: "Contemporary artist who bridges the gap between creators and technology platforms.",
  },
  {
    name: "Carlos Rodriguez",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop",
    bio: "Award-winning designer with a focus on creating immersive digital experiences for art lovers.",
  },
];

// Mock data for values
const values = [
  {
    title: "Artistic Diversity",
    description: "We celebrate art in all its forms, from all cultures and backgrounds, believing that diversity enriches our collective experience.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: "Global Connection",
    description: "We bridge geographical gaps, connecting artists and art lovers across continents to foster cultural exchange and understanding.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "Artist Empowerment",
    description: "We provide artists with the tools, platform, and support they need to showcase their work and build sustainable careers.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    ),
  },
  {
    title: "Accessibility",
    description: "We believe art should be accessible to all, breaking down barriers to appreciation, education, and collection.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-netflix-black text-white pb-20">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-netflix-black">
          <div className="absolute inset-0 opacity-30 mix-blend-overlay">
            <Image
              src="https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=1972&auto=format&fit=crop"
              alt="About Artistry"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-netflix-black via-transparent to-netflix-black" />
          <div className="absolute -inset-0 bg-[linear-gradient(to_right,transparent,rgba(123,31,162,.2)_25%,rgba(123,31,162,.2)_75%,transparent)]" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-netflix-black to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-netflix-black to-transparent" />
        </div>

        {/* Floating art elements */}
        <div className="absolute w-40 h-40 top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 opacity-60 animate-float-slow">
          <div className="w-full h-full rounded-full bg-purple-500/20 backdrop-blur-md"></div>
        </div>
        <div className="absolute w-24 h-24 bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 opacity-50 animate-float">
          <div className="w-full h-full rounded-full bg-blue-500/20 backdrop-blur-md"></div>
        </div>
        <div className="absolute w-32 h-32 top-1/2 right-1/3 translate-y-1/2 opacity-40 animate-float-reverse">
          <div className="w-full h-full rounded-full bg-pink-500/20 backdrop-blur-md"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 relative z-10 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-white drop-shadow-lg">
              Our <span className="text-netflix-red-500">Story</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              The global marketplace for buying and selling original art
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container py-16">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block group">
            Our Mission
            <span className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 bg-netflix-red-500 transition-all duration-500"></span>
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            At Artistry, we believe in the power of art to transcend boundaries, connect cultures, and inspire change. Our mission is to create a global marketplace that empowers artists to sell their work worldwide while enabling collectors to discover and purchase exceptional art from anywhere.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-netflix-dark-gray p-6 rounded-lg hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(229,9,20,0.2)] group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-netflix-red-500/20 rounded-full flex items-center justify-center text-netflix-red-500 mb-4 group-hover:bg-netflix-red-500 group-hover:text-white transition-all duration-300">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20 overflow-hidden">
          <div className="lg:w-1/2 animate-slide-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block group">
              How It All Started
              <span className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 bg-netflix-red-500 transition-all duration-500"></span>
            </h2>
            <div className="space-y-4 text-white/80">
              <p>
                Artistry was born from a singular vision of a tech professional based in Nigeria who had a deep passion for artworks and painting. Witnessing firsthand the incredible talent in local communities and the challenges artists faced in reaching global markets, our founder was inspired to create a platform that would bridge this gap.
              </p>
              <p>
                <span className="text-netflix-red-500 font-bold">In 2022</span>, what began as a simple idea transformed into a mission: to give everyone access to quality paintings and artworks, while making buying and selling art effortless across borders. The vision was clear – create a digital marketplace where art could transcend geographical boundaries, where talented artists from Nigeria and around the world could showcase and sell their work to a global audience.
              </p>
              <p>
                Today, Artistry has grown into a vibrant marketplace connecting artists and art collectors across continents. Our platform has become a bustling marketplace where diverse artistic expressions find their buyers, and where the rich cultural heritage of Nigeria and other nations is celebrated and traded through visual arts.
              </p>
              <p>
                Our journey is just beginning, and with every artwork sold, every connection made, we move closer to our vision of a world where art commerce is truly borderless.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 relative h-[400px] rounded-lg overflow-hidden animate-slide-left">
            <Image
              src="https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?q=80&w=2070&auto=format&fit=crop"
              alt="Artistry story"
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-netflix-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 max-w-xs p-4 bg-netflix-black/80 backdrop-blur-sm rounded-lg transform transition-transform duration-300 hover:scale-105">
              <p className="text-white/90 text-sm italic">
                "Art has the power to unite us across borders and cultures. It speaks a universal language that resonates with our shared humanity."
              </p>
              <p className="text-netflix-red-500 text-sm mt-2 font-bold">— Oluwaseun Adebayo, Founder</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20 overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center relative inline-block group mx-auto">
            Meet Our Team
            <span className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 bg-netflix-red-500 transition-all duration-500"></span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-netflix-dark-gray rounded-lg overflow-hidden hover:scale-[1.05] transition-all duration-300 hover:shadow-[0_0_20px_rgba(229,9,20,0.2)] group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-netflix-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5 relative">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-netflix-red-500 mb-3">{member.role}</p>
                  <p className="text-white/70 text-sm group-hover:text-white/90 transition-colors">{member.bio}</p>
                  <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-1 bg-netflix-red-500 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Us CTA */}
        <div className="bg-gradient-to-r from-netflix-black via-netflix-dark-gray to-netflix-black rounded-lg p-10 text-center relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
          {/* Background elements */}
          <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-netflix-red-500/20 filter blur-2xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-purple-500/20 filter blur-2xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Join Our Marketplace</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Whether you're an artist looking to sell your work globally or an art lover searching for unique pieces, Artistry connects you with a worldwide network of creators and collectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/signup" 
                variant="netflix" 
                size="lg"
                className="transform hover:-translate-y-1 transition-transform duration-300"
              >
                Sign Up to Buy
              </Button>
              <Button 
                href="/become-artist" 
                variant="outline" 
                size="lg"
                className="bg-transparent border-white/30 text-white hover:bg-white/10 transform hover:-translate-y-1 transition-transform duration-300"
              >
                Start Selling
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 