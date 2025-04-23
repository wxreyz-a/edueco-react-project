import React from 'react';
import { render, screen } from '@testing-library/react';
import GuideInvestissementArticle from './guide_investissement';

describe('GuideInvestissementArticle Component', () => {
  test('renders main headings and key sections', () => {
    render(<GuideInvestissementArticle />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Conseils Pratiques : Optimisez vos Investissements/i);
    expect(screen.getByText(/Pourquoi investir intelligemment ?/i)).toBeInTheDocument();
    expect(screen.getByText(/Démarches Pratiques pour Investir/i)).toBeInTheDocument();
    expect(screen.getByText(/Démarches Concrètes et Ressources/i)).toBeInTheDocument();
    expect(screen.getByText(/En Résumé/i)).toBeInTheDocument();
  });

  test('renders key links', () => {
    render(<GuideInvestissementArticle />);
    expect(screen.getByRole('link', { name: /Guide Budget/i })).toHaveAttribute('href', '/guide-budget');
    expect(screen.getByRole('link', { name: /simulateurs d'investissement/i })).toHaveAttribute('href', '/simulateur-investissement');
  });
});
