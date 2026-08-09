import React from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiZap, FiSearch, FiBriefcase, FiCheck, FiArrowRight } from 'react-icons/fi';
import { companyData } from '../data/company';

interface SolutionsProps {
    onBookCall?: () => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ onBookCall }) => {
    const getServiceIcon = (icon: string) => {
        switch (icon) {
            case 'Bot': return <FiCpu size={28} color="var(--gold)" />;
            case 'Zap': return <FiZap size={28} color="#aa3bff" />;
            case 'Search': return <FiSearch size={28} color="#3b82f6" />;
            case 'Briefcase': return <FiBriefcase size={28} color="#10b981" />;
            default: return <FiCpu size={28} color="var(--gold)" />;
        }
    };

    return (
        <section
            id="solutions"
            style={{
                padding: '100px 24px',
                position: 'relative',
                background: 'linear-gradient(180deg, rgba(10,10,20,0) 0%, rgba(14,14,28,0.7) 50%, rgba(10,10,20,0) 100%)',
            }}
        >
            <div
                style={{
                    maxWidth: '1350px',
                    margin: '0 auto',
                }}
            >
                {/* Thinkitive-Style Layout: Narrative Left, 4-Card Grid Right */}
                <div className="solutions-container">
                    {/* Left Column Narrative */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="solutions-left"
                    >
                        <span className="solutions-eyebrow">ENTERPRISE OFFERINGS</span>
                        <h2 className="solutions-heading">
                            Custom <span style={{ color: 'var(--gold)' }}>AI & Business Process</span> Automation Services
                        </h2>
                        <p className="solutions-description">
                            Develop intelligent automation pipelines engineered specifically for your company's workflows. From custom autonomous swarms to enterprise vector search and API orchestration, we build robust, self-healing AI systems.
                        </p>
                        
                        <div className="solutions-stats-list">
                            {companyData.stats.map((stat, idx) => (
                                <div key={idx} className="stat-card-mini">
                                    <div className="stat-value">{stat.value}</div>
                                    <div className="stat-label">{stat.label}</div>
                                    <div className="stat-sub">{stat.suffix}</div>
                                </div>
                            ))}
                        </div>

                        <button className="solutions-cta-btn" onClick={onBookCall}>
                            Request Custom AI Architecture <FiArrowRight />
                        </button>
                    </motion.div>

                    {/* Right Column 4-Grid Cards (Thinkitive screenshot 2 style) */}
                    <div className="solutions-right-grid">
                        {companyData.services.map((service, idx) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="thinkitive-service-card"
                            >
                                <div className="card-top-icon">
                                    {getServiceIcon(service.icon)}
                                </div>

                                <div className="service-tag">{service.tag}</div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-text">{service.description}</p>

                                <div className="service-features-list">
                                    {service.features.map((feat, fIdx) => (
                                        <div key={fIdx} className="feature-item">
                                            <FiCheck size={14} color="var(--gold)" />
                                            <span>{feat}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="service-metric-badge">
                                    <span>⚡ {service.metrics}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .solutions-container {
                    display: grid;
                    grid-template-columns: 1fr 1.35fr;
                    gap: 60px;
                    align-items: start;
                }
                .solutions-left {
                    text-align: left;
                    position: sticky;
                    top: 100px;
                }
                .solutions-eyebrow {
                    color: var(--gold);
                    font-size: 0.82rem;
                    font-weight: 800;
                    letter-spacing: 0.2em;
                    display: block;
                    margin-bottom: 12px;
                }
                .solutions-heading {
                    font-size: clamp(2rem, 3.2vw, 3rem);
                    font-weight: 800;
                    color: #ffffff;
                    line-height: 1.15;
                    margin: 0 0 18px 0;
                }
                .solutions-description {
                    color: rgba(255,255,255,0.7);
                    font-size: 1rem;
                    line-height: 1.65;
                    margin-bottom: 32px;
                }
                .solutions-stats-list {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 32px;
                }
                .stat-card-mini {
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 14px;
                    padding: 16px;
                }
                .stat-value {
                    font-size: 1.8rem;
                    font-weight: 900;
                    color: var(--gold);
                }
                .stat-label {
                    font-size: 0.8rem;
                    font-weight: 700;
                    color: #ffffff;
                    margin-top: 2px;
                }
                .stat-sub {
                    font-size: 0.7rem;
                    color: rgba(255,255,255,0.5);
                }
                .solutions-cta-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 14px 28px;
                    border-radius: 12px;
                    background: rgba(255,255,255,0.06);
                    border: 1px solid rgba(212, 166, 79, 0.4);
                    color: var(--gold);
                    font-weight: 700;
                    font-size: 0.95rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .solutions-cta-btn:hover {
                    background: var(--gold);
                    color: #0a0a14;
                    box-shadow: 0 6px 20px rgba(212, 166, 79, 0.3);
                }

                /* Right Column 4-Grid Cards */
                .solutions-right-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 24px;
                }
                .thinkitive-service-card {
                    background: rgba(18, 18, 32, 0.85);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 20px;
                    padding: 28px 24px;
                    text-align: left;
                    display: flex;
                    flex-direction: column;
                    transition: all 0.35s ease;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                }
                .thinkitive-service-card:hover {
                    transform: translateY(-6px);
                    border-color: rgba(212, 166, 79, 0.35);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.5), 0 0 25px rgba(212, 166, 79, 0.15);
                }
                .card-top-icon {
                    margin-bottom: 16px;
                }
                .service-tag {
                    font-size: 0.72rem;
                    font-weight: 800;
                    color: var(--gold);
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    margin-bottom: 6px;
                }
                .service-title {
                    font-size: 1.2rem;
                    font-weight: 800;
                    color: #ffffff;
                    margin-bottom: 10px;
                    line-height: 1.25;
                }
                .service-text {
                    font-size: 0.85rem;
                    color: rgba(255,255,255,0.65);
                    line-height: 1.55;
                    margin-bottom: 20px;
                }
                .service-features-list {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    margin-bottom: 20px;
                }
                .feature-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 0.78rem;
                    color: rgba(255,255,255,0.8);
                }
                .service-metric-badge {
                    margin-top: auto;
                    padding-top: 14px;
                    border-top: 1px solid rgba(255,255,255,0.06);
                    font-size: 0.78rem;
                    font-weight: 700;
                    color: var(--gold);
                }

                @media (max-width: 1024px) {
                    .solutions-container {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }
                    .solutions-left {
                        position: static;
                    }
                }
                @media (max-width: 640px) {
                    .solutions-right-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
};
