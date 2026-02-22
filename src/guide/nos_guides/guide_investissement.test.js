import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import GuideInvestissementArticle from './guide_investissement';

describe('GuideInvestissementArticle Component', () => {
  test('renders title and step navigation', () => {
    render(<GuideInvestissementArticle />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Conseils Pratiques : Optimisez vos Investissements/i);
    expect(screen.getByText(/Pourquoi investir intelligemment ?/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Aller à l'étape 2: Démarches Pratiques pour Investir/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Aller à l'étape 3: Démarches Concrètes et Ressources/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Aller à l'étape 4: En Résumé/i })
    ).toBeInTheDocument();
  });

  test('renders key links', () => {
    render(<GuideInvestissementArticle />);
    fireEvent.click(
      screen.getByRole('button', { name: /Aller à l'étape 2: Démarches Pratiques pour Investir/i })
    );
    expect(screen.getByRole('link', { name: /Guide Budget/i })).toHaveAttribute('href', '/guide-budget');
    expect(screen.getByRole('link', { name: /Simulateur d'investissement/i })).toHaveAttribute('href', '/simulateur-investissement');
  });
});
