import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
            alt="Robot Error"
            className="w-64 h-64 object-cover mx-auto rounded-2xl shadow-lg mb-4"
          />
          <div className="relative">
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-6xl font-bold w-32 h-32 rounded-full flex items-center justify-center animate-bounce shadow-lg">
              404
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <h1 className="text-5xl font-bold mb-4 text-neutral-800 animate-textGlitch">
            *System Malfunction*
          </h1>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <p className="text-xl text-neutral-600 mb-8 font-mono">
              <span className="text-red-500">ERROR:</span> Pagina Niet Gevonden<br/>
              <span className="text-neutral-400">
                Mijn circuits zijn overbelast!<br/>
                Deze pagina bestaat niet in mijn databank...
              </span>
            </p>
            
            <Link 
              to="/"
              className="inline-flex items-center space-x-3 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              <Home className="w-6 h-6" />
              <span className="text-lg font-medium">Terug naar Home</span>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-glitch"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-glitch"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-glitch"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-glitch"></div>
      </div>
    </div>
  );
}