import React, { useState } from 'react';
import { Calculator as CalculatorIcon, DollarSign } from 'lucide-react';
import ResultsDisplay from './ResultsDisplay';
import { 
  MortgageData,
  calculateMonthlyPayment,
  calculateTotalPayment,
  calculateTotalInterest,
  calculateDownPaymentPercentage,
  calculateLoanToValueRatio
} from '../../utils/calculations';

export default function Calculator() {
  const [formData, setFormData] = useState<MortgageData>({
    propertyPrice: 0,
    downPayment: 0,
    interestRate: 7.5,
    loanTerm: 40,
    propertyTax: 0,
    homeInsurance: 0,
    pmi: 0
  });

  const [results, setResults] = useState<{
    monthlyPayment: number;
    totalPayment: number;
    totalInterest: number;
    monthlyWithExtras: number;
    downPaymentPercentage: number;
    loanToValueRatio: number;
  } | null>(null);

  const calculateResults = () => {
    const monthlyPayment = calculateMonthlyPayment(formData);
    const monthlyExtras = (formData.propertyTax / 12) + (formData.homeInsurance / 12) + (formData.pmi / 12);
    const monthlyWithExtras = monthlyPayment + monthlyExtras;
    const totalPayment = calculateTotalPayment(monthlyWithExtras, formData.loanTerm);
    const totalInterest = calculateTotalInterest(totalPayment, formData.propertyPrice, formData.downPayment);
    const downPaymentPercentage = calculateDownPaymentPercentage(formData.propertyPrice, formData.downPayment);
    const loanToValueRatio = calculateLoanToValueRatio(formData.propertyPrice, formData.downPayment);

    setResults({
      monthlyPayment,
      totalPayment,
      totalInterest,
      monthlyWithExtras,
      downPaymentPercentage,
      loanToValueRatio
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-center mb-6">
        <CalculatorIcon className="h-8 w-8 text-indigo-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800">40 Year Mortgage Calculator</h2>
      </div>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="propertyPrice" className="block text-sm font-medium text-gray-700">
            Property Price
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <DollarSign className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              id="propertyPrice"
              value={formData.propertyPrice}
              onChange={(e) => setFormData({...formData, propertyPrice: parseFloat(e.target.value) || 0})}
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="0.00"
            />
          </div>
        </div>

        <div>
          <label htmlFor="downPayment" className="block text-sm font-medium text-gray-700">
            Down Payment
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <DollarSign className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              id="downPayment"
              value={formData.downPayment}
              onChange={(e) => setFormData({...formData, downPayment: parseFloat(e.target.value) || 0})}
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="0.00"
            />
          </div>
        </div>

        <div>
          <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700">
            Interest Rate (%)
          </label>
          <input
            type="number"
            id="interestRate"
            value={formData.interestRate}
            onChange={(e) => setFormData({...formData, interestRate: parseFloat(e.target.value) || 0})}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            step="0.1"
          />
        </div>

        <div>
          <label htmlFor="propertyTax" className="block text-sm font-medium text-gray-700">
            Annual Property Tax
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <DollarSign className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              id="propertyTax"
              value={formData.propertyTax}
              onChange={(e) => setFormData({...formData, propertyTax: parseFloat(e.target.value) || 0})}
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="0.00"
            />
          </div>
        </div>

        <div>
          <label htmlFor="homeInsurance" className="block text-sm font-medium text-gray-700">
            Annual Home Insurance
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <DollarSign className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              id="homeInsurance"
              value={formData.homeInsurance}
              onChange={(e) => setFormData({...formData, homeInsurance: parseFloat(e.target.value) || 0})}
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="0.00"
            />
          </div>
        </div>

        <div>
          <label htmlFor="pmi" className="block text-sm font-medium text-gray-700">
            Monthly PMI (if applicable)
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <DollarSign className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              id="pmi"
              value={formData.pmi}
              onChange={(e) => setFormData({...formData, pmi: parseFloat(e.target.value) || 0})}
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="0.00"
            />
          </div>
        </div>

        <button
          onClick={calculateResults}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200"
        >
          Calculate Payment
        </button>

        {results && <ResultsDisplay {...results} />}
      </div>
    </div>
  );
}