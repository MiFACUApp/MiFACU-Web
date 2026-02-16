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

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="countdown-container"
        >
            <div className="countdown-item">
                <span className="countdown-number">{timeLeft.days || '0'}</span>
                <span className="countdown-label">Días</span>
            </div>
            <div className="countdown-item">
                <span className="countdown-number">{timeLeft.hours || '0'}</span>
                <span className="countdown-label">Hs</span>
            </div>
            <div className="countdown-item">
                <span className="countdown-number">{timeLeft.minutes || '0'}</span>
                <span className="countdown-label">Min</span>
            </div>
            <div className="countdown-item">
                <span className="countdown-number">{timeLeft.seconds || '0'}</span>
                <span className="countdown-label">Seg</span>
            </div>
        </motion.div>
    );
};

export default Countdown;
