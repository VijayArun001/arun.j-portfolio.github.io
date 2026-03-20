import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import styles from './About.module.css';

const STATS = [
  { value: '4', label: 'Years Experience' },
  { value: '8+', label: 'Projects Shipped' },
  { value: '3',  label: 'Marketplace Apps' },
  { value: '2',  label: 'Companies' },
];

const About = () => {
  const { ref, isVisible } = useIntersectionObserver();
  return (
    <section id="about" className={`section ${styles.about}`} ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className={`${styles.grid} fade-up ${isVisible ? 'visible' : ''}`}>
          <div className={styles.left}>
            <span className="eyebrow">About Me</span>
            <h2 className="section-title">Turning ideas into<br />production software</h2>
            <div className={styles.bio}>
              <p>
                I'm a <strong>Front End Developer</strong> based in Chennai, with a strong frontend
                foundation in React.js and solid backend skills. I've spent 3.11 years building real-world
                applications — from healthcare platforms serving live users, to marketplace
                apps published on the Freshworks ecosystem.
              </p>
              <p>
                My core strength is <strong>React.js and TypeScript</strong>. I'm comfortable
                owning projects end-to-end — from architecture decisions to deployment — and
                have done so solo on multiple production applications. I also work confidently
                on Node.js backends, database schema design, and AWS cloud services.
              </p>
              <p>
                I actively use AI-assisted development tools like{' '}
                <strong>GitHub Copilot, Claude AI, Cursor and Windsurf</strong> to
                move faster and ship better code. I believe the best engineers today know
                how to work effectively alongside AI.
              </p>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.statsGrid}>
              {STATS.map((s) => (
                <div key={s.label} className={styles.statCard}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
            <div className={styles.infoBox}>
              <div className={styles.infoRow}>
                <span className={styles.infoKey}>Location</span>
                <span className={styles.infoVal}>Chennai, Tamil Nadu</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoKey}>Email</span>
                <a href="mailto:arunjegan001@gmail.com" className={styles.infoLink}>arunjegan001@gmail.com</a>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoKey}>Degree</span>
                <span className={styles.infoVal}>B.E. Mechanical Engineering</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoKey}>Status</span>
                <span className={styles.available}><span className={styles.availDot} />Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
