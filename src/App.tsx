import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';

function App() {
  const products = [
    {
      title: "ProTech X1 3D Printer",
      description: "Professional-grade 3D printer with ultra-high resolution and precision",
      image: "https://images.unsplash.com/photo-1631468182740-de6e6ee1dc2e?auto=format&fit=crop&q=80",
      price: "$2,999",
      category: "3D Printers"
    },
    {
      title: "ScanMaster Pro",
      description: "High-precision 3D scanner with advanced object recognition",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
      price: "$1,999",
      category: "Scanners"
    },
    {
      title: "DesignStudio Ultimate",
      description: "Professional 3D modeling and design software suite",
      image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80",
      price: "$899/year",
      category: "Software"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      
      {/* Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured Products
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover our latest innovations in 3D technology, designed to transform your creative vision into reality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;