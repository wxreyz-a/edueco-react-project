import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from './Home';

// Mock fetch for feedback submission
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ success: true }),
  })
);

describe('Home Component', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('renders main heading and key sections', () => {
    render(<Home />);
    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toBeInTheDocument();

    expect(screen.getByText(/Votre bien-être financier est notre priorité/i)).toBeInTheDocument();
    expect(screen.getByText(/Derniers articles/i)).toBeInTheDocument();
    expect(screen.getByText(/Outils interactifs/i)).toBeInTheDocument();
    expect(screen.getByText(/Témoignages/i)).toBeInTheDocument();
    expect(screen.getByText(/Vos retours/i)).toBeInTheDocument();
  });

  test('search input filters articles', async () => {
    render(<Home />);
    const searchInput = screen.getByPlaceholderText(/Recherchez des conseils, outils, actualités/i);
    fireEvent.change(searchInput, { target: { value: 'budget' } });

    await waitFor(() => {
      expect(screen.getByText(/Optimiser son budget/i)).toBeInTheDocument();
    });
  });

  test('feedback form submits successfully', async () => {
    render(<Home />);
    const textarea = screen.getByLabelText(/Votre message/i);
    const submitButton = screen.getByRole('button', { name: /Envoyer/i });

    fireEvent.change(textarea, { target: { value: 'Test feedback message' } });
    fireEvent.click(submitButton);

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    expect(fetch).toHaveBeenCalledWith(
      'https://backend-feedback-8sen.onrender.com/api/feedback',
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ feedback: 'Test feedback message' }),
      })
    );
  });

  test('navigation links are present and clickable', () => {
    render(<Home />);
    const navLinks = ['Accueil', 'Guides', 'Actualités', 'Outils', 'Contact'];
    navLinks.forEach((linkText) => {
      const link = screen.getByRole('link', { name: new RegExp(linkText, 'i') });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href');
    });
  });
});

