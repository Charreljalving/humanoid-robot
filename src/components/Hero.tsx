import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2000"
          alt="Moderne Humanoïde Robot"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            De Toekomst van
            <span className="block">Humanoïde Robots</span>
          </h1>
          <p className="text-xl text-neutral-200 mb-12 max-w-2xl">
            Volg de evolutie van humanoïde robots, van baanbrekend onderzoek tot 
            praktische toepassingen die onze toekomst vormgeven.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-neutral-900 hover:bg-neutral-100 px-8 py-3 rounded-md flex items-center justify-center space-x-2 transition group">
              <span>Laatste Updates</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-md transition">
              Bekijk Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}