import Image from 'next/image';
import Button from './Button';

interface HeroBannerProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText: string;
  secondaryButtonHref: string;
}

export default function HeroBanner({
  title,
  subtitle,
  backgroundImage,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
}: HeroBannerProps) {
  return (
    <div className="relative min-h-[85vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Overlay - Netflix style gradient */}
        <div className="absolute inset-0 netflix-gradient" />
      </div>

      {/* Content */}
      <div className="relative container h-full flex flex-col justify-center items-center text-center">
        <div className="max-w-3xl space-y-6 py-20">
          <h1 className="hero-title text-white leading-tight">
            {title}
          </h1>
          <p className="hero-subtitle text-white/90 max-w-2xl mx-auto">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 pt-4">
            <Button 
              href={primaryButtonHref}
              variant="netflix"
              size="xl"
              className="text-lg"
            >
              {primaryButtonText}
            </Button>
            
            <Button 
              href={secondaryButtonHref}
              variant="outline"
              size="xl"
              className="bg-black/30 backdrop-blur-sm border-white/30 text-white hover:bg-white/10"
            >
              {secondaryButtonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 