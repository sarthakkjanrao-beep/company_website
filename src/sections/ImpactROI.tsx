import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiShield, FiClock, FiLock, FiCheckCircle } from 'react-icons/fi';

interface ImpactROIProps {
    onBookCall?: () => void;
}

export const ImpactROI: React.FC<ImpactROIProps> = ({ onBookCall }) => {
    return (
        <section
            id="roi"
            style={{
                padding: '100px 24px',
                position: 'relative',
                background: 'rgba(8, 8, 16, 0.6)',
            }}
        >
            <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <span style={{ color: 'var(--gold)', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.2em' }}>
                        PROVEN BUSINESS RESULTS
                    </span>
                    <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', fontWeight: 800, color: '#ffffff', margin: '10px 0 16px' }}>
                        Quantifiable Impact & <span style={{ color: 'var(--gold)' }}>Enterprise ROI</span>
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', maxWidth: '650px', margin: '0 auto', lineHeight: 1.6 }}>
                        Our AI solutions are designed with hard enterprise metrics in mind—driving bottom-line efficiency, faster turnarounds, and robust data protection.
                    </p>
                </div>

                {/* Grid of Key ROI Pillars */}
                <div className="roi-grid">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="roi-card"
                    >
                        <div className="roi-icon" style={{ background: 'rgba(212, 166, 79, 0.15)', color: 'var(--gold)' }}>
                            <FiTrendingUp size={28} />
                        </div>
                        <div className="roi-number">70%</div>
                        <h3 className="roi-title">Operational Cost Savings</h3>
                        <p className="roi-desc">
                            Automating repetitive manual tasks frees up workforce capacity, allowing teams to focus on strategic revenue growth rather than data entry.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="roi-card"
                    >
                        <div className="roi-icon" style={{ background: 'rgba(170, 59, 255, 0.15)', color: '#aa3bff' }}>
                            <FiClock size={28} />
                        </div>
                        <div className="roi-number">10x</div>
                        <h3 className="roi-title">Execution Acceleration</h3>
                        <p className="roi-desc">
                            Processes that previously took hours or days (invoicing, lead qualification, ticket routing) execute autonomously in milliseconds.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="roi-card"
                    >
                        <div className="roi-icon" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6' }}>
                            <FiShield size={28} />
                        </div>
                        <div className="roi-number">99.8%</div>
                        <h3 className="roi-title">Zero Error Rate</h3>
                        <p className="roi-desc">
                            Deterministic AI guardrails eliminate costly human oversight errors, missed data fields, and duplicate vendor payments.
                        </p>
                    </motion.div>
                </div>

                {/* Security & Trust Guarantee Bar */}
                <div className="security-guarantee-box">
                    <div className="sec-left">
                        <div className="sec-icon">
                            <FiLock size={32} color="var(--gold)" />
                        </div>
                        <div>
                            <h4 style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 800, margin: 0 }}>
                                Enterprise Security & Data Governance Guaranteed
                            </h4>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem', margin: '4px 0 0 0' }}>
                                Your proprietary business data is never used to train public LLM models. All pipelines feature end-to-end AES-256 encryption and SOC2 compliance readiness.
                            </p>
                        </div>
                    </div>
                    <button onClick={onBookCall} className="sec-btn">
                        Book Security Audit Call <FiCheckCircle />
                    </button>
                </div>
            </div>

            <style>{`
                .roi-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                    margin-bottom: 50px;
                }
                .roi-card {
                    background: rgba(16, 16, 30, 0.8);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 20px;
                    padding: 32px 24px;
                    text-align: left;
                    transition: transform 0.3s ease, border-color 0.3s ease;
                }
                .roi-card:hover {
                    transform: translateY(-6px);
                    border-color: rgba(212, 166, 79, 0.3);
                }
                .roi-icon {
                    width: 56px;
                    height: 56px;
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 20px;
                }
                .roi-number {
                    font-size: 2.8rem;
                    font-weight: 900;
                    color: #ffffff;
                    line-height: 1;
                    margin-bottom: 8px;
                }
                .roi-title {
                    font-size: 1.15rem;
                    font-weight: 800;
                    color: var(--gold);
                    margin-bottom: 10px;
                }
                .roi-desc {
                    font-size: 0.88rem;
                    color: rgba(255, 255, 255, 0.65);
                    line-height: 1.6;
                }

                .security-guarantee-box {
                    background: linear-gradient(135deg, rgba(212, 166, 79, 0.08) 0%, rgba(14, 14, 26, 0.9) 100%);
                    border: 1px solid rgba(212, 166, 79, 0.3);
                    border-radius: 20px;
                    padding: 28px 32px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 24px;
                    flex-wrap: wrap;
                }
                .sec-left {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    max-width: 800px;
                    text-align: left;
                }
                .sec-btn {
                    padding: 12px 24px;
                    border-radius: 10px;
                    background: var(--gold);
                    color: #0a0a14;
                    font-weight: 700;
                    font-size: 0.88rem;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    white-space: nowrap;
                }

                @media (max-width: 900px) {
                    .roi-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
};
