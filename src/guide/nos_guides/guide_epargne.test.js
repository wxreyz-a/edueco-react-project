import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import  GuideEpargne from './guide_epargne';

describe('GuideEpargne Component', () => {
  test('renders title and step navigation', () => {
    render(<GuideEpargne />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Boostez Votre Épargne/i);
    expect(screen.getByText(/Pourquoi mettre l'accent sur l'épargne/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Aller à l'étape 2: Étapes Clés pour une Épargne Efficace/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /Aller à l'étape 3: Démarches Concrètes pour Automatiser et Suivre votre Épargne/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Aller à l'étape 4: En Résumé/i })
    ).toBeInTheDocument();
  });

  test('renders key action items when changing steps', () => {
    render(<GuideEpargne />);
    fireEvent.click(
      screen.getByRole('button', { name: /Aller à l'étape 2: Étapes Clés pour une Épargne Efficace/i })
    );
    expect(screen.getByText(/Automatisation des virements/i)).toBeInTheDocument();
    expect(screen.getByText(/Réduction des dépenses inutiles/i)).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole('button', {
        name: /Aller à l'étape 3: Démarches Concrètes pour Automatiser et Suivre votre Épargne/i,
      })
    );
    expect(screen.getByText(/Évaluation initiale/i)).toBeInTheDocument();
  });
});
