import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyUs from './components/WhyUs';
import HowWeWork from './components/HowWeWork';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import SmartAssistant from './features/SmartAssistant';
import CostCalculator from './features/CostCalculator';
import ShoppingCartModal from './features/ShoppingCart';

function App() {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-stone-50 text-stone-900 font-cairo selection:bg-amber-200 selection:text-amber-900">
        <Navbar onOpenAssistant={() => setIsAssistantOpen(true)} onOpenCart={() => setIsCartOpen(true)} />
        <Hero onOpenCalculator={() => setIsCalculatorOpen(true)} onOpenAssistant={() => setIsAssistantOpen(true)} />
        <Services onOpenCalculator={() => setIsCalculatorOpen(true)} />
        <Portfolio />
        <WhyUs />
        <HowWeWork />
        <Testimonials />
        <FAQ />
        <Footer />
        <MobileStickyBar onOpenCalculator={() => setIsCalculatorOpen(true)} onOpenAssistant={() => setIsAssistantOpen(true)} />
        {isAssistantOpen && <SmartAssistant onClose={() => setIsAssistantOpen(false)} />}
        {isCalculatorOpen && <CostCalculator onClose={() => setIsCalculatorOpen(false)} />}
        {isCartOpen && <ShoppingCartModal onClose={() => setIsCartOpen(false)} />}
      </div>
    </CartProvider>
  );
}

export default App;
