

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-grid">
        <div className="about-card blue-card">
          <div className="about-image">
            <div className="placeholder-illustration">👥</div>
          </div>
          <h3>About Us</h3>
          <p>How we are building a strong Paisabazaar Brand</p>
          <button className="about-btn">KNOW MORE →</button>
        </div>

        <div className="about-card green-card">
          <div className="about-image">
            <div className="placeholder-illustration">💼</div>
          </div>
          <h3>Work with Us</h3>
          <p>Want to Join Team Paisabazaar?</p>
          <button className="about-btn">JOIN US →</button>
        </div>
      </div>
    </section>
  );
}