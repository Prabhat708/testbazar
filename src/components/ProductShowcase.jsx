

export default function ProductShowcase() {
  const products = [
    {
      id: 1,
      title: 'Yes Bank Paisabazaar PaisaSave Credit Card',
      features: [
        '3% Cashback on Online Spends',
        '1.5% Cashback on all Other Spends',
        'First Year Free'
      ],
      image: '/credit-card-1.png',
      link: 'Know More'
    },
    {
      id: 2,
      title: 'RBL Bank Paisabazaar DUET Credit Card',
      features: [
        '1% cash back on all spends*',
        'Credit Card + Cash**',
        '100% Digital Process'
      ],
      image: '/credit-card-2.png',
      link: 'Know More'
    }
  ];

  return (
    <section className="showcase-section">
      <h2>Tailor Made Products Exclusively for Paisabazaar Customers</h2>

      <div className="showcase-grid">
        {products.map((product, idx) => (
          <div key={product.id} className={`showcase-card ${idx % 2 === 0 ? 'reverse' : ''}`}>
            <div className="showcase-content">
              <h3>{product.title}</h3>
              <ul className="features-list">
                {product.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
              <a href="#" className="link-text">{product.link}</a>
            </div>
            <div className="showcase-image">
              <img src={product.image || "https://placehold.co/400"} alt={product.title} onError={(e) => {
                e.target.src = 'https://placehold.co/400';
              }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}