import React from 'react';
import { render, screen } from '@testing-library/react';
import StrategiesInvestissementArticle from './strategies_investissement';

describe('StrategiesInvestissementArticle Component', () => {
  test('renders main headings and key sections', () => {
    render(<StrategiesInvestissementArticle />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Conseils Pratiques : Maximisez vos Retours sur Investissement/i);
    expect(screen.getByText(/Pourquoi adopter des stratégies avancées ?/i)).toBeInTheDocument();
    expect(screen.getByText(/Étapes Clés pour Mettre en Œuvre ces Stratégies/i)).toBeInTheDocument();
    expect(screen.getByText(/Approches Avancées à Considérer/i)).toBeInTheDocument();
    expect(screen.getByText(/En Résumé/i)).toBeInTheDocument();
  });

  test('renders key strategy points', () => {
    render(<StrategiesInvestissementArticle />);
    expect(screen.getByText(/Diversification avancée/i)).toBeInTheDocument();
    expect(screen.getByText(/Analyse combinée/i)).toBeInTheDocument();
    expect(screen.getByText(/Gestion du risque et couverture/i)).toBeInTheDocument();
    expect(screen.getByText(/Investissement thématique/i)).toBeInTheDocument();
    expect(screen.getByText(/Trading algorithmique/i)).toBeInTheDocument();
    expect(screen.getByText(/Stratégies de couverture/i)).toBeInTheDocument();
  });
});
