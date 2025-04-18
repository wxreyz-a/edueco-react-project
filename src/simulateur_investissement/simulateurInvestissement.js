import React, { useState } from 'react';

const InvestmentSimulator = () => {
  const [initialInvestment, setInitialInvestment] = useState('');
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [annualGrowthRate, setAnnualGrowthRate] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState(null);

  const calculateInvestment = (e) => {
    e.preventDefault();

    const P = parseFloat(initialInvestment);
    const C = parseFloat(monthlyContribution);
    const r = parseFloat(annualGrowthRate) / 100;
    const t = parseFloat(years);
    
    if (isNaN(P) || isNaN(C) || isNaN(r) || isNaN(t)) {
      setResult("Veuillez remplir correctement tous les champs.");
      return;
    }
    
    const monthlyRate = r / 12;
    const months = t * 12;
    
    const futureValue =
      P * Math.pow(1 + monthlyRate, months) +
      C * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);

    const totalInvested = P + C * months;
    const profit = futureValue - totalInvested;
    
    setResult({ futureValue, totalInvested, profit });
  };

  return (
    <div className="investment-simulator-page">
      <h2 className="calculator-title">Simulateur d’Investissement</h2>

      <div className="simulator-container">
        <form className="simulator-form" onSubmit={calculateInvestment}>
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
