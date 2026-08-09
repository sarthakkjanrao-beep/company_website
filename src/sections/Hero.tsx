import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { companyData } from '../data/company';

// ──────────────────────────────────────────────
// Slide data — Thinkitive split headline style
// ──────────────────────────────────────────────
const slides = [
    {
        id: 'ai-agents',
        shortTitle: 'AI Solutions & Services',
        eyebrow: 'AI Solutions & Services',
        headlineLeft: 'Empowering\nIntelligence',
        subRight: 'When Machines\nThink Like Humans',
        bgImage: '/hero-agents.png',
        overlay: 'linear-gradient(90deg, rgba(5,5,20,0.85) 0%, rgba(5,5,20,0.6) 50%, rgba(5,5,20,0.85) 100%)',
        accentGlow: 'rgba(59, 130, 246, 0.35)',
        accentColor: '#3b82f6',
    },
    {
        id: 'workflow',
        shortTitle: 'Technology Solutions & Services',
        eyebrow: 'Technology Solutions & Services',
        headlineLeft: 'Where Creative\nTech Solutions',
        subRight: 'Meet Real\nWorld Problems',
        bgImage: '/hero-workflow.png',
        overlay: 'linear-gradient(90deg, rgba(10,5,25,0.85) 0%, rgba(10,5,25,0.6) 50%, rgba(10,5,25,0.85) 100%)',
        accentGlow: 'rgba(170, 59, 255, 0.35)',
        accentColor: '#aa3bff',
    },
    {
        id: 'rag',
        shortTitle: 'Enterprise Knowledge RAG',
        eyebrow: 'Enterprise Knowledge RAG',
        headlineLeft: 'Unlocking Hidden\nCompany Data',
        subRight: 'With Private\nAI Knowledge Engines',
        bgImage: '/hero-rag.png',
        overlay: 'linear-gradient(90deg, rgba(2,12,18,0.85) 0%, rgba(2,12,18,0.6) 50%, rgba(2,12,18,0.85) 100%)',
        accentGlow: 'rgba(0, 220, 180, 0.3)',
        accentColor: '#00dcb4',
    },
    {
        id: 'integration',
        shortTitle: 'Enterprise Integration',
        eyebrow: 'Enterprise Integration & Pipelines',
        headlineLeft: 'Eliminating Data\nSilos Seamlessly',
        subRight: 'Across Your Entire\nEnterprise Stack',
        bgImage: '/hero-integration.png',
        overlay: 'linear-gradient(90deg, rgba(2,12,8,0.85) 0%, rgba(2,12,8,0.6) 50%, rgba(2,12,8,0.85) 100%)',
        accentGlow: 'rgba(16, 185, 129, 0.3)',
        accentColor: '#10b981',
    },
];



interface HeroProps {
    onBookCall?: () => void;
    onExplore?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookCall }) => {
    const [active, setActive] = useState(0);
    const [auto, setAuto] = useState(true);
    const [progressKey, setProgressKey] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 900);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const advance = useCallback(() => {
        setActive(prev => (prev + 1) % slides.length);
        setProgressKey(k => k + 1);
    }, []);

    useEffect(() => {
        if (!auto) return;
        const t = setInterval(() => {
            advance();
        }, 7000);
        return () => clearInterval(t);
    }, [auto, advance]);

    const selectSlide = (idx: number) => {
        setActive(idx);
        setProgressKey(k => k + 1);
        setAuto(false);
        setTimeout(() => setAuto(true), 10000);
    };

    return (
        <section id="hero" style={{ position: 'relative', background: '#060612', paddingTop: '80px', overflow: 'hidden' }}>

            {/* ── Thinkitive Accordion Hero Container ── */}
            <div style={{
                maxWidth: '1440px',
                margin: '0 auto',
                padding: isMobile ? '12px' : '20px 24px',
                height: isMobile ? 'auto' : 'calc(90vh - 80px)',
                minHeight: isMobile ? '560px' : '620px',
                maxHeight: '820px',
                display: 'flex',
                gap: isMobile ? '8px' : '12px',
                flexDirection: isMobile ? 'column' : 'row',
                position: 'relative',
            }}>
                {slides.map((s, idx) => {
                    const isActive = idx === active;

                    return (
                        <motion.div
                            key={s.id}
                            onClick={() => selectSlide(idx)}
                            layout
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            style={{
                                position: 'relative',
                                flex: isMobile
                                    ? (isActive ? '1 1 auto' : '0 0 52px')
                                    : (isActive ? '1 1 0%' : '0 0 60px'),
                                minWidth: isMobile ? '100%' : (isActive ? '480px' : '60px'),
                                height: isMobile ? (isActive ? '450px' : '52px') : '100%',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                cursor: isActive ? 'default' : 'pointer',
                                border: isActive
                                    ? '1px solid rgba(255, 255, 255, 0.15)'
                                    : '1px solid rgba(255, 255, 255, 0.08)',
                                boxShadow: isActive
                                    ? `0 20px 60px rgba(0,0,0,0.6), 0 0 40px ${s.accentGlow}`
                                    : 'none',
                                transition: 'border-color 0.4s, box-shadow 0.4s',
                            }}
                        >
                            {/* Photo Background */}
                            <img
                                src={s.bgImage}
                                alt={s.shortTitle}
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                    filter: isActive ? 'brightness(0.95)' : 'brightness(0.5) opacity(0.6)',
                                    transition: 'filter 0.5s ease',
                                }}
                            />

                            {/* Dark Overlay */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: isActive
                                    ? s.overlay
                                    : 'linear-gradient(180deg, rgba(6,6,18,0.75) 0%, rgba(6,6,18,0.95) 100%)',
                                transition: 'background 0.5s ease',
                            }} />

                            {/* ── COLLAPSED WRAPPED STATE (Rotated label + '+' button) ── */}
                            {!isActive && (
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    display: 'flex',
                                    flexDirection: isMobile ? 'row' : 'column',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: isMobile ? '0 20px' : '32px 0',
                                    zIndex: 2,
                                }}>
                                    <div style={{ width: '8px', height: '8px' }} />

                                    {/* Rotated Title Label */}
                                    <div style={{
                                        transform: isMobile ? 'none' : 'rotate(-90deg)',
                                        whiteSpace: 'nowrap',
                                        fontSize: '0.88rem',
                                        fontWeight: 700,
                                        color: 'rgba(255,255,255,0.85)',
                                        letterSpacing: '0.04em',
                                    }}>
                                        {s.shortTitle}
                                    </div>

                                    {/* Plus Button */}
                                    <div style={{
                                        width: '30px',
                                        height: '30px',
                                        borderRadius: '50%',
                                        background: 'rgba(255,255,255,0.1)',
                                        border: '1px solid rgba(255,255,255,0.25)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#ffffff',
                                    }}>
                                        <FiPlus size={15} />
                                    </div>
                                </div>
                            )}

                            {/* ── EXPANDED THINKITIVE-STYLE ACTIVE SLIDE ── */}
                            {isActive && (
                                <div style={{
                                    position: 'relative',
                                    zIndex: 3,
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    padding: isMobile ? '28px 24px' : '48px 56px',
                                    boxSizing: 'border-box',
                                }}>
                                    {/* Top Left Eyebrow Header */}
                                    <div style={{
                                        fontSize: isMobile ? '0.9rem' : '1.15rem',
                                        fontWeight: 700,
                                        color: '#ffffff',
                                        letterSpacing: '-0.01em',
                                    }}>
                                        {s.eyebrow}
                                    </div>

                                    {/* Center Content with Split Headlines and Horizontal Progress Line */}
                                    <div style={{ position: 'relative', width: '100%', margin: 'auto 0' }}>

                                        {/* Left Side Main Statement */}
                                        <div style={{ marginBottom: '16px' }}>
                                            <h1 style={{
                                                fontSize: 'clamp(2rem, 4.2vw, 3.8rem)',
                                                fontWeight: 800,
                                                lineHeight: 1.1,
                                                color: '#ffffff',
                                                margin: 0,
                                                letterSpacing: '-0.02em',
                                                whiteSpace: 'pre-line',
                                            }}>
                                                {s.headlineLeft}
                                            </h1>
                                        </div>

                                        {/* ── Horizontal Animated Progress Loader Line (Lifecycle indicator) ── */}
                                        <div style={{
                                            position: 'relative',
                                            width: '100%',
                                            height: '2px',
                                            background: 'rgba(255, 255, 255, 0.25)',
                                            margin: '24px 0',
                                            borderRadius: '2px',
                                            overflow: 'hidden',
                                        }}>
                                            {/* Animated fill line running from 0% to 100% over 7 seconds */}
                                            <motion.div
                                                key={progressKey}
                                                initial={{ width: '0%' }}
                                                animate={{ width: '100%' }}
                                                transition={{ duration: 7, ease: 'linear' }}
                                                style={{
                                                    height: '100%',
                                                    background: '#ffffff',
                                                    boxShadow: '0 0 12px rgba(255,255,255,0.9)',
                                                }}
                                            />
                                        </div>

                                        {/* Right Side Sub Statement & Contact Us Button */}
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'flex-end',
                                            textAlign: 'right',
                                            marginTop: '16px',
                                        }}>
                                            <h2 style={{
                                                fontSize: 'clamp(1.5rem, 3.2vw, 2.8rem)',
                                                fontWeight: 800,
                                                lineHeight: 1.15,
                                                color: '#ffffff',
                                                margin: '0 0 24px 0',
                                                letterSpacing: '-0.02em',
                                                whiteSpace: 'pre-line',
                                            }}>
                                                {s.subRight}
                                            </h2>

                                            {/* Contact Us → Pill Button */}
                                            <button
                                                onClick={onBookCall}
                                                style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: '10px',
                                                    padding: '12px 28px',
                                                    borderRadius: '8px',
                                                    background: 'transparent',
                                                    color: '#ffffff',
                                                    fontWeight: 700,
                                                    fontSize: '1rem',
                                                    border: '1.5px solid #ffffff',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.25s ease',
                                                }}
                                                onMouseEnter={e => {
                                                    (e.currentTarget as HTMLElement).style.background = '#ffffff';
                                                    (e.currentTarget as HTMLElement).style.color = '#000000';
                                                }}
                                                onMouseLeave={e => {
                                                    (e.currentTarget as HTMLElement).style.background = 'transparent';
                                                    (e.currentTarget as HTMLElement).style.color = '#ffffff';
                                                }}
                                            >
                                                Contact Us <FiArrowRight size={16} />
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            )}
                        </motion.div>
                    );
                })}
            </div>

            {/* ── Partner Marquee ── */}
            <div style={{
                background: 'rgba(6, 6, 18, 0.98)',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                padding: '20px 0',
                overflow: 'hidden',
                marginTop: '16px',
            }}>
                <div style={{
                    textAlign: 'center',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.4)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    marginBottom: '14px',
                }}>
                    {companyData.trustHeadline}
                </div>

                <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <motion.div
                        animate={{ x: ['0%', '-50%'] }}
                        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                        style={{ display: 'flex', gap: '32px', alignItems: 'center', width: 'max-content' }}
                    >
                        {[
                            // 1. Mazen
                            <div key="mazen-1" style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(14, 14, 28, 0.75)', border: '1px solid rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(12px)', padding: '8px 20px', borderRadius: '8px', boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2.2"><polygon points="12 2 2 7 2 17 12 22 22 17 22 7 12 2"/><path d="M7 17v-6h10v6"/><path d="M5 11h14"/></svg>
                                <span style={{ fontSize: '0.85rem', fontWeight: 900, color: '#ffffff', letterSpacing: '0.12em', fontFamily: 'sans-serif' }}>MAZEN</span>
                            </div>,
                            // 2. Kachyng
                            <div key="kachyng-1" style={{ background: 'rgba(14, 14, 28, 0.75)', border: '1px solid rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(12px)', padding: '8px 22px', borderRadius: '8px', display: 'flex', alignItems: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
                                <span style={{ fontSize: '1.15rem', fontWeight: 700, color: '#86efac', fontFamily: 'sans-serif', letterSpacing: '-0.02em' }}>kachyng</span>
                            </div>,
                            // 3. RE
                            <div key="re-1" style={{ background: 'rgba(14, 14, 28, 0.75)', border: '1px solid rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(12px)', padding: '8px 20px', borderRadius: '8px', display: 'flex', alignItems: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
                                <div style={{ background: '#f97316', padding: '4px 10px', borderRadius: '3px', color: '#ffffff', fontWeight: 900, fontSize: '0.95rem', letterSpacing: '0.05em' }}>RE</div>
                            </div>,
                            // 4. Nod
                            <div key="nod-1" style={{ background: 'rgba(14, 14, 28, 0.75)', border: '1px solid rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(12px)', padding: '8px 22px', borderRadius: '8px', display: 'flex', alignItems: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
                                <div style={{ background: '#84cc16', padding: '4px 14px', borderRadius: '16px 16px 16px 2px', color: '#0f172a', fontWeight: 900, fontSize: '1rem', fontFamily: 'sans-serif' }}>nod</div>
                            </div>,
                            // 5. Viaanix
                            <div key="viaanix-1" style={{ background: 'rgba(14, 14, 28, 0.75)', border: '1px solid rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(12px)', padding: '8px 22px', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
                                <span style={{ fontSize: '1rem', fontWeight: 900, color: '#38bdf8', fontStyle: 'italic', letterSpacing: '-0.03em', lineHeight: 1 }}>V3</span>
                                <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#38bdf8', letterSpacing: '0.1em' }}>VIAANIX</span>
                            </div>,
                            // 6. DXN Edge
                            <div key="dxn-1" style={{ background: 'rgba(14, 14, 28, 0.75)', border: '1px solid rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(12px)', padding: '8px 20px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '6px', boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="#38bdf8"><path d="M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.91 12.21 21.97 12 21.97C11.79 21.97 11.59 21.91 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.09 11.79 2.03 12 2.03C12.21 2.03 12.41 2.09 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5Z"/></svg>
                                <span style={{ fontSize: '0.95rem', fontWeight: 900, color: '#ffffff' }}>DXN <span style={{ fontSize: '0.5rem', color: '#38bdf8', display: 'block', fontWeight: 800, letterSpacing: '0.06em' }}>GIVING YOU THE EDGE</span></span>
                            </div>,
                            // 7. AirTrack MDM
                            <div key="airtrack-1" style={{ background: 'rgba(14, 14, 28, 0.75)', border: '1px solid rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(12px)', padding: '8px 22px', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
                                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#60a5fa' }}>♒ AirTrack<sup style={{ fontSize: '0.5rem' }}>MDM</sup></span>
                            </div>,
                            // 8. AMD Telecom
                            <div key="amd-1" style={{ background: 'rgba(14, 14, 28, 0.75)', border: '1px solid rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(12px)', padding: '8px 22px', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
                                <span style={{ fontSize: '1rem', fontWeight: 900, color: '#38bdf8', letterSpacing: '0.05em', lineHeight: 1 }}>A<span style={{ color: '#ef4444' }}>•</span>MD</span>
                                <span style={{ fontSize: '0.5rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.2em' }}>TELECOM</span>
                            </div>,

                            // DUPLICATE FOR INFINITE LOOP:
                            <div key="mazen-2" style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(14, 14, 28, 0.75)', border: '1px solid rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(12px)', padding: '8px 20px', borderRadius: '8px', boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2.2"><polygon points="12 2 2 7 2 17 12 22 22 17 22 7 12 2"/><path d="M7 17v-6h10v6"/><path d="M5 11h14"/></svg>
                                <span style={{ fontSize: '0.85rem', fontWeight: 900, color: '#ffffff', letterSpacing: '0.12em', fontFamily: 'sans-serif' }}>MAZEN</span>
                            </div>,
                            <div key="kachyng-2" style={{ background: 'rgba(14, 14, 28, 0.75)', border: '1px solid rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(12px)', padding: '8px 22px', borderRadius: '8px', display: 'flex', alignItems: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
                                <span style={{ fontSize: '1.15rem', fontWeight: 700, color: '#86efac', fontFamily: 'sans-serif', letterSpacing: '-0.02em' }}>kachyng</span>
                            </div>,
                            <div key="re-2" style={{ background: 'rgba(14, 14, 28, 0.75)', border: '1px solid rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(12px)', padding: '8px 20px', borderRadius: '8px', display: 'flex', alignItems: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
                                <div style={{ background: '#f97316', padding: '4px 10px', borderRadius: '3px', color: '#ffffff', fontWeight: 900, fontSize: '0.95rem', letterSpacing: '0.05em' }}>RE</div>
                            </div>,
                            <div key="nod-2" style={{ background: 'rgba(14, 14, 28, 0.75)', border: '1px solid rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(12px)', padding: '8px 22px', borderRadius: '8px', display: 'flex', alignItems: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
                                <div style={{ background: '#84cc16', padding: '4px 14px', borderRadius: '16px 16px 16px 2px', color: '#0f172a', fontWeight: 900, fontSize: '1rem', fontFamily: 'sans-serif' }}>nod</div>
                            </div>,
                            <div key="viaanix-2" style={{ background: 'rgba(14, 14, 28, 0.75)', border: '1px solid rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(12px)', padding: '8px 22px', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
                                <span style={{ fontSize: '1rem', fontWeight: 900, color: '#38bdf8', fontStyle: 'italic', letterSpacing: '-0.03em', lineHeight: 1 }}>V3</span>
                                <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#38bdf8', letterSpacing: '0.1em' }}>VIAANIX</span>
                            </div>,
                            <div key="dxn-2" style={{ background: 'rgba(14, 14, 28, 0.75)', border: '1px solid rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(12px)', padding: '8px 20px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '6px', boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="#38bdf8"><path d="M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.91 12.21 21.97 12 21.97C11.79 21.97 11.59 21.91 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.09 11.79 2.03 12 2.03C12.21 2.03 12.41 2.09 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5Z"/></svg>
                                <span style={{ fontSize: '0.95rem', fontWeight: 900, color: '#ffffff' }}>DXN <span style={{ fontSize: '0.5rem', color: '#38bdf8', display: 'block', fontWeight: 800, letterSpacing: '0.06em' }}>GIVING YOU THE EDGE</span></span>
                            </div>,
                            <div key="airtrack-2" style={{ background: 'rgba(14, 14, 28, 0.75)', border: '1px solid rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(12px)', padding: '8px 22px', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
                                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#60a5fa' }}>♒ AirTrack<sup style={{ fontSize: '0.5rem' }}>MDM</sup></span>
                            </div>,
                            <div key="amd-2" style={{ background: 'rgba(14, 14, 28, 0.75)', border: '1px solid rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(12px)', padding: '8px 22px', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
                                <span style={{ fontSize: '1rem', fontWeight: 900, color: '#38bdf8', letterSpacing: '0.05em', lineHeight: 1 }}>A<span style={{ color: '#ef4444' }}>•</span>MD</span>
                                <span style={{ fontSize: '0.5rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.2em' }}>TELECOM</span>
                            </div>,
                        ]}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
