import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { featuredProjects, additionalProjects } from '../data/portfolioData';
import { Layers, ArrowUpRight, Check, Sparkles } from 'lucide-react';
import styles from './Projects.module.css';

type FilterType = 'all' | 'mobile' | 'backend' | 'enterprise';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredProjects = featuredProjects.filter((project) => {
    if (filter === 'all') return true;
    return project.filterTag === filter;
  });

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          figNumber="FIG. 03"
          title="Selected work"
          subtitle="Detailed case studies of production mobile applications, high-performance data systems, and real-time chat architectures."
        />

        {/* Filter Tabs */}
        <div className={styles.filterBar}>
          <div className={styles.filterTrack}>
            <button
              onClick={() => setFilter('all')}
              className={`${styles.filterBtn} ${filter === 'all' ? styles.filterActive : ''}`}
            >
              All Projects ({featuredProjects.length})
            </button>
            <button
              onClick={() => setFilter('mobile')}
              className={`${styles.filterBtn} ${filter === 'mobile' ? styles.filterActive : ''}`}
            >
              Mobile Apps
            </button>
            <button
              onClick={() => setFilter('backend')}
              className={`${styles.filterBtn} ${filter === 'backend' ? styles.filterActive : ''}`}
            >
              Real-Time & Backend
            </button>
            <button
              onClick={() => setFilter('enterprise')}
              className={`${styles.filterBtn} ${filter === 'enterprise' ? styles.filterActive : ''}`}
            >
              High-Volume Data
            </button>
          </div>
        </div>

        {/* Featured Project Case Studies */}
        <div className={styles.caseStudyGrid}>
          {filteredProjects.map((project) => (
            <article key={project.id} className={`tech-card ${styles.projectCard}`}>
              <div className={styles.cardTop}>
                <div className={styles.projectNumberWrapper}>
                  <span className={styles.projectIndex}>CASE 0{project.number}</span>
                  <span className={styles.projectCategoryBadge}>{project.category}</span>
                </div>

                {/* Platforms & Store badges */}
                <div className={styles.platformBadges}>
                  {project.platforms.map((plat, pIdx) => (
                    <span key={pIdx} className={styles.platformBadge}>
                      <span className={styles.platDot} />
                      {plat.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className={styles.projectIdentity}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectSubtitle}>{project.subtitle}</p>
              </div>

              {/* Description */}
              <p className={styles.projectOverview}>{project.description}</p>

              {/* Architecture & Contributions */}
              <div className={styles.detailsSplit}>
                <div className={styles.contribCol}>
                  <h4 className={styles.colTitle}>KEY CONTRIBUTIONS:</h4>
                  <ul className={styles.bulletList}>
                    {project.contributions.map((item, idx) => (
                      <li key={idx} className={styles.bulletItem}>
                        <Check size={14} className={styles.checkIcon} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.highlightsCol}>
                  <h4 className={styles.colTitle}>TECHNICAL ARCHITECTURE:</h4>
                  <ul className={styles.highlightList}>
                    {project.technicalHighlights.map((techItem, tIdx) => (
                      <li key={tIdx} className={styles.highlightItem}>
                        <Sparkles size={12} className={styles.sparkleIcon} />
                        <span>{techItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Stack Badges */}
              <div className={styles.cardFooter}>
                <div className={styles.techStackRow}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className="badge badge-core">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Additional Projects Section */}
        <div className={styles.additionalSection}>
          <div className={styles.additionalHeader}>
            <div className={styles.subFig}>
              <Layers size={14} />
              <span>ADDITIONAL PRODUCTION & CLIENT WORK</span>
            </div>
            <h3 className={styles.additionalTitle}>Additional Commercial Applications</h3>
            <p className={styles.additionalSubtitle}>
              Smaller-scale production apps, utility modules, administrative dashboards, and internal business tools built using React Native and REST services.
            </p>
          </div>

          <div className={styles.additionalGrid}>
            {additionalProjects.map((item) => (
              <div key={item.name} className={`tech-card ${styles.miniCard}`}>
                <div className={styles.miniHeader}>
                  <span className={styles.miniCategory}>{item.category}</span>
                  <ArrowUpRight size={14} className={styles.miniArrow} />
                </div>
                <h4 className={styles.miniTitle}>{item.name}</h4>
                <p className={styles.miniDesc}>{item.description}</p>
                <div className={styles.miniTechs}>
                  {item.technologies.map((t) => (
                    <span key={t} className="badge badge-neutral">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
