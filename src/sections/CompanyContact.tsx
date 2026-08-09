import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiCalendar, FiSend, FiCheckCircle, FiLoader } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { companyData } from '../data/company';

interface ContactProps {
    onBookCall?: () => void;
}

export const CompanyContact: React.FC<ContactProps> = ({ onBookCall }) => {
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Direct automated email delivery to sapraforce@gmail.com via FormSubmit AJAX service
            await fetch('https://formsubmit.co/ajax/sapraforce@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    _subject: `New Contact Form Inquiry: ${form.name}`,
                    'Full Name': form.name,
                    'Email Address': form.email,
                    'Subject': form.subject || 'General Inquiry',
                    'Message / Requirements': form.message,
                    _captcha: 'false',
                }),
            });
        } catch (error) {
            console.error('Email dispatch error:', error);
        } finally {
            setLoading(false);
            setSent(true);
        }
    };

    return (
        <section
            id="contact"
            style={{
                padding: '70px 24px 90px',
                position: 'relative',
                background: 'linear-gradient(180deg, #060612 0%, #08081a 50%, #060612 100%)',
                color: '#ffffff',
                overflow: 'hidden',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                fontFamily: "'Manrope', sans-serif",
            }}
        >
            {/* Background Ambient Glow */}
            <div style={{
                position: 'absolute', bottom: '10%', left: '-5%',
                width: '500px', height: '500px',
                background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
                borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 2 }}>

                {/* ── Section Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: -15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'left', marginBottom: '32px' }}
                >
                    <h2 style={{
                        fontSize: 'clamp(1.65rem, 2.5vw, 2.15rem)',
                        lineHeight: 1.25,
                        margin: 0,
                        letterSpacing: '-0.01em',
                        fontFamily: "'Manrope', sans-serif",
                    }}>
                        <span className="thinkitive-title-gradient">Contact Us</span><br />
                        <span className="thinkitive-title-thin">Ready to Scale Your Business?</span>
                    </h2>

                    <div style={{
                        width: '100%',
                        height: '1px',
                        background: 'rgba(255, 255, 255, 0.18)',
                        margin: '12px 0 0 0',
                    }} />
                </motion.div>

                {/* ── 2 Perfectly Aligned Equal Height Glass Cards ── */}
                <div className="contact-main-grid">

                    {/* ── Left Column: Unified Glass Card matching right form height ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="left-unified-glass-card"
                    >
                        {/* Top: Call Booking Area */}
                        <div>
                            <h3 className="call-card-title">Book a 30-Min Strategy Call</h3>
                            <p className="call-card-desc">
                                Schedule a 1-on-1 call with our solution architects for custom workflow design and estimates.
                            </p>
                            <button onClick={onBookCall} className="call-card-btn">
                                <FiCalendar size={16} /> Schedule Strategy Call
                            </button>
                        </div>

                        {/* Middle Divider */}
                        <div className="card-inner-divider" />

                        {/* Bottom: Contact Details with WhatsApp Direct Links */}
                        <div className="contact-details-inner">
                            <div className="detail-item">
                                <div className="detail-icon"><FiPhone size={16} color="#3b82f6" /></div>
                                <div>
                                    <div className="detail-label">Phone</div>
                                    <div className="detail-value">{companyData.contactInfo.phone}</div>
                                </div>
                            </div>

                            {/* Direct WhatsApp Chat Redirect Item */}
                            <div className="detail-item">
                                <div className="detail-icon"><FaWhatsapp size={16} color="#3b82f6" /></div>
                                <div>
                                    <div className="detail-label">WhatsApp</div>
                                    <div className="detail-value" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                        <a
                                            href="https://wa.me/919322046379"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="whatsapp-link-btn"
                                        >
                                            +91 9322046379 ↗
                                        </a>
                                        <a
                                            href="https://wa.me/917350195791"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="whatsapp-link-btn"
                                        >
                                            +91 7350195791 ↗
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="detail-item">
                                <div className="detail-icon"><FiMail size={16} color="#3b82f6" /></div>
                                <div>
                                    <div className="detail-label">Email</div>
                                    <div className="detail-value">{companyData.contactInfo.email}</div>
                                </div>
                            </div>

                            <div className="detail-item">
                                <div className="detail-icon"><FiMapPin size={16} color="#3b82f6" /></div>
                                <div>
                                    <div className="detail-label">Headquarters</div>
                                    <div className="detail-value">{companyData.contactInfo.location}</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* ── Right Column: Form Glass Card matching left card height ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="form-glass-card"
                    >
                        <div>
                            <h3 className="form-title">Send Us a Message</h3>
                            <p className="form-subtitle">
                                Drop us a message and our engineering team will get back to you shortly.
                            </p>

                            {!sent ? (
                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-row-2">
                                        <div>
                                            <label className="form-label">Name *</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Enter your name"
                                                value={form.name}
                                                onChange={e => setForm({ ...form, name: e.target.value })}
                                                className="form-input"
                                            />
                                        </div>
                                        <div>
                                            <label className="form-label">Email *</label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="Enter your email address"
                                                value={form.email}
                                                onChange={e => setForm({ ...form, email: e.target.value })}
                                                className="form-input"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="form-label">Subject</label>
                                        <input
                                            type="text"
                                            placeholder="General inquiry or project discussion"
                                            value={form.subject}
                                            onChange={e => setForm({ ...form, subject: e.target.value })}
                                            className="form-input"
                                        />
                                    </div>

                                    <div>
                                        <label className="form-label">Message *</label>
                                        <textarea
                                            required
                                            rows={3}
                                            placeholder="Tell us about your project or requirements..."
                                            value={form.message}
                                            onChange={e => setForm({ ...form, message: e.target.value })}
                                            className="form-input textarea"
                                        />
                                    </div>

                                    <button type="submit" disabled={loading} className="form-submit-btn">
                                        {loading ? (
                                            <>
                                                <FiLoader className="animate-spin" size={16} /> Sending Email...
                                            </>
                                        ) : (
                                            <>
                                                <FiSend size={15} /> Send Message
                                            </>
                                        )}
                                    </button>
                                </form>
                            ) : (
                                <div className="form-success-box">
                                    <FiCheckCircle size={44} color="#3b82f6" />
                                    <h4>Message Received & Sent!</h4>
                                    <p>Thank you {form.name}. Your message has been sent directly to <strong>sapraforce@gmail.com</strong>. We will respond shortly.</p>
                                    <button onClick={() => setSent(false)} className="reset-btn">
                                        Send Another Message
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>

                </div>
            </div>

            <style>{`
                .thinkitive-title-gradient {
                    font-weight: 800;
                    background: linear-gradient(180deg, #ffffff 0%, #3b82f6 40%, #1d4ed8 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    font-family: 'Manrope', sans-serif;
                }
                .thinkitive-title-thin {
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.95);
                    letter-spacing: -0.01em;
                    font-family: 'Manrope', sans-serif;
                }

                .contact-main-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.25fr;
                    gap: 28px;
                    align-items: stretch;
                    font-family: 'Manrope', sans-serif;
                }

                .left-unified-glass-card {
                    background: rgba(14, 14, 28, 0.75);
                    backdrop-filter: blur(16px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 16px;
                    padding: 26px 28px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
                }

                .call-card-title {
                    font-size: 1.15rem;
                    font-weight: 700;
                    color: #ffffff;
                    margin: 0 0 6px 0;
                }

                .call-card-desc {
                    font-size: 0.84rem;
                    color: rgba(255, 255, 255, 0.65);
                    line-height: 1.5;
                    margin: 0 0 16px 0;
                }

                .call-card-btn {
                    width: 100%;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    padding: 11px 18px;
                    border-radius: 8px;
                    background: #1e40af;
                    color: #ffffff;
                    font-size: 0.88rem;
                    font-weight: 600;
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 6px 18px rgba(30, 64, 175, 0.35);
                }
                .call-card-btn:hover {
                    background: #2563eb;
                    box-shadow: 0 8px 22px rgba(37, 99, 235, 0.5);
                    transform: translateY(-2px);
                }

                .card-inner-divider {
                    width: 100%;
                    height: 1px;
                    background: rgba(255, 255, 255, 0.08);
                    margin: 18px 0;
                }

                .contact-details-inner {
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                }

                .detail-item {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                }

                .detail-icon {
                    width: 36px;
                    height: 36px;
                    border-radius: 8px;
                    background: rgba(59, 130, 246, 0.12);
                    border: 1px solid rgba(59, 130, 246, 0.25);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .detail-label {
                    font-size: 0.72rem;
                    color: rgba(255, 255, 255, 0.5);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .detail-value {
                    font-size: 0.88rem;
                    font-weight: 600;
                    color: #ffffff;
                }

                .whatsapp-link-btn {
                    color: #ffffff;
                    text-decoration: none;
                    font-weight: 600;
                    transition: all 0.25s ease;
                }
                .whatsapp-link-btn:hover {
                    color: #3b82f6;
                    text-decoration: underline;
                }

                .form-glass-card {
                    background: rgba(14, 14, 28, 0.75);
                    backdrop-filter: blur(16px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 16px;
                    padding: 26px 28px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
                }

                .form-title {
                    font-size: 1.15rem;
                    font-weight: 700;
                    color: #ffffff;
                    margin: 0 0 6px 0;
                }

                .form-subtitle {
                    font-size: 0.84rem;
                    color: rgba(255, 255, 255, 0.6);
                    margin: 0 0 18px 0;
                    line-height: 1.5;
                }

                .contact-form {
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                }

                .form-row-2 {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 14px;
                }

                .form-label {
                    display: block;
                    font-size: 0.78rem;
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.8);
                    margin-bottom: 6px;
                }

                .form-input {
                    width: 100%;
                    padding: 10px 14px;
                    border-radius: 8px;
                    background: rgba(6, 6, 18, 0.6);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    color: #ffffff;
                    font-size: 0.88rem;
                    font-family: 'Manrope', sans-serif;
                    outline: none;
                    transition: border-color 0.25s ease;
                }
                .form-input::placeholder {
                    color: rgba(255, 255, 255, 0.4);
                }
                .form-input:focus {
                    border-color: #3b82f6;
                    box-shadow: 0 0 12px rgba(59, 130, 246, 0.25);
                }

                .form-input.textarea {
                    resize: vertical;
                }

                .form-submit-btn {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    padding: 11px;
                    border-radius: 8px;
                    background: #1e40af;
                    color: #ffffff;
                    font-size: 0.88rem;
                    font-weight: 600;
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 6px 18px rgba(30, 64, 175, 0.35);
                    margin-top: 4px;
                }
                .form-submit-btn:hover {
                    background: #2563eb;
                    box-shadow: 0 8px 22px rgba(37, 99, 235, 0.5);
                    transform: translateY(-2px);
                }

                .form-success-box {
                    padding: 30px 20px;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 12px;
                }
                .form-success-box h4 {
                    font-size: 1.15rem;
                    font-weight: 700;
                    color: #ffffff;
                    margin: 0;
                }
                .form-success-box p {
                    font-size: 0.84rem;
                    color: rgba(255, 255, 255, 0.65);
                    margin: 0;
                }

                .reset-btn {
                    margin-top: 8px;
                    padding: 8px 18px;
                    border-radius: 6px;
                    background: rgba(255, 255, 255, 0.1);
                    color: #ffffff;
                    font-size: 0.8rem;
                    border: none;
                    cursor: pointer;
                }

                @media (max-width: 900px) {
                    .contact-main-grid {
                        grid-template-columns: 1fr;
                    }
                    .form-row-2 {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
};
