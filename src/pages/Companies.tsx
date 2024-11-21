import React from 'react';
import { Building2, Trophy, Users, Globe } from 'lucide-react';

const bedrijven = [
  {
    id: 1,
    naam: "Boston Dynamics",
    locatie: "Waltham, Massachusetts",
    specialiteit: "Dynamische Robots en Mobiliteit",
    beschrijving: "Wereldleider in de ontwikkeling van geavanceerde mobiele robots.",
    afbeelding: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    naam: "Tesla Robotics",
    locatie: "Palo Alto, Californië",
    specialiteit: "AI en Automatisering",
    beschrijving: "Innovatieve ontwikkeling van humanoïde robots voor algemeen gebruik.",
    afbeelding: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    naam: "Agility Robotics",
    locatie: "Corvallis, Oregon",
    specialiteit: "Logistieke Robots",
    beschrijving: "Specialisten in bipedale robots voor logistieke toepassingen.",
    afbeelding: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=800"
  }
];

export function Companies() {
  return (
    <div className="pt-20">
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-12 gradient-text">Toonaangevende Bedrijven</h1>
          <p className="text-xl text-neutral-600 mb-16 max-w-3xl">
            Ontdek de innovatieve bedrijven die de toekomst van humanoïde robotica vormgeven 
            met baanbrekende technologieën en toepassingen.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {bedrijven.map((bedrijf) => (
              <div key={bedrijf.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <img 
                  src={bedrijf.afbeelding} 
                  alt={bedrijf.naam} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{bedrijf.naam}</h3>
                  <div className="flex items-center space-x-2 text-neutral-600 mb-2">
                    <Globe className="w-4 h-4" />
                    <span>{bedrijf.locatie}</span>
                  </div>
                  <p className="font-medium text-blue-600 mb-2">{bedrijf.specialiteit}</p>
                  <p className="text-neutral-600">{bedrijf.beschrijving}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Building2 className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">30+</h3>
              <p className="text-neutral-600">Actieve Bedrijven</p>
            </div>
            <div className="text-center">
              <Trophy className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">150+</h3>
              <p className="text-neutral-600">Patenten</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">5000+</h3>
              <p className="text-neutral-600">Werknemers</p>
            </div>
            <div className="text-center">
              <Globe className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">25+</h3>
              <p className="text-neutral-600">Landen</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}