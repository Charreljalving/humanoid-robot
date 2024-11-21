import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { nl } from 'date-fns/locale';
import { ArrowRight } from 'lucide-react';

const latestArticles = [
  {
    id: 1,
    titel: "Tesla's Optimus Robot: Een Nieuwe Mijlpaal",
    excerpt: "Diepgaande analyse van de nieuwste ontwikkelingen in Tesla's humanoïde robotproject.",
    auteur: "Sarah Chen",
    datum: new Date('2024-03-10'),
    afbeelding: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    categorie: "Technologie"
  },
  {
    id: 2,
    titel: "De Toekomst van Zorgrobots",
    excerpt: "Hoe humanoïde robots de gezondheidszorg transformeren.",
    auteur: "David Wilson",
    datum: new Date('2024-03-08'),
    afbeelding: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=800",
    categorie: "Gezondheidszorg"
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

export function LatestArticles() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold gradient-text">Laatste Artikelen</h2>
          <Link 
            to="/articles" 
            className="flex items-center space-x-2 text-neutral-900 hover:text-neutral-600 group"
          >
            <span>Alle Artikelen</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {latestArticles.map((article) => (
            <Link to={`/articles/${article.id}`} key={article.id} className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="relative">
                  <img 
                    src={article.afbeelding} 
                    alt={article.titel}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-neutral-900">
                      {article.categorie}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-neutral-600 mb-2">
                    <span>{article.auteur}</span>
                    <span>•</span>
                    <time>{format(article.datum, 'd MMMM yyyy', { locale: nl })}</time>
                  </div>
                  
                  <h3 className="text-xl font-bold text-neutral-900 group-hover:text-blue-600 transition mb-2">
                    {article.titel}
                  </h3>
                  
                  <p className="text-neutral-600 mb-4">
                    {article.excerpt}
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
  );
}