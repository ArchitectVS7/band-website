import React, { useState } from 'react';
import { CartProvider } from './contexts/CartContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { MusicSection } from './components/MusicSection';
import { TourSection } from './components/TourSection';
import { MerchandiseSection } from './components/MerchandiseSection';
import { ContactSection } from './components/ContactSection';
import { CommunitySection } from './components/CommunitySection';
import { Footer } from './components/Footer';
import { ShoppingCart } from './components/ShoppingCart';
import { ThemeSwitcher } from './components/ThemeSwitcher';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  return (
    <ThemeProvider>
      <CartProvider>
        <div className="App">
          {/* Theme Switcher */}
          <ThemeSwitcher />

          {/* Header */}
          <Header onCartClick={handleCartToggle} />

          {/* Main Content */}
          <main>
            <HeroSection />
            <AboutSection />
            <MusicSection />
            <TourSection />
            <MerchandiseSection />
            <CommunitySection />
            <ContactSection />
          </main>

          {/* Footer */}
          <Footer />

          {/* Shopping Cart */}
          <ShoppingCart isOpen={isCartOpen} onClose={handleCartClose} />
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
