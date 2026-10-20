import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { profileData } from '../data/portfolioData';
import {
  Mail,
  MapPin,
  Download,
  Send,
  CheckCircle,
  AlertCircle,
  ArrowUpRight,
  ExternalLink
} from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import styles from './Contact.module.css';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }

    if (!form.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!form.subject.trim()) {
      newErrors.subject = 'Please provide a subject.';
    }

    if (!form.message.trim()) {
      newErrors.message = 'Please provide a message.';
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate clean dispatch feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleOpenMailClient = () => {
    const subjectParam = encodeURIComponent(form.subject || 'Opportunity / Collaboration');
    const bodyParam = encodeURIComponent(
      `Hello Ruchika,\n\n${form.message}\n\nBest regards,\n${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${profileData.email}?subject=${subjectParam}&body=${bodyParam}`;
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading
          figNumber="FIG. 06"
          title="Let's build something useful."
          subtitle="I'm interested in building reliable mobile applications and backend systems. If you have an opportunity, project, or collaboration in mind, I'd be happy to connect."
        />

        <div className={styles.contactGrid}>
          {/* Left Column: Direct Channels & CTAs */}
          <div className={styles.infoCol}>
            <div className={`tech-card ${styles.channelCard}`}>
              <div className={styles.cardHeader}>
                <span className={styles.headerTag}>// DIRECT CHANNELS</span>
                <h3 className={styles.cardTitle}>Communication Details</h3>
              </div>

              <div className={styles.channelList}>
                {/* Email channel */}
                <a
                  href={`mailto:${profileData.email}`}
                  className={styles.channelItem}
                >
                  <div className={styles.channelIcon}>
                    <Mail size={18} />
                  </div>
                  <div className={styles.channelText}>
                    <span className={styles.channelLabel}>PRIMARY EMAIL</span>
                    <span className={styles.channelValue}>{profileData.email}</span>
                  </div>
                  <ArrowUpRight size={16} className={styles.channelArrow} />
                </a>

                {/* GitHub channel */}
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.channelItem}
                >
                  <div className={styles.channelIcon}>
                    <GithubIcon size={18} />
                  </div>
                  <div className={styles.channelText}>
                    <span className={styles.channelLabel}>GITHUB PROFILE</span>
                    <span className={styles.channelValue}>github.com/rruchisharma2002-ui</span>
                  </div>
                  <ExternalLink size={16} className={styles.channelArrow} />
                </a>

                {/* Location channel */}
                <div className={styles.channelItemStatic}>
                  <div className={styles.channelIcon}>
                    <MapPin size={18} />
                  </div>
                  <div className={styles.channelText}>
                    <span className={styles.channelLabel}>LOCATION</span>
                    <span className={styles.channelValue}>{profileData.location}</span>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className={styles.buttonStack}>
                <a
                  href={`mailto:${profileData.email}`}
                  className="btn btn-primary"
                >
                  <Mail size={15} />
                  <span>EMAIL ME DIRECTLY</span>
                </a>

                <a
                  href={profileData.resumeUrl}
                  download="Ruchika_Sharma_Resume.pdf"
                  className="btn btn-secondary"
                >
                  <Download size={15} />
                  <span>DOWNLOAD RESUME PDF</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className={styles.formCol}>
            <div className={`tech-card ${styles.formCard}`}>
              <div className={styles.cardHeader}>
                <span className={styles.headerTag}>// SEND A MESSAGE</span>
                <h3 className={styles.cardTitle}>Leave a Note</h3>
              </div>

              {isSubmitted ? (
                <div className={styles.successState}>
                  <div className={styles.successIconWrapper}>
                    <CheckCircle size={32} className={styles.successIcon} />
                  </div>
                  <h4 className={styles.successTitle}>Thank you for reaching out!</h4>
                  <p className={styles.successDesc}>
                    Your message draft has been prepared for <strong>{profileData.email}</strong>. Click below to launch your email client with your message pre-filled:
                  </p>
                  <button
                    onClick={handleOpenMailClient}
                    className="btn btn-primary"
                  >
                    <Send size={15} />
                    <span>LAUNCH EMAIL CLIENT NOW</span>
                  </button>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setForm({ name: '', email: '', subject: '', message: '' });
                    }}
                    className={styles.resetBtn}
                  >
                    Send another note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form} noValidate>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>
                      YOUR NAME <span className={styles.required}>*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                      placeholder="e.g. Alex Morgan"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <span id="name-error" className={styles.errorText}>
                        <AlertCircle size={12} /> {errors.name}
                      </span>
                    )}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                      EMAIL ADDRESS <span className={styles.required}>*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                      placeholder="e.g. alex@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <span id="email-error" className={styles.errorText}>
                        <AlertCircle size={12} /> {errors.email}
                      </span>
                    )}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="subject" className={styles.label}>
                      SUBJECT <span className={styles.required}>*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className={`${styles.input} ${errors.subject ? styles.inputError : ''}`}
                      placeholder="e.g. React Native / Mobile App Role"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                    />
                    {errors.subject && (
                      <span id="subject-error" className={styles.errorText}>
                        <AlertCircle size={12} /> {errors.subject}
                      </span>
                    )}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>
                      MESSAGE <span className={styles.required}>*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                      placeholder="Tell me about your project, team, or opportunity..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <span id="message-error" className={styles.errorText}>
                        <AlertCircle size={12} /> {errors.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn btn-primary ${styles.submitBtn}`}
                  >
                    {isSubmitting ? (
                      <span>PREPARING...</span>
                    ) : (
                      <>
                        <span>SEND MESSAGE</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
