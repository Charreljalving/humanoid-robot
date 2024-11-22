import React from 'react';
import { Link } from 'react-router-dom';
import { BatteryWarning, Home } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8 relative">
          <div className="relative inline-block">
            <div className="w-48 h-48 bg-neutral-200 rounded-full flex items-center justify-center">
              <BatteryWarning className="w-24 h-24 text-neutral-400 animate-pulse" />
            </div>
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl animate-bounce">
              404
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl font-bold mb-4">*Biep* *Boep* Error...</h1>
        <p className="text-xl text-neutral-600 mb-8">
          Mijn circuits raken oververhit! Deze pagina bestaat niet...
        </p>
        
        <Link 
          to="/"
          className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          <Home className="w-5 h-5" />
          <span>Terug naar Home</span>
        </Link>
      </div>
    </div>
  );
}