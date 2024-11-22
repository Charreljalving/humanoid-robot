import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArticleForm } from '../../components/admin/ArticleForm';
import { articleService } from '../../services/articleService';
import { Article } from '../../types/Article';
import { Breadcrumbs } from '../../components/admin/Breadcrumbs';

export function NewArticle() {
  const navigate = useNavigate();

  const handleSubmit = async (data: Omit<Article, 'id'>) => {
    try {
      await articleService.createArticle(data);
      navigate('/admin');
    } catch (error) {
      console.error('Error creating article:', error);
      alert('Er is een fout opgetreden bij het aanmaken van het artikel.');
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="relative z-20">
        <Breadcrumbs />
        <h1 className="text-3xl font-bold mb-8">Nieuw artikel</h1>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <ArticleForm
          onSubmit={handleSubmit}
          onCancel={() => navigate('/admin')}
        />
      </div>
    </div>
  );
}