import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Robots } from './pages/Robots';
import { Companies } from './pages/Companies';
import { About } from './pages/About';
import { Articles } from './pages/Articles';
import { Article } from './pages/Article';
import { Login } from './pages/Login';
import { Admin } from './pages/Admin';
import { NewArticle } from './pages/admin/NewArticle';
import { ManageArticles } from './pages/admin/ManageArticles';
import { EditArticle } from './pages/admin/EditArticle';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/robots" element={<Robots />} />
              <Route path="/bedrijven" element={<Companies />} />
              <Route path="/over-ons" element={<About />} />
              <Route path="/artikelen" element={<Articles />} />
              <Route path="/artikelen/:id" element={<Article />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/articles/new" element={<NewArticle />} />
              <Route path="/admin/articles/manage" element={<ManageArticles />} />
              <Route path="/admin/articles/edit/:id" element={<EditArticle />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}