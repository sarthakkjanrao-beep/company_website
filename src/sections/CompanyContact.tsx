import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiCalendar, FiSend, FiCheckCircle } from 'react-icons/fi';
import { companyData } from '../data/company';

interface ContactProps {
    onBookCall?: () => void;
}

export const CompanyContact: React.FC<ContactProps> = ({ onBookCall }) => {
    const [sent, setSent] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSent(true);
    };

    return (
        <section
            id="contact"
            style={{
                padding: '100px 24px 80px',
                position: 'relative',
            }}
        >
            <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <span style={{ color: 'var(--gold)', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.2em' }}>
                        GET IN TOUCH
                    </span>
                    <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', fontWeight: 800, color: '#ffffff', margin: '10px 0 16px' }}>
                        Ready to Automate Your <span style={{ color: 'var(--gold)' }}>Business Workflows?</span>
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
                        Speak with our AI solution architects to schedule a free 30-minute audit or submit your project requirements below.
                    </p>
                </div>

                <div className="company-contact-grid">
                    {/* Left Column: Direct Call Booking Card & Info */}
                    <div className="contact-info-column">
                        <div className="call-booking-hero-card">
                            <div className="call-card-badge">RECOMMENDED</div>
                            <h3 className="call-card-title">Book a 30-Min AI Strategy Audit</h3>
                            <p className="call-card-desc">
                                Get a custom workflow architecture diagram and estimated ROI calculation tailored specifically to your tech stack.
                            </p>
                            <button onClick={onBookCall} className="call-card-btn">
                                <FiCalendar size={18} /> Schedule 1-on-1 Strategy Call
                            </button>
                        </div>

                        <div className="contact-details-box">
                            <div className="detail-item">
                                <div className="detail-icon"><FiMail color="var(--gold)" /></div>
                                <div>
                                    <div className="detail-label">Email Us</div>
                                    <div className="detail-value">{companyData.contactInfo.email}</div>
                                </div>
                            </div>

                            <div className="detail-item">
                                <div className="detail-icon"><FiPhone color="var(--gold)" /></div>
                                <div>
                                    <div className="detail-label">Direct Phone</div>
                                    <div className="detail-value">{companyData.contactInfo.phone}</div>
                                </div>
                            </div>

                            <div className="detail-item">
                                <div className="detail-icon"><FiMapPin color="var(--gold)" /></div>
                                <div>
                                    <div className="detail-label">Headquarters</div>
                                    <div className="detail-value">{companyData.contactInfo.location}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Inquiry Form */}
                    <div className="contact-form-column">
                        <div className="form-glass-card">
                            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
                                Send Us a Message
                            </h3>
                            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.88rem', marginBottom: '24px' }}>
                                Have a specific question or RFP? Drop us a line and our engineering team will get back to you within 2 hours.
                            </p>

                            {!sent ? (
                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                        <div>
                                            <label className="form-label">Name *</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="John Doe"
                                                value={form.name}
                                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                className="form-input"
                                            />
                                        </div>
                                        <div>
                                            <label className="form-label">Work Email *</label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="john@company.com"
                                                value={form.email}
                                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                className="form-input"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="form-label">Subject</label>
                                        <input
                                            type="text"
                                            placeholder="AI Workflow Automation Inquiry"
                                            value={form.subject}
                                            onChange={(e) => setForm({ ...form, subject: e.target.value })}
                                            className="form-input"
                                        />
                                    </div>

                                    <div>
                                        <label className="form-label">Project Details / Requirements *</label>
                                        <textarea
                                            rows={4}
                                            required
                                            placeholder="Tell us about the workflows or manual processes you want to automate..."
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                            className="form-input"
                                        />
                                    </div>

                                    <button type="submit" className="form-submit-btn">
                                        Send Message <FiSend />
                                    </button>
                                </form>
                            ) : (
                                <div style={{ textAlign: 'center', padding: '40px 10px' }}>
                                    <FiCheckCircle size={48} color="var(--gold)" style={{ marginBottom: '16px' }} />
                                    <h4 style={{ fontSize: '1.4rem', color: '#fff', fontWeight: 800 }}>Message Sent Successfully!</h4>
                                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginTop: '8px' }}>
                                        Thank you, {form.name}. Our AI architecture team will review your inquiry and respond shortly.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .company-contact-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.2fr;
                    gap: 40px;
                    align-items: start;
                }
                .contact-info-column {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                    text-align: left;
                }
                .call-booking-hero-card {
                    background: linear-gradient(135deg, rgba(212, 166, 79, 0.15) 0%, rgba(14, 14, 26, 0.95) 100%);
                    border: 1px solid rgba(212, 166, 79, 0.35);
                    border-radius: 20px;
                    padding: 32px;
                    position: relative;
                }
                .call-card-badge {
                    display: inline-block;
                    padding: 4px 10px;
                    border-radius: 20px;
                    background: var(--gold);
                    color: #0a0a14;
                    font-weight: 800;
                    font-size: 0.7rem;
                    margin-bottom: 12px;
                }
                .call-card-title {
                    font-size: 1.4rem;
                    font-weight: 800;
                    color: #ffffff;
                    margin-bottom: 10px;
                }
                .call-card-desc {
                    color: rgba(255,255,255,0.7);
                    font-size: 0.9rem;
                    line-height: 1.55;
                    margin-bottom: 24px;
                }
                .call-card-btn {
                    width: 100%;
                    padding: 14px;
                    border-radius: 12px;
                    background: var(--gold);
                    color: #0a0a14;
                    font-weight: 800;
                    font-size: 0.95rem;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    box-shadow: 0 6px 20px rgba(212, 166, 79, 0.3);
                }

                .contact-details-box {
                    background: rgba(14, 14, 26, 0.7);
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 20px;
                    padding: 24px;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
                .detail-item {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                }
                .detail-icon {
                    width: 42px;
                    height: 42px;
                    border-radius: 10px;
                    background: rgba(212, 166, 79, 0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.2rem;
                }
                .detail-label {
                    font-size: 0.75rem;
                    color: rgba(255,255,255,0.5);
                    font-weight: 600;
                    text-transform: uppercase;
                }
                .detail-value {
                    font-size: 0.92rem;
                    color: #ffffff;
                    font-weight: 700;
                }

                .form-glass-card {
                    background: rgba(14, 14, 26, 0.85);
                    backdrop-filter: blur(16px);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 24px;
                    padding: 32px;
                    text-align: left;
                }
                .form-label {
                    display: block;
                    font-size: 0.8rem;
                    color: rgba(255,255,255,0.75);
                    margin-bottom: 6px;
                    font-weight: 600;
                }
                .form-input {
                    width: 100%;
                    padding: 12px 14px;
                    background: rgba(255,255,255,0.04);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 10px;
                    color: #ffffff;
                    font-size: 0.9rem;
                    outline: none;
                }
                .form-input:focus {
                    border-color: var(--gold);
                }
                .form-submit-btn {
                    padding: 14px;
                    border-radius: 12px;
                    background: rgba(255,255,255,0.08);
                    border: 1px solid rgba(212, 166, 79, 0.4);
                    color: var(--gold);
                    font-weight: 700;
                    font-size: 0.95rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    transition: all 0.3s;
                }
                .form-submit-btn:hover {
                    background: var(--gold);
                    color: #0a0a14;
                }

                @media (max-width: 900px) {
                    .company-contact-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
};
