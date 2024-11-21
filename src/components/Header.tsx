import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CircuitBoard, Menu, X } from 'lucide-react';
import { NewsletterSubscribe } from './NewsletterSubscribe';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSubscribe, setShowSubscribe] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Robots', href: '/robots' },
    { name: 'Bedrijven', href: '/companies' },
    { name: 'Artikelen', href: '/articles' },
    { name: 'Over Ons', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="fixed w-full bg-black/20 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <div className="relative">
            <CircuitBoard className="w-8 h-8 text-white" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full" />
          </div>
          <span className="text-xl font-bold text-white">
            RoboTracker
          </span>
        </Link>

        <div className="hidden md:flex space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-white/80 hover:text-white transition ${
                location.pathname === item.href ? 'text-white font-medium' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button 
          className="hidden md:block bg-white text-neutral-900 hover:bg-white/90 px-6 py-2 rounded-md transition"
          onClick={() => setShowSubscribe(true)}
        >
          Abonneren
        </button>

        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-black/90 border-t border-white/10">
          <div className="container mx-auto px-6 py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block text-white/80 hover:text-white ${
                  location.pathname === item.href ? 'text-white font-medium' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10">
              <button 
                className="w-full bg-white text-neutral-900 hover:bg-white/90 px-6 py-2 rounded-md"
                onClick={() => {
                  setShowSubscribe(true);
                  setIsMenuOpen(false);
                }}
              >
                Abonneren
              </button>
            </div>
          </div>
        </div>
      )}

      {showSubscribe && (
        <NewsletterSubscribe onClose={() => setShowSubscribe(false)} />
      )}
    </header>
  );
}