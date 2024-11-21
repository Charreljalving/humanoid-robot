import React from 'react';

const developments = [
  {
    id: 1,
    title: "Atlas Next Generation",
    company: "Boston Dynamics",
    description: "Advanced bipedal robot capable of complex movements and tasks",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Tesla Optimus",
    company: "Tesla",
    description: "General purpose humanoid robot designed for everyday tasks",
    image: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Digit",
    company: "Agility Robotics",
    description: "Versatile humanoid robot for logistics and delivery",
    image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=800"
  }
];

export function Developments() {
  return (
    <section className="py-20 px-6 bg-neutral-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Latest Developments</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {developments.map((dev) => (
            <div key={dev.id} className="bg-white rounded-2xl overflow-hidden hover:transform hover:scale-105 transition duration-300 shadow-lg">
              <img src={dev.image} alt={dev.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-neutral-900">{dev.title}</h3>
                <p className="text-neutral-900 font-medium mb-2">{dev.company}</p>
                <p className="text-neutral-600">{dev.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}