import React from 'react';
import { Link } from 'react-router-dom';
import { CircuitBoard, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  const navigation = [
    { name: 'Robots', href: '/robots' },
    { name: 'Bedrijven', href: '/bedrijven' },
    { name: 'Artikelen', href: '/artikelen' },
    { name: 'Over ons', href: '/over-ons' },
    { name: 'Contact', href: '/contact' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'X (Twitter)', icon: Twitter, href: 'https://twitter.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' }
  ];

  return (
    <footer className="bg-neutral-900 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <CircuitBoard className="w-8 h-8 text-white" />
              <span className="text-xl font-bold text-white">RoboTracker</span>
            </Link>
            <p className="text-neutral-400 max-w-md">
              Blijf op de hoogte van de laatste ontwikkelingen in humanoïde robotica 
              en ontdek hoe deze technologie onze toekomst vormgeeft.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-bold mb-4">Menu</h3>
            <nav className="space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-neutral-400 hover:text-white transition"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Volg Ons</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition"
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm mb-4 md:mb-0">
              © 2024 RoboTracker. Alle rechten voorbehouden.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-neutral-400 hover:text-white transition">
                Privacybeleid
              </a>
              <a href="/terms" className="text-neutral-400 hover:text-white transition">
                Gebruiksvoorwaarden
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}