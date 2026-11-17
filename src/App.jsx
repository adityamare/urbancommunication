import React, { useState } from "react";

const services = [
  {
    title: "Communications strategy",
    description: "A clear plan to reach the right people and communicate with purpose.",
  },
  {
    title: "Brand & content",
    description: "Consistent messaging and useful content that make your business recognizable.",
  },
  {
    title: "Campaigns & public relations",
    description: "Creative campaigns and media outreach that help your story travel further.",
  },
];

function Wordmark({ footer = false }) {
  return (
    <a
      className={`wordmark${footer ? " footer-wordmark" : ""}`}
      href="#home"
      aria-label="Urban Communication home"
    >
      <span className="wordmark-icon" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span>
        urban<span className="wordmark-light">communication</span>
      </span>
    </a>
  );
}

function SectionLabel({ children, detail }) {
  return (
    <div className="section-label">
      <span>{children}</span>
      <span>{detail}</span>
    </div>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <Wordmark />
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
      >
        <span />
        <span />
      </button>
      <nav
        className={`navigation${isMenuOpen ? " is-open" : ""}`}
        id="primary-navigation"
        aria-label="Main navigation"
      >
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#approach" onClick={closeMenu}>Why Urban</a>
        <a className="nav-cta" href="#contact" onClick={closeMenu}>
          Let’s talk <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}

function HeroArtwork() {
  return (
    <div className="hero-art" role="img" aria-label="Abstract illustration of a connected city">
      <div className="art-sun" />
      <div className="art-orbit orbit-one" />
      <div className="art-orbit orbit-two" />
      <div className="city-block block-one" />
      <div className="city-block block-two" />
      <div className="city-block block-three" />
      <div className="city-block block-four" />
      <div className="city-block block-five" />
      <div className="art-caption">
        <span>Ideas in good company</span>
        <span>↗</span>
      </div>
      <div className="art-coordinate">STRATEGY · CONTENT · CAMPAIGNS</div>
      <div className="art-stamp">
        UC
        <br />
        <span>CREATIVE STUDIO</span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" />Urban Communication · Independent studio</p>
        <h1>
          Make your
          <br />
          message
          <br />
          <span className="serif-accent">matter.</span>
        </h1>
        <p className="hero-description">
          Clear strategy, thoughtful content, and creative campaigns for businesses ready to grow.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#services">
            Explore our services <span aria-hidden="true">↘</span>
          </a>
          <a className="text-link" href="#about">
            A little about us <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="hero-footnote"><span>01</span>Good communication starts with a clear plan.</div>
      </div>
      <HeroArtwork />
      <div className="hero-index">
        COMMUNICATION, WITH INTENTION <span>— &nbsp; STRATEGY / CONTENT / CAMPAIGNS</span>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="intro section-wrap" id="about">
      <SectionLabel detail="✳">01 / WHO WE ARE</SectionLabel>
      <div className="intro-content">
        <h2>
          A communications partner
          <br />
          for <span className="serif-accent">what’s next.</span>
        </h2>
        <div className="intro-aside">
          <p>
            Urban Communication helps businesses explain what they do, connect with their audiences,
            and build a stronger presence. We bring strategy and creative delivery together in one
            collaborative studio.
          </p>
          <a className="text-link" href="#approach">
            Why work with us <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <div className="intro-bottom">
        <span>Clear thinking. Consistent communication.</span>
        <span className="intro-mark" aria-hidden="true">U<span>/</span>C</span>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services section-wrap" id="services">
      <SectionLabel detail="01 — 03">02 / OUR SERVICES</SectionLabel>
      <div className="services-heading">
        <h2>
          Practical support.
          <br />
          <span className="serif-accent">Clear communication.</span>
        </h2>
        <p>Flexible communications support, shaped around your business and your goals.</p>
      </div>
      <div className="service-list">
        {services.map((service, index) => (
          <article className="service-card" key={service.title}>
            <span className="service-number">0{index + 1}</span>
            <div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <span className="service-arrow" aria-hidden="true">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="approach section-wrap" id="approach">
      <div className="approach-graphic" aria-hidden="true">
        <div className="approach-circle circle-outer" />
        <div className="approach-circle circle-middle" />
        <div className="approach-circle circle-inner" />
        <span className="approach-center">
          GOOD
          <br />
          THINGS
          <br />
          HAPPEN
          <br />
          TOGETHER
        </span>
        <span className="approach-orbit-label">LISTEN · THINK · MAKE · SHARE</span>
      </div>
      <div className="approach-copy">
        <SectionLabel detail="✳">03 / WHY URBAN</SectionLabel>
        <p className="eyebrow">Direct, collaborative, and focused</p>
        <h2>
          Your goals.
          <br />
          <span className="serif-accent">Our full attention.</span>
        </h2>
        <p>
          Work directly with a communications partner who takes time to understand your business.
          From a single project to ongoing support, we keep the process clear, collaborative, and
          tailored to what you need.
        </p>
        <a className="button button-light" href="#contact">
          Talk about your project <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section-wrap" id="contact">
      <SectionLabel detail="YOUR MOVE →">04 / CONTACT</SectionLabel>
      <div className="contact-main">
        <div>
          <p className="eyebrow"><span className="status-dot" />Let’s talk about your business</p>
          <h2>
            Need a clearer
            <br />
            way to <span className="serif-accent">connect?</span>
          </h2>
        </div>
        <a className="contact-link" href="mailto:hello@urbancommunication.studio">
          hello@urbancommunication.studio <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="contact-bottom">
        <span>Tell us what you’re working on.</span>
        <a href="#home">Back to the top ↑</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <Wordmark footer />
      <span>Independent communications studio</span>
      <span>© {new Date().getFullYear()} Urban Communication</span>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
