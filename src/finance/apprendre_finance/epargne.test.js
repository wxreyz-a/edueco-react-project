import React from 'react';
import { render, screen } from '@testing-library/react';
import EpargneTrainingArticle from './epargne';

describe('EpargneTrainingArticle Component', () => {
  test('renders key links', () => {
    render(<EpargneTrainingArticle />);
    // Use getAllByRole to handle multiple links with the same name
    const bankinLinks = screen.getAllByRole('link', { name: /Bankin'/i });
    expect(bankinLinks.length).toBeGreaterThan(0);
    bankinLinks.forEach(link => {
      expect(link).toHaveAttribute('href', 'https://www.bankin.com');
    });

    const ynabLinks = screen.getAllByRole('link', { name: /YNAB/i });
    expect(ynabLinks.length).toBeGreaterThan(0);
    ynabLinks.forEach(link => {
      expect(link).toHaveAttribute('href', 'https://www.ynab.com');
    });

    const simulateurLinks = screen.getAllByRole('link', { name: /simulateur d’épargne/i });
    expect(simulateurLinks.length).toBeGreaterThan(0);
    simulateurLinks.forEach(link => {
      expect(link).toHaveAttribute('href', '/calculateur-epargne');
    });

    const investirLinks = screen.getAllByRole('link', { name: /Investir intelligemment/i });
    expect(investirLinks.length).toBeGreaterThan(0);
    investirLinks.forEach(link => {
      expect(link).toHaveAttribute('href', '/investissement');
    });
  });
});
