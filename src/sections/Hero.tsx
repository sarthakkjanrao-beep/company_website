import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiCheck, FiCpu, FiGitBranch, FiDatabase, FiPhoneCall, FiChevronRight } from 'react-icons/fi';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { companyData } from '../data/company';

interface HeroProps {
    onBookCall?: () => void;
    onExplore?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookCall, onExplore }) => {
    const typedText = useTypingEffect(companyData.typingCapabilities, 90);
    const [activeCardIndex, setActiveCardIndex] = useState(0);

    const activeCard = companyData.heroCards[activeCardIndex];

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'Cpu': return <FiCpu size={24} color="#d4a64f" />;
            case 'GitBranches': return <FiGitBranch size={24} color="#aa3bff" />;
            case 'Database': return <FiDatabase size={24} color="#3b82f6" />;
            default: return <FiCpu size={24} color="var(--gold)" />;
        }
    };

    return (
        <section
            id="hero"
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                padding: '120px 24px 60px',
            }}
        >
            {/* Ambient Lighting Orbs */}
            <div
                style={{
                    position: 'absolute',
                    top: '15%',
                    right: '5%',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, rgba(212,166,79,0.18) 0%, rgba(170,59,255,0.08) 50%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(120px)',
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '5%',
                    width: '450px',
                    height: '450px',
                    background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(212,166,79,0.08) 50%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(140px)',
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />

            <div
                style={{
                    position: 'relative',
                    zIndex: 1,
                    maxWidth: '1350px',
                    width: '100%',
                    margin: '0 auto',
                }}
            >
                {/* Hero Grid: Left Content & Right Thinkitive-style Feature Cards */}
                <div className="hero-grid">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-left-column"
                    >
                        {/* Eyebrow Pill */}
                        <div className="hero-eyebrow-pill">
                            <span className="hero-pill-pulse" />
                            ⚡ ENTERPRISE AI & BUSINESS AUTOMATION
                        </div>

                        {/* Main Title */}
                        <h1 className="hero-main-title">
                            Automate Complex Business Workflows with <span className="hero-title-gradient">Real-World AI</span>
                        </h1>

                        {/* Dynamic Typing Subtitle */}
                        <div className="hero-typing-box">
                            <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>Engineered for:&nbsp;</span>
                            <span style={{ color: 'var(--gold)', fontWeight: 700 }}>{typedText}</span>
                            <span className="hero-cursor-blink" />
                        </div>

                        {/* Subheadline / Bio */}
                        <p className="hero-subheadline">
                            {companyData.subheadline}
                        </p>

                        {/* Bullet Highlights */}
                        <div className="hero-trust-bullets">
                            <div className="hero-bullet-item">
                                <FiCheck color="var(--gold)" /> 70% Avg Cost Savings
                            </div>
                            <div className="hero-bullet-item">
                                <FiCheck color="var(--gold)" /> 99.8% Process Accuracy
                            </div>
                            <div className="hero-bullet-item">
                                <FiCheck color="var(--gold)" /> Enterprise-Grade Security
                            </div>
                        </div>

                        {/* Primary & Secondary Action CTAs */}
                        <div className="hero-cta-buttons">
                            <button className="hero-btn-primary" onClick={onBookCall}>
                                <FiPhoneCall size={18} /> Book a 30-Min AI Audit
                            </button>
                            <button className="hero-btn-secondary" onClick={onExplore}>
                                Explore AI Solutions <FiArrowRight size={16} />
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Column: Thinkitive-style Feature Cards Carousel */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hero-right-column"
                    >
                        <div className="thinkitive-cards-container">
                            {/* Card Header Selector Tabs */}
                            <div className="thinkitive-tabs">
                                {companyData.heroCards.map((card, idx) => (
                                    <button
                                        key={card.id}
                                        onClick={() => setActiveCardIndex(idx)}
                                        className={`thinkitive-tab ${idx === activeCardIndex ? 'active' : ''}`}
                                    >
                                        {card.title}
                                    </button>
                                ))}
                            </div>

                            {/* Main Display Glass Card */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeCard.id}
                                    initial={{ opacity: 0, y: 15, scale: 0.97 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -15, scale: 0.97 }}
                                    transition={{ duration: 0.4 }}
                                    className="hero-active-glass-card"
                                >
                                    <div className="card-top-bar">
                                        <div className="card-badge" style={{ borderColor: activeCard.color }}>
                                            {activeCard.badge}
                                        </div>
                                        <div className="card-dots">
                                            <span style={{ background: '#ff5f56' }} />
                                            <span style={{ background: '#ffbd2e' }} />
                                            <span style={{ background: '#27c93f' }} />
                                        </div>
                                    </div>

                                    <div className="card-main-content">
                                        <div className="card-icon-box" style={{ background: `${activeCard.color}15`, border: `1px solid ${activeCard.color}40` }}>
                                            {getIcon(activeCard.icon)}
                                        </div>
                                        <h3 className="card-heading">{activeCard.title}</h3>
                                        <p className="card-desc">{activeCard.desc}</p>
                                    </div>

                                    {/* Visual Simulation Wireframe */}
                                    <div className="card-simulation-wireframe">
                                        <div className="sim-step">
                                            <span className="sim-status-dot" />
                                            <span>Webhook Triggered: Inbound ERP Data Received</span>
                                        </div>
                                        <div className="sim-step active">
                                            <span className="sim-status-dot pulse" />
                                            <span>AI Agent Executing LLM Verification Pipeline...</span>
                                        </div>
                                        <div className="sim-step success">
                                            <span className="sim-status-dot success" />
                                            <span>Action Completed: Database Sync & Slack Notification</span>
                                        </div>
                                    </div>

                                    <div className="card-bottom-metric">
                                        <span>⚡ {activeCard.highlight}</span>
                                        <button className="card-learn-btn" onClick={onExplore}>
                                            View Solution <FiChevronRight />
                                        </button>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Side Quick Preview Pills */}
                            <div className="hero-card-side-previews">
                                {companyData.heroCards.map((card, idx) => (
                                    <div
                                        key={card.id}
                                        onClick={() => setActiveCardIndex(idx)}
                                        className={`hero-mini-card ${idx === activeCardIndex ? 'active' : ''}`}
                                    >
                                        <div className="mini-card-title">{card.title}</div>
                                        <div className="mini-card-sub">{card.highlight}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Thinkitive-style Trust Banner (Enterprise Clients / Tech Stack) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="thinkitive-trust-section"
                >
                    <div className="trust-divider">
                        <span className="trust-divider-line" />
                        <span className="trust-divider-text">
                            {companyData.trustHeadline}
                        </span>
                        <span className="trust-divider-line" />
                    </div>

                    <div className="trust-logos-marquee">
                        {companyData.partners.map((partner, idx) => (
                            <div key={idx} className="trust-logo-chip">
                                <span className="partner-symbol">{partner.symbol}</span>
                                <span className="partner-name">{partner.name}</span>
                                <span className="partner-cat">{partner.category}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <style>{`
                @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
                @keyframes pulseGlow { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.2); } }

                .hero-grid {
                    display: grid;
                    grid-template-columns: 1.15fr 0.85fr;
                    gap: 60px;
                    align-items: center;
                }
                .hero-left-column {
                    text-align: left;
                }
                .hero-eyebrow-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 6px 16px;
                    border-radius: 30px;
                    background: rgba(212, 166, 79, 0.1);
                    border: 1px solid rgba(212, 166, 79, 0.25);
                    color: var(--gold);
                    font-size: 0.8rem;
                    font-weight: 700;
                    letter-spacing: 0.08em;
                    margin-bottom: 20px;
                }
                .hero-pill-pulse {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: var(--gold);
                    animation: pulseGlow 1.8s infinite ease-in-out;
                }
                .hero-main-title {
                    font-size: clamp(2.4rem, 4.5vw, 4.2rem);
                    font-weight: 900;
                    line-height: 1.1;
                    color: #ffffff;
                    margin: 0 0 16px 0;
                    letter-spacing: -0.02em;
                }
                .hero-title-gradient {
                    background: linear-gradient(135deg, var(--gold) 0%, #f7d070 50%, #c084fc 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .hero-typing-box {
                    font-size: clamp(1rem, 2vw, 1.35rem);
                    min-height: 2em;
                    margin-bottom: 20px;
                }
                .hero-cursor-blink {
                    display: inline-block;
                    width: 3px;
                    height: 1.2em;
                    background: var(--gold);
                    margin-left: 4px;
                    vertical-align: middle;
                    animation: blink 1s step-end infinite;
                }
                .hero-subheadline {
                    color: rgba(255, 255, 255, 0.72);
                    font-size: clamp(0.95rem, 1.2vw, 1.1rem);
                    line-height: 1.65;
                    margin-bottom: 28px;
                    max-width: 600px;
                }
                .hero-trust-bullets {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                    margin-bottom: 36px;
                }
                .hero-bullet-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 0.88rem;
                    color: rgba(255, 255, 255, 0.85);
                    font-weight: 500;
                }
                .hero-cta-buttons {
                    display: flex;
                    gap: 16px;
                    flex-wrap: wrap;
                }
                .hero-btn-primary {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 16px 32px;
                    border-radius: 12px;
                    background: linear-gradient(135deg, var(--gold) 0%, #b88a38 100%);
                    color: #0a0a14;
                    font-weight: 800;
                    font-size: 1rem;
                    border: none;
                    cursor: pointer;
                    box-shadow: 0 8px 30px rgba(212, 166, 79, 0.35);
                    transition: all 0.3s ease;
                }
                .hero-btn-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 12px 40px rgba(212, 166, 79, 0.5);
                }
                .hero-btn-secondary {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 16px 28px;
                    border-radius: 12px;
                    background: rgba(255,255,255,0.05);
                    color: #ffffff;
                    font-weight: 700;
                    font-size: 1rem;
                    border: 1px solid rgba(255,255,255,0.15);
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .hero-btn-secondary:hover {
                    background: rgba(255,255,255,0.1);
                    border-color: rgba(212, 166, 79, 0.5);
                    color: var(--gold);
                }

                /* Right Column Thinkitive Cards */
                .thinkitive-cards-container {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
                .thinkitive-tabs {
                    display: flex;
                    gap: 8px;
                    background: rgba(255,255,255,0.04);
                    padding: 6px;
                    border-radius: 14px;
                    border: 1px solid rgba(255,255,255,0.06);
                }
                .thinkitive-tab {
                    flex: 1;
                    padding: 10px 12px;
                    border-radius: 10px;
                    background: transparent;
                    border: none;
                    color: rgba(255,255,255,0.6);
                    font-size: 0.8rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .thinkitive-tab.active {
                    background: rgba(212, 166, 79, 0.15);
                    color: var(--gold);
                    border: 1px solid rgba(212, 166, 79, 0.3);
                }
                .hero-active-glass-card {
                    background: rgba(14, 14, 26, 0.85);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 24px;
                    padding: 28px;
                    text-align: left;
                    box-shadow: 0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(212, 166, 79, 0.1);
                }
                .card-top-bar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 20px;
                }
                .card-badge {
                    font-size: 0.72rem;
                    font-weight: 800;
                    letter-spacing: 0.08em;
                    padding: 4px 12px;
                    border-radius: 20px;
                    background: rgba(255,255,255,0.04);
                    border: 1px solid;
                    color: #ffffff;
                }
                .card-dots {
                    display: flex;
                    gap: 6px;
                }
                .card-dots span {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                }
                .card-main-content {
                    margin-bottom: 20px;
                }
                .card-icon-box {
                    width: 52px;
                    height: 52px;
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 16px;
                }
                .card-heading {
                    font-size: 1.35rem;
                    font-weight: 800;
                    color: #ffffff;
                    margin-bottom: 8px;
                }
                .card-desc {
                    color: rgba(255,255,255,0.68);
                    font-size: 0.88rem;
                    line-height: 1.55;
                }
                .card-simulation-wireframe {
                    background: rgba(5, 5, 12, 0.7);
                    border: 1px solid rgba(255,255,255,0.06);
                    border-radius: 14px;
                    padding: 14px 16px;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    margin-bottom: 20px;
                }
                .sim-step {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 0.78rem;
                    color: rgba(255,255,255,0.5);
                }
                .sim-step.active {
                    color: #ffffff;
                    font-weight: 600;
                }
                .sim-step.success {
                    color: #4ade80;
                }
                .sim-status-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.3);
                }
                .sim-status-dot.pulse {
                    background: var(--gold);
                    box-shadow: 0 0 10px var(--gold);
                    animation: pulseGlow 1.2s infinite ease-in-out;
                }
                .sim-status-dot.success {
                    background: #4ade80;
                    box-shadow: 0 0 8px #4ade80;
                }
                .card-bottom-metric {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-size: 0.84rem;
                    font-weight: 700;
                    color: var(--gold);
                    padding-top: 14px;
                    border-top: 1px solid rgba(255,255,255,0.08);
                }
                .card-learn-btn {
                    background: none;
                    border: none;
                    color: rgba(255,255,255,0.7);
                    font-size: 0.8rem;
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    cursor: pointer;
                    transition: color 0.2s;
                }
                .card-learn-btn:hover {
                    color: var(--gold);
                }
                .hero-card-side-previews {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 10px;
                }
                .hero-mini-card {
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.06);
                    border-radius: 12px;
                    padding: 10px 12px;
                    text-align: left;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                .hero-mini-card:hover, .hero-mini-card.active {
                    background: rgba(212, 166, 79, 0.08);
                    border-color: rgba(212, 166, 79, 0.3);
                }
                .mini-card-title {
                    font-size: 0.76rem;
                    font-weight: 700;
                    color: #ffffff;
                }
                .mini-card-sub {
                    font-size: 0.68rem;
                    color: rgba(255,255,255,0.5);
                    margin-top: 2px;
                }

                /* Thinkitive Trust Banner */
                .thinkitive-trust-section {
                    margin-top: 70px;
                    text-align: center;
                }
                .trust-divider {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    margin-bottom: 24px;
                }
                .trust-divider-line {
                    flex: 1;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
                }
                .trust-divider-text {
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: rgba(255,255,255,0.6);
                    letter-spacing: 0.05em;
                }
                .trust-logos-marquee {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 12px;
                }
                .trust-logo-chip {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 16px;
                    border-radius: 12px;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    transition: all 0.25s ease;
                }
                .trust-logo-chip:hover {
                    background: rgba(255, 255, 255, 0.07);
                    border-color: rgba(212, 166, 79, 0.3);
                    transform: translateY(-2px);
                }
                .partner-symbol {
                    font-size: 1rem;
                }
                .partner-name {
                    font-size: 0.85rem;
                    font-weight: 700;
                    color: #ffffff;
                }
                .partner-cat {
                    font-size: 0.7rem;
                    color: rgba(255,255,255,0.4);
                    padding-left: 6px;
                    border-left: 1px solid rgba(255,255,255,0.1);
                }

                /* Mobile Responsiveness */
                @media (max-width: 1024px) {
                    .hero-grid {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }
                    .hero-left-column {
                        text-align: center;
                    }
                    .hero-subheadline {
                        margin-left: auto;
                        margin-right: auto;
                    }
                    .hero-trust-bullets {
                        justify-content: center;
                    }
                    .hero-cta-buttons {
                        justify-content: center;
                    }
                }

                @media (max-width: 640px) {
                    .hero-btn-primary, .hero-btn-secondary {
                        width: 100%;
                        justify-content: center;
                    }
                    .hero-card-side-previews {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
};
