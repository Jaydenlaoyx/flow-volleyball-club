export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-heading">
          <p className="section-eyebrow">About Flow</p>

          <h2>
            A better place to train,
            <br />
            compete and enjoy volleyball.
          </h2>

          <p>
            Flow Volleyball Club is a Melbourne-based volleyball community
            focused on structured training, skill development and enjoyable
            competition.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card about-card-large">
            <span className="about-card-number">01</span>

            <div>
              <h3>Structured Training</h3>
              <p>
                Sessions combine technical drills, game situations and match
                play to help players improve while still keeping training
                engaging.
              </p>
            </div>
          </div>

          <div className="about-card">
            <span className="about-card-number">02</span>

            <div>
              <h3>Community Focused</h3>
              <p>
                Train alongside players who enjoy learning, competing and
                supporting each other.
              </p>
            </div>
          </div>

          <div className="about-card">
            <span className="about-card-number">03</span>

            <div>
              <h3>Game Experience</h3>
              <p>
                Put your skills into practice through structured gameplay and
                realistic match situations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}