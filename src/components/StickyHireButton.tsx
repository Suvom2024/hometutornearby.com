"use client";
import React, { CSSProperties } from 'react';
import Link from 'next/link';

const StickyHireButton: React.FC = () => {
    const buttonStyle: CSSProperties = {
        position: 'fixed',
        left: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: '#fdc800', // Yellow color
        color: 'white',
        padding: '12px 8px', // Smaller padding for a smaller size
        borderRadius: '30px', // Oval shape
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        transition: 'background-color 0.3s, transform 0.3s',
        cursor: 'pointer',
        zIndex: 1000,
        border: '2px solid #fdc800', // Border matching the background color
    };

    const textStyle: CSSProperties = {
        writingMode: 'vertical-rl',
        fontSize: '16px', // Smaller font size
        fontWeight: '700',
        letterSpacing: '1px',
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.backgroundColor = '#e5b000'; // Slightly darker yellow on hover
        e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.backgroundColor = '#fdc800'; // Revert to original color
        e.currentTarget.style.transform = 'translateY(-50%)';
    };

    return (
        <Link href="/signin" passHref>
            <div
                style={buttonStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <span style={textStyle}>
                    Need a Tutor
                </span>
            </div>
        </Link>
    );
};

export default StickyHireButton;
