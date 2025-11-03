import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductsGrid from './components/ProductsGrid';
import InfoBlocks from './components/InfoBlocks';
import ProductShowcase from './components/ProductShowcase';
import Partners from './components/Partners';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <ProductsGrid />
      <InfoBlocks />
      <ProductShowcase />
      <Features />
      <AboutSection />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;