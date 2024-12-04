export interface MortgageData {
  propertyPrice: number;
  downPayment: number;
  interestRate: number;
  loanTerm: number;
  propertyTax: number;
  homeInsurance: number;
  pmi: number;
}

export function calculateMonthlyPayment(data: MortgageData): number {
  const loanAmount = data.propertyPrice - data.downPayment;
  const monthlyRate = data.interestRate / 100 / 12;
  const numberOfPayments = data.loanTerm * 12;

  const monthlyPayment =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  return monthlyPayment;
}

export function calculateTotalPayment(monthlyPayment: number, loanTerm: number): number {
  return monthlyPayment * loanTerm * 12;
}

export function calculateTotalInterest(totalPayment: number, propertyPrice: number, downPayment: number): number {
  return totalPayment - (propertyPrice - downPayment);
}

export function calculateDownPaymentPercentage(propertyPrice: number, downPayment: number): number {
  return (downPayment / propertyPrice) * 100;
}

export function calculateLoanToValueRatio(propertyPrice: number, downPayment: number): number {
  return ((propertyPrice - downPayment) / propertyPrice) * 100;
}