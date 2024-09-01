import React from 'react';
import { CardDemo } from './Card';

export function Services() {
  return (
    <div className="p-6">
      <h2 className="text-center text-3xl font-bold mb-8">Our Services</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-40 gap-4">
        <CardDemo
          title="Home Loans"
          description="At Alphaa Financial Solutions, we specialize in guiding you through every step of your home loan journey."
          className="m-4" // Add margin to each card
        />
        <CardDemo
          title="Refinancing"
          description="Refinancing is the process of replacing an existing loan with a new one, typically to take advantage of better terms."
          className="m-4" // Add margin to each card
        />
        <CardDemo
          title="Self-Managed Super Fund (SMSF)"
          description="At Alphaa Financial Solutions, we offer expert guidance on Self-Managed Super Fund (SMSF) loans to help you maximize your investment potential."
          className="m-4" // Add margin to each card
        />
        <CardDemo
          title="Personal Loans"
          description="We offer a range of personal loan options designed to meet your unique financial needs."
          className="m-4" // Add margin to each card
        />
        <CardDemo
          title="Commercial/Business Loans"
          description="We specialize in providing comprehensive commercial and business loan solutions tailored to your unique needs."
          className="m-4" // Add margin to each card
        />
        <CardDemo
          title="Home Loan Services"
          description="First Home Buyer, Investment Property"
          content={
            <ul className="list-disc pl-5">
              <li><strong>First Home Buyer:</strong> A first-time homebuyer is an individual or household purchasing a home for the first time.</li>
              <li><strong>Investment Property:</strong> An investment property is a real estate asset purchased with the intention of generating income or profit.</li>
            </ul>
          }
          className="m-4" // Add margin to each card
        />
        <CardDemo
          title="Asset Finance"
          description="We offer tailored asset and vehicle finance solutions to help you acquire the equipment or vehicle you need with ease."
          className="m-4" // Add margin to each card
        />
        <CardDemo
          title="Expat Loans"
          description="We offer specialized expat loan services designed to meet the unique needs of expatriates."
          className="m-4" // Add margin to each card
        />
      </div>
    </div>
  );
}

