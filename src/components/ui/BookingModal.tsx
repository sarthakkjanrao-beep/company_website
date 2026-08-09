import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCalendar, FiClock, FiCheckCircle, FiSend, FiLoader } from 'react-icons/fi';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'Custom Business Automation',
        message: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Direct automated email delivery to sapraforce@gmail.com via FormSubmit AJAX service
            await fetch('https://formsubmit.co/ajax/sapraforce@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    _subject: `📅 New Strategy Call Booking: ${formData.name}`,
                    'Full Name': formData.name,
                    'Work Email': formData.email,
                    'Phone Number': formData.phone || 'Not Provided',
                    'Service Interested': formData.service,
                    'Project Brief': formData.message || 'No additional details',
                    _captcha: 'false',
                }),
            });
        } catch (error) {
            console.error('Email dispatch error:', error);
        } finally {
            setLoading(false);
            setSubmitted(true);
        }
    };

    const handleReset = () => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', service: 'Custom Business Automation', message: '' });
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
                        fontFamily: "'Manrope', sans-serif",
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
                            background: 'rgba(5, 5, 12, 0.88)',
                            backdropFilter: 'blur(12px)',
                        }}
                    />

                    {/* Modal Content Window */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 15 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 15 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        style={{
                            position: 'relative',
                            zIndex: 10,
                            width: '100%',
                            maxWidth: '540px',
                            maxHeight: '90vh',
                            overflowY: 'auto',
                            background: '#0a0a16',
                            border: '1px solid rgba(59, 130, 246, 0.3)',
                            borderRadius: '20px',
                            padding: '30px',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.8), 0 0 30px rgba(59, 130, 246, 0.15)',
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
                                width: '34px',
                                height: '34px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#ffffff',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                            }}
                        >
                            <FiX size={16} />
                        </button>

                        {!submitted ? (
                            <>
                                <div style={{ marginBottom: '20px' }}>
                                    <div
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            padding: '4px 12px',
                                            borderRadius: '6px',
                                            background: 'rgba(59, 130, 246, 0.15)',
                                            border: '1px solid rgba(59, 130, 246, 0.3)',
                                            color: '#3b82f6',
                                            fontSize: '0.78rem',
                                            fontWeight: 700,
                                            marginBottom: '10px',
                                        }}
                                    >
                                        <FiCalendar size={13} /> Schedule 1-on-1 Call
                                    </div>
                                    <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', margin: '0 0 6px 0' }}>
                                        Book a 30-Min Strategy Call
                                    </h2>
                                    <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.86rem', lineHeight: 1.5, margin: 0 }}>
                                        Fill in your details below and an email notification will be sent directly to sapraforce@gmail.com.
                                    </p>
                                </div>

                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        padding: '10px 14px',
                                        background: 'rgba(255,255,255,0.03)',
                                        borderRadius: '10px',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        marginBottom: '20px',
                                        fontSize: '0.8rem',
                                        color: 'rgba(255,255,255,0.75)',
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#3b82f6', fontWeight: 600 }}>
                                        <FiClock size={14} /> 30 Minutes
                                    </div>
                                    <div>•</div>
                                    <div>Google Meet / Zoom</div>
                                    <div>•</div>
                                    <div>Free Strategy Consultation</div>
                                </div>

                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(255,255,255,0.8)', marginBottom: '6px', fontWeight: 600 }}>
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Enter your name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            style={{
                                                width: '100%',
                                                padding: '10px 14px',
                                                background: 'rgba(6, 6, 18, 0.7)',
                                                border: '1px solid rgba(255,255,255,0.12)',
                                                borderRadius: '8px',
                                                color: '#ffffff',
                                                fontSize: '0.88rem',
                                                fontFamily: "'Manrope', sans-serif",
                                                outline: 'none',
                                            }}
                                        />
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(255,255,255,0.8)', marginBottom: '6px', fontWeight: 600 }}>
                                                Work Email *
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="Enter your email address"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                style={{
                                                    width: '100%',
                                                    padding: '10px 14px',
                                                    background: 'rgba(6, 6, 18, 0.7)',
                                                    border: '1px solid rgba(255,255,255,0.12)',
                                                    borderRadius: '8px',
                                                    color: '#ffffff',
                                                    fontSize: '0.88rem',
                                                    fontFamily: "'Manrope', sans-serif",
                                                    outline: 'none',
                                                }}
                                            />
                                        </div>

                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(255,255,255,0.8)', marginBottom: '6px', fontWeight: 600 }}>
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                placeholder="Enter your phone number"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                style={{
                                                    width: '100%',
                                                    padding: '10px 14px',
                                                    background: 'rgba(6, 6, 18, 0.7)',
                                                    border: '1px solid rgba(255,255,255,0.12)',
                                                    borderRadius: '8px',
                                                    color: '#ffffff',
                                                    fontSize: '0.88rem',
                                                    fontFamily: "'Manrope', sans-serif",
                                                    outline: 'none',
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(255,255,255,0.8)', marginBottom: '6px', fontWeight: 600 }}>
                                            Service Interested In
                                        </label>
                                        <select
                                            value={formData.service}
                                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                            style={{
                                                width: '100%',
                                                padding: '10px 14px',
                                                background: '#0a0a16',
                                                border: '1px solid rgba(255,255,255,0.12)',
                                                borderRadius: '8px',
                                                color: '#ffffff',
                                                fontSize: '0.88rem',
                                                fontFamily: "'Manrope', sans-serif",
                                                outline: 'none',
                                            }}
                                        >
                                            <option value="Custom Business Automation">Custom Business Automation</option>
                                            <option value="AI Agent">AI Agent</option>
                                            <option value="Custom Software Development">Custom Software Development</option>
                                            <option value="Custom Web Applications">Custom Web Applications</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(255,255,255,0.8)', marginBottom: '6px', fontWeight: 600 }}>
                                            Project Brief / Details
                                        </label>
                                        <textarea
                                            rows={3}
                                            placeholder="Tell us about the processes or workflows you want to automate..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            style={{
                                                width: '100%',
                                                padding: '10px 14px',
                                                background: 'rgba(6, 6, 18, 0.7)',
                                                border: '1px solid rgba(255,255,255,0.12)',
                                                borderRadius: '8px',
                                                color: '#ffffff',
                                                fontSize: '0.88rem',
                                                fontFamily: "'Manrope', sans-serif",
                                                outline: 'none',
                                                resize: 'vertical',
                                            }}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '8px',
                                            padding: '12px',
                                            borderRadius: '8px',
                                            background: '#1e40af',
                                            color: '#ffffff',
                                            fontSize: '0.9rem',
                                            fontWeight: 600,
                                            border: 'none',
                                            cursor: loading ? 'not-allowed' : 'pointer',
                                            opacity: loading ? 0.8 : 1,
                                            boxShadow: '0 6px 18px rgba(30, 64, 175, 0.4)',
                                            marginTop: '4px',
                                            fontFamily: "'Manrope', sans-serif",
                                        }}
                                    >
                                        {loading ? (
                                            <>
                                                <FiLoader className="animate-spin" size={16} /> Sending Email...
                                            </>
                                        ) : (
                                            <>
                                                <FiSend size={15} /> Confirm Booking Request
                                            </>
                                        )}
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div style={{ padding: '30px 10px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
                                <FiCheckCircle size={48} color="#3b82f6" />
                                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                                    Email Sent Successfully!
                                </h3>
                                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.88rem', margin: 0, lineHeight: 1.5 }}>
                                    Thank you {formData.name}. Your details have been sent directly to <strong>sapraforce@gmail.com</strong>. We will get back to you within 2 hours.
                                </p>
                                <button
                                    onClick={handleReset}
                                    style={{
                                        marginTop: '10px',
                                        padding: '9px 22px',
                                        borderRadius: '8px',
                                        background: '#1e40af',
                                        color: '#ffffff',
                                        fontSize: '0.85rem',
                                        fontWeight: 600,
                                        border: 'none',
                                        cursor: 'pointer',
                                        fontFamily: "'Manrope', sans-serif",
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
