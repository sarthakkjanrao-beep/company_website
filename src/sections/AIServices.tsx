import React from 'react';
import { motion } from 'framer-motion';

interface AIServicesProps {
    onBookCall?: () => void;
}

const aiCards = [
    {
        id: 'ai-consulting',
        iconImg: '/icon-strategy.png',
        title: 'AI Consulting &\nStrategy',
        description: 'Talk to an expert to see how AI can be leveraged in your business.',
    },
    {
        id: 'data-engineering',
        iconImg: '/icon-data.png',
        title: 'Data Engineering &\nBusiness Intelligence',
        description: 'Define the flow of data from collection to storage, while making sense of it with data engineering and BI services.',
    },
    {
        id: 'generative-ai',
        iconImg: '/icon-genai.png',
        title: 'Generative AI\nSolutions',
        description: 'Empower your software systems with multi-tasking and out-of-the-box thinking with generative AI to create new content, text, etc.',
    },
    {
        id: 'ai-agents',
        iconImg: '/icon-agent.png',
        title: 'AI Agent\nDevelopment',
        description: 'You set the goal, but let your AI agent do the task for you. Develop an AI Agent and get your own personal assistant.',
    },
    {
        id: 'ai-vibe-coding',
        iconImg: '/icon-vibe.png',
        title: 'AI-powered Development\n(AI Vibe Coding)',
        description: 'Build your own AI software with all the necessary hardware and software to support your AI application.',
    },
    {
        id: 'ai-transformation',
        iconImg: '/icon-gear.png',
        title: 'AI Transformation\nServices',
        description: 'Leverage AI to automate your software development and enhance the various stages of your SDLC to simplify complex tasks with greater efficiency.',
    },
    {
        id: 'industry-ai',
        iconImg: '/icon-industry.png',
        title: 'Industry Specific AI\nSolutions',
        description: 'Develop an AI application that is specific to your industry. Leverage the power of AI to gather insights, perform particular tasks, etc.',
    },
    {
        id: 'ai-app-dev',
        iconImg: '/icon-phone.png',
        title: 'AI Application Development &\nAI Infrastructure',
        description: 'Transform your business with the use of advanced technologies like ML, Big Data, Agentic AI, etc., with our AI transformation services.',
    },
];

export const AIServices: React.FC<AIServicesProps> = () => {
    return (
        <section
            id="ai-services"
            style={{
                padding: '70px 24px 90px',
                position: 'relative',
                background: 'linear-gradient(180deg, #060612 0%, #08081a 50%, #060612 100%)',
                color: '#ffffff',
                overflow: 'hidden',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            }}
        >
            {/* Background Ambient Glow Orbs */}
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
                    }}>
                        <span className="thinkitive-title-gradient">Artificial Intelligence (AI)</span><br />
                        <span className="thinkitive-title-thin">Solutions & Services</span>
                    </h2>

                    <div style={{
                        width: '100%',
                        height: '1px',
                        background: 'rgba(255, 255, 255, 0.18)',
                        margin: '12px 0 16px 0',
                    }} />

                    <p style={{
                        color: 'rgba(255, 255, 255, 0.68)',
                        fontSize: '0.9rem',
                        lineHeight: 1.55,
                        margin: 0,
                        maxWidth: '800px',
                    }}>
                        Let your computer systems think like you do. Stay ahead of the curve with curiosity and creativity to drive innovation and transform your business.
                    </p>
                </motion.div>

                {/* ── 4x2 Cards Grid ── */}
                <div className="ai-services-4x2-grid">
                    {aiCards.map((card, idx) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            className="ai-service-card"
                        >
                            {/* Icon Badge */}
                            <div className="ai-card-icon-badge">
                                <img
                                    src={card.iconImg}
                                    alt=""
                                    className="ai-card-icon-img"
                                />
                            </div>

                            {/* Centered Title */}
                            <h3 className="ai-card-title">{card.title}</h3>

                            {/* Centered Description */}
                            <p className="ai-card-desc">{card.description}</p>
                        </motion.div>
                    ))}
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
                .ai-services-4x2-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 16px;
                }
                .ai-service-card {
                    background: rgba(14, 14, 28, 0.75);
                    backdrop-filter: blur(16px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 14px;
                    padding: 22px 14px 18px;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-start;
                    transition: all 0.3s ease;
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
                    min-height: 185px;
                }
                .ai-service-card:hover {
                    transform: translateY(-4px);
                    border-color: rgba(59, 130, 246, 0.4);
                    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.4), 0 0 18px rgba(59, 130, 246, 0.15);
                    background: rgba(18, 18, 36, 0.9);
                }
                .ai-card-icon-badge {
                    width: 46px;
                    height: 46px;
                    border-radius: 12px;
                    background: rgba(59, 130, 246, 0.12);
                    border: 1px solid rgba(59, 130, 246, 0.28);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 14px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                    transition: all 0.3s ease;
                }
                .ai-service-card:hover .ai-card-icon-badge {
                    background: rgba(59, 130, 246, 0.22);
                    border-color: rgba(59, 130, 246, 0.55);
                    box-shadow: 0 0 16px rgba(59, 130, 246, 0.35);
                }
                .ai-card-icon-img {
                    width: 32px;
                    height: 32px;
                    object-fit: contain;
                    filter: brightness(1.25) contrast(1.1) drop-shadow(0 2px 6px rgba(59, 130, 246, 0.45));
                    transition: transform 0.3s ease;
                }
                .ai-service-card:hover .ai-card-icon-img {
                    transform: scale(1.08);
                }
                .ai-card-title {
                    font-size: 0.88rem;
                    font-weight: 700;
                    color: #ffffff;
                    margin: 0 0 8px 0;
                    line-height: 1.3;
                    white-space: pre-line;
                }
                .ai-card-desc {
                    font-size: 0.78rem;
                    color: rgba(255, 255, 255, 0.65);
                    line-height: 1.5;
                    margin: 0;
                    max-width: 220px;
                }

                @media (max-width: 1100px) {
                    .ai-services-4x2-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                @media (max-width: 640px) {
                    .ai-services-4x2-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
};
