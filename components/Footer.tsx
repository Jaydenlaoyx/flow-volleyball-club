import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              FLOW
              <span> Volleyball Club</span>
            </a>

            <p>
              Weekly volleyball training in Melbourne focused on skill
              development, structured gameplay and community.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <span className="footer-heading">Explore</span>

              <a href="#about">About</a>
              <a href="#training">Training</a>
              <a href="#contact">Contact</a>
            </div>

            <div>
              <span className="footer-heading">Social</span>

              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram ↗
              </a>
            </div>

            <div>
              <span className="footer-heading">Training</span>

              <p>Every Saturday</p>
              <p>2h 30min</p>
              <p>$21 per person</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Flow Volleyball Club. All rights
            reserved.
          </p>

          <p>{siteConfig.location}</p>
        </div>
      </div>
    </footer>
  );
}