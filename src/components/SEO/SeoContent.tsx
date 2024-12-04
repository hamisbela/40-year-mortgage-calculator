import React from 'react';
import { Calculator, DollarSign, PieChart, BarChart3 } from 'lucide-react';
import FeatureCard from './FeatureCard';
import FaqSection from './FaqSection';

export default function SeoContent() {
  const features = [
    {
      icon: Calculator,
      title: "40 Year Mortgage Analysis",
      description: "Calculate your monthly payments for extended 40-year mortgages with our specialized calculator."
    },
    {
      icon: DollarSign,
      title: "Long-term Planning",
      description: "Understand the implications of a 40-year mortgage term on your total costs and monthly payments."
    },
    {
      icon: PieChart,
      title: "Payment Breakdown",
      description: "See detailed breakdowns of principal, interest, taxes, and insurance over your 40-year term."
    },
    {
      icon: BarChart3,
      title: "Cost Comparison",
      description: "Compare 40-year mortgages with traditional 30-year terms to make informed decisions."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding 40 Year Mortgages</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our 40-year mortgage calculator helps you analyze extended-term mortgages, comparing monthly payments and total costs to make informed financing decisions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-8 text-white mb-12">
        <h3 className="text-2xl font-bold mb-4">Benefits of 40 Year Mortgages</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Lower Monthly Payments</h4>
            <ul className="space-y-2">
              <li>• Extended repayment period</li>
              <li>• More affordable payments</li>
              <li>• Improved cash flow</li>
              <li>• Greater purchasing power</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Financial Flexibility</h4>
            <ul className="space-y-2">
              <li>• Lower initial commitments</li>
              <li>• Option to pay extra</li>
              <li>• Better debt management</li>
              <li>• Long-term stability</li>
            </ul>
          </div>
        </div>
      </div>

      <FaqSection />
    </div>
  );
}