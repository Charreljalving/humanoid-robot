import React from 'react';
import { useForm } from 'react-hook-form';
import { Article } from '../../types/Article';

type ArticleFormProps = {
  article?: Article;
  onSubmit: (data: Omit<Article, 'id'>) => Promise<void>;
  onCancel: () => void;
};

export function ArticleForm({ article, onSubmit, onCancel }: ArticleFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<Omit<Article, 'id'>>({
    defaultValues: article ? {
      ...article,
      datum: article.datum.toISOString().split('T')[0]
    } : {
      datum: new Date().toISOString().split('T')[0]
    }
  });

  return (
    <form onSubmit={handleSubmit((data) => onSubmit({ ...data, datum: new Date(data.datum) }))} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Titel</label>
        <input
          type="text"
          {...register('titel', { required: 'Titel is verplicht' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.titel && <p className="mt-1 text-sm text-red-600">{errors.titel.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Excerpt</label>
        <input
          type="text"
          {...register('excerpt', { required: 'Excerpt is verplicht' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.excerpt && <p className="mt-1 text-sm text-red-600">{errors.excerpt.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Inhoud</label>
        <textarea
          {...register('inhoud', { required: 'Inhoud is verplicht' })}
          rows={10}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.inhoud && <p className="mt-1 text-sm text-red-600">{errors.inhoud.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Auteur</label>
        <input
          type="text"
          {...register('auteur', { required: 'Auteur is verplicht' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.auteur && <p className="mt-1 text-sm text-red-600">{errors.auteur.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Datum</label>
        <input
          type="date"
          {...register('datum', { required: 'Datum is verplicht' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.datum && <p className="mt-1 text-sm text-red-600">{errors.datum.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Afbeelding URL</label>
        <input
          type="url"
          {...register('afbeelding', { required: 'Afbeelding URL is verplicht' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.afbeelding && <p className="mt-1 text-sm text-red-600">{errors.afbeelding.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Categorie</label>
        <input
          type="text"
          {...register('categorie', { required: 'Categorie is verplicht' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.categorie && <p className="mt-1 text-sm text-red-600">{errors.categorie.message}</p>}
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Annuleren
        </button>
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          {article ? 'Bijwerken' : 'Aanmaken'}
        </button>
      </div>
    </form>
  );
}