import { loansAndCards, creditProducts, investmentProducts } from '../data/testdata';


export default function ProductsGrid() {
  return (
    <section className="products-section">
      <h2>Loans and Cards</h2>
      <div className="products-grid">
        {loansAndCards.map(product => (
          <div key={product.id} className="product-card">
            {product.badge && <div className="product-badge">{product.badge}</div>}
            <div className="product-image">
              <img src={product.image || "https://placehold.co/400"} alt={product.name} onError={(e) => {
                e.target.src = 'https://placehold.co/400' + product.name;
              }} />
            </div>
            <p>{product.name}</p>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: '60px' }}>Credit Score & Bill Payments</h2>
      <div className="products-grid">
        {creditProducts.map(product => (
          <div key={product.id} className="product-card">
            {product.badge && <div className={`product-badge ${product.badge === 'Coming Soon' ? 'coming-soon' : ''}`}>{product.badge}</div>}
            <div className="product-image">
              <img src={product.image || "https://placehold.co/400"} alt={product.name} onError={(e) => {
                e.target.src = 'https://placehold.co/400' + product.name;
              }} />
            </div>
            <p>{product.name}</p>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: '60px' }}>Investment & Insurance Products</h2>
      <div className="products-grid">
        {investmentProducts.map(product => (
          <div key={product.id} className="product-card">
            {product.badge && <div className={`product-badge ${product.badge === 'Coming Soon' ? 'coming-soon' : ''}`}>{product.badge}</div>}
            <div className="product-image">
              <img src={product.image || "https://placehold.co/400"} alt={product.name} onError={(e) => {
                e.target.src = 'https://placehold.co/400' + product.name;
              }} />
            </div>
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}