import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InvestmentSimulator from './simulateurInvestissement';

describe('InvestmentSimulator Component', () => {
  test('renders simulator form with all inputs and button', () => {
    render(<InvestmentSimulator />);
    expect(screen.getByLabelText(/Investissement Initial/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Contribution Mensuelle/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Taux de Croissance Annuel/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Durée/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Simuler/i })).toBeInTheDocument();
  });

  test('shows error message when inputs are invalid', () => {
    render(<InvestmentSimulator />);
    fireEvent.change(screen.getByLabelText(/Investissement Initial/i), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText(/Contribution Mensuelle/i), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText(/Taux de Croissance Annuel/i), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText(/Durée/i), { target: { value: '' } });
    fireEvent.click(screen.getByRole('button', { name: /Simuler/i }));
    expect(screen.getByText(/Veuillez remplir correctement tous les champs/i)).toBeInTheDocument();
  });

  test('calculates and displays investment results correctly', () => {
    render(<InvestmentSimulator />);
    fireEvent.change(screen.getByLabelText(/Investissement Initial/i), { target: { value: '5000' } });
    fireEvent.change(screen.getByLabelText(/Contribution Mensuelle/i), { target: { value: '200' } });
    fireEvent.change(screen.getByLabelText(/Taux de Croissance Annuel/i), { target: { value: '7' } });
    fireEvent.change(screen.getByLabelText(/Durée/i), { target: { value: '20' } });
    fireEvent.click(screen.getByRole('button', { name: /Simuler/i }));
    expect(screen.getByText(/Valeur investie/i)).toBeInTheDocument();
    // Use getAllByText to handle multiple matches for "Plus-value"
    expect(screen.getAllByText(/Plus-value/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Valeur future/i)).toBeInTheDocument();
  });
});
