import React from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { nl } from 'date-fns/locale';

const artikelen = {
  1: {
    titel: "Tesla's Optimus Robot: Een Nieuwe Mijlpaal",
    inhoud: `
      De ontwikkeling van Tesla's Optimus robot markeert een belangrijke mijlpaal in de wereld van humanoïde robotica. 
      Met geavanceerde AI-systemen en verfijnde bewegingscontrole zet deze robot nieuwe standaarden voor wat mogelijk is 
      in de robotica.

      De Optimus is ontworpen om alledaagse taken uit te voeren en mensen te ondersteunen in verschillende situaties. 
      Van fabriekswerk tot huishoudelijke taken, de mogelijkheden zijn enorm.

      Belangrijke kenmerken:
      • Geavanceerde AI-integratie
      • Natuurlijke bewegingspatronen
      • Adaptieve leermogelijkheden
      • Veilige mens-robot interactie

      De impact op de industrie zal significant zijn, met toepassingen in:
      • Productie en assemblage
      • Logistiek en warehousing
      • Gezondheidszorg
      • Persoonlijke assistentie
    `,
    auteur: "Sarah Chen",
    datum: new Date('2024-03-10'),
    afbeelding: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200",
    categorie: "Technologie"
  }
};

export function Article() {
  const { id } = useParams();
  const artikel = artikelen[Number(id)];

  if (!artikel) {
    return (
      <div className="pt-20">
        <div className="container mx-auto px-6 py-20">
          <h1 className="text-2xl font-bold">Artikel niet gevonden</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <article className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {artikel.categorie}
            </span>
          </div>
          
          <h1 className="text-5xl font-bold mb-8 gradient-text">{artikel.titel}</h1>
          
          <div className="flex items-center space-x-4 mb-8">
            <div className="flex items-center space-x-2">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=50"
                alt={artikel.auteur}
                className="w-10 h-10 rounded-full"
              />
              <span className="font-medium">{artikel.auteur}</span>
            </div>
            <span>•</span>
            <time className="text-neutral-600">
              {format(artikel.datum, 'd MMMM yyyy', { locale: nl })}
            </time>
          </div>

          <img
            src={artikel.afbeelding}
            alt={artikel.titel}
            className="w-full rounded-2xl mb-12"
          />

          <div className="prose prose-lg max-w-none">
            {artikel.inhoud.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-neutral-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}