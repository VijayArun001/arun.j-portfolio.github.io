import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { EXPERIENCES } from '../data/portfolioData';
import type { Project } from '../types';
import styles from './Projects.module.css';

type Filter = 'all' | 'current' | 'previous';

const ProjectCard = ({
  project,
  index,
  company,
  current,
}: {
  project: Project;
  index: number;
  company: string;
  current: boolean;
}) => {
  const { ref, isVisible } = useIntersectionObserver();
  const [open, setOpen] = useState(false);

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className={`${styles.card} fade-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className={styles.cardTop}>
        <div className={styles.cardMeta}>
          <span className={styles.domain}>{project.domain}</span>
          {current && <span className={styles.currentBadge}>Current Role</span>}
        </div>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardShort}>{project.shortDesc}</p>
      </div>

      {open && (
        <div className={styles.expanded}>
          <p className={styles.expandedDesc}>{project.description}</p>
          <ul className={styles.highlightList}>
            {project.highlights.map((h) => (
              <li key={h} className={styles.highlightItem}>
                <span className={styles.dot} />
                {h}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className={styles.cardBottom}>
        <div className={styles.techList}>
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
          {project.tech.length > 4 && (
            <span className={styles.moreTech}>+{project.tech.length - 4} more</span>
          )}
        </div>
        <button className={styles.toggleBtn} onClick={() => setOpen(!open)}>
          {open ? (
            <><ChevronUp size={14} /> Less</>
          ) : (
            <><ChevronDown size={14} /> Details</>
          )}
        </button>
      </div>

      <div className={styles.cardFooterMeta}>
        <span className={styles.companyTag}>{company}</span>
      </div>
    </article>
  );
};

const Projects = () => {
  const { ref, isVisible } = useIntersectionObserver();
  const [filter, setFilter] = useState<Filter>('all');

  const allProjects = EXPERIENCES.flatMap((exp) =>
    exp.projects.map((p) => ({ ...p, company: exp.company, current: exp.current }))
  );

  const filtered = allProjects.filter((p) => {
    if (filter === 'current') return p.current;
    if (filter === 'previous') return !p.current;
    return true;
  });

  const filters: { key: Filter; label: string }[] = [
    { key: 'all', label: `All Projects (${allProjects.length})` },
    { key: 'current', label: 'Spritle Software' },
    { key: 'previous', label: 'Previous Role' },
  ];

  return (
    <section id="projects" className="section" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className={`fade-up ${isVisible ? 'visible' : ''}`}>
          <span className="eyebrow">Portfolio</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-sub">
            Real production applications I've designed, built, and shipped — across
            healthcare, SaaS, and enterprise domains.
          </p>
        </div>

        <div className={`${styles.filters} fade-up delay-1 ${isVisible ? 'visible' : ''}`}>
          {filters.map((f) => (
            <button
              key={f.key}
              className={`${styles.filterBtn} ${filter === f.key ? styles.activeFilter : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              index={i}
              company={p.company}
              current={p.current}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
