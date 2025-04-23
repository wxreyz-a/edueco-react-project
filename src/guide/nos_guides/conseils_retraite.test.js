import React from 'react';
import { render, screen } from '@testing-library/react';
import ConseilsRetraiteArticle from './conseils_retraite';

describe('ConseilsRetraiteArticle Component', () => {
  test('renders main headings and key sections', () => {
    render(<ConseilsRetraiteArticle />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Conseils Pratiques : Préparez votre Retraite/i);
    expect(screen.getByText(/Pourquoi anticiper votre retraite ?/i)).toBeInTheDocument();
    expect(screen.getByText(/Étapes Clés pour Préparer une Retraite Réussie/i)).toBeInTheDocument();
    expect(screen.getByText(/Démarches Concrètes et Suivi Régulier/i)).toBeInTheDocument();
    expect(screen.getByText(/En Résumé/i)).toBeInTheDocument();
  });

  test('renders key list items', () => {
    render(<ConseilsRetraiteArticle />);
    expect(screen.getByText(/Démarrage précoce/i)).toBeInTheDocument();
    expect(screen.getByText(/Évaluation de vos besoins/i)).toBeInTheDocument();
    expect(screen.getByText(/Plan d’épargne dédié/i)).toBeInTheDocument();
    expect(screen.getByText(/Consultation de professionnels/i)).toBeInTheDocument();
  });
});
