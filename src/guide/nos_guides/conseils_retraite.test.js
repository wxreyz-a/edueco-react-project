import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ConseilsRetraiteArticle from './conseils_retraite';

describe('ConseilsRetraiteArticle Component', () => {
  test('renders title and step navigation', () => {
    render(<ConseilsRetraiteArticle />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Préparez votre Retraite/i);
    expect(screen.getByText(/Pourquoi anticiper votre retraite ?/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /Aller à l'étape 2: Étapes Clés pour Préparer une Retraite Réussie/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /Aller à l'étape 3: Démarches Concrètes et Suivi Régulier/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Aller à l'étape 4: En Résumé/i })
    ).toBeInTheDocument();
  });

  test('renders list items for selected steps', () => {
    render(<ConseilsRetraiteArticle />);
    fireEvent.click(
      screen.getByRole('button', {
        name: /Aller à l'étape 2: Étapes Clés pour Préparer une Retraite Réussie/i,
      })
    );
    expect(screen.getByText(/Démarrage précoce/i)).toBeInTheDocument();
    expect(screen.getByText(/Évaluation de vos besoins/i)).toBeInTheDocument();
    expect(screen.getByText(/Plan d.?épargne dédié/i)).toBeInTheDocument();
    expect(screen.getByText(/Consultation de professionnels/i)).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole('button', {
        name: /Aller à l'étape 3: Démarches Concrètes et Suivi Régulier/i,
      })
    );
    expect(screen.getByText(/Établir un diagnostic financier/i)).toBeInTheDocument();
  });
});
