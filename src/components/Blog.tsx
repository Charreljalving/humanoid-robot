import React from 'react';
import { format } from 'date-fns';
import { nl } from 'date-fns/locale';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Tesla's Optimus Robot: Een Sprong Voorwaarts in Humanoïde Technologie",
    excerpt: "Ontdek de nieuwste ontwikkelingen in Tesla's humanoïde robotproject en de potentiële impact op productie.",
    author: "Sarah Chen",
    date: new Date('2024-03-10'),
    image: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=800",
    category: "Technologie"
  },
  {
    id: 2,
    title: "De Opkomst van Humanoïde Robots in de Gezondheidszorg",
    excerpt: "Hoe humanoïde robots de patiëntenzorg en medische procedures wereldwijd transformeren.",
    author: "Dr. James Wilson",
    date: new Date('2024-03-08'),
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    category: "Gezondheidszorg"
  },
  {
    id: 3,
    title: "Ethiek in Robotica: Navigeren naar de Toekomst",
    excerpt: "Het aanpakken van ethische overwegingen en uitdagingen in de ontwikkeling van humanoïde robots.",
    author: "Maya Patel",
    date: new Date('2024-03-05'),
    image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=800",
    category: "Ethiek"
  }
];

export function Blog() {
  return (
    <section className="py-20 px-6 bg-white" id="latest">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold gradient-text">Laatste Updates</h2>
          <button className="text-neutral-900 hover:text-neutral-600 flex items-center space-x-2 group">
            <span>Bekijk Alles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-neutral-900">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-neutral-600">
                  <span>{post.author}</span>
                  <span>•</span>
                  <time>{format(post.date, 'd MMMM yyyy', { locale: nl })}</time>
                </div>
                
                <h3 className="text-xl font-bold text-neutral-900 group-hover:text-neutral-600 transition">
                  {post.title}
                </h3>
                
                <p className="text-neutral-600">
                  {post.excerpt}
                </p>
                
                <button className="text-neutral-900 font-medium flex items-center space-x-2 group/btn">
                  <span>Lees Meer</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}