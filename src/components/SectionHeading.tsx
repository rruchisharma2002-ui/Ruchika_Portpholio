import React from 'react';

interface SectionHeadingProps {
  figNumber: string;
  title: string;
  subtitle?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ figNumber, title, subtitle }) => {
  return (
    <div className="section-header">
      <div className="section-divider" />
      <span className="fig-marker">{figNumber}</span>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};
