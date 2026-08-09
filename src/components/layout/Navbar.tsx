import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import logoSvg from '../../assets/logo.svg';

const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'solutions', label: 'AI Solutions' },
    { id: 'services', label: 'Services' },
    { id: 'about-us', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' },
];

interface NavbarProps {
    activeSection: string;
    onSectionChange: (id: string) => void;
    onBookCall?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onSectionChange, onBookCall }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        const checkScroll = () => setScrolled(window.scrollY > 10);
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
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 900,
                background: scrolled
                    ? 'rgba(6, 6, 18, 0.97)'
                    : 'rgba(6, 6, 18, 0.88)',
                backdropFilter: 'blur(20px)',
                borderBottom: scrolled
                    ? '1px solid rgba(255,255,255,0.07)'
                    : '1px solid rgba(255,255,255,0.04)',
                boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none',
                transition: 'all 0.3s ease',
            }}
        >
            <div style={{
                maxWidth: '1440px',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: isMobile ? '0 16px' : '0 40px',
                height: '68px',
            }}>

                {/* ── Logo ── */}
                <button
                    id="nav-logo-btn"
                    onClick={() => onSectionChange('hero')}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '4px 0',
                        flexShrink: 0,
                    }}
                >
                    <img
                        src={logoSvg}
                        alt="Sapraforce logo"
                        style={{
                            width: '42px',
                            height: '42px',
                            objectFit: 'contain',
                            filter: 'drop-shadow(0 0 10px rgba(120,100,255,0.7))',
                        }}
                    />
                    <span style={{
                        fontSize: '1.35rem',
                        fontWeight: 800,
                        background: 'linear-gradient(90deg, #a78bfa 0%, #60a5fa 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        letterSpacing: '-0.01em',
                        lineHeight: 1,
                    }}>
                        Sapraforce
                    </span>
                </button>

                {/* ── Desktop Nav Links (Thinkitive-style: text only, centred) ── */}
                {!isMobile && (
                    <nav style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '2px',
                    }}>
                        {navItems.map(({ id, label }) => {
                            const isActive = activeSection === id;
                            return (
                                <button
                                    key={id}
                                    id={`nav-${id}`}
                                    onClick={() => onSectionChange(id)}
                                    style={{
                                        padding: '8px 16px',
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        fontSize: '0.9rem',
                                        fontWeight: isActive ? 700 : 500,
                                        color: isActive
                                            ? '#ffffff'
                                            : 'rgba(255,255,255,0.72)',
                                        borderBottom: isActive
                                            ? '2px solid #a78bfa'
                                            : '2px solid transparent',
                                        transition: 'all 0.2s ease',
                                        letterSpacing: '0.01em',
                                        whiteSpace: 'nowrap',
                                        lineHeight: '68px',
                                        height: '68px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '4px',
                                    }}
                                    onMouseEnter={e => {
                                        if (!isActive) (e.currentTarget as HTMLElement).style.color = '#ffffff';
                                    }}
                                    onMouseLeave={e => {
                                        if (!isActive) (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.72)';
                                    }}
                                >
                                    {label}
                                    {/* Chevron on dropdown-style items */}
                                    {(id === 'solutions' || id === 'services') && (
                                        <FiChevronDown size={14} style={{ opacity: 0.6 }} />
                                    )}
                                </button>
                            );
                        })}
                    </nav>
                )}

                {/* ── Right CTA Button ── */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
                    {isMobile ? (
                        /* Hamburger */
                        <button
                            id="nav-mobile-menu"
                            onClick={() => setMenuOpen(p => !p)}
                            style={{
                                background: 'none', border: 'none', cursor: 'pointer',
                                color: '#fff', padding: '8px',
                                display: 'flex', flexDirection: 'column', gap: '5px',
                            }}
                        >
                            {[0,1,2].map(i => (
                                <span key={i} style={{
                                    display: 'block', width: '22px', height: '2px',
                                    background: '#fff', borderRadius: '2px',
                                    transition: 'all 0.25s',
                                    transform: menuOpen && i === 0 ? 'rotate(45deg) translate(5px, 5px)' :
                                               menuOpen && i === 2 ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
                                    opacity: menuOpen && i === 1 ? 0 : 1,
                                }} />
                            ))}
                        </button>
                    ) : (
                        <button
                            id="nav-book-call-btn"
                            onClick={onBookCall}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '10px 22px',
                                borderRadius: '8px',
                                background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
                                color: '#ffffff',
                                fontWeight: 700,
                                fontSize: '0.88rem',
                                border: 'none',
                                cursor: 'pointer',
                                boxShadow: '0 4px 18px rgba(124,58,237,0.45)',
                                transition: 'all 0.25s ease',
                                whiteSpace: 'nowrap',
                            }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
                                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(124,58,237,0.6)';
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 18px rgba(124,58,237,0.45)';
                            }}
                        >
                            Book a 30 Min Call
                        </button>
                    )}
                </div>
            </div>

            {/* ── Mobile Dropdown Menu ── */}
            {isMobile && menuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    style={{
                        background: 'rgba(8, 8, 20, 0.98)',
                        borderTop: '1px solid rgba(255,255,255,0.08)',
                        padding: '16px 20px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px',
                    }}
                >
                    {navItems.map(({ id, label }) => (
                        <button
                            key={id}
                            onClick={() => { onSectionChange(id); setMenuOpen(false); }}
                            style={{
                                padding: '12px 16px',
                                background: activeSection === id ? 'rgba(124,58,237,0.12)' : 'none',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontSize: '0.95rem',
                                fontWeight: activeSection === id ? 700 : 500,
                                color: activeSection === id ? '#a78bfa' : 'rgba(255,255,255,0.8)',
                                textAlign: 'left',
                            }}
                        >
                            {label}
                        </button>
                    ))}
                    <button
                        onClick={() => { onBookCall?.(); setMenuOpen(false); }}
                        style={{
                            marginTop: '8px',
                            padding: '13px 16px',
                            borderRadius: '8px',
                            background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
                            color: '#fff',
                            fontWeight: 700,
                            fontSize: '0.95rem',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        Book a 30 Min Call
                    </button>
                </motion.div>
            )}
        </motion.header>
    );
};
