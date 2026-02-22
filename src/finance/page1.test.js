import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Finance from './page1';
import { BrowserRouter } from 'react-router-dom';

describe('Finance Page1 Component', () => {
  test('renders main heading and categories', () => {
    render(
      <BrowserRouter>
        <Finance />
      </BrowserRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Parcours d'apprentissage : Introduction à la Finance/i);
    expect(screen.getByRole('button', { name: /Tous/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Budget/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Épargne/i })).toBeInTheDocument();
  });

  test('filters modules by category when category button clicked', () => {
    render(
      <BrowserRouter>
        <Finance />
      </BrowserRouter>
    );
    const budgetButton = screen.getByRole('button', { name: /Budget/i });
    fireEvent.click(budgetButton);
    expect(budgetButton).toHaveClass('active');
    expect(screen.getByText(/Apprenez à établir et suivre un budget efficace/i)).toBeInTheDocument();
    expect(screen.queryByText(/Découvrez des stratégies pour économiser intelligemment/i)).not.toBeInTheDocument();
  });

  test('renders module cards with links', () => {
    render(
      <BrowserRouter>
        <Finance />
      </BrowserRouter>
    );
    expect(screen.getAllByRole('link', { name: /Lire le module/i }).length).toBeGreaterThan(0);
    expect(screen.getByRole('link', { name: /Lire le module Budget/i })).toHaveAttribute('href', '/faire-un-budget');
  });

  test('renders footer copyright', () => {
    render(
      <BrowserRouter>
        <Finance />
      </BrowserRouter>
    );
    expect(screen.getByText(/© 2025 EduEco. Tous droits réservés./i)).toBeInTheDocument();
  });
});

