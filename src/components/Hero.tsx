import React from 'react';
import { ArrowRight, Download, Terminal, MapPin, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { profileData } from '../data/portfolioData';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroGrid}>
          {/* Left Column: Identity & Intro */}
          <div className={styles.identityCol}>
            <div className={styles.locationTag}>
              <MapPin size={13} className={styles.locationIcon} />
              <span>{profileData.location.toUpperCase()}</span>
            </div>

            <h1 className={styles.nameHeading}>
              <span>Ruchika</span>
              <br />
              <span>Sharma</span>
              <span className={styles.namePeriod} />
            </h1>

            <div className={styles.titleWrapper}>
              <h2 className={styles.titleText}>
                React Native Developer <span className={styles.titleSeparator}>·</span> Node.js Backend
              </h2>
            </div>

            <p className={styles.bioText}>
              {profileData.bio}
            </p>

            {/* Actions */}
            <div className={styles.actionGroup}>
              <button
                onClick={scrollToContact}
                className="btn btn-primary"
                aria-label="Get in touch"
              >
                <span>GET IN TOUCH</span>
                <ArrowRight size={15} />
              </button>

              <a
                href={profileData.resumeUrl}
                download="Ruchika_Sharma_Resume.pdf"
                className="btn btn-secondary"
                aria-label="Download Ruchika Sharma Resume PDF"
              >
                <Download size={15} />
                <span>DOWNLOAD RESUME</span>
              </a>

              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                aria-label="GitHub Profile (opens in a new tab)"
              >
                <GithubIcon size={16} />
                <span>GITHUB</span>
              </a>
            </div>
          </div>

          {/* Right Column: Technical Developer Profile Card */}
          <div className={styles.profileCardCol}>
            <div className={`tech-card ${styles.profileCard}`}>
              <div className={styles.cardHeader}>
                <div className={styles.terminalDots}>
                  <span className={styles.dotRed} />
                  <span className={styles.dotYellow} />
                  <span className={styles.dotGreen} />
                </div>
                <div className={styles.cardTitle}>
                  <Terminal size={14} className={styles.terminalIcon} />
                  <span>developer.profile</span>
                </div>
                <span className={styles.cardStatusBadge}>v1.5.0</span>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.codeRow}>
                  <span className={styles.codeKey}>role</span>
                  <span className={styles.codeDash}>—</span>
                  <span className={styles.codeValHighlight}>React Native Developer</span>
                </div>

                <div className={styles.codeRow}>
                  <span className={styles.codeKey}>backend</span>
                  <span className={styles.codeDash}>—</span>
                  <span className={styles.codeVal}>Node.js</span>
                </div>

                <div className={styles.codeRow}>
                  <span className={styles.codeKey}>mobile</span>
                  <span className={styles.codeDash}>—</span>
                  <span className={styles.codeVal}>React Native CLI / Expo</span>
                </div>

                <div className={styles.codeRow}>
                  <span className={styles.codeKey}>databases</span>
                  <span className={styles.codeDash}>—</span>
                  <span className={styles.codeVal}>MongoDB / Redis / SQLite / MySQL</span>
                </div>

                <div className={styles.codeRow}>
                  <span className={styles.codeKey}>languages</span>
                  <span className={styles.codeDash}>—</span>
                  <span className={styles.codeVal}>JavaScript / TypeScript</span>
                </div>

                <div className={styles.codeRow}>
                  <span className={styles.codeKey}>location</span>
                  <span className={styles.codeDash}>—</span>
                  <span className={styles.codeVal}>{profileData.location}</span>
                </div>

                <div className={`${styles.codeRow} ${styles.statusRow}`}>
                  <span className={styles.codeKey}>status</span>
                  <span className={styles.codeDash}>—</span>
                  <span className={styles.statusBadge}>
                    <span className="status-dot" />
                    <span>{profileData.status}</span>
                  </span>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <span className={styles.footerPrompt}>$ mobile_build --target=production</span>
                <span className={styles.footerCursor}>_</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Capabilities Footer */}
        <div className={styles.heroFooter}>
          <div className={styles.footerLabel}>
            <span>VERIFIED CAPABILITIES</span>
          </div>
          <div className={styles.capabilityList}>
            {profileData.capabilities.map((cap) => (
              <div key={cap} className={styles.capabilityBadge}>
                <CheckCircle2 size={13} className={styles.capCheck} />
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
