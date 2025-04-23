import React from 'react';
import { render, screen } from '@testing-library/react';
import TarifsTrump from './Article_deux';

describe('TarifsTrump Component', () => {
  test('renders lists and footer', () => {
    render(<TarifsTrump />);
    // Utilisation de getAllByText pour gérer plusieurs occurrences de "Union européenne" et "Inde"
    const unionEuropeenneElements = screen.getAllByText(/Union européenne/i);
    expect(unionEuropeenneElements.length).toBeGreaterThan(0);
    expect(screen.getByText(/Canada et Mexique/i)).toBeInTheDocument();
    const indeElements = screen.getAllByText(/Inde/i);
    expect(indeElements.length).toBeGreaterThan(0);
    expect(screen.getByText(/Publié le 20 mars 2025/i)).toBeInTheDocument();
  });
});
