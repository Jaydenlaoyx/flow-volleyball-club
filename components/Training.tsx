export default function Training() {
  return (
    <section className="section training" id="training">
      <div className="container">
        <div className="training-header">
          <div>
            <p className="section-eyebrow">Weekly Training</p>

            <h2>
              Your Saturday
              <br />
              volleyball session.
            </h2>
          </div>

          <p>
            Join Flow Volleyball Club for structured weekly training, skill
            development and game-based practice in a friendly environment.
          </p>
        </div>

        <div className="training-card">
          <div className="training-main">
            <div className="training-day">
              <span>Every</span>
              <strong>Saturday</strong>
            </div>

            <div className="training-details">
              <div className="training-detail">
                <span>Duration</span>
                <strong>2h 30min</strong>
              </div>

              <div className="training-detail">
                <span>Price</span>
                <strong>$21</strong>
                <small>per person / session</small>
              </div>
            </div>
          </div>

          <div className="training-location">
            <div>
              <span className="training-location-label">Location</span>

              <h3>Orrong Romanis Recreation Centre</h3>

              <p>
                2 Molesworth Street,
                <br />
                Prahran VIC 3181
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Orrong+Romanis+Recreation+Centre"
              target="_blank"
              rel="noopener noreferrer"
              className="location-link"
            >
              View on Google Maps
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="training-cta">
          <div>
            <p>Interested in joining a session?</p>
            <span>
              Send us an enquiry and we&apos;ll help you get started.
            </span>
          </div>

          <a href="#contact" className="button button-primary">
            Enquire About Training
          </a>
        </div>
      </div>
    </section>
  );
}