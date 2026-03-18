import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MessageCircle, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { contactSchema, type ContactFormData } from '../schemas/contactSchema';
import styles from './Contact.module.css';

// ── EmailJS Config ───────────────────────────────────────────
// Template 1 (EMAILJS_TEMPLATE_ID)   → sends to YOU with sender details
// Template 2 (EMAILJS_AUTOREPLY_ID)  → auto-reply sent to the person who contacted
const EMAILJS_SERVICE_ID   = 'service_cbbcdrb';
const EMAILJS_TEMPLATE_ID  = 'template_r4ln8sq';  // main → to you
const EMAILJS_AUTOREPLY_ID = 'template_61ujoo1';   // auto-reply → to them
const EMAILJS_PUBLIC_KEY   = 'VYNrFFnmBSwhK8Gyu';

const WHATSAPP_NUMBER = '919360464364'; // your number with country code

const EMPTY: ContactFormData = { name: '', email: '', subject: '', message: '' };

type Status = 'idle' | 'loading' | 'success' | 'error';

const Contact = () => {
  const { ref, isVisible } = useIntersectionObserver();
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm]     = useState<ContactFormData>(EMPTY);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Zod validation
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<ContactFormData> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        if (!fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setStatus('loading');

    try {
      const params = {
        from_name:  form.name,
        from_email: form.email,
        subject:    form.subject,
        message:    form.message,
        reply_to:   form.email,
      };

      // Send notification email to Arun
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params, EMAILJS_PUBLIC_KEY);

      // Send auto-reply to the person who contacted
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_AUTOREPLY_ID, params, EMAILJS_PUBLIC_KEY);

      setStatus('success');
      setForm(EMPTY);
      setTimeout(() => setStatus('idle'), 6000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleWhatsApp = () => {
    if (!form.name && !form.message) {
      // Open blank WhatsApp chat
      window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
      return;
    }
    const text = encodeURIComponent(
      `Hi Arun, I'm ${form.name || ''}.\n\n${form.message || ''}\n\nEmail: ${form.email || 'not provided'}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className={`section ${styles.section}`} ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className={`fade-up ${isVisible ? 'visible' : ''}`}>
          <span className="eyebrow">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-sub">
            Open to new opportunities, freelance projects, or just a conversation.
            Fill the form — I'll reply via email, or reach me directly on WhatsApp.
          </p>
        </div>

        <div className={`${styles.grid} fade-up delay-2 ${isVisible ? 'visible' : ''}`}>

          {/* Left — contact info */}
          <div className={styles.info}>
            <div className={styles.infoCards}>
              <a href="mailto:arunjegan001@gmail.com" className={styles.infoCard}>
                <span className={styles.infoIcon}><Mail size={18} /></span>
                <div>
                  <p className={styles.infoLabel}>Email</p>
                  <p className={styles.infoVal}>arunjegan001@gmail.com</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.infoCard}
              >
                <span className={styles.infoIconGreen}><MessageCircle size={18} /></span>
                <div>
                  <p className={styles.infoLabel}>WhatsApp</p>
                  <p className={styles.infoVal}>+91 93604 64364</p>
                </div>
              </a>

              <div className={styles.infoCard}>
                <span className={styles.infoIcon}><Phone size={18} /></span>
                <div>
                  <p className={styles.infoLabel}>Phone</p>
                  <p className={styles.infoVal}>+91 93604 64364</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <span className={styles.infoIcon}><MapPin size={18} /></span>
                <div>
                  <p className={styles.infoLabel}>Location</p>
                  <p className={styles.infoVal}>Chennai, Tamil Nadu</p>
                </div>
              </div>
            </div>

            <div className={styles.availBox}>
              <span className={styles.availDot} />
              <div>
                <p className={styles.availTitle}>Available for Opportunities</p>
                <p className={styles.availSub}>Full-time · Contract · Freelance</p>
              </div>
            </div>

            {/* Direct WhatsApp CTA */}
            <button
              className={`btn ${styles.waBtn}`}
              onClick={handleWhatsApp}
            >
              <MessageCircle size={16} />
              Message on WhatsApp
            </button>
          </div>

          {/* Right — form */}
          <div className={styles.formWrap}>
            {status === 'success' ? (
              <div className={styles.successState}>
                <CheckCircle size={40} color="var(--green)" />
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you at <strong>{form.email || 'your email'}</strong> within 24 hours.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleEmailSubmit} className={styles.form} noValidate>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="name">Full Name *</label>
                    <input
                      id="name" name="name" type="text"
                      value={form.name} onChange={handleChange}
                      className={`${styles.input} ${errors.name ? styles.err : ''}`}
                      placeholder="Your name"
                    />
                    {errors.name && <span className={styles.error}>{errors.name}</span>}
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="email">Email Address *</label>
                    <input
                      id="email" name="email" type="email"
                      value={form.email} onChange={handleChange}
                      className={`${styles.input} ${errors.email ? styles.err : ''}`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <span className={styles.error}>{errors.email}</span>}
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="subject">Subject *</label>
                  <input
                    id="subject" name="subject" type="text"
                    value={form.subject} onChange={handleChange}
                    className={`${styles.input} ${errors.subject ? styles.err : ''}`}
                    placeholder="e.g. Job opportunity / Freelance project"
                  />
                  {errors.subject && <span className={styles.error}>{errors.subject}</span>}
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="message">Message *</label>
                  <textarea
                    id="message" name="message"
                    value={form.message} onChange={handleChange}
                    className={`${styles.input} ${styles.textarea} ${errors.message ? styles.err : ''}`}
                    placeholder="Tell me about the role, project, or what you'd like to discuss..."
                    rows={5}
                  />
                  {errors.message && <span className={styles.error}>{errors.message}</span>}
                </div>

                {status === 'error' && (
                  <div className={styles.errorBanner}>
                    <AlertCircle size={15} />
                    Failed to send. Please try WhatsApp or email directly.
                  </div>
                )}

                <div className={styles.formActions}>
                  <button
                    type="submit"
                    className={`btn btn-primary ${styles.submitBtn}`}
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <><span className={styles.spinner} /> Sending...</>
                    ) : (
                      <><Send size={15} /> Send via Email</>
                    )}
                  </button>

                  <button
                    type="button"
                    className={`btn ${styles.waInlineBtn}`}
                    onClick={handleWhatsApp}
                  >
                    <MessageCircle size={15} />
                    Send via WhatsApp
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
