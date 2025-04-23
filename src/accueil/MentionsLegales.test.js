import React from 'react';
import { render, screen } from '@testing-library/react';
import LegalMentions from './MentionsLegales';

describe('LegalMentions Component', () => {
  test('renders main heading and all sections', () => {
    render(<LegalMentions />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Mentions Légales/i);

    const sections = [
      "Identité de l'éditeur",
      "Hébergeur",
      "Conditions d'utilisation",
      "Contact",
      "Responsabilité",
      "Propriété intellectuelle",
      "Liens externes",
      "Mise à jour des mentions légales"
    ];

    sections.forEach(sectionTitle => {
      expect(screen.getByRole('heading', { name: sectionTitle })).toBeInTheDocument();
    });

    // Check some key texts
    expect(screen.getByText(/Hocini/i)).toBeInTheDocument();
    expect(screen.getByText(/o2switch/i)).toBeInTheDocument();
    expect(screen.getByText(/mefinancer@edueco.fr/i)).toBeInTheDocument();
  });
});
