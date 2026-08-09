import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface TestimonialsProps {
    onBookCall?: () => void;
}

const testimonialsData = [
    {
        id: 'card-1',
        quote: '"Impactful & trustworthy"',
        author: '- Vikram B. CTO, Nod-MD',
        videoSrc: '/images/istockphoto-1451048462-640_adpp_is.mp4',
    },
    {
        id: 'card-2',
        quote: '"Pre-vetted talent saved us time"',
        author: '- Morgan P. CTO, Wirespeed',
        videoSrc: '/images/istockphoto-1451048462-640_adpp_is.mp4',
    },
    {
        id: 'card-3',
        quote: '"Handled ambiguity very well"',
        author: '- Pete S. CTO, Refollow',
        videoSrc: '/images/istockphoto-1451048462-640_adpp_is.mp4',
    },
];

export const Testimonials: React.FC<TestimonialsProps> = ({ onBookCall }) => {
    const [focusedCardId, setFocusedCardId] = useState<string | null>(null);

    return (
        <section
            id="testimonials"
            style={{
                padding: '70px 24px 90px',
                position: 'relative',
                background: 'linear-gradient(180deg, #060612 0%, #08081a 50%, #060612 100%)',
                color: '#ffffff',
                overflow: 'hidden',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                fontFamily: "'Manrope', sans-serif",
            }}
        >
            {/* Background Ambient Glow Orbs */}
            <div style={{
                position: 'absolute', top: '25%', left: '-5%',
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
                {/* ── Section Header (Identical to Artificial Intelligence (AI) header style & gradient) ── */}
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
                        fontFamily: "'Manrope', sans-serif",
                    }}>
                        <span className="thinkitive-title-gradient">Testimonials</span><br />
                        <span className="thinkitive-title-thin">Words of Gratitude - Hear it from our clients themselves</span>
                    </h2>

                    <div style={{
                        width: '100%',
                        height: '1px',
                        background: 'rgba(255, 255, 255, 0.18)',
                        margin: '12px 0 0 0',
                    }} />
                </motion.div>

                {/* ── 3 Dark Cosmic Video Cards Grid ── */}
                <div className="testimonials-3-grid">
                    {testimonialsData.map((item, idx) => {
                        const isFocused = focusedCardId === item.id;

                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.08 }}
                                className="testimonial-card-dark"
                            >
                                {/* Video Container */}
                                <div
                                    className="video-preview-box-dark"
                                    onClick={() => setFocusedCardId(isFocused ? null : item.id)}
                                >
                                    <video
                                        src={item.videoSrc}
                                        autoPlay
                                        loop
                                        muted={!isFocused}
                                        playsInline
                                        controls={isFocused}
                                        className="bg-looping-video"
                                    />

                                    {/* Seamless dark gradient fade overlay melting video into dark glass card background */}
                                    {!isFocused && (
                                        <div className="video-dark-fade-overlay" />
                                    )}
                                </div>

                                {/* Quote Headline */}
                                <h3 className="testimonial-quote-dark">
                                    {item.quote}
                                </h3>

                                {/* Author Attribution */}
                                <div className="testimonial-author-dark">
                                    {item.author}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* ── Bottom Action Button ── */}
                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                    <button
                        onClick={onBookCall}
                        className="read-more-btn"
                    >
                        Read More Success Stories →
                    </button>
                </div>

            </div>

            <style>{`
                .thinkitive-title-gradient {
                    font-weight: 800;
                    background: linear-gradient(180deg, #ffffff 0%, #3b82f6 40%, #1d4ed8 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    font-family: 'Manrope', sans-serif;
                }
                .thinkitive-title-thin {
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.95);
                    letter-spacing: -0.01em;
                    font-family: 'Manrope', sans-serif;
                }

                .testimonials-3-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                    font-family: 'Manrope', sans-serif;
                }

                .testimonial-card-dark {
                    background: rgba(14, 14, 28, 0.75);
                    backdrop-filter: blur(16px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 17px;
                    padding: 18px 18px 22px;
                    text-align: left;
                    display: flex;
                    flex-direction: column;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                    transition: all 0.3s ease;
                }
                .testimonial-card-dark:hover {
                    transform: translateY(-4px);
                    border-color: rgba(59, 130, 246, 0.4);
                    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.45), 0 0 24px rgba(59, 130, 246, 0.18);
                    background: rgba(18, 18, 36, 0.9);
                }

                .video-preview-box-dark {
                    position: relative;
                    width: 100%;
                    height: 205px;
                    border-radius: 12px;
                    overflow: hidden;
                    margin-bottom: 18px;
                    background: #0a0a14;
                    cursor: pointer;
                }

                .bg-looping-video {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 12px;
                }

                /* Seamless dark gradient fade overlay melting video into dark glass card background */
                .video-dark-fade-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        to bottom,
                        transparent 40%,
                        rgba(14, 14, 28, 0.08) 52%,
                        rgba(14, 14, 28, 0.35) 65%,
                        rgba(14, 14, 28, 0.72) 80%,
                        rgba(14, 14, 28, 0.95) 95%,
                        rgba(14, 14, 28, 1) 100%
                    );               
                    pointer-events: none;
                }

                .testimonial-quote-dark {
                    font-size: 1.05rem;
                    font-weight: 600;
                    color: #3b82f6;
                    margin: 0 0 12px 0;
                    line-height: 1.35;
                    font-family: 'Manrope', sans-serif;
                }

                .testimonial-author-dark {
                    font-size: 0.82rem;
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.7);
                    text-align: right;
                    margin-top: 4px;
                    font-family: 'Manrope', sans-serif;
                }

                .read-more-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 12px 28px;
                    border-radius: 8px;
                    background: #1e40af;
                    color: #ffffff;
                    font-weight: 600;
                    font-size: 0.92rem;
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 6px 20px rgba(30, 64, 175, 0.4);
                    font-family: 'Manrope', sans-serif;
                }
                .read-more-btn:hover {
                    background: #2563eb;
                    box-shadow: 0 10px 28px rgba(37, 99, 235, 0.6);
                    transform: translateY(-2px);
                }

                @media (max-width: 900px) {
                    .testimonials-3-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
};
