export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <p className="hero-eyebrow">Melbourne Volleyball Training</p>

        <h1 className="hero-title">
          Play Better.
          <br />
          Train Together.
          <br />
          <span>Find Your Flow.</span>
        </h1>

        <p className="hero-description">
          Community volleyball training designed for players who want to
          improve their skills, play with confidence and enjoy the game.
        </p>

        <div className="hero-actions">
          <a href="#training" className="button button-primary">
            View Training
          </a>

          <a href="#contact" className="button button-secondary">
            Make an Enquiry
          </a>
        </div>

        <div className="hero-details">
          <div className="hero-detail">
            <span className="hero-detail-label">When</span>
            <strong>Every Saturday</strong>
          </div>

          <div className="hero-detail">
            <span className="hero-detail-label">Duration</span>
            <strong>2h 30min</strong>
          </div>

          <div className="hero-detail">
            <span className="hero-detail-label">From</span>
            <strong>$21 / session</strong>
          </div>
        </div>
      </div>

      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
    </section>
  );
}