import React from 'react';
import { Brain, Cpu, Factory } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Brain,
      title: "AI Integration",
      description: "Advanced artificial intelligence systems powering decision-making and learning capabilities.",
      color: "text-neutral-900"
    },
    {
      icon: Cpu,
      title: "Neural Processing",
      description: "State-of-the-art neural networks enabling human-like perception and response.",
      color: "text-neutral-900"
    },
    {
      icon: Factory,
      title: "Industrial Applications",
      description: "Revolutionary impact on manufacturing, logistics, and automation.",
      color: "text-neutral-900"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-neutral-50 p-8 rounded-2xl hover:bg-neutral-100 transition group">
            <feature.icon className={`w-12 h-12 ${feature.color} mb-4 group-hover:scale-110 transition`} />
            <h3 className="text-xl font-bold mb-4 text-neutral-900">{feature.title}</h3>
            <p className="text-neutral-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}