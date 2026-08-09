import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCalendar, FiClock, FiCheckCircle, FiUser, FiMail, FiBriefcase, FiArrowRight } from 'react-icons/fi';
import { companyData } from '../../data/company';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        useCase: 'Workflow Automation',
        details: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleReset = () => {
        setSubmitted(false);
        setFormData({ name: '', email: '', company: '', useCase: 'Workflow Automation', details: '' });
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '20px',
                    }}
                >
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'rgba(5, 5, 10, 0.85)',
                            backdropFilter: 'blur(10px)',
                        }}
                    />

                    {/* Modal Window */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        style={{
                            position: 'relative',
                            zIndex: 10,
                            width: '100%',
                            maxWidth: '580px',
                            maxHeight: '90vh',
                            overflowY: 'auto',
                            background: '#0e0e1a',
                            border: '1px solid rgba(212, 166, 79, 0.25)',
                            borderRadius: '24px',
                            padding: '32px',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.8), 0 0 30px rgba(212, 166, 79, 0.15)',
                        }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            style={{
                                position: 'absolute',
                                top: '20px',
                                right: '20px',
                                background: 'rgba(255,255,255,0.06)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '50%',
                                width: '36px',
                                height: '36px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#fff',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                            }}
                        >
                            <FiX size={18} />
                        </button>

                        {!submitted ? (
                            <>
                                <div style={{ marginBottom: '24px' }}>
                                    <div
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            padding: '6px 14px',
                                            borderRadius: '20px',
                                            background: 'rgba(212, 166, 79, 0.12)',
                                            border: '1px solid rgba(212, 166, 79, 0.3)',
                                            color: 'var(--gold)',
                                            fontSize: '0.8rem',
                                            fontWeight: 600,
                                            marginBottom: '12px',
                                        }}
                                    >
                                        <FiCalendar size={14} /> Schedule 1-on-1 AI Strategy Session
                                    </div>
                                    <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', margin: '0 0 8px 0' }}>
                                        Book a 30-Min AI Audit Call
                                    </h2>
                                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                                        Discover how {companyData.name} can automate your business processes and save your team thousands of manual hours.
                                    </p>
                                </div>

                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '16px',
                                        padding: '12px 16px',
                                        background: 'rgba(255,255,255,0.03)',
                                        borderRadius: '12px',
                                        border: '1px solid rgba(255,255,255,0.06)',
                                        marginBottom: '24px',
                                        fontSize: '0.82rem',
                                        color: 'rgba(255,255,255,0.8)',
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <FiClock color="var(--gold)" /> 30 Minutes
                                    </div>
                                    <div>•</div>
                                    <div>Google Meet / Zoom</div>
                                    <div>•</div>
                                    <div>100% Free Consultation</div>
                                </div>

                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.82rem', color: 'rgba(255,255,255,0.8)', marginBottom: '6px', fontWeight: 500 }}>
                                            Your Full Name *
                                        </label>
                                        <div style={{ position: 'relative' }}>
                                            <FiUser style={{ position: 'absolute', left: '14px', top: '14px', color: 'rgba(255,255,255,0.4)' }} />
                                            <input
                                                type="text"
                                                required
                                                placeholder="e.g. Sarah Jenkins"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                style={{
                                                    width: '100%',
                                                    padding: '12px 14px 12px 42px',
                                                    background: 'rgba(255,255,255,0.05)',
                                                    border: '1px solid rgba(255,255,255,0.12)',
                                                    borderRadius: '10px',
                                                    color: '#fff',
                                                    fontSize: '0.9rem',
                                                    outline: 'none',
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.82rem', color: 'rgba(255,255,255,0.8)', marginBottom: '6px', fontWeight: 500 }}>
                                                Work Email *
                                            </label>
                                            <div style={{ position: 'relative' }}>
                                                <FiMail style={{ position: 'absolute', left: '14px', top: '14px', color: 'rgba(255,255,255,0.4)' }} />
                                                <input
                                                    type="email"
                                                    required
                                                    placeholder="sarah@company.com"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    style={{
                                                        width: '100%',
                                                        padding: '12px 14px 12px 42px',
                                                        background: 'rgba(255,255,255,0.05)',
                                                        border: '1px solid rgba(255,255,255,0.12)',
                                                        borderRadius: '10px',
                                                        color: '#fff',
                                                        fontSize: '0.9rem',
                                                        outline: 'none',
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.82rem', color: 'rgba(255,255,255,0.8)', marginBottom: '6px', fontWeight: 500 }}>
                                                Company Name
                                            </label>
                                            <div style={{ position: 'relative' }}>
                                                <FiBriefcase style={{ position: 'absolute', left: '14px', top: '14px', color: 'rgba(255,255,255,0.4)' }} />
                                                <input
                                                    type="text"
                                                    placeholder="Acme Corp"
                                                    value={formData.company}
                                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                    style={{
                                                        width: '100%',
                                                        padding: '12px 14px 12px 42px',
                                                        background: 'rgba(255,255,255,0.05)',
                                                        border: '1px solid rgba(255,255,255,0.12)',
                                                        borderRadius: '10px',
                                                        color: '#fff',
                                                        fontSize: '0.9rem',
                                                        outline: 'none',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.82rem', color: 'rgba(255,255,255,0.8)', marginBottom: '6px', fontWeight: 500 }}>
                                            Primary Focus Area
                                        </label>
                                        <select
                                            value={formData.useCase}
                                            onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                                            style={{
                                                width: '100%',
                                                padding: '12px 14px',
                                                background: '#161626',
                                                border: '1px solid rgba(255,255,255,0.12)',
                                                borderRadius: '10px',
                                                color: '#fff',
                                                fontSize: '0.9rem',
                                                outline: 'none',
                                            }}
                                        >
                                            <option value="Workflow Automation">Workflow & Process Automation (Make / n8n)</option>
                                            <option value="Autonomous AI Agents">Autonomous AI Agents & Swarms</option>
                                            <option value="Enterprise RAG Search">Enterprise Knowledge Base & RAG</option>
                                            <option value="Custom AI Engineering">Custom AI Engineering & ERP Sync</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.82rem', color: 'rgba(255,255,255,0.8)', marginBottom: '6px', fontWeight: 500 }}>
                                            Briefly describe your current manual bottlenecks
                                        </label>
                                        <textarea
                                            rows={3}
                                            placeholder="e.g., We spend 20 hours a week manually copy-pasting data between Salesforce and our ERP..."
                                            value={formData.details}
                                            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                                            style={{
                                                width: '100%',
                                                padding: '12px 14px',
                                                background: 'rgba(255,255,255,0.05)',
                                                border: '1px solid rgba(255,255,255,0.12)',
                                                borderRadius: '10px',
                                                color: '#fff',
                                                fontSize: '0.88rem',
                                                outline: 'none',
                                                resize: 'none',
                                            }}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        style={{
                                            marginTop: '8px',
                                            width: '100%',
                                            padding: '14px',
                                            background: 'linear-gradient(135deg, var(--gold) 0%, #b88a38 100%)',
                                            border: 'none',
                                            borderRadius: '12px',
                                            color: '#0a0a14',
                                            fontSize: '1rem',
                                            fontWeight: 700,
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '8px',
                                            boxShadow: '0 8px 25px rgba(212, 166, 79, 0.3)',
                                            transition: 'transform 0.2s, boxShadow 0.2s',
                                        }}
                                    >
                                        Confirm Booking Request <FiArrowRight />
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                                    style={{
                                        width: '70px',
                                        height: '70px',
                                        borderRadius: '50%',
                                        background: 'rgba(212, 166, 79, 0.15)',
                                        color: 'var(--gold)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 20px',
                                    }}
                                >
                                    <FiCheckCircle size={38} />
                                </motion.div>
                                <h3 style={{ fontSize: '1.6rem', color: '#fff', fontWeight: 800, marginBottom: '10px' }}>
                                    Audit Call Requested!
                                </h3>
                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '420px', margin: '0 auto 24px' }}>
                                    Thank you, <strong style={{ color: '#fff' }}>{formData.name}</strong>. Our senior AI systems architect will review your workflow requirements and email calendar invite options to <strong style={{ color: 'var(--gold)' }}>{formData.email}</strong> within 2 business hours.
                                </p>
                                <button
                                    onClick={handleReset}
                                    style={{
                                        padding: '12px 28px',
                                        background: 'rgba(255,255,255,0.1)',
                                        border: '1px solid rgba(255,255,255,0.2)',
                                        borderRadius: '10px',
                                        color: '#fff',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                    }}
                                >
                                    Close Window
                                </button>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
