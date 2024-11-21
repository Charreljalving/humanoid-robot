import React from 'react';
import { X } from 'lucide-react';
import { useForm } from 'react-hook-form';

type SubscribeFormData = {
  email: string;
};

type NewsletterSubscribeProps = {
  onClose: () => void;
};

export function NewsletterSubscribe({ onClose }: NewsletterSubscribeProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<SubscribeFormData>();

  const onSubmit = async (data: SubscribeFormData) => {
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Bedankt voor het abonneren!');
        onClose();
      } else {
        throw new Error('Er is iets misgegaan');
      }
    } catch (error) {
      alert('Er is een fout opgetreden bij het abonneren.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-700"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold mb-4">Blijf op de hoogte</h2>
        <p className="text-neutral-600 mb-6">
          Ontvang de laatste updates over humanoïde robots direct in je inbox.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Je email adres"
              {...register('email', {
                required: 'Email is verplicht',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Ongeldig email adres',
                },
              })}
              className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Abonneren
          </button>
        </form>

        <p className="mt-4 text-sm text-neutral-500">
          Je kunt je op elk moment uitschrijven. Bekijk ons privacybeleid voor meer informatie.
        </p>
      </div>
    </div>
  );
}