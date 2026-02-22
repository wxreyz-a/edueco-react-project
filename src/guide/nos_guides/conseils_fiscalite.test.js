import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ConseilsFiscaliteArticle from './conseils_fiscalite';

describe('ConseilsFiscaliteArticle Component', () => {
  test('renders title and navigation for fiscal steps', () => {
    render(<ConseilsFiscaliteArticle />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Conseils Fiscalité : Optimisez vos Impôts/i);
    expect(screen.getByText(/Tirez le meilleur parti des dispositifs fiscaux/i)).toBeInTheDocument();
    expect(screen.getByText(/Introduction/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Aller à l'étape 8: Conclusion/i })).toBeInTheDocument();
  });

  test('renders each node when corresponding step is selected', () => {
    render(<ConseilsFiscaliteArticle />);
    const nodes = [
      'Déclarations',
      'Déductions',
      "Crédits d'Impôt",
      'Planification',
      'Comparaison',
      'Réévaluation'
    ];

    nodes.forEach((node, index) => {
      fireEvent.click(
        screen.getByRole('button', {
          name: new RegExp(`Aller à l'étape ${index + 2}: ${node}`, 'i'),
        })
      );
      expect(
        screen.getByRole('heading', { level: 2, name: new RegExp(node, 'i') })
      ).toBeInTheDocument();
    });
  });
});
