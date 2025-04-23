import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GuidesConseils from './page2';

describe('GuidesConseils Component', () => {
  test('renders categories and guides', () => {
    render(<GuidesConseils />);
    // Check categories buttons
    const categories = ['Tous les guides', 'Budget', 'Épargne', 'Investissement', 'Fiscalité', 'Retraite'];
    categories.forEach(category => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });

    // Check some guide titles
    expect(screen.getByText(/Guide Budget/i)).toBeInTheDocument();
    expect(screen.getByText(/Guide Épargne/i)).toBeInTheDocument();
  });

  test('filters guides by category when category button is clicked', () => {
    render(<GuidesConseils />);
    const budgetButton = screen.getByText('Budget');
    fireEvent.click(budgetButton);

    // After filtering, guides not in budget category should not be visible
    expect(screen.getByText(/Guide Budget/i)).toBeInTheDocument();
    expect(screen.queryByText(/Guide Épargne/i)).toBeNull();
  });

  test('renders navigation links with correct aria-labels', () => {
    render(<GuidesConseils />);
    const guideLink = screen.getByRole('link', { name: /Lire le guide Guide Budget/i });
    expect(guideLink).toBeInTheDocument();
    expect(guideLink).toHaveAttribute('href', '/guide-budget');
  });
});
