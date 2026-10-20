import React from 'react';
import { SectionHeading } from './SectionHeading';
import { educationData, achievementData, languagesData } from '../data/portfolioData';
import { GraduationCap, Award, Languages, Terminal, CheckCircle2 } from 'lucide-react';
import styles from './Education.module.css';

export const Education: React.FC = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading
          figNumber="FIG. 05"
          title="Education & achievements"
          subtitle="Academic credentials, department ranking, and linguistic proficiency verified directly from my resume."
        />

        <div className={styles.educationGrid}>
          {/* Left: Education Card */}
          <div className={`tech-card ${styles.card}`}>
            <div className={styles.cardHeader}>
              <div className={styles.headerIconWrapper}>
                <GraduationCap size={20} className={styles.headerIcon} />
              </div>
              <div>
                <span className={styles.headerFig}>01 // ACADEMIC RECORD</span>
                <h3 className={styles.cardTitle}>Formal Education</h3>
              </div>
            </div>

            <div className={styles.cardList}>
              {educationData.map((edu, idx) => (
                <div key={idx} className={styles.eduItem}>
                  <div className={styles.eduTop}>
                    <h4 className={styles.eduDegree}>{edu.degree}</h4>
                    <span className={styles.scoreBadge}>
                      <strong>{edu.score}</strong>
                    </span>
                  </div>

                  <p className={styles.eduInstitution}>
                    {edu.institution} · {edu.boardOrUniversity}
                  </p>

                  <div className={styles.eduFooter}>
                    <span className={styles.eduPeriod}>{edu.period}</span>
                    <span className={styles.eduScoreType}>{edu.scoreType}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Honors & Achievements */}
          <div className={`tech-card ${styles.card}`}>
            <div className={styles.cardHeader}>
              <div className={styles.headerIconWrapper}>
                <Award size={20} className={styles.headerIcon} />
              </div>
              <div>
                <span className={styles.headerFig}>02 // HONORS & RECOGNITION</span>
                <h3 className={styles.cardTitle}>Academic Standing</h3>
              </div>
            </div>

            <div className={styles.cardList}>
              {achievementData.map((ach, idx) => (
                <div key={idx} className={styles.achievementItem}>
                  <div className={styles.achieveBadge}>
                    <Award size={14} />
                    <span>{ach.category}</span>
                  </div>
                  <h4 className={styles.achieveTitle}>{ach.title}</h4>
                  <p className={styles.achieveDesc}>{ach.description}</p>
                </div>
              ))}

              {/* Languages block */}
              <div className={styles.languagesBlock}>
                <div className={styles.langHeader}>
                  <Languages size={15} className={styles.langIcon} />
                  <span className={styles.langTitle}>SPOKEN & PROFESSIONAL LANGUAGES</span>
                </div>
                <div className={styles.langGrid}>
                  {languagesData.map((lang) => (
                    <div key={lang.name} className={styles.langItem}>
                      <span className={styles.langName}>{lang.name}</span>
                      <span className={styles.langLevel}>{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Technical Summary Panel */}
        <div className={`tech-card ${styles.summaryPanel}`}>
          <div className={styles.summaryHeader}>
            <Terminal size={15} className={styles.summaryIcon} />
            <span className={styles.summaryTitle}>profile_summary.json</span>
          </div>
          <div className={styles.summaryGrid}>
            <div className={styles.summaryCol}>
              <span className={styles.summaryKey}>PRIMARY FOCUS</span>
              <span className={styles.summaryVal}>React Native (CLI & Expo)</span>
            </div>
            <div className={styles.summaryCol}>
              <span className={styles.summaryKey}>BACKEND SYSTEM</span>
              <span className={styles.summaryVal}>Node.js & REST APIs</span>
            </div>
            <div className={styles.summaryCol}>
              <span className={styles.summaryKey}>DATA & CACHING</span>
              <span className={styles.summaryVal}>MongoDB · Redis · SQLite · MySQL</span>
            </div>
            <div className={styles.summaryCol}>
              <span className={styles.summaryKey}>VERIFIED STATUS</span>
              <span className={styles.summaryValStatus}>
                <CheckCircle2 size={13} />
                Open to Opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
