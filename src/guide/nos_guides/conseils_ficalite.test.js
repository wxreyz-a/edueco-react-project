import React from 'react';
import { render, screen } from '@testing-library/react';
import ConseilsFiscaliteArticle from './conseils_ficalite';

describe('ConseilsFiscaliteArticle Component', () => {
  test('renders main headings and key sections', () => {
    render(<ConseilsFiscaliteArticle />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Conseils Fiscalité : Optimisez vos Impôts/i);
    expect(screen.getByText(/Introduction/i)).toBeInTheDocument();
    expect(screen.getByText(/Carte Mentale des Conseils Fiscaux/i)).toBeInTheDocument();
    expect(screen.getByText(/Conclusion/i)).toBeInTheDocument();
  });

  test('renders mindmap nodes', () => {
    render(<ConseilsFiscaliteArticle />);
    const nodes = [
      'Déclarations',
      'Déductions',
      "Crédits d'Impôt",
      'Planification',
      'Comparaison',
      'Réévaluation'
    ];
    nodes.forEach(node => {
      expect(screen.getByRole('heading', { name: node })).toBeInTheDocument();
    });
  });
});
