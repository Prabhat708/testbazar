import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { popularProducts, insuranceProducts, learnItems } from '../data/testdata';


export default function Navbar() {
  const [expandedMenu, setExpandedMenu] = useState(null);

  const toggleMenu = (menu) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <div className="logo">
            <span className="logo-text">paisa<span className="bold">bazaar</span></span>
            <span className="logo-badge">HAR SAPNA HOGA SACH</span>
          </div>
        </div>

        <div className="navbar-menu">
          <div className="menu-item dropdown">
            <button 
              className="menu-button"
              onMouseEnter={() => setExpandedMenu('products')}
            >
              Explore Products
              <ChevronDown size={18} />
            </button>
            {expandedMenu === 'products' && (
              <div 
                className="dropdown-content"
                onMouseLeave={() => setExpandedMenu(null)}
              >
                <div className="dropdown-column">
                  <h4>POPULAR PRODUCTS</h4>
                  {popularProducts.slice(0, 6).map(product => (
                    <a key={product.id} href="#" className="dropdown-item">
                      {product.name}
                      {product.badge && <span className="badge">{product.badge}</span>}
                    </a>
                  ))}
                </div>
                <div className="dropdown-column">
                  <h4>MORE PRODUCTS</h4>
                  {popularProducts.slice(6, 12).map(product => (
                    <a key={product.id} href="#" className="dropdown-item">
                      {product.name}
                      {product.badge && <span className="badge">{product.badge}</span>}
                    </a>
                  ))}
                </div>
                <div className="dropdown-column">
                  <h4>INSURANCE & INVESTMENTS</h4>
                  {insuranceProducts.map(product => (
                    <a key={product.id} href="#" className="dropdown-item">
                      {product.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="menu-item dropdown">
            <button 
              className="menu-button"
              onMouseEnter={() => setExpandedMenu('learn')}
            >
              Learn & Resources
              <ChevronDown size={18} />
            </button>
            {expandedMenu === 'learn' && (
              <div 
                className="dropdown-content"
                onMouseLeave={() => setExpandedMenu(null)}
              >
                {learnItems.map((section, idx) => (
                  <div key={idx} className="dropdown-column">
                    <h4>{section.category}</h4>
                    {section.items.map((item, i) => (
                      <a key={i} href="#" className="dropdown-item">
                        {item}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          <a href="#" className="menu-button">Contact Us</a>
        </div>

        <div className="navbar-actions">
          <button className="btn-expert">📞 Talk to Expert</button>
          <button className="btn-signin">Sign In</button>
        </div>
      </div>
    </nav>
  );
}