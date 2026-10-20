import React from 'react';
import { SectionHeading } from './SectionHeading';
import { skillCategories } from '../data/portfolioData';
import {
  Smartphone,
  Code2,
  Server,
  Database,
  Cpu,
  Wrench,
  Check
} from 'lucide-react';
import styles from './Skills.module.css';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  mobile: <Smartphone size={18} />,
  languages: <Code2 size={18} />,
  backend: <Server size={18} />,
  databases: <Database size={18} />,
  integrations: <Cpu size={18} />,
  tools: <Wrench size={18} />
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading
          figNumber="FIG. 04"
          title="The stack I work with"
          subtitle="A categorized overview of the languages, frameworks, databases, and development tooling I utilize in production."
        />

        {/* Legend */}
        <div className={styles.legendBar}>
          <span className={styles.legendLabel}>LEGEND:</span>
          <div className={styles.legendItem}>
            <span className="badge badge-core">
              <Check size={11} /> Core Commercial Skill
            </span>
          </div>
          <div className={styles.legendItem}>
            <span className="badge badge-neutral">Supporting Skill / Tool</span>
          </div>
        </div>

        {/* Skills Grid */}
        <div className={styles.skillsGrid}>
          {skillCategories.map((category, index) => {
            const icon = CATEGORY_ICONS[category.id] || <Code2 size={18} />;
            const coreCount = category.skills.filter((s) => s.isCore).length;

            return (
              <div key={category.id} className={`tech-card ${styles.categoryCard}`}>
                <div className={styles.categoryHeader}>
                  <div className={styles.categoryTitleGroup}>
                    <div className={styles.categoryIcon}>{icon}</div>
                    <div>
                      <span className={styles.categoryIndex}>0{index + 1} //</span>
                      <h3 className={styles.categoryTitle}>{category.title}</h3>
                    </div>
                  </div>
                  <span className={styles.coreCountBadge}>{coreCount} Core</span>
                </div>

                <div className={styles.badgesWrapper}>
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`badge ${skill.isCore ? 'badge-core' : 'badge-neutral'} ${styles.skillBadge}`}
                    >
                      {skill.isCore && <span className={styles.coreIndicator} />}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
