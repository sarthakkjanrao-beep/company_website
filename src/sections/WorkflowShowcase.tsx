import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTruck, FiTrendingUp, FiHeadphones, FiDollarSign, FiArrowRight, FiCheckCircle, FiPlay } from 'react-icons/fi';
import { companyData } from '../data/company';

interface WorkflowProps {
    onBookCall?: () => void;
}

export const WorkflowShowcase: React.FC<WorkflowProps> = ({ onBookCall }) => {
    const [selectedDeptIndex, setSelectedDeptIndex] = useState(0);
    const activeWorkflow = companyData.workflows[selectedDeptIndex];

    const getDeptIcon = (iconName: string) => {
        switch (iconName) {
            case 'Truck': return <FiTruck size={18} />;
            case 'TrendingUp': return <FiTrendingUp size={18} />;
            case 'Headphones': return <FiHeadphones size={18} />;
            case 'DollarSign': return <FiDollarSign size={18} />;
            default: return <FiTruck size={18} />;
        }
    };

    return (
        <section
            id="workflow"
            style={{
                padding: '100px 24px',
                position: 'relative',
            }}
        >
            <div
                style={{
                    maxWidth: '1300px',
                    margin: '0 auto',
                }}
            >
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <span
                        style={{
                            color: 'var(--gold)',
                            fontSize: '0.82rem',
                            fontWeight: 800,
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                        }}
                    >
                        INTERACTIVE WORKFLOW SIMULATOR
                    </span>
                    <h2
                        style={{
                            fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
                            fontWeight: 800,
                            color: '#ffffff',
                            margin: '10px 0 16px',
                        }}
                    >
                        See How AI Automates <span style={{ color: 'var(--gold)' }}>Real-World Business Operations</span>
                    </h2>
                    <p
                        style={{
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: '1rem',
                            maxWidth: '650px',
                            margin: '0 auto',
                            lineHeight: 1.6,
                        }}
                    >
                        Select a business department to witness the contrast between manual bottleneck processes and our automated autonomous AI pipelines.
                    </p>
                </div>

                {/* Department Selection Tabs */}
                <div className="dept-tabs-bar">
                    {companyData.workflows.map((wf, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedDeptIndex(idx)}
                            className={`dept-tab-btn ${idx === selectedDeptIndex ? 'active' : ''}`}
                        >
                            {getDeptIcon(wf.icon)}
                            <span>{wf.department}</span>
                        </button>
                    ))}
                </div>

                {/* Main Interactive Workflow Card */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedDeptIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="workflow-glass-box"
                    >
                        <div className="workflow-header-info">
                            <div>
                                <span className="workflow-tag">AUTOMATION SOLUTION</span>
                                <h3 className="workflow-title">{activeWorkflow.title}</h3>
                            </div>
                            <div className="workflow-savings-chip">
                                ⚡ {activeWorkflow.timeSavings}
                            </div>
                        </div>

                        {/* Before vs After Comparison */}
                        <div className="before-after-grid">
                            <div className="comp-card before">
                                <div className="comp-badge red">BEFORE AUTOMATION</div>
                                <p>{activeWorkflow.before}</p>
                            </div>

                            <div className="comp-card after">
                                <div className="comp-badge green">AFTER SAPRAFORCE AI</div>
                                <p>{activeWorkflow.after}</p>
                            </div>
                        </div>

                        {/* Visual Node Diagram (Make.com Style) */}
                        <div className="visual-pipeline-container">
                            <div className="pipeline-title">
                                <FiPlay color="var(--gold)" /> LIVE VISUAL AUTOMATION NODES
                            </div>

                            <div className="nodes-flow">
                                {activeWorkflow.nodes.map((node, nIdx) => (
                                    <React.Fragment key={nIdx}>
                                        <div className="node-chip">
                                            <div className="node-icon">{nIdx + 1}</div>
                                            <div className="node-label">{node}</div>
                                        </div>
                                        {nIdx < activeWorkflow.nodes.length - 1 && (
                                            <div className="node-connector">
                                                <FiArrowRight color="var(--gold)" />
                                            </div>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        <div className="workflow-footer-cta">
                            <span>Ready to automate this workflow in your business?</span>
                            <button onClick={onBookCall} className="wf-cta-btn">
                                Schedule Workflow Audit <FiCheckCircle />
                            </button>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <style>{`
                .dept-tabs-bar {
                    display: flex;
                    justify-content: center;
                    gap: 12px;
                    flex-wrap: wrap;
                    margin-bottom: 32px;
                }
                .dept-tab-btn {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 12px 22px;
                    border-radius: 14px;
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.08);
                    color: rgba(255,255,255,0.7);
                    font-size: 0.9rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.25s ease;
                }
                .dept-tab-btn:hover {
                    background: rgba(255,255,255,0.08);
                    color: #ffffff;
                }
                .dept-tab-btn.active {
                    background: rgba(212, 166, 79, 0.15);
                    border-color: rgba(212, 166, 79, 0.4);
                    color: var(--gold);
                    box-shadow: 0 4px 20px rgba(212, 166, 79, 0.15);
                }

                .workflow-glass-box {
                    background: rgba(14, 14, 26, 0.85);
                    backdrop-filter: blur(16px);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 24px;
                    padding: 36px;
                    text-align: left;
                    box-shadow: 0 20px 50px rgba(0,0,0,0.5);
                }
                .workflow-header-info {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                    margin-bottom: 28px;
                    flex-wrap: wrap;
                }
                .workflow-tag {
                    font-size: 0.72rem;
                    font-weight: 800;
                    color: var(--gold);
                    letter-spacing: 0.1em;
                }
                .workflow-title {
                    font-size: 1.6rem;
                    font-weight: 800;
                    color: #ffffff;
                    margin-top: 4px;
                }
                .workflow-savings-chip {
                    padding: 8px 18px;
                    border-radius: 30px;
                    background: rgba(212, 166, 79, 0.12);
                    border: 1px solid rgba(212, 166, 79, 0.3);
                    color: var(--gold);
                    font-weight: 700;
                    font-size: 0.88rem;
                }

                .before-after-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                    margin-bottom: 32px;
                }
                .comp-card {
                    padding: 20px;
                    border-radius: 16px;
                    border: 1px solid;
                }
                .comp-card.before {
                    background: rgba(239, 68, 68, 0.05);
                    border-color: rgba(239, 68, 68, 0.2);
                }
                .comp-card.after {
                    background: rgba(34, 197, 94, 0.05);
                    border-color: rgba(34, 197, 94, 0.2);
                }
                .comp-badge {
                    font-size: 0.72rem;
                    font-weight: 800;
                    letter-spacing: 0.05em;
                    margin-bottom: 10px;
                }
                .comp-badge.red { color: #f87171; }
                .comp-badge.green { color: #4ade80; }
                .comp-card p {
                    font-size: 0.9rem;
                    color: rgba(255,255,255,0.8);
                    line-height: 1.55;
                }

                .visual-pipeline-container {
                    background: rgba(5, 5, 12, 0.8);
                    border: 1px solid rgba(255,255,255,0.06);
                    border-radius: 18px;
                    padding: 24px;
                    margin-bottom: 28px;
                }
                .pipeline-title {
                    font-size: 0.82rem;
                    font-weight: 700;
                    color: rgba(255,255,255,0.6);
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 20px;
                }
                .nodes-flow {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    flex-wrap: wrap;
                }
                .node-chip {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 10px 16px;
                    border-radius: 12px;
                    background: rgba(255,255,255,0.04);
                    border: 1px solid rgba(255,255,255,0.1);
                }
                .node-icon {
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    background: var(--gold);
                    color: #0a0a14;
                    font-size: 0.75rem;
                    font-weight: 800;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .node-label {
                    font-size: 0.82rem;
                    font-weight: 600;
                    color: #ffffff;
                }
                .node-connector {
                    display: flex;
                    align-items: center;
                }

                .workflow-footer-cta {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-top: 20px;
                    border-top: 1px solid rgba(255,255,255,0.08);
                    font-size: 0.9rem;
                    color: rgba(255,255,255,0.7);
                    flex-wrap: wrap;
                    gap: 16px;
                }
                .wf-cta-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px 20px;
                    border-radius: 10px;
                    background: var(--gold);
                    color: #0a0a14;
                    font-weight: 700;
                    font-size: 0.85rem;
                    border: none;
                    cursor: pointer;
                }

                @media (max-width: 768px) {
                    .before-after-grid {
                        grid-template-columns: 1fr;
                    }
                    .nodes-flow {
                        flex-direction: column;
                        align-items: stretch;
                    }
                    .node-connector {
                        justify-content: center;
                        transform: rotate(90deg);
                    }
                }
            `}</style>
        </section>
    );
};
