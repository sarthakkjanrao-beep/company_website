import React from 'react';
import { companyData } from '../../data/company';

interface FooterProps {
    onSectionChange?: (id: string) => void;
    onBookCall?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSectionChange, onBookCall }) => {
    return (
        <footer
            style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'rgba(5, 5, 10, 0.95)',
                padding: '60px 24px 30px',
                textAlign: 'center',
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize: '0.85rem',
            }}
        >
            <div
                style={{
                    maxWidth: '1300px',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '30px',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '20px',
                    }}
                >
                    <div style={{ textAlign: 'left' }}>
                        <h3 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#fff', margin: 0 }}>
                            SapraForce<span style={{ color: 'var(--gold)' }}>.AI</span>
                        </h3>
                        <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>
                            {companyData.tagline}
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', fontSize: '0.85rem' }}>
                        <button
                            onClick={() => onSectionChange?.('hero')}
                            style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', cursor: 'pointer' }}
                        >
                            Home
                        </button>
                        <button
                            onClick={() => onSectionChange?.('solutions')}
                            style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', cursor: 'pointer' }}
                        >
                            Solutions
                        </button>
                        <button
                            onClick={() => onSectionChange?.('services')}
                            style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', cursor: 'pointer' }}
                        >
                            Services
                        </button>
                        <button
                            onClick={() => onSectionChange?.('workflow')}
                            style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', cursor: 'pointer' }}
                        >
                            Workflow Simulator
                        </button>
                        <button
                            onClick={onBookCall}
                            style={{ background: 'none', border: 'none', color: 'var(--gold)', fontWeight: 700, cursor: 'pointer' }}
                        >
                            Book a 30 Min Call
                        </button>
                    </div>
                </div>

                <div
                    style={{
                        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                        paddingTop: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '16px',
                        fontSize: '0.78rem',
                    }}
                >
                    <p>© {new Date().getFullYear()} {companyData.name}. All Rights Reserved.</p>
                    <p style={{ color: 'rgba(255,255,255,0.4)' }}>
                        Autonomous AI Swarms • Visual Business Process Automation • Enterprise RAG
                    </p>
                </div>
            </div>
        </footer>
    );
};
