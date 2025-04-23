import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Actualites from './page3';

describe('Actualites Page3 Component', () => {
  test('renders main heading and slogan', () => {
    render(
      <BrowserRouter>
        <Actualites />
      </BrowserRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Restez informés/i);
    expect(screen.getByText(/EduEco/i)).toBeInTheDocument();
  });

  test('renders articles with images, titles, descriptions and links', () => {
    render(
      <BrowserRouter>
        <Actualites />
      </BrowserRouter>
    );
    const articles = screen.getAllByRole('article');
    expect(articles.length).toBe(2);

    expect(screen.getByRole('heading', { name: /Investir en 2025/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Lire l'article Investir en 2025/i })).toHaveAttribute('href', '/investir-2025');

    expect(screen.getByRole('heading', { name: /Tarifs Douaniers : Une Clé de bras de la part de Donald Trump/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Lire l'article Optimiser son budget/i })).toHaveAttribute('href', '/trump-tarifs');
  });

  test('renders footer copyright', () => {
    render(
      <BrowserRouter>
        <Actualites />
      </BrowserRouter>
    );
    expect(screen.getByText(/© 2025 EduEco. Tous droits réservés./i)).toBeInTheDocument();
  });
});
