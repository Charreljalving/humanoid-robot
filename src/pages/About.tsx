import React from 'react';
import { Target, Users, Lightbulb, Globe } from 'lucide-react';

export function About() {
  return (
    <div className="pt-20">
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="text-5xl font-bold mb-6 gradient-text">Over RoboTracker</h1>
            <p className="text-xl text-neutral-600">
              Wij zijn toegewijd aan het volgen en delen van de laatste ontwikkelingen 
              in humanoïde robotica, met als doel het informeren en inspireren van 
              professionals en enthousiastelingen wereldwijd.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Onze Missie</h2>
              <p className="text-neutral-600 mb-6">
                RoboTracker streeft ernaar om de meest betrouwbare en actuele bron 
                van informatie te zijn over humanoïde robotica. We brengen experts, 
                ontwikkelaars en geïnteresseerden samen om kennis te delen en innovatie 
                te stimuleren.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Target className="w-6 h-6 text-blue-500" />
                  <span className="text-neutral-600">Actuele informatie delen</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-blue-500" />
                  <span className="text-neutral-600">Community opbouwen</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Lightbulb className="w-6 h-6 text-blue-500" />
                  <span className="text-neutral-600">Innovatie stimuleren</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
                alt="RoboTracker Team"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="bg-neutral-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Ons Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
                  alt="Sarah Chen"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-bold mb-1">Sarah Chen</h3>
                <p className="text-neutral-600">Hoofdredacteur</p>
              </div>
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
                  alt="David Wilson"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-bold mb-1">David Wilson</h3>
                <p className="text-neutral-600">Technisch Analist</p>
              </div>
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
                  alt="Maya Patel"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-bold mb-1">Maya Patel</h3>
                <p className="text-neutral-600">Onderzoeker</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}