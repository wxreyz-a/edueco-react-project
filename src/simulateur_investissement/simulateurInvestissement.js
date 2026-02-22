import React, { useState } from 'react';
import './simulateurInvestissement.css';
import { calculateInvestment } from '../utils/calculations';

const InvestmentSimulator = () => {
  const [initialInvestment, setInitialInvestment] = useState('');
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [annualGrowthRate, setAnnualGrowthRate] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState(null);

  const calculateInvestmentHandler = (e) => {
    e.preventDefault();
    const calculationResult = calculateInvestment(initialInvestment, monthlyContribution, annualGrowthRate, years);
    if (calculationResult.error) {
      setResult(calculationResult.error);
    } else {
      setResult(calculationResult);
    }
  };

  return (
    <div className="investment-simulator-page">
      <h2 className="calculator-title">Simulateur d’Investissement</h2>

      <div className="simulator-container">
        <form className="simulator-form" onSubmit={calculateInvestmentHandler}>
          <div className="form-group">
            <label htmlFor="initialInvestment">Investissement Initial (€)</label>
            <input 
              type="number"
              id="initialInvestment"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(e.target.value)}
              placeholder="Ex : 5000"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="monthlyContribution">Contribution Mensuelle (€)</label>
            <input 
              type="number"
              id="monthlyContribution"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(e.target.value)}
              placeholder="Ex : 200"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="annualGrowthRate">Taux de Croissance Annuel (%)</label>
            <input 
              type="number"
              id="annualGrowthRate"
              value={annualGrowthRate}
              onChange={(e) => setAnnualGrowthRate(e.target.value)}
              placeholder="Ex : 7"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="years">Durée (années)</label>
            <input 
              type="number"
              id="years"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              placeholder="Ex : 20"
              required
            />
          </div>
          <button type="submit" className="simulate-button">Simuler</button>
        </form>

        <div className="result-and-info">
          <div className="result-container">
            {result !== null && typeof result !== 'string' ? (
              <div className="result">
                <p>Valeur investie : <strong>{Number(result.totalInvested).toLocaleString('fr-FR')} €</strong></p>
                <p>Plus-value : <strong>{Number(result.profit).toLocaleString('fr-FR')} €</strong></p>
                <p>Valeur future : <strong>{Number(result.futureValue).toLocaleString('fr-FR')} €</strong></p>
              </div>
            ) : (
              <p>{result}</p>
            )}
          </div>

          <div className="epargne-info">
            <p>
              L’investissement à long terme est un excellent moyen de faire fructifier votre capital. Grâce aux rendements composés, même de petits apports mensuels peuvent générer de grandes plus-values avec le temps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentSimulator;
