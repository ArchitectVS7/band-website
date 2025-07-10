import React from 'react';
import { Play, Music, ShoppingBag } from 'lucide-react';
import { EditableText } from './EditableText';
import { useTheme } from '../contexts/ThemeContext';

export const HeroSection: React.FC = () => {
  const { currentTheme } = useTheme();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&h=1080&fit=crop&crop=center')`,
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-metal px-4 text-center">
        {/* Band Name */}
        <EditableText
          id="hero-band-name"
          defaultContent="Crimson Throne"
          className={`heading-primary text-6xl md:text-8xl lg:text-9xl mb-6 animate-fade-in ${
            currentTheme.variant === 'atmospheric' ? 'font-atmospheric-header' :
            currentTheme.variant === 'raw' ? 'font-raw-header' :
            'font-modern-header'
          }`}
          tag="h1"
        />
        
        {/* Tagline */}
        <EditableText
          id="hero-tagline"
          defaultContent="Forged in darkness, tempered by fire. Experience the raw power of modern metal."
          className={`text-xl md:text-2xl text-primary-gray mb-8 max-w-2xl mx-auto animate-fade-in ${
            currentTheme.variant === 'atmospheric' ? 'font-atmospheric-body' :
            currentTheme.variant === 'raw' ? 'font-raw-body' :
            'font-modern-body'
          }`}
          tag="p"
        />

        {/* Latest Release Banner */}
        <div className="mb-12 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-primary-accent/20 border border-primary-accent rounded-full px-6 py-3 mb-4">
            <Music className="h-5 w-5 text-primary-accent" />
            <span className="text-primary-light font-inter font-medium">New Album Out Now</span>
          </div>
          <EditableText
            id="hero-album-title"
            defaultContent="Eternal Darkness"
            className="heading-secondary text-3xl md:text-4xl text-primary-secondary mb-2"
            tag="h2"
          />
          <EditableText
            id="hero-album-description"
            defaultContent="Our most brutal and melodic work yet"
            className="text-primary-gray"
            tag="p"
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <button
            onClick={() => scrollToSection('#music')}
            className="btn-primary flex items-center space-x-2 text-lg px-8 py-4"
          >
            <Play className="h-6 w-6" />
            <span>Listen Now</span>
          </button>
          
          <button
            onClick={() => scrollToSection('#merch')}
            className="btn-secondary flex items-center space-x-2 text-lg px-8 py-4"
          >
            <ShoppingBag className="h-6 w-6" />
            <span>Shop Merch</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="h-6 w-4 border-2 border-primary-gray rounded-full flex justify-center">
            <div className="w-1 h-2 bg-primary-gray rounded-full mt-1 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary-accent rounded-full opacity-50 animate-pulse" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-primary-secondary rounded-full opacity-30 animate-pulse" />
      <div className="absolute bottom-32 left-20 w-4 h-4 bg-primary-accent rounded-full opacity-25 animate-pulse" />
    </section>
  );
};