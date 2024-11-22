import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { PenSquare, Plus, LogOut } from 'lucide-react';
import { Breadcrumbs } from '../components/admin/Breadcrumbs';

export function Admin() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/login');
    } catch (error) {
      alert('Er is een fout opgetreden bij het uitloggen.');
    }
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="pt-20">
      <div className="container mx-auto px-6 py-8">
        <div className="relative z-20">
          <Breadcrumbs />
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <button
              onClick={handleSignOut}
              className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
            >
              <LogOut className="w-4 h-4" />
              <span>Uitloggen</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div 
            onClick={() => navigate('/admin/articles/new')}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <Plus className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="text-xl font-semibold">Nieuw artikel</h3>
                <p className="text-gray-600">Schrijf een nieuw artikel</p>
              </div>
            </div>
          </div>

          <div 
            onClick={() => navigate('/admin/articles/manage')}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <PenSquare className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="text-xl font-semibold">Artikelen beheren</h3>
                <p className="text-gray-600">Bewerk of verwijder bestaande artikelen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}