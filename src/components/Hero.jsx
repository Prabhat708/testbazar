import React from "react";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          India's best platform for<br />
          <span className="highlight">Loans, Cards & Investments</span>
        </h1>
        
        <div className="hero-features">
          <div className="feature-item">
            <span className="feature-icon">💯</span>
            <p>One Stop for all Financial Solutions</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">⚡</span>
            <p>Quick, easy & hassle free</p>
          </div>
        </div>

        <div className="hero-promo">
          <div className="promo-card">
            <div className="promo-badge">SHOP SMART, SAVE MORE</div>
            <div className="social-icons">
              <a href="#">f</a>
              <a href="#">in</a>
              <a href="#">t</a>
              <a href="#">y</a>
              <a href="#">ig</a>
            </div>
            <h3>Earn Cashback on Credit Card Spends</h3>
            <div className="cashback-badge">5% CASH BACK</div>
            <button className="promo-btn">Apply Now →</button>
          </div>
        </div>
      </div>
    </section>
  );
}