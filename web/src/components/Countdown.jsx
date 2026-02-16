import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
             timeLeft = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timeUnitStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 1rem',
        minWidth: '80px', // Ensure consistent width
    };

    const numberStyle = {
        fontSize: '3rem',
        fontWeight: 'bold',
        color: 'var(--primary-blue)',
        lineHeight: '1',
    };

    const labelStyle = {
        fontSize: '0.9rem',
        color: 'var(--text-secondary)',
        textTransform: 'uppercase',
        marginTop: '0.5rem',
        letterSpacing: '1px',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginTop: '3rem',
                marginBottom: '2rem',
                padding: '2rem',
                background: 'rgba(255, 255, 255, 0.5)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
            }}
        >
            <div style={timeUnitStyle}>
                <span style={numberStyle}>{timeLeft.days || '0'}</span>
                <span style={labelStyle}>Días</span>
            </div>
            <div style={timeUnitStyle}>
                <span style={numberStyle}>{timeLeft.hours || '0'}</span>
                <span style={labelStyle}>Hs</span>
            </div>
            <div style={timeUnitStyle}>
                <span style={numberStyle}>{timeLeft.minutes || '0'}</span>
                <span style={labelStyle}>Min</span>
            </div>
            <div style={timeUnitStyle}>
                <span style={numberStyle}>{timeLeft.seconds || '0'}</span>
                <span style={labelStyle}>Seg</span>
            </div>
        </motion.div>
    );
};

export default Countdown;
