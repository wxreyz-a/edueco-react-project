import React from 'react';
import { render, screen } from '@testing-library/react';
import  GuideEpargne from './guide_epargne';

describe('GuideEpargne Component', () => {
  test('renders main headings and key sections', () => {
    render(<GuideEpargne />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Apprendre à Épargner/i);
    expect(screen.getByText(/Introduction/i)).toBeInTheDocument();
    expect(screen.getByText(/Les Fondamentaux de l'Épargne/i)).toBeInTheDocument();
    expect(screen.getByText(/Stratégies d'Épargne/i)).toBeInTheDocument();
    expect(screen.getByText(/Les Erreurs à Éviter/i)).toBeInTheDocument();
    expect(screen.getByText(/Outils et Ressources/i)).toBeInTheDocument();
    expect(screen.getByText(/Conclusion/i)).toBeInTheDocument();
  });

  test('renders key links', () => {
    render(<GuideEpargne />);
    expect(screen.getByRole('link', { name: /Bankin'/i })).toHaveAttribute('href', 'https://www.bankin.com');
    expect(screen.getByRole('link', { name: /YNAB/i })).toHaveAttribute('href', 'https://www.ynab.com');
    expect(screen.getByRole('link', { name: /simulateur d’épargne/i })).toHaveAttribute('href', '/calculateur-epargne');
    expect(screen.getByRole('link', { name: /Investir intelligemment/i })).toHaveAttribute('href', '/investissement');
  });
});
