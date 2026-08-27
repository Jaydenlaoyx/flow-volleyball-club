import ThemeToggle from "@/components/ThemeToggle";
import { siteConfig } from "@/lib/siteConfig";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#home" className="navbar-logo">
          FLOW
          <span> Volleyball Club</span>
        </a>

        <nav className="navbar-links">
          <a href="#about">About</a>
          <a href="#training">Training</a>
          <a href="#contact">Contact</a>

          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </nav>

        <div className="navbar-actions">
          <ThemeToggle />

          <a href="#contact" className="navbar-cta">
            Join a Session
          </a>
        </div>
      </div>
    </header>
  );
}