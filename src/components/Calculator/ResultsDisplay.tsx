import React from 'react';
import { DollarSign, Percent, Calendar, PieChart, BarChart3 } from 'lucide-react';

interface ResultsDisplayProps {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  downPaymentPercentage: number;
  loanToValueRatio: number;
}

export default function ResultsDisplay({ 
  monthlyPayment,
  totalPayment,
  totalInterest,
  downPaymentPercentage,
  loanToValueRatio
}: ResultsDisplayProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  const metrics = [
    {
      icon: Calendar,
      title: "Monthly Payment",
      value: formatCurrency(monthlyPayment),
      color: "text-blue-600"
    },
    {
      icon: DollarSign,
      title: "Total Payment",
      value: formatCurrency(totalPayment),
      color: "text-green-600"
    },
    {
      icon: BarChart3,
      title: "Total Interest",
      value: formatCurrency(totalInterest),
      color: "text-purple-600"
    },
    {
      icon: Percent,
      title: "Down Payment",
      value: `${downPaymentPercentage.toFixed(1)}%`,
      color: "text-orange-600"
    },
    {
      icon: PieChart,
      title: "Loan-to-Value Ratio",
      value: `${loanToValueRatio.toFixed(1)}%`,
      color: "text-red-600"
    }
  ];

  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      {metrics.map((metric, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <metric.icon className={`h-5 w-5 ${metric.color}`} />
            <h3 className="text-sm font-medium text-gray-700">{metric.title}</h3>
          </div>
          <p className={`text-xl font-bold ${metric.color}`}>{metric.value}</p>
        </div>
      ))}
    </div>
  );
}