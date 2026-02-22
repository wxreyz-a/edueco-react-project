import React, { useState } from 'react';
import './calculateurEpargne.css';
import { calculateSavings } from '../utils/calculations';

const EpargneCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [monthlyDeposit, setMonthlyDeposit] = useState('');
  const [annualRate, setAnnualRate] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState(null);

  const calculateSavingsHandler = (e) => {
    e.preventDefault();
    const calculationResult = calculateSavings(principal, monthlyDeposit, annualRate, years);
    if (calculationResult.error) {
      setResult(calculationResult.error);
    } else {
      setResult(calculationResult.futureValue);
    }
  };

  return (
    <div className="epargne-calculator-page">
      <h2 className="calculator-title">Calculateur d'Épargne</h2>

      <div className="calculator-container">
        <form className="calculator-form" onSubmit={calculateSavingsHandler}>
          <div className="form-group">
            <label htmlFor="principal">Montant initial (€)</label>
            <input 
              type="number"
              id="principal"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              placeholder="Ex: 1000"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="monthlyDeposit">Versement mensuel (€)</label>
            <input 
              type="number"
              id="monthlyDeposit"
              value={monthlyDeposit}
              onChange={(e) => setMonthlyDeposit(e.target.value)}
              placeholder="Ex: 100"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="annualRate">Taux d'intérêt annuel (%)</label>
            <input 
              type="number"
              id="annualRate"
              value={annualRate}
              onChange={(e) => setAnnualRate(e.target.value)}
              placeholder="Ex: 5"
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
              placeholder="Ex: 10"
              required
            />
          </div>
          <button type="submit" className="calculate-button">Calculer</button>
        </form>

        <div className="result-and-info">
          <div className="result-container">
            {result !== null && (
              <div className="result">
                {Number.isNaN(Number(result))
                  ? <p>{result}</p>
                  : <p>Valeur future : <strong>{Number(result).toLocaleString('fr-FR')} €</strong></p>
                }
              </div>
            )}
          </div>

          <div className="epargne-info">
            <p>
              L’épargne régulière vous permet de faire croître votre capital au fil du temps, grâce à la magie des intérêts composés. Utilisez ce simulateur pour estimer vos gains futurs selon vos objectifs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpargneCalculator;
