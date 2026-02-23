import React from 'react';
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

describe('Home Component', () => {
  const renderHome = () =>
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

  test('renders main heading and key sections', () => {
    renderHome();
    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toBeInTheDocument();

    expect(screen.getByText(/Votre bien/i)).toBeInTheDocument();
    expect(screen.getByText(/Dernieres chroniques/i)).toBeInTheDocument();
    expect(screen.getByText(/Outils interactifs/i)).toBeInTheDocument();
  });

  test('search input filters articles', async () => {
    renderHome();
    const searchInput = screen.getByPlaceholderText(/Recherchez des conseils, outils, chroniques/i);
    fireEvent.change(searchInput, { target: { value: 'budget' } });

    await waitFor(() => {
      expect(screen.getByText(/Optimiser son budget/i)).toBeInTheDocument();
    });
  });

  test('navigation links are present and clickable', () => {
    renderHome();
    const mainNav = screen.getByRole('navigation');
    const navLinks = [
      { label: 'Accueil', href: '/' },
      { label: 'Apprendre', href: '/apprendre' },
      { label: 'Chroniques', href: '/blog/' },
      { label: 'Outils', href: '/ressources' },
      { label: 'Contact', href: '/contact' },
    ];

    navLinks.forEach(({ label, href }) => {
      const link = within(mainNav).getByRole('link', { name: new RegExp(`^${label}$`, 'i') });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', href);
    });
  });
});


