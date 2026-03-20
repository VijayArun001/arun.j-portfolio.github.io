import { ArrowRight, MapPin, Mail, Linkedin } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          Available for new opportunities
        </div>

        <h1 className={styles.heading}>
          Hi, I'm <span className={styles.name}>Arun J</span>
        </h1>

        <h2 className={styles.subheading}>
          Front End Developer
          <span className={styles.subPipe}> | </span>
          <span className={styles.subTech}>React.js | Node.js</span>
        </h2>

        <p className={styles.description}>
          <strong>Front End Developer</strong> with{' '}
          <strong>3.11 years of experience</strong> building and deploying
          production-grade web applications across{' '}
          <strong>healthcare and SaaS products</strong>. Core expertise in{' '}
          <strong>React.js and TypeScript</strong>, with solid backend
          proficiency in{' '}
          <strong>Node.js, REST API development, and database schema design</strong>.
          Experienced with <strong>AWS cloud services, Keycloak, Elasticsearch,
          and PostgreSQL</strong>, and Freshworks marketplace app development.
          Proven track record of{' '}
          <strong>independently architecting and delivering full-featured
          applications</strong> end-to-end. Actively leveraging AI-powered
          developer tools —{' '}
          <strong>GitHub Copilot, Claude AI, Cursor, and Windsurf</strong> — to
          accelerate development and improve code quality.
        </p>

        <div className={styles.meta}>
          <span className={styles.metaItem}>
            <MapPin size={14} />
            Chennai, Tamil Nadu
          </span>
          <span className={styles.metaDot}>·</span>
          <span className={styles.metaItem}>
            React.js · TypeScript · Node.js
          </span>
        </div>

        <div className={styles.actions}>
          <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
            View My Work <ArrowRight size={15} />
          </button>
          <button className="btn" onClick={() => scrollTo('contact')}>
            Get In Touch
          </button>
        </div>

        <div className={styles.links}>
          <a href="mailto:arunjegan001@gmail.com" className={styles.socialLink}>
            <Mail size={17} />
            arunjegan001@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/arun-j-389981223"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <Linkedin size={17} />
            LinkedIn
          </a>
        </div>
      </div>

      <div className={styles.visual} aria-hidden="true">
        <div className={styles.card}>
          <div className={styles.cardRow}>
            <span className={styles.cardKey}>role</span>
            <span className={styles.cardVal}>Front End Developer</span>
          </div>
          <div className={styles.cardRow}>
            <span className={styles.cardKey}>experience</span>
            <span className={styles.cardVal}>3.11 years</span>
          </div>
          <div className={styles.cardRow}>
            <span className={styles.cardKey}>focus</span>
            <span className={styles.cardVal}>Frontend Strong</span>
          </div>
          <div className={styles.cardRow}>
            <span className={styles.cardKey}>apps shipped</span>
            <span className={styles.cardVal}>8+ production apps</span>
          </div>
          <div className={styles.cardRow}>
            <span className={styles.cardKey}>marketplace</span>
            <span className={styles.cardVal}>3 Freshworks apps</span>
          </div>
          <div className={styles.cardRow}>
            <span className={styles.cardKey}>status</span>
            <span className={styles.statusVal}>
              <span className={styles.statusDot} /> open to work
            </span>
          </div>
        </div>

        <div className={styles.techPills}>
          {['React.js', 'Node.js','Express', 'Next.js', 'TypeScript', 'Freshworks FDK', 'AWS microservices'].map((t) => (
            <span key={t} className={styles.pill}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
