import { siteConfig } from "@/lib/siteConfig";

export default function Instagram() {
  return (
    <section className="section instagram-section">
      <div className="container">
        <div className="instagram-card">
          <div className="instagram-content">
            <p className="section-eyebrow">Follow The Club</p>

            <h2>
              See what&apos;s happening
              <br />
              on and off the court.
            </h2>

            <p className="instagram-description">
              Follow Flow Volleyball Club on Instagram for training updates,
              club announcements and highlights from our volleyball community.
            </p>

            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-link"
            >
              <span className="instagram-icon" aria-hidden="true">
                IG
              </span>

              <div>
                <span>Follow us on Instagram</span>
                <strong>@flow_volleyball</strong>
              </div>

              <span className="instagram-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>

          <div className="instagram-visual" aria-hidden="true">
            <div className="instagram-circle instagram-circle-one" />
            <div className="instagram-circle instagram-circle-two" />

            <span>FLOW</span>
          </div>
        </div>
      </div>
    </section>
  );
}