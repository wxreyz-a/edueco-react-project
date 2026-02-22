import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import GuidesConseils from './page2';

describe('GuidesConseils Component', () => {
  const renderGuides = () =>
    render(
      <MemoryRouter>
        <GuidesConseils />
      </MemoryRouter>
    );

  test('renders categories and guides', () => {
    renderGuides();
    const categories = ['Tous les guides', 'Budget', 'Épargne', 'Investissement', 'Fiscalité', 'Retraite'];
    categories.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });

    expect(screen.getByText(/Guide Budget/i)).toBeInTheDocument();
    expect(screen.getByText(/Guide Épargne/i)).toBeInTheDocument();
  });

  test('filters guides by category when category button is clicked', () => {
    renderGuides();
    const budgetButton = screen.getByText('Budget');
    fireEvent.click(budgetButton);

    expect(screen.getByText(/Guide Budget/i)).toBeInTheDocument();
    expect(screen.queryByText(/Guide Épargne/i)).toBeNull();
  });

  test('renders navigation links with correct aria-labels', () => {
    renderGuides();
    const guideLink = screen.getByRole('link', { name: /Lire le guide Guide Budget/i });
    expect(guideLink).toBeInTheDocument();
    expect(guideLink).toHaveAttribute('href', '/guide-budget');
  });
});
