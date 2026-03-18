import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { SKILLS } from '../data/portfolioData';
import styles from './Skills.module.css';

const Skills = () => {
  const { ref, isVisible } = useIntersectionObserver();
  const [active, setActive] = useState(0);

  return (
    <section id="skills" className="section" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className={`fade-up ${isVisible ? 'visible' : ''}`}>
          <span className="eyebrow">Tech Stack</span>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-sub">Tools and technologies I use to build fast, scalable, production-ready applications.</p>
        </div>

        {/* Desktop tab layout */}
        <div className={`${styles.tabLayout} fade-up delay-2 ${isVisible ? 'visible' : ''}`}>
          <div className={styles.tabList}>
            {SKILLS.map((s, i) => (
              <button
                key={s.category}
                className={`${styles.tabBtn} ${active === i ? styles.activeTab : ''}`}
                onClick={() => setActive(i)}
              >
                {s.category}
              </button>
            ))}
          </div>
          <div className={styles.tabPanel}>
            <p className={styles.panelLabel}>{SKILLS[active].category}</p>
            <div className={styles.tagWrap}>
              {SKILLS[active].items.map((item) => (
                <span key={item} className="tag">{item}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile flat list */}
        <div className={`${styles.mobileList} fade-up delay-2 ${isVisible ? 'visible' : ''}`}>
          {SKILLS.map((s) => (
            <div key={s.category} className={styles.mobileRow}>
              <span className={styles.mobileCategory}>{s.category}</span>
              <div className={styles.mobileTags}>
                {s.items.map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
