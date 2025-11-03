import Carousel from "./Carousel"

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            India's best platform for
            <br />
            <span className="hero-highlight">Loans, Cards & Investments</span>
          </h1>

          <div className="hero-features">
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" stroke="#FF6B35" strokeWidth="2" />
                  <text x="20" y="26" textAnchor="middle" fill="#FF6B35" fontSize="20" fontWeight="bold">
                    ✓
                  </text>
                </svg>
              </div>
              <p>One Stop for all Financial Solutions</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" stroke="#FF6B35" strokeWidth="2" />
                  <circle cx="15" cy="20" r="2" fill="#FF6B35" />
                  <circle cx="20" cy="20" r="2" fill="#FF6B35" />
                  <circle cx="25" cy="20" r="2" fill="#FF6B35" />
                </svg>
              </div>
              <p>Quick, easy & hassle free</p>
            </div>
          </div>
        </div>

        {/* Right Carousel */}
        <div className="hero-carousel-wrapper">
          <Carousel />
        </div>
      </div>
    </section>
  )
}
