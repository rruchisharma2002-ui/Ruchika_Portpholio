import React from 'react';
import { SectionHeading } from './SectionHeading';
import { careerTimeline } from '../data/portfolioData';
import { Smartphone, Server, Layers, Calendar, Building, MapPin } from 'lucide-react';
import styles from './About.module.css';

export const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading
          figNumber="FIG. 01"
          title="The short version"
          subtitle="A quick breakdown of how I engineer mobile applications and backend systems, with verified career milestones."
        />

        <div className={styles.aboutGrid}>
          {/* Left Column: Narrative & Focus Areas */}
          <div className={styles.narrativeCol}>
            <div className={styles.storyCard}>
              <p className={styles.leadParagraph}>
                I started my journey focused on <strong>React Native mobile development</strong> and naturally expanded into <strong>Node.js and MongoDB backend systems</strong> to build cohesive, end-to-end applications.
              </p>
              <p className={styles.bodyParagraph}>
                Over the past <strong>~1.5 years</strong>, I have built and maintained production-grade cross-platform apps published on both the <strong>Apple App Store and Google Play</strong>. My work includes architecting real-time one-to-one and group messaging platforms using <strong>Redis</strong>, handling election databases with <strong>lakhs of records in SQLite</strong>, integrating secure <strong>payment gateways</strong>, and implementing <strong>Firebase authentication</strong>.
              </p>
              <p className={styles.bodyParagraph}>
                When faced with new libraries or unfamiliar technical hurdles, I rely on official documentation and step-by-step systematic debugging rather than superficial guesswork.
              </p>
            </div>

            {/* Core Competencies Cards */}
            <div className={styles.competencyGrid}>
              <div className={`tech-card ${styles.competencyCard}`}>
                <div className={styles.compIconWrapper}>
                  <Smartphone size={20} className={styles.compIcon} />
                </div>
                <div>
                  <h3 className={styles.compTitle}>Cross-Platform Mobile</h3>
                  <p className={styles.compDesc}>
                    React Native CLI, Expo, custom navigation hierarchies, native store deployments, and smooth 60fps animations.
                  </p>
                </div>
              </div>

              <div className={`tech-card ${styles.competencyCard}`}>
                <div className={styles.compIconWrapper}>
                  <Server size={20} className={styles.compIcon} />
                </div>
                <div>
                  <h3 className={styles.compTitle}>Backend & Real-Time</h3>
                  <p className={styles.compDesc}>
                    Node.js REST APIs, MongoDB data models, and Redis in-memory pub/sub caching for low-latency messaging.
                  </p>
                </div>
              </div>

              <div className={`tech-card ${styles.competencyCard}`}>
                <div className={styles.compIconWrapper}>
                  <Layers size={20} className={styles.compIcon} />
                </div>
                <div>
                  <h3 className={styles.compTitle}>High-Volume Local Data</h3>
                  <p className={styles.compDesc}>
                    SQLite schemas, batch ingestion, and indexed queries capable of handling hundreds of thousands of local voter/client records.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Career Timeline */}
          <div className={styles.timelineCol}>
            <div className={`tech-card ${styles.timelineCard}`}>
              <div className={styles.timelineHeader}>
                <span className={styles.timelineHeaderTag}>// CAREER PROGRESSION</span>
                <h3 className={styles.timelineTitle}>Verified Milestones</h3>
              </div>

              <div className={styles.timelineTrack}>
                {careerTimeline.map((item, index) => {
                  const isCurrent = item.type === 'fullstack';
                  return (
                    <div key={index} className={styles.timelineItem}>
                      <div className={styles.timelineMarkerCol}>
                        <div className={`${styles.timelineDot} ${isCurrent ? styles.currentDot : ''}`} />
                        {index < careerTimeline.length - 1 && <div className={styles.timelineLine} />}
                      </div>

                      <div className={styles.timelineContent}>
                        <div className={styles.timelineMeta}>
                          <span className={styles.timelinePeriod}>
                            <Calendar size={12} />
                            {item.period}
                          </span>
                          {isCurrent && (
                            <span className="badge badge-status">Active Role</span>
                          )}
                        </div>

                        <h4 className={styles.timelineRole}>{item.role}</h4>

                        <div className={styles.timelineCompanyRow}>
                          <span className={styles.companyName}>
                            <Building size={13} />
                            {item.company}
                          </span>
                          <span className={styles.companyLocation}>
                            <MapPin size={12} />
                            {item.location}
                          </span>
                        </div>

                        <p className={styles.timelineDesc}>{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
