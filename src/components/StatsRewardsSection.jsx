import './StatsRewardsSection.css'

function StatsRewardsSection() {
  const stats = [
    {
      value: '10,000+',
      label: 'Happy Clients',
      icon: '👥'
    },
    {
      value: '35+',
      label: 'Years of Expertise',
      icon: '⭐'
    },
    {
      value: 'Cyprus Leading',
      label: 'Travel Management Company 2025',
      icon: '🏆'
    }
  ]

  return (
    <section className="stats-rewards-section">
      <div className="stats-rewards-container">
        <h2 className="stats-rewards-title">Our Rewards</h2>
        <p className="stats-rewards-subtitle">Trusted by travellers and recognised by the industry</p>
        <div className="stats-rewards-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stats-rewards-card">
              <span className="stats-rewards-icon">{stat.icon}</span>
              <div className="stats-rewards-value">{stat.value}</div>
              <div className="stats-rewards-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsRewardsSection
