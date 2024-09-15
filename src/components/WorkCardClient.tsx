"use client";

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

interface WorkCardProps {
    icon: StaticImageData;
    title: string;
    desc: string[];
}

const WorkCardClient: React.FC<WorkCardProps> = ({ icon, title, desc }) => {
    const [isHovered, setIsHovered] = useState(false);

    const cardStyle = {
        background: 'white',
        border: `4px solid ${isHovered ? '#fdc800' : 'transparent'}`, // Thicker border on hover
        borderRadius: '12px',
        padding: '20px',
        textAlign: 'center',
        boxShadow: isHovered ? '0 16px 32px rgba(0, 0, 0, 0.2)' : '0 12px 24px rgba(0, 0, 0, 0.1)',
        transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
        transition: 'transform 0.3s, box-shadow 0.3s, border 0.3s',
        height: '100%', // Ensure the card takes full height
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center content horizontally
        justifyContent: 'normal', // Space content evenly
    } as React.CSSProperties;

    const thumbStyle = {
        backgroundColor: '#fdc800', // Yellow background for icon container
        borderRadius: '50%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90px', // Adjust width to fit the icon size
        height: '90px', // Adjust height to fit the icon size
        marginBottom: '20px',
        overflow: 'hidden', // Ensure the background doesn't exceed the container
    } as React.CSSProperties;

    const titleStyle = {
        fontSize: '1.6rem',
        fontWeight: '700',
        marginBottom: '15px',
        color: '#002147', // Updated color
        textTransform: 'uppercase',
    } as React.CSSProperties;

    const descStyle = {
        fontSize: '1rem',
        marginBottom: '15px',
        color: '#555',
    } as React.CSSProperties;

    const highlightStyle = {
        fontWeight: '600',
        color: '#007bff',
    } as React.CSSProperties;

    return (
        <div
            style={cardStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={thumbStyle}>
                <Image src={icon} alt="icon" />
            </div>
            <div>
                <h5 style={titleStyle}>{title}</h5>
                <div style={{ textAlign: 'left' }}>
                    {desc.map((item, index) => (
                        <p
                            key={index}
                            style={{
                                ...descStyle,
                                ...(item === "REGISTER" || item === "SEARCH FOR TUTOR" || item === "EXCEL IN STUDIES" || item === "SEARCH FOR STUDENT" || item === "EARN MONEY" ? highlightStyle : {}),
                            }}
                        >
                            {item}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WorkCardClient;
