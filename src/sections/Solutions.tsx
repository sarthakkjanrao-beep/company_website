import React from 'react';
import { motion } from 'framer-motion';
import { FiMonitor, FiCpu, FiGrid, FiGlobe } from 'react-icons/fi';

const serviceCards = [
    {
        id: 'automation',
        icon: <FiMonitor size={26} color="#3b82f6" />,
        accentColor: '#3b82f6',
        title: 'Custom Business\nAutomation Services',
        description: 'Innovative business automation software to transform your operations, driving efficiency and productivity.',
    },
    {
        id: 'dashboards',
        icon: <FiGrid size={26} color="#3b82f6" />,
        accentColor: '#3b82f6',
        title: 'Systems Interoperability\n& Integration',
        description: 'Be a part of the connected business ecosystem and offer complete digital automation services.',
    },
    {
        id: 'ai-rag',
        icon: <FiCpu size={26} color="#3b82f6" />,
        accentColor: '#3b82f6',
        title: 'Enterprise AI Services\n& Solutions',
        description: 'Leverage the power of Artificial Intelligence to enhance your software systems in creative and innovative ways.',
    },
    {
        id: 'web-apps',
        icon: <FiGlobe size={26} color="#3b82f6" />,
        accentColor: '#3b82f6',
        title: 'Custom Software &\nWeb Engineering',
        description: 'Engineering top-tier web applications and digital platforms tailored to power your custom software.',
    },
];

interface SolutionsProps {
    onBookCall?: () => void;
}

export const Solutions: React.FC<SolutionsProps> = () => {
    return (
        <section
            id="solutions"
            style={{
                padding: '100px 24px',
                position: 'relative',
                background: 'linear-gradient(180deg, #060612 0%, #0a0a20 50%, #060612 100%)',
                color: '#ffffff',
                overflow: 'hidden',
            }}
        >
            {/* Background Ambient Glow Orbs */}
            <div style={{
                position: 'absolute', top: '20%', left: '-5%',
                width: '500px', height: '500px',
                background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
                borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', bottom: '10%', right: '-5%',
                width: '500px', height: '500px',
                background: 'radial-gradient(circle, rgba(170,59,255,0.1) 0%, transparent 70%)',
                borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none',
            }} />

            <div
                style={{
                    maxWidth: '1350px',
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 2,
                }}
            >
                {/* Thinkitive 2-Column Layout */}
                <div className="thinkitive-solutions-container">

                    {/* ── Left Column Narrative ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="thinkitive-solutions-left"
                    >
                        <h2 className="thinkitive-solutions-heading">
                            <span className="thinkitive-title-gradient">Custom Intelligent Business</span><br />
                            <span className="thinkitive-title-thin">Software Development Services</span>
                        </h2>

                        <div className="thinkitive-title-line" />

                        <p className="thinkitive-solutions-paragraph">
                            Develop business automation software that caters to your specific needs, driven by innovation and creativity. Complete end-to-end software offerings from consulting, engineering, dashboards, and analytics.
                        </p>
                    </motion.div>

                    {/* ── Right Column 2x2 Vector Icon Cards ── */}
                    <div className="thinkitive-2x2-grid">
                        {serviceCards.map((card, idx) => (
                            <motion.div
                                key={card.id}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="thinkitive-clean-card"
                            >
                                {/* Vector Icon Badge */}
                                <div className="thinkitive-vector-icon-badge">
                                    {card.icon}
                                </div>

                                {/* Centered Card Title */}
                                <h3 className="thinkitive-card-title">{card.title}</h3>

                                {/* Centered Description */}
                                <p className="thinkitive-card-desc">{card.description}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>

            <style>{`
                .thinkitive-title-gradient {
                    font-weight: 800;
                    background: linear-gradient(180deg, #ffffff 0%, #3b82f6 40%, #1d4ed8 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .thinkitive-title-thin {
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.95);
                    letter-spacing: -0.01em;
                }
                .thinkitive-solutions-container {
                    display: grid;
                    grid-template-columns: 1fr 1.3fr;
                    gap: 56px;
                    align-items: flex-start;
                }
                .thinkitive-solutions-left {
                    text-align: left;
                    max-width: 500px;
                    padding-top: 4px;
                }
                .thinkitive-solutions-heading {
                    font-size: clamp(1.65rem, 2.5vw, 2.15rem);
                    line-height: 1.25;
                    margin: 0 0 16px 0;
                    letter-spacing: -0.01em;
                }
                .thinkitive-title-line {
                    width: 100%;
                    height: 1px;
                    background: rgba(255, 255, 255, 0.2);
                    margin-bottom: 18px;
                }
                .thinkitive-solutions-paragraph {
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 0.95rem;
                    line-height: 1.65;
                    font-weight: 400;
                    margin: 0;
                }

                /* Right Column 2x2 Vector Icon Cards */
                .thinkitive-2x2-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                }
                .thinkitive-clean-card {
                    background: rgba(14, 14, 28, 0.75);
                    backdrop-filter: blur(16px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 18px;
                    padding: 32px 22px;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                }
                .thinkitive-clean-card:hover {
                    transform: translateY(-4px);
                    border-color: rgba(59, 130, 246, 0.4);
                    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45), 0 0 20px rgba(59, 130, 246, 0.15);
                    background: rgba(18, 18, 36, 0.9);
                }
                .thinkitive-vector-icon-badge {
                    width: 52px;
                    height: 52px;
                    border-radius: 14px;
                    background: rgba(59, 130, 246, 0.12);
                    border: 1px solid rgba(59, 130, 246, 0.3);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 16px;
                }
                .thinkitive-card-title {
                    font-size: 1.02rem;
                    font-weight: 700;
                    color: #ffffff;
                    margin: 0 0 10px 0;
                    line-height: 1.35;
                    white-space: pre-line;
                }
                .thinkitive-card-desc {
                    font-size: 0.84rem;
                    color: rgba(255, 255, 255, 0.62);
                    line-height: 1.58;
                    margin: 0;
                    max-width: 250px;
                }

                @media (max-width: 1024px) {
                    .thinkitive-solutions-container {
                        grid-template-columns: 1fr;
                        gap: 36px;
                    }
                    .thinkitive-solutions-left {
                        max-width: 100%;
                    }
                }
                @media (max-width: 640px) {
                    .thinkitive-2x2-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
};
