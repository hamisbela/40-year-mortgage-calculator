import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">About Us</h1>
          
          <div className="prose prose-indigo max-w-none">
            <p className="text-lg">Welcome to 40 Year Mortgage Calculator, your comprehensive resource for understanding and analyzing extended-term mortgage options.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
            <p>We aim to provide accurate, easy-to-use tools that help individuals understand the implications of 40-year mortgages, enabling informed decisions about long-term home financing options.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Us?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Specialized in 40-year mortgage calculations</li>
              <li>Comprehensive payment and cost analysis</li>
              <li>User-friendly interface</li>
              <li>Detailed comparison tools</li>
              <li>Educational resources about extended-term mortgages</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Expertise</h2>
            <p>Our team consists of mortgage professionals and financial experts who understand the unique aspects of 40-year mortgages. We stay current with market trends and lending practices to provide you with the most accurate and relevant information.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Educational Focus</h2>
            <p>Beyond calculations, we're committed to helping you understand the pros and cons of 40-year mortgages, including their impact on long-term financial planning and wealth building.</p>
          </div>
        </div>
      </div>
    </div>
  );
}