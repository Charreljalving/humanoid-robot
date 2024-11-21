import React from 'react';
import { Globe } from 'lucide-react';

export function GlobalImpact() {
  return (
    <section className="py-20 px-6 bg-white" id="impact">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6 gradient-text">Wereldwijde Impact</h2>
          <p className="text-neutral-600 mb-8">
            Humanoïde robots revolutioneren industrieën wereldwijd, van gezondheidszorg 
            tot ruimte-exploratie. Blijf op de hoogte van hun groeiende invloed op de 
            samenleving en economie.
          </p>
          <div className="flex items-center space-x-4">
            <Globe className="w-12 h-12 text-neutral-900" />
            <div>
              <h4 className="font-bold text-neutral-900">Wereldwijde Adoptie</h4>
              <p className="text-neutral-600">Aanwezig in meer dan 50 landen</p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img 
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800" 
            alt="Wereldwijde Impact" 
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}