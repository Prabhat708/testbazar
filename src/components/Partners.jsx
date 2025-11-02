import { useState } from 'react';
import { partners } from '../data/testdata';


export default function Partners() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'unsecured-loans', label: 'Unsecured Loans' },
    { id: 'credit-card', label: 'Credit Card' },
    { id: 'home-loan', label: 'Home Loan' },
    { id: 'credit-bureau', label: 'Credit Bureau' },
    { id: 'credit-improvement', label: 'Credit Improvement' },
  ];

  const filteredPartners = selectedCategory === 'all' 
    ? partners 
    : partners.filter(p => p.category === selectedCategory);

  return (
    <section className="partners-section">
      <h2>Our partners from across the industry</h2>

      <div className="category-filters">
        {categories.map(category => (
          <button
            key={category.id}
            className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="partners-grid">
        {filteredPartners.map(partner => (
          <div key={partner.id} className="partner-card">
            <img src={partner.logo || "https://placehold.co/400"} alt={partner.name} onError={(e) => {
              e.target.src = 'https://placehold.co/400' + partner.name;
            }} />
          </div>
        ))}
      </div>
    </section>
  );
}