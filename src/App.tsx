import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Robots } from './pages/Robots';
import { Companies } from './pages/Companies';
import { About } from './pages/About';
import { Articles } from './pages/Articles';
import { Article } from './pages/Article';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/robots" element={<Robots />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/about" element={<About />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:id" element={<Article />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;