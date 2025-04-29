'use client';

import React, { useState } from 'react';

interface ContactFormProps {
  onSubmit?: (formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => void;
  buttonText?: string;
  showTitle?: boolean;
  titleText?: string;
  descriptionText?: string;
  className?: string;
}

export const ContactForm = ({
  onSubmit,
  buttonText = "Envoyer",
  showTitle = true,
  titleText = "Contactez-nous",
  descriptionText = "Nous vous répondrons dans les plus brefs délais.",
  className = "",
}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    // Par défaut, on réinitialise le formulaire
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={className}>
      {showTitle && (
        <div className="mb-6 text-center">
          <h3 className="text-lg font-bold">{titleText}</h3>
          <p className="mt-2">{descriptionText}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Votre nom"
          className="input input-bordered w-full"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Votre email"
          className="input input-bordered w-full"
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Votre téléphone"
          className="input input-bordered w-full"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Votre message"
          className="textarea textarea-bordered w-full"
          required
        ></textarea>
        
        <button type="submit" className="btn btn-primary w-full">
          {buttonText}
        </button>
      </form>
    </div>
  );
}; 