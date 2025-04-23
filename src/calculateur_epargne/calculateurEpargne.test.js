import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EpargneCalculator from './calculateurEpargne';

describe('EpargneCalculator Component', () => {
  test('renders calculator form with all inputs and button', () => {
    render(<EpargneCalculator />);
    expect(screen.getByLabelText(/Montant initial/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Versement mensuel/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Taux d'intérêt annuel/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Durée/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Calculer/i })).toBeInTheDocument();
  });

  test('shows error message when inputs are invalid', () => {
    render(<EpargneCalculator />);
    fireEvent.change(screen.getByLabelText(/Montant initial/i), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText(/Versement mensuel/i), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText(/Taux d'intérêt annuel/i), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText(/Durée/i), { target: { value: '' } });
    fireEvent.click(screen.getByRole('button', { name: /Calculer/i }));
    expect(screen.getByText(/Veuillez remplir correctement tous les champs/i)).toBeInTheDocument();
  });

  test('calculates and displays future value correctly', () => {
    render(<EpargneCalculator />);
    fireEvent.change(screen.getByLabelText(/Montant initial/i), { target: { value: '1000' } });
    fireEvent.change(screen.getByLabelText(/Versement mensuel/i), { target: { value: '100' } });
    fireEvent.change(screen.getByLabelText(/Taux d'intérêt annuel/i), { target: { value: '5' } });
    fireEvent.change(screen.getByLabelText(/Durée/i), { target: { value: '10' } });
    fireEvent.click(screen.getByRole('button', { name: /Calculer/i }));
    expect(screen.getByText(/Valeur future/i)).toBeInTheDocument();
  });
});
