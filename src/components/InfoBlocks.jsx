

export default function InfoBlocks() {
  const blocks = [
    {
      id: 1,
      color: '#1e3a8a',
      title: 'Proudly made in India',
      description: 'for Indians around the world',
      icon: '🇮🇳',
      cta: 'MADE IN INDIA'
    },
    {
      id: 2,
      color: '#d946a6',
      title: 'Calculate Reward Earnings',
      description: 'on Your Credit Card',
      icon: '💳',
      cta: 'Check Now'
    },
    {
      id: 3,
      color: '#dc2626',
      title: 'Beware from Fraudsters',
      icon: '🕵️',
      cta: 'Check Fraud Detection'
    },
  ];

  return (
    <section className="info-blocks-section">
      <div className="search-box">
        <input type="text" placeholder="Search Credit Card by Category" />
        <button>🔍</button>
      </div>

      <div className="info-blocks-grid">
        {blocks.map(block => (
          <div key={block.id} className="info-block" style={{ backgroundColor: block.color }}>
            <div className="block-content">
              <span className="block-icon">{block.icon}</span>
              <h3>{block.title}</h3>
              {block.description && <p>{block.description}</p>}
              <a href="#" className="block-cta">{block.cta}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}