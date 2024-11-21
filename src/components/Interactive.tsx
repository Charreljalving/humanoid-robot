import React from 'react';
import { Brain, Cpu, Bot } from 'lucide-react';

export function Interactive() {
  return (
    <section className="py-20 px-6 bg-neutral-950" id="interactive">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-16">Ontdek de Toekomst</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group cursor-pointer">
            <div className="bg-neutral-900 p-8 rounded-2xl transform transition duration-300 group-hover:-translate-y-2">
              <Brain className="w-12 h-12 text-white mb-6 mx-auto" />
              <h3 className="text-xl font-bold text-white mb-4">AI Integratie</h3>
              <p className="text-neutral-400">
                Geavanceerde AI-systemen die besluitvorming en leervermogen mogelijk maken
              </p>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="bg-neutral-900 p-8 rounded-2xl transform transition duration-300 group-hover:-translate-y-2">
              <Bot className="w-12 h-12 text-white mb-6 mx-auto" />
              <h3 className="text-xl font-bold text-white mb-4">Bewegingscontrole</h3>
              <p className="text-neutral-400">
                Vloeiende, mensachtige bewegingen en interacties met de omgeving
              </p>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="bg-neutral-900 p-8 rounded-2xl transform transition duration-300 group-hover:-translate-y-2">
              <Cpu className="w-12 h-12 text-white mb-6 mx-auto" />
              <h3 className="text-xl font-bold text-white mb-4">Neurale Netwerken</h3>
              <p className="text-neutral-400">
                Geavanceerde neurale netwerken voor mensachtige waarneming
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-12 rounded-2xl">
            <h3 className="text-3xl font-bold text-white mb-6">
              Klaar voor de Robotica Revolutie?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Blijf op de hoogte van de nieuwste ontwikkelingen in humanoïde robotica 
              en ontvang exclusieve updates.
            </p>
            <button className="bg-white text-neutral-900 hover:bg-white/90 px-8 py-3 rounded-md transition">
              Meld Je Aan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}