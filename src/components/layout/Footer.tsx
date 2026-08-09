import React from 'react';
import { FiMapPin, FiPhone, FiMail, FiLinkedin, FiTwitter, FiArrowUp } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import logoSvg from '../../assets/logo.svg';

interface FooterProps {
    onSectionChange?: (id: string) => void;
    onBookCall?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSectionChange }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer
            style={{
                background: 'linear-gradient(180deg, #060814 0%, #03040a 100%)',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                color: 'rgba(255, 255, 255, 0.75)',
                padding: '60px 24px 30px',
                position: 'relative',
                fontFamily: "'Manrope', sans-serif",
            }}
        >
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

                {/* ── Main Footer Grid matching Thinkitive reference screenshot ── */}
                <div className="thinkitive-footer-grid">

                    {/* ── Column 1: Logo & Social Icons ── */}
                    <div className="footer-col-1">
                        <div className="footer-logo-row">
                            <img src={logoSvg} alt="Sapraforce" className="footer-logo-img" />
                            <span className="footer-logo-name">Sapraforce</span>
                        </div>

                        <div className="footer-social-row">
                            <a href="http://www.linkedin.com/in/sapraforce-technologies-a64359428" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                                <FiLinkedin size={17} />
                            </a>
                            <a href="https://x.com/sapraforce" target="_blank" rel="noopener noreferrer" title="Twitter / X">
                                <FiTwitter size={17} />
                            </a>
                            <a href="https://wa.me/919322046379" target="_blank" rel="noopener noreferrer" title="WhatsApp Direct">
                                <FaWhatsapp size={17} />
                            </a>
                            <a href="mailto:sapraforce@gmail.com" title="Email Us">
                                <FiMail size={17} />
                            </a>
                        </div>
                    </div>

                    {/* ── Column 2: Services ── */}
                    <div className="footer-col-2">
                        <h4 className="footer-heading">Services</h4>
                        <ul className="footer-links">
                            <li><button onClick={() => onSectionChange?.('solutions')}>AI Solutions</button></li>
                            <li><button onClick={() => onSectionChange?.('services')}>Custom Software</button></li>
                            <li><button onClick={() => onSectionChange?.('solutions')}>AI Agent Swarms</button></li>
                            <li><button onClick={() => onSectionChange?.('solutions')}>API Automation</button></li>
                        </ul>
                    </div>

                    {/* ── Column 3: Company ── */}
                    <div className="footer-col-3">
                        <h4 className="footer-heading">Company</h4>
                        <ul className="footer-links">
                            <li><button onClick={() => onSectionChange?.('about-us')}>About us</button></li>
                            <li><button onClick={() => onSectionChange?.('testimonials')}>Testimonials</button></li>
                            <li><button onClick={() => onSectionChange?.('contact')}>Contact Us</button></li>
                        </ul>
                    </div>

                    {/* ── Column 4: Genuine HQ Contact Box (India) ── */}
                    <div className="footer-col-4">
                        <div className="hq-region-badge">
                            <span className="flag-icon">🇮🇳</span>
                            <span className="region-name">India (HQ)</span>
                        </div>

                        <div className="hq-contact-details">
                            <div className="hq-detail-line">
                                <FiMapPin size={14} color="#3b82f6" />
                                <span>Pune, India</span>
                            </div>
                            <div className="hq-detail-line">
                                <FiPhone size={14} color="#3b82f6" />
                                <span>+91 9322046379, +91 7350195791</span>
                            </div>
                            <div className="hq-detail-line">
                                <FaWhatsapp size={14} color="#3b82f6" />
                                <a href="https://wa.me/919322046379" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                    +91 9322046379, +91 7350195791 ↗
                                </a>
                            </div>
                            <div className="hq-detail-line">
                                <FiMail size={14} color="#3b82f6" />
                                <span>sapraforce@gmail.com</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* ── Clean Horizontal Line matching Thinkitive screenshot ── */}
                <div className="footer-divider" />

                {/* ── Bottom Copyright Bar ── */}
                <div className="footer-bottom-bar">
                    <div className="copyright-text">
                        © {new Date().getFullYear()} Sapraforce. All Rights Reserved.
                    </div>

                    <button onClick={scrollToTop} className="back-to-top-btn">
                        Back to top <FiArrowUp size={14} />
                    </button>
                </div>

            </div>

            <style>{`
                .thinkitive-footer-grid {
                    display: grid;
                    grid-template-columns: 1.3fr 1fr 1fr 1.3fr;
                    gap: 40px;
                    align-items: flex-start;
                    font-family: 'Manrope', sans-serif;
                }

                .footer-logo-row {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 16px;
                }
                .footer-logo-img {
                    width: 30px;
                    height: 30px;
                }
                .footer-logo-name {
                    font-size: 1.35rem;
                    font-weight: 800;
                    color: #ffffff;
                    letter-spacing: -0.02em;
                    font-family: 'Manrope', sans-serif;
                }

                .footer-social-row {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                }
                .footer-social-row a {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.06);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    color: rgba(255, 255, 255, 0.75);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.25s ease;
                }
                .footer-social-row a:hover {
                    background: rgba(59, 130, 246, 0.2);
                    border-color: rgba(59, 130, 246, 0.5);
                    color: #3b82f6;
                    transform: translateY(-2px);
                }

                .footer-heading {
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: #ffffff;
                    margin: 0 0 16px 0;
                    letter-spacing: -0.01em;
                    font-family: 'Manrope', sans-serif;
                }

                .footer-links {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                .footer-links button {
                    background: none;
                    border: none;
                    color: rgba(255, 255, 255, 0.65);
                    font-size: 0.85rem;
                    font-weight: 500;
                    padding: 0;
                    cursor: pointer;
                    text-align: left;
                    transition: color 0.25s ease;
                    font-family: 'Manrope', sans-serif;
                }
                .footer-links button:hover {
                    color: #3b82f6;
                }

                .hq-region-badge {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 14px;
                }
                .flag-icon {
                    font-size: 1.1rem;
                }
                .region-name {
                    font-size: 0.9rem;
                    font-weight: 700;
                    color: #ffffff;
                    letter-spacing: -0.01em;
                    font-family: 'Manrope', sans-serif;
                }

                .hq-contact-details {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                .hq-detail-line {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 0.82rem;
                    color: rgba(255, 255, 255, 0.7);
                    font-weight: 500;
                    font-family: 'Manrope', sans-serif;
                }

                .footer-divider {
                    width: 100%;
                    height: 1px;
                    background: rgba(255, 255, 255, 0.12);
                    margin: 40px 0 24px 0;
                }

                .footer-bottom-bar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 16px;
                }

                .copyright-text {
                    font-size: 0.8rem;
                    color: rgba(255, 255, 255, 0.5);
                    font-family: 'Manrope', sans-serif;
                }

                .back-to-top-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: rgba(255, 255, 255, 0.75);
                    padding: 7px 14px;
                    border-radius: 6px;
                    font-size: 0.78rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.25s ease;
                    font-family: 'Manrope', sans-serif;
                }
                .back-to-top-btn:hover {
                    background: rgba(59, 130, 246, 0.15);
                    border-color: rgba(59, 130, 246, 0.4);
                    color: #3b82f6;
                }

                @media (max-width: 900px) {
                    .thinkitive-footer-grid {
                        grid-template-columns: 1fr 1fr;
                        gap: 30px;
                    }
                }
                @media (max-width: 600px) {
                    .thinkitive-footer-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </footer>
    );
};
