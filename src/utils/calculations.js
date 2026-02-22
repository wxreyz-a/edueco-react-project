export function calculateSavings(principal, monthlyDeposit, annualRate, years) {
  const P = Number.parseFloat(principal);
  const D = Number.parseFloat(monthlyDeposit);
  const r = Number.parseFloat(annualRate) / 100;
  const t = Number.parseFloat(years);

  if (Number.isNaN(P) || Number.isNaN(D) || Number.isNaN(r) || Number.isNaN(t)) {
    return { error: "Veuillez remplir correctement tous les champs." };
  }

  const monthlyRate = r / 12;
  const months = t * 12;
  let futureValue;
  if (monthlyRate === 0) {
    futureValue = P + D * months;
  } else {
    futureValue =
      P * Math.pow(1 + monthlyRate, months) +
      D * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
  }

  return { futureValue: futureValue.toFixed(2) };
}

export function calculateInvestment(initialInvestment, monthlyContribution, annualGrowthRate, years) {
  const P = Number.parseFloat(initialInvestment);
  const C = Number.parseFloat(monthlyContribution);
  const r = Number.parseFloat(annualGrowthRate) / 100;
  const t = Number.parseFloat(years);

  if (Number.isNaN(P) || Number.isNaN(C) || Number.isNaN(r) || Number.isNaN(t)) {
    return { error: "Veuillez remplir correctement tous les champs." };
  }

  const monthlyRate = r / 12;
  const months = t * 12;

  let futureValue;
  if (monthlyRate === 0) {
    futureValue = P + C * months;
  } else {
    futureValue =
      P * Math.pow(1 + monthlyRate, months) +
      C * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
  }

  const totalInvested = P + C * months;
  const profit = futureValue - totalInvested;

  return { futureValue, totalInvested, profit };
}
