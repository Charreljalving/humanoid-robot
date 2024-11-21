import React from 'react';
import { Hero } from '../components/Hero';
import { LatestArticles } from '../components/LatestArticles';
import { Interactive } from '../components/Interactive';
import { GlobalImpact } from '../components/GlobalImpact';
import { ContactForm } from '../components/ContactForm';

export function Home() {
  return (
    <div>
      <Hero />
      <LatestArticles />
      <Interactive />
      <GlobalImpact />
      <section className="py-20 px-6 bg-neutral-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Contact</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}