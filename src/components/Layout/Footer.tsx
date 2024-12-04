import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-indigo-300">Calculator</Link></li>
              <li><Link to="/about" className="hover:text-indigo-300">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-300">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <p>Email: info@40yearmortgagecalculator.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <p>Your trusted tool for calculating and analyzing 40-year mortgage options, helping you make informed decisions about extended-term home financing.</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} 40 Year Mortgage Calculator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}