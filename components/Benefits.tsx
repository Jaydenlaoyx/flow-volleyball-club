const benefits = [
  {
    number: "01",
    title: "Improve Your Fundamentals",
    description:
      "Develop passing, setting, serving, attacking and movement through focused drills.",
  },
  {
    number: "02",
    title: "Learn Through Gameplay",
    description:
      "Apply skills in realistic situations with regular game-based training and match play.",
  },
  {
    number: "03",
    title: "Train Consistently",
    description:
      "Weekly Saturday sessions give players a consistent environment to practise and improve.",
  },
  {
    number: "04",
    title: "Meet Other Players",
    description:
      "Join a welcoming volleyball community and connect with players who share the same passion.",
  },
];

export default function Benefits() {
  return (
    <section className="section benefits">
      <div className="container">
        <div className="benefits-header">
          <div>
            <p className="section-eyebrow">Why Flow</p>

            <h2>More than just open play.</h2>
          </div>

          <p>
            Every session is designed to give players meaningful court time,
            opportunities to improve and a great environment to play
            volleyball.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <article className="benefit-card" key={benefit.number}>
              <span className="benefit-number">{benefit.number}</span>

              <div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}