import { useState } from "react";

const services = [
  {
    title: "Strategy & positioning",
    description: "Find your focus, understand your audience, and make your next move count.",
  },
  {
    title: "Brand & storytelling",
    description: "Build a distinctive voice and turn what makes you different into a story people feel.",
  },
  {
    title: "Campaigns & connection",
    description: "Create meaningful moments that bring your community closer to what you do.",
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
        <a href="#services" onClick={closeMenu}>What we do</a>
        <a href="#approach" onClick={closeMenu}>Our approach</a>
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
      <div className="art-coordinate">51°30&apos; N &nbsp; 00°07&apos; W</div>
      <div className="art-stamp">
        UC
        <br />
        <span>EST. 2016</span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" />Independent communications studio</p>
        <h1>
          Good ideas
          <br />
          deserve to be
          <br />
          <span className="serif-accent">seen.</span>
        </h1>
        <p className="hero-description">
          We help people, places, and purpose-led brands find their voice — and make it matter.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#services">
            Explore what we do <span aria-hidden="true">↘</span>
          </a>
          <a className="text-link" href="#about">
            A little about us <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="hero-footnote"><span>01</span>Strategy first. Always.</div>
      </div>
      <HeroArtwork />
      <div className="hero-index">
        COMMUNICATION, WITH INTENTION <span>— &nbsp; 2025 / 26</span>
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
          We make the complex
          <br />
          feel <span className="serif-accent">clear.</span>
        </h2>
        <div className="intro-aside">
          <p>
            In a noisy world, clarity is a superpower. We’re an independent creative communications
            studio bringing sharp thinking and human energy to the stories that deserve attention.
          </p>
          <a className="text-link" href="#approach">
            Meet our approach <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <div className="intro-bottom">
        <span>Curious by nature. Connected by design.</span>
        <span className="intro-mark" aria-hidden="true">U<span>/</span>C</span>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services section-wrap" id="services">
      <SectionLabel detail="01 — 03">02 / WHAT WE DO</SectionLabel>
      <div className="services-heading">
        <h2>
          Thoughtful work.
          <br />
          <span className="serif-accent">Real-world impact.</span>
        </h2>
        <p>From first thought to full momentum, we bring the right people and ideas together.</p>
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
        <SectionLabel detail="✳">03 / HOW WE WORK</SectionLabel>
        <p className="eyebrow">A small studio with a wide lens</p>
        <h2>
          Close to the work.
          <br />
          <span className="serif-accent">Open to possibility.</span>
        </h2>
        <p>
          We work shoulder-to-shoulder with our clients, bringing thoughtful strategy and creative
          instinct to every brief. No big-agency layers, no off-the-shelf answers — just good people
          working on what matters.
        </p>
        <a className="button button-light" href="#contact">
          Get to know us <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section-wrap" id="contact">
      <SectionLabel detail="YOUR MOVE →">04 / START A CONVERSATION</SectionLabel>
      <div className="contact-main">
        <div>
          <p className="eyebrow"><span className="status-dot" />Have a good one in mind?</p>
          <h2>
            Let’s make
            <br />
            something <span className="serif-accent">matter.</span>
          </h2>
        </div>
        <a className="contact-link" href="mailto:hello@urbancommunication.studio">
          hello@urbancommunication.studio <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="contact-bottom">
        <span>Good conversations start somewhere.</span>
        <a href="#home">Back to the top ↑</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <Wordmark footer />
      <span>Independent by nature. Together by design.</span>
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
