import { features } from '../data/testdata';


export default function Features() {
  return (
    <section className="features-section">
      <div className="features-header">
        <h2>Compare, Choose and Apply for personal credit products on Paisabazaar</h2>
        <button className="btn-primary">READ MORE</button>
      </div>

      <div className="features-grid">
        {features.map(feature => (
          <div key={feature.id} className="feature-card">
            <div className="feature-icon-large">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}