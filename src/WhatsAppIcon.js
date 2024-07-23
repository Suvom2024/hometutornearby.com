// src/WhatsAppIcon.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppIcon = () => {
    const whatsappNumber = '+918777061431'; // Replace with your WhatsApp number
    const whatsappLink = `https://wa.me/${whatsappNumber}`;

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                backgroundColor: '#25D366',
                color: 'white',
                borderRadius: '50%',
                padding: '15px',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                zIndex: 1000,
                transition: 'transform 0.3s ease',
            }}
        >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
    );
};

export default WhatsAppIcon;
