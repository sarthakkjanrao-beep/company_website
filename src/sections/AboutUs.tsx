import React from 'react';
import { motion } from 'framer-motion';

interface AboutUsProps {
    onBookCall?: () => void;
}

const statsData = [
    { value: '5+', label: 'Automation Systems Built' },
    { value: '10+', label: 'API Connectors & Workflows' },
    { value: '100%', label: 'Control & Visibility' },
    { value: '70%', label: 'Operational Cost Savings' },
    { value: '99.9%', label: 'System Uptime Rate' },
];

const gridImages = [
    { id: 'img-1', src: '/hero-agents.png', title: 'Autonomous AI Agents' },
    { id: 'img-2', src: '/hero-workflow.png', title: 'Visual Workflow Pipelines' },
    { id: 'img-3', src: '/hero-rag.png', title: 'Knowledge RAG Indexing' },
    { id: 'img-4', src: '/hero-integration.png', title: 'System Interoperability' },
    { id: 'img-5', src: '/about-dashboard.png', title: 'Real-time Dashboards' },
    { id: 'img-6', src: '/about-webapps.png', title: 'Custom Web Apps' },
];

export const AboutUs: React.FC<AboutUsProps> = () => {
    return (
        <section
            id="about-us"
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
            {/* Ambient Background Glow */}
            <div style={{
                position: 'absolute', top: '30%', right: '-5%',
                width: '500px', height: '500px',
                background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
                borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none',
            }} />

            <div
                style={{
                    maxWidth: '1280px',
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 2,
                }}
            >
                {/* ── Section Header (Identical to Artificial Intelligence (AI) header style & gradient) ── */}
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
                        <span className="thinkitive-title-gradient">About us</span><br />
                        <span className="thinkitive-title-thin">What is Sapraforce?</span>
                    </h2>

                    <div style={{
                        width: '100%',
                        height: '1px',
                        background: 'rgba(255, 255, 255, 0.18)',
                        margin: '12px 0 0 0',
                    }} />
                </motion.div>

                {/* 2 Column Layout matching Thinkitive template */}
                <div className="about-us-container">

                    {/* ── Left Column Content ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="about-us-left"
                    >
                        <p className="about-us-paragraph">
                            Sapraforce is a specialized technology company that excels in custom software development and intelligent business automation. Unlike traditional service providers, we don't just connect tools — we engineer complete systems powered by AI, APIs, and automation that become a core part of how your business operates.
                        </p>

                        <p className="about-us-paragraph">
                            With our core mission of creating connected digital ecosystems, every solution we build comes with its own dedicated dashboard for full visibility and control. Here are some of the key advantages of working with Sapraforce:
                        </p>

                        <ul className="about-us-bullets">
                            <li><span>•</span> In-depth Expertise in Custom Software & Autonomous AI Agents.</li>
                            <li><span>•</span> Cost-effective Development Approach to Build for a Fraction of the Cost.</li>
                            <li><span>•</span> Fast Building with Pre-engineered Micro-Components & API Pipelines.</li>
                            <li><span>•</span> Own and Secure Your Software and Data with 100% Transparency.</li>
                            <li><span>•</span> Leveraging Enterprise RAG, LLMs, and Advanced Automation Tech.</li>
                        </ul>

                        {/* Stat Counters Row */}
                        <div className="about-us-stats-grid">
                            {statsData.map((stat, idx) => (
                                <div key={idx} className="stat-item">
                                    <div className="stat-value">{stat.value}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── Right Column 3x2 Photo Grid ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="about-us-right-grid"
                    >
                        {gridImages.map((img) => (
                            <div key={img.id} className="grid-photo-card">
                                <img src={img.src} alt={img.title} />
                                <div className="photo-card-overlay">
                                    <span>{img.title}</span>
                                </div>
                            </div>
                        ))}
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

                .about-us-container {
                    display: grid;
                    grid-template-columns: 1.1fr 1fr;
                    gap: 50px;
                    align-items: flex-start;
                    font-family: 'Manrope', sans-serif;
                }

                .about-us-paragraph {
                    color: rgba(255, 255, 255, 0.68);
                    font-size: 0.9rem;
                    line-height: 1.65;
                    font-weight: 400;
                    margin: 0 0 16px 0;
                    font-family: 'Manrope', sans-serif;
                }

                .about-us-bullets {
                    list-style: none;
                    padding: 0;
                    margin: 20px 0 32px 0;
                }
                .about-us-bullets li {
                    color: rgba(255, 255, 255, 0.75);
                    font-size: 0.86rem;
                    line-height: 1.6;
                    font-weight: 400;
                    margin-bottom: 10px;
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                    font-family: 'Manrope', sans-serif;
                }
                .about-us-bullets li span {
                    color: #3b82f6;
                    font-weight: 600;
                }

                .about-us-stats-grid {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: 12px;
                    padding-top: 16px;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }
                .stat-item {
                    text-align: left;
                }
                .stat-value {
                    font-size: 1.55rem;
                    font-weight: 700;
                    color: #3b82f6;
                    line-height: 1.2;
                    margin-bottom: 4px;
                    font-family: 'Manrope', sans-serif;
                }
                .stat-label {
                    font-size: 0.72rem;
                    font-weight: 400;
                    color: rgba(255, 255, 255, 0.6);
                    line-height: 1.35;
                    font-family: 'Manrope', sans-serif;
                }

                .about-us-right-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                }
                .grid-photo-card {
                    position: relative;
                    height: 155px;
                    border-radius: 14px;
                    overflow: hidden;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
                }
                .grid-photo-card img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.4s ease;
                }
                .grid-photo-card:hover img {
                    transform: scale(1.06);
                }
                .photo-card-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, transparent 40%, rgba(14, 14, 28, 0.85) 100%);
                    display: flex;
                    align-items: flex-end;
                    padding: 12px;
                }
                .photo-card-overlay span {
                    font-size: 0.78rem;
                    font-weight: 600;
                    color: #ffffff;
                    font-family: 'Manrope', sans-serif;
                }

                @media (max-width: 1024px) {
                    .about-us-container {
                        grid-template-columns: 1fr;
                        gap: 36px;
                    }
                    .about-us-stats-grid {
                        grid-template-columns: repeat(3, 1fr);
                        gap: 20px;
                    }
                }
                @media (max-width: 640px) {
                    .about-us-stats-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .about-us-right-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
};
