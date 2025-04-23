import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ChapterIndex from './PageDesChapitres';

describe('ChapterIndex Component', () => {
  test('renders main heading and chapter links', () => {
    render(
      <BrowserRouter>
        <ChapterIndex />
      </BrowserRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Explorez l'Histoire et l'Impact de l'Argent/i);
    expect(screen.getByRole('heading', { name: /Chapitre 1 : Une brève histoire de l'argent/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Chapitre 1 : Une brève histoire de l'argent/i })).toHaveAttribute('href', '/parties-chapitre-un');
    expect(screen.getByRole('heading', { name: /Chapitre 2 : Capitalisme et Mondialisation/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Chapitre 2 : Capitalisme et Mondialisation/i })).toHaveAttribute('href', '/parties-chapitre-deux');
    expect(screen.getByRole('heading', { name: /Chapitre 3 : Investissement, Bourse et Cryptomonnaies/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Chapitre 3 : Investissement, Bourse et Cryptomonnaies/i })).toHaveAttribute('href', '/parties-chapitre-trois');
    expect(screen.getByRole('heading', { name: /Chapitre 4 : La Psychologie de l'Argent/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Chapitre 4 : La Psychologie de l'Argent/i })).toHaveAttribute('href', '/parties-chapitre-quatre');
  });

  test('renders footer text', () => {
    render(
      <BrowserRouter>
        <ChapterIndex />
      </BrowserRouter>
    );
    expect(screen.getByText(/Plongez dans la compréhension de l'argent et son impact sur votre vie./i)).toBeInTheDocument();
  });
});
