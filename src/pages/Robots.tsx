import React from 'react';
import { Bot, Cpu, Brain } from 'lucide-react';

const robots = [
  {
    id: 1,
    name: "Atlas",
    maker: "Boston Dynamics",
    beschrijving: "Geavanceerde tweevoetige robot voor complexe bewegingen en taken",
    afbeelding: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    kenmerken: ["Dynamische Balans", "Complexe Manipulatie", "Terreinnavigatie"]
  },
  {
    id: 2,
    name: "Optimus",
    maker: "Tesla",
    beschrijving: "Algemene humanoïde robot ontworpen voor alledaagse taken",
    afbeelding: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=800",
    kenmerken: ["AI-gestuurd", "Veelzijdig", "Menselijke Bewegingen"]
  },
  {
    id: 3,
    name: "Digit",
    maker: "Agility Robotics",
    beschrijving: "Veelzijdige humanoïde robot voor logistiek en bezorging",
    afbeelding: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=800",
    kenmerken: ["Autonoom", "Adaptief", "Efficiënt"]
  }
];

export function Robots() {
  return (
    <div className="pt-20">
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-12 gradient-text">Humanoïde Robots</h1>
          <p className="text-xl text-neutral-600 mb-16 max-w-3xl">
            Ontdek de meest geavanceerde humanoïde robots ter wereld, van baanbrekende 
            onderzoeksplatforms tot praktische toepassingen in de industrie.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {robots.map((robot) => (
              <div key={robot.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <img 
                  src={robot.afbeelding} 
                  alt={robot.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{robot.name}</h3>
                  <p className="text-neutral-600 mb-2">{robot.maker}</p>
                  <p className="text-neutral-600 mb-4">{robot.beschrijving}</p>
                  <div className="space-y-2">
                    {robot.kenmerken.map((kenmerk, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Bot className="w-4 h-4 text-blue-500" />
                        <span className="text-sm text-neutral-600">{kenmerk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-neutral-50 rounded-2xl p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Technologische Kenmerken</h2>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="flex flex-col items-center">
                  <Brain className="w-12 h-12 text-blue-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">AI-Integratie</h3>
                  <p className="text-neutral-600">Geavanceerde kunstmatige intelligentie</p>
                </div>
                <div className="flex flex-col items-center">
                  <Cpu className="w-12 h-12 text-blue-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Neurale Verwerking</h3>
                  <p className="text-neutral-600">Complexe besluitvorming</p>
                </div>
                <div className="flex flex-col items-center">
                  <Bot className="w-12 h-12 text-blue-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Bewegingscontrole</h3>
                  <p className="text-neutral-600">Precisie en adaptiviteit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}