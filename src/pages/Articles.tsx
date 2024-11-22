import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { nl } from 'date-fns/locale';
import { ArrowRight } from 'lucide-react';

const artikelen = [
  {
    id: 1,
    titel: "De Toekomst van Werk in het Tijdperk van Humanoïde Robots",
    excerpt: "Een diepgaande analyse van hoe humanoïde robots de arbeidsmarkt en economie zullen transformeren.",
    auteur: "Dr. Lisa van der Berg",
    datum: new Date('2024-03-15'),
    afbeelding: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    categorie: "Toekomstvisie",
    inhoud: `
      De integratie van humanoïde robots in onze samenleving staat op het punt een revolutionaire verschuiving teweeg te brengen in hoe we werk en economie benaderen. Met de snelle vooruitgang in robotica en kunstmatige intelligentie, staan we aan de vooravond van een tijdperk waarin menselijke arbeid fundamenteel zal veranderen.

      Impact op de Arbeidsmarkt:
      • Automatisering van routinematige taken
      • Verschuiving naar creatief en strategisch werk
      • Nieuwe beroepen in robotbeheer en -ontwikkeling
      • Kortere werkweken voor mensen

      Economische Transformatie:
      • Verhoogde productiviteit en efficiëntie
      • Universeel basisinkomen als mogelijke oplossing
      • Nieuwe economische modellen gebaseerd op robotarbeid
      • Herverdeling van welvaart en resources

      Maatschappelijke Aanpassingen:
      • Focus op persoonlijke ontwikkeling en creativiteit
      • Meer tijd voor familie en hobby's
      • Levenslang leren wordt de norm
      • Nieuwe vormen van zingeving buiten traditioneel werk

      Deze ontwikkelingen brengen zowel uitdagingen als kansen met zich mee. Het is cruciaal dat we als samenleving proactief nadenken over hoe we deze transitie willen vormgeven, zodat iedereen kan profiteren van de technologische vooruitgang.

      De rol van onderwijs en omscholing wordt steeds belangrijker. We moeten mensen voorbereiden op een toekomst waarin samenwerking met robots de norm is en waarin menselijke vaardigheden zoals creativiteit, empathie en strategisch denken centraal staan.

      Conclusie:
      De toekomst met humanoïde robots biedt ongekende mogelijkheden voor menselijke ontwikkeling en welvaart. Door nu de juiste keuzes te maken in beleid en implementatie, kunnen we een samenleving creëren waarin technologie ten dienste staat van menselijk welzijn en waarin iedereen kan floreren.
    `
  },
  {
    id: 2,
    titel: "Tesla's Optimus Robot: Een Nieuwe Mijlpaal",
    excerpt: "Diepgaande analyse van de nieuwste ontwikkelingen in Tesla's humanoïde robotproject.",
    auteur: "Sarah Chen",
    datum: new Date('2024-03-10'),
    afbeelding: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=800",
    categorie: "Technologie"
  },
  {
    id: 3,
    titel: "Ethiek in Robotica",
    excerpt: "Belangrijke overwegingen bij de ontwikkeling van humanoïde robots.",
    auteur: "Maya Patel",
    datum: new Date('2024-03-05'),
    afbeelding: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=800",
    categorie: "Ethiek"
  }
];

export function Articles() {
  return (
    <div className="pt-20">
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-12 gradient-text">Artikelen</h1>
          
          <div className="grid md:grid-cols-3 gap-8">
            {artikelen.map((artikel) => (
              <Link to={`/artikelen/${artikel.id}`} key={artikel.id} className="group">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
                  <div className="relative">
                    <img 
                      src={artikel.afbeelding} 
                      alt={artikel.titel}
                      className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-neutral-900">
                        {artikel.categorie}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-sm text-neutral-600 mb-2">
                      <span>{artikel.auteur}</span>
                      <span>•</span>
                      <time>{format(artikel.datum, 'd MMMM yyyy', { locale: nl })}</time>
                    </div>
                    
                    <h2 className="text-xl font-bold text-neutral-900 group-hover:text-blue-600 transition mb-2">
                      {artikel.titel}
                    </h2>
                    
                    <p className="text-neutral-600 mb-4">
                      {artikel.excerpt}
                    </p>
                    
                    <div className="flex items-center text-blue-600 group/link">
                      <span className="mr-2">Lees meer</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}