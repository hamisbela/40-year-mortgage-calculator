import React from 'react';
import { HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string | string[];
}

const faqs: FaqItem[] = [
  {
    question: "What is a 40-year mortgage?",
    answer: "A 40-year mortgage is a home loan with an extended repayment period of 40 years, offering lower monthly payments compared to traditional 30-year mortgages. While monthly payments are lower, the total interest paid over the life of the loan is typically higher due to the longer term."
  },
  {
    question: "What are the advantages of a 40-year mortgage?",
    answer: [
      "• Lower monthly payments than shorter-term mortgages",
      "• Increased home affordability for buyers",
      "• Better cash flow management",
      "• Potential for larger loan amounts",
      "• More financial flexibility"
    ]
  },
  {
    question: "How do 40-year mortgage payments compare to 30-year mortgages?",
    answer: "40-year mortgages typically have monthly payments about 10-15% lower than 30-year mortgages for the same loan amount. However, the total interest paid over the life of the loan is significantly higher due to the extended term and typically higher interest rates."
  },
  {
    question: "Who should consider a 40-year mortgage?",
    answer: "40-year mortgages may be suitable for: homebuyers looking for lower monthly payments, those planning to sell before the loan matures, buyers in high-cost areas, and those who prioritize monthly affordability over total cost. However, it's important to consider the higher total interest costs over the longer term."
  }
];

export default function FaqSection() {
  return (
    <div className="bg-gray-50 rounded-xl p-8 mt-12">
      <div className="flex items-center gap-3 mb-8">
        <HelpCircle className="h-8 w-8 text-indigo-600" />
        <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
      </div>
      
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
            {Array.isArray(faq.answer) ? (
              <ul className="space-y-2 text-gray-600">
                {faq.answer.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}