import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArticleForm } from '../../components/admin/ArticleForm';
import { articleService } from '../../services/articleService';
import { Article } from '../../types/Article';
import { Breadcrumbs } from '../../components/admin/Breadcrumbs';

export function EditArticle() {
  const [article, setArticle] = useState<Article | null>(null);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      loadArticle(id);
    }
  }, [id]);

  const loadArticle = async (articleId: string) => {
    try {
      const data = await articleService.getArticle(articleId);
      if (data) {
        setArticle(data);
      } else {
        navigate('/admin');
      }
    } catch (error) {
      console.error('Error loading article:', error);
      alert('Er is een fout opgetreden bij het laden van het artikel.');
      navigate('/admin');
    }
  };

  const handleSubmit = async (data: Omit<Article, 'id'>) => {
    try {
      if (id) {
        await articleService.updateArticle(id, data);
        navigate('/admin');
      }
    } catch (error) {
      console.error('Error updating article:', error);
      alert('Er is een fout opgetreden bij het bijwerken van het artikel.');
    }
  };

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="relative z-20">
        <Breadcrumbs />
        <h1 className="text-3xl font-bold mb-8">Artikel bewerken</h1>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <ArticleForm
          article={article}
          onSubmit={handleSubmit}
          onCancel={() => navigate('/admin')}
        />
      </div>
    </div>
  );
}