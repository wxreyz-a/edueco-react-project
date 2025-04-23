import React from 'react';
import { render, screen } from '@testing-library/react';
import Investir2025 from './Article_un';

describe('Investir2025 Component', () => {
  test('renders main headings and key sections', () => {
    render(<Investir2025 />);
    expect(screen.getByText(/Investir en 2025 : Le Pari de Demain/i)).toBeInTheDocument();
    expect(screen.getByText(/Les Secteurs Porteurs/i)).toBeInTheDocument();
    expect(screen.getByText(/Stratégies d'Investissement/i)).toBeInTheDocument();
    // Utilisation de getAllByText pour gérer plusieurs occurrences de "Opportunités et Défis"
    const opportunitesEtDefis = screen.getAllByText(/Opportunités et Défis/i);
    expect(opportunitesEtDefis.length).toBeGreaterThan(0);
    expect(screen.getByText(/Conclusion/i)).toBeInTheDocument();
  });
});

