import { useState } from 'react';
import { Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { EXPERIENCES } from '../data/portfolioData';
import type { Project } from '../types';
import styles from './Experience.module.css';

const ProjectCard = ({ project }: { project: Project }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.projectCard}>
      <button className={styles.projectHeader} onClick={() => setOpen(!open)}>
        <div className={styles.projectLeft}>
          <span className={styles.projectDomain}>{project.domain}</span>
          <span className={styles.projectTitle}>{project.title}</span>
          <span className={styles.projectShort}>{project.shortDesc}</span>
        </div>
        <span className={styles.chevron}>
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </span>
      </button>

      {open && (
        <div className={styles.projectBody}>
          <p className={styles.projectDesc}>{project.description}</p>
          <ul className={styles.highlights}>
            {project.highlights.map((h) => (
              <li key={h} className={styles.highlightItem}>
                <span className={styles.bullet} />
                {h}
              </li>
            ))}
          </ul>
          <div className={styles.techRow}>
            {project.tech.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Experience = () => {
  const { ref, isVisible } = useIntersectionObserver();
  const [active, setActive] = useState(0);
  const exp = EXPERIENCES[active];

  return (
    <section id="experience" className={`section ${styles.section}`} ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className={`fade-up ${isVisible ? 'visible' : ''}`}>
          <span className="eyebrow">Work History</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-sub">Companies I've worked at and projects I've delivered.</p>
        </div>

        <div className={`${styles.layout} fade-up delay-2 ${isVisible ? 'visible' : ''}`}>
          {/* Company switcher */}
          <div className={styles.sidebar}>
            {EXPERIENCES.map((e, i) => (
              <button
                key={e.id}
                className={`${styles.companyBtn} ${active === i ? styles.activeCompany : ''}`}
                onClick={() => setActive(i)}
              >
                <span className={styles.companyName}>{e.company}</span>
                <span className={styles.companyPeriod}>{e.period}</span>
                {e.current && <span className={styles.currentChip}>Current</span>}
              </button>
            ))}
          </div>

          {/* Detail */}
          <div className={styles.detail}>
            <div className={styles.detailTop}>
              <div className={styles.roleInfo}>
                <div className={styles.roleIcon}><Briefcase size={18} /></div>
                <div>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <p className={styles.companyPeriodLg}>
                    {exp.company} &nbsp;·&nbsp; {exp.period}
                  </p>
                </div>
              </div>
              {exp.current && (
                <span className={styles.liveBadge}>
                  <span className={styles.liveDot} /> Currently Here
                </span>
              )}
            </div>

            <p className={styles.summary}>{exp.summary}</p>

            <div className={styles.projectSection}>
              <p className={styles.projectsLabel}>Projects ({exp.projects.length})</p>
              <div className={styles.projectList}>
                {exp.projects.map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
