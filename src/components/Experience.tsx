import React from 'react';
import { SectionHeading } from './SectionHeading';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import styles from './Experience.module.css';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading
          figNumber="FIG. 02"
          title="Experience"
          subtitle="Hands-on commercial engineering: developing cross-platform mobile apps, building backend REST APIs, managing database layers, and deploying to app stores."
        />

        <div className={styles.experienceList}>
          {experienceData.map((exp, index) => {
            const isCurrent = exp.id === 'eracom';
            return (
              <div key={exp.id} className={`tech-card ${styles.experienceCard}`}>
                {/* Header row */}
                <div className={styles.cardHeader}>
                  <div className={styles.roleIdentity}>
                    <div className={styles.roleRow}>
                      <span className={styles.expIndex}>0{index + 1}.</span>
                      <h3 className={styles.roleTitle}>{exp.role}</h3>
                      {isCurrent && (
                        <span className="badge badge-status">
                          <span className="status-dot" />
                          <span>Present</span>
                        </span>
                      )}
                    </div>
                    <div className={styles.companyMeta}>
                      <span className={styles.companyName}>
                        <Briefcase size={14} />
                        {exp.company}
                      </span>
                      <span className={styles.location}>
                        <MapPin size={13} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className={styles.periodCol}>
                    <span className={styles.periodBadge}>
                      <Calendar size={13} />
                      {exp.period}
                    </span>
                    <span className={styles.durationText}>{exp.duration}</span>
                  </div>
                </div>

                {/* Summary narrative */}
                {exp.summary && (
                  <div className={styles.summaryBox}>
                    <p>{exp.summary}</p>
                  </div>
                )}

                {/* Responsibilities list */}
                <div className={styles.responsibilitiesWrapper}>
                  <h4 className={styles.sectionSubtitle}>Key Contributions & Engineering Impact:</h4>
                  <ul className={styles.bulletList}>
                    {exp.responsibilities.map((resp, rIdx) => {
                      // Parse markdown bold **text** into <strong>
                      const parts = resp.split(/(\*\*.*?\*\*)/g);
                      return (
                        <li key={rIdx} className={styles.bulletItem}>
                          <CheckCircle size={15} className={styles.bulletCheck} />
                          <span className={styles.bulletText}>
                            {parts.map((part, pIdx) => {
                              if (part.startsWith('**') && part.endsWith('**')) {
                                return <strong key={pIdx}>{part.slice(2, -2)}</strong>;
                              }
                              return part;
                            })}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Tech stack badges */}
                <div className={styles.techStackFooter}>
                  <span className={styles.techStackLabel}>ENVIRONMENT:</span>
                  <div className={styles.badgeRow}>
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="badge badge-neutral">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
