import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import StrategiesInvestissementArticle from './strategies_investissement';

describe('StrategiesInvestissementArticle Component', () => {
  test('renders title and step navigation', () => {
    render(<StrategiesInvestissementArticle />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Maximisez vos Retours sur Investissement/i);
    expect(screen.getByText(/Pourquoi adopter des stratégies avancées ?/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /Aller à l'étape 2: Étapes Clés pour Mettre en Œuvre ces Stratégies/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /Aller à l'étape 3: Approches Avancées à Considérer/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Aller à l'étape 4: En Résumé/i })
    ).toBeInTheDocument();
  });

  test('renders strategy details for selected steps', () => {
    render(<StrategiesInvestissementArticle />);
    fireEvent.click(
      screen.getByRole('button', {
        name: /Aller à l'étape 2: Étapes Clés pour Mettre en Œuvre ces Stratégies/i,
      })
    );
    expect(screen.getByText(/Diversification avancée/i)).toBeInTheDocument();
    expect(screen.getByText(/Analyse combinée/i)).toBeInTheDocument();
    expect(screen.getByText(/Gestion du risque et couverture/i)).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole('button', {
        name: /Aller à l'étape 3: Approches Avancées à Considérer/i,
      })
    );
    expect(screen.getByText(/Investissement thématique/i)).toBeInTheDocument();
    expect(screen.getByText(/Trading algorithmique/i)).toBeInTheDocument();
    expect(screen.getByText(/Stratégies de couverture/i)).toBeInTheDocument();
  });
});
