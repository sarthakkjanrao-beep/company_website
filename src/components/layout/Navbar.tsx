import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiHome, FiCpu, FiLayers, FiGitBranch, FiTrendingUp, FiMail, FiPhoneCall } from 'react-icons/fi';

const navItems = [
    { id: 'hero', label: 'Home', Icon: FiHome },
    { id: 'solutions', label: 'Solutions', Icon: FiCpu },
    { id: 'services', label: 'Services', Icon: FiLayers },
    { id: 'workflow', label: 'Workflow', Icon: FiGitBranch },
    { id: 'roi', label: 'ROI & Impact', Icon: FiTrendingUp },
    { id: 'contact', label: 'Contact', Icon: FiMail },
];

interface NavbarProps {
    activeSection: string;
    onSectionChange: (id: string) => void;
    onBookCall?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onSectionChange, onBookCall }) => {
    const [hovered, setHovered] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        const checkScroll = () => setScrolled(window.scrollY > 20);

        checkMobile();
        checkScroll();

        window.addEventListener('resize', checkMobile);
        window.addEventListener('scroll', checkScroll);

        return () => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('scroll', checkScroll);
        };
    }, []);

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 900,
                padding: isMobile ? '10px 12px' : '16px 32px',
                transition: 'all 0.3s ease',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    maxWidth: '1400px',
                    margin: '0 auto',
                    padding: isMobile ? '8px 12px' : '10px 16px 10px 24px',
                    borderRadius: isMobile ? '16px' : '20px',
                    backgroundColor: scrolled ? 'rgba(10, 10, 20, 0.92)' : 'rgba(10, 10, 20, 0.75)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: scrolled ? '0 12px 30px rgba(0, 0, 0, 0.6)' : 'none',
                }}
            >
                {/* Brand Logo & Name */}
                <button
                    onClick={() => onSectionChange('hero')}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '4px 0',
                    }}
                >
                    <div
                        style={{
                            width: '38px',
                            height: '38px',
                            borderRadius: '10px',
                            background: 'linear-gradient(135deg, var(--gold) 0%, #aa3bff 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#0a0a14',
                            fontWeight: 900,
                            fontSize: '1.1rem',
                            boxShadow: '0 0 15px rgba(212, 166, 79, 0.4)',
                        }}
                    >
                        ⚡
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <span
                            style={{
                                fontSize: '1.25rem',
                                fontWeight: 800,
                                color: '#ffffff',
                                letterSpacing: '-0.02em',
                                display: 'block',
                                lineHeight: 1.1,
                            }}
                        >
                            SapraForce<span style={{ color: 'var(--gold)' }}>.AI</span>
                        </span>
                        {!isMobile && (
                            <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                Real-World AI Automation
                            </span>
                        )}
                    </div>
                </button>

                {/* Nav Items Links */}
                <nav
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: isMobile ? '2px' : '6px',
                        flexWrap: 'nowrap',
                    }}
                >
                    {navItems.map(({ id, label, Icon }) => {
                        const isActive = activeSection === id;
                        const isHovered = hovered === id;

                        return (
                            <button
                                key={id}
                                onClick={() => onSectionChange(id)}
                                onMouseEnter={() => setHovered(id)}
                                onMouseLeave={() => setHovered(null)}
                                title={label}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    padding: isMobile ? '8px clamp(6px, 2vw, 10px)' : '8px 14px',
                                    borderRadius: '10px',
                                    background: isActive
                                        ? 'rgba(212, 166, 79, 0.12)'
                                        : isHovered
                                            ? 'rgba(255, 255, 255, 0.05)'
                                            : 'transparent',
                                    color: isActive
                                        ? 'var(--gold)'
                                        : isHovered
                                            ? '#ffffff'
                                            : 'rgba(255,255,255,0.7)',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    border: isActive
                                        ? '1px solid rgba(212, 166, 79, 0.3)'
                                        : '1px solid transparent',
                                    fontSize: '0.85rem',
                                    fontWeight: isActive ? 700 : 500,
                                }}
                            >
                                <Icon size={16} />
                                {!isMobile && <span>{label}</span>}
                            </button>
                        );
                    })}
                </nav>

                {/* Thinkitive-Style Right Header CTA: "Book a 30 Min Call" */}
                {!isMobile && (
                    <button
                        onClick={onBookCall}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '10px 20px',
                            borderRadius: '10px',
                            background: 'linear-gradient(135deg, var(--gold) 0%, #b88a38 100%)',
                            color: '#0a0a14',
                            fontWeight: 700,
                            fontSize: '0.88rem',
                            border: 'none',
                            cursor: 'pointer',
                            boxShadow: '0 4px 15px rgba(212, 166, 79, 0.3)',
                            transition: 'all 0.25s ease',
                        }}
                    >
                        <FiPhoneCall size={15} /> Book a 30 Min Call
                    </button>
                )}
            </div>
        </motion.header>
    );
};
