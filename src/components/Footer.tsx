import React from 'react';
import { ArrowUp, Mail, MapPin } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { profileData } from '../data/portfolioData';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.topRow}>
          {/* Identity */}
          <div className={styles.identityCol}>
            <div className={styles.brandRow}>
              <span className={styles.brandMark} />
              <span className={styles.brandName}>Ruchika Sharma</span>
            </div>
            <p className={styles.roleText}>
              React Native Developer · Node.js Backend Developer
            </p>
            <div className={styles.locationRow}>
              <MapPin size={13} className={styles.locIcon} />
              <span>{profileData.location}</span>
            </div>
          </div>

          {/* Nav & Links */}
          <div className={styles.linksCol}>
            <div className={styles.linkGroup}>
              <span className={styles.groupHeading}>NAVIGATE</span>
              <ul className={styles.linkList}>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <span className={styles.groupHeading}>CONNECT</span>
              <ul className={styles.linkList}>
                <li>
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <GithubIcon size={14} /> GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${profileData.email}`}
                    className={styles.socialLink}
                  >
                    <Mail size={14} /> Email
                  </a>
                </li>
                <li>
                  <a
                    href={profileData.resumeUrl}
                    download="Ruchika_Sharma_Resume.pdf"
                    className={styles.socialLink}
                  >
                    Download Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            © {currentYear} Ruchika Sharma. Built with React, TypeScript & Vite. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className={styles.backToTopBtn}
            aria-label="Back to top"
            title="Return to top of page"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
