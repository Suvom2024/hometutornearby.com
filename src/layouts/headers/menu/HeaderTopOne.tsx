import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const HeaderTopOne = () => {
  const whatsappNumber = '+918777061431'; // Replace with your WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null); // Specify type as string or null

  // Define base styles
  const iconStyles = {
    fontSize: '20px',
    color: '#002147',
    transition: 'transform 0.3s ease, color 0.3s ease',
    marginRight: '5px', // Adjust spacing between icons as needed
  };

  // Handle hover effects
  const handleMouseEnter = (id: string) => {
    setHoveredIcon(id);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  // Function to determine icon styles based on hover
  const getIconStyles = (id: string) => {
    const isActive = hoveredIcon === id;
    const hoverColor = getHoverColor(id);

    return {
      ...iconStyles,
      color: isActive ? hoverColor : iconStyles.color,
      transform: isActive ? 'scale(1.2)' : 'scale(1)',
    };
  };

  // Function to get hover color based on icon id
  const getHoverColor = (id: string) => {
    switch (id) {
      case 'facebook':
        return '#3b5998'; // Blue
      case 'instagram':
        return '#c32aa3'; // Purple
      case 'youtube':
        return '#ff0000'; // Red
      case 'whatsapp':
        return '#25D366'; // Green
      default:
        return '#002147'; // Default color
    }
  };

  return (
    <div className="navbar-top">
      <div className="container">
        <div className="row">
          <div className="col-md-8 text-md-left text-center">
            <ul>
              <li><p style={{ fontSize: '16px' }}><i className="fa fa-map-marker"></i> Gurgaon , New Delhi</p></li>
              <li><p style={{ fontSize: '16px' }}><i className="fa fa-envelope-o"></i> hometutor@gmail.com</p></li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="topbar-right text-md-right text-center" style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <li className="social-area" style={{ display: 'flex', alignItems: 'center' }}>
                <Link href="#" onMouseEnter={() => handleMouseEnter('facebook')} onMouseLeave={handleMouseLeave}>
                  <FontAwesomeIcon icon={faFacebook} aria-hidden="true" style={getIconStyles('facebook')} />
                </Link>
                <Link href="#" onMouseEnter={() => handleMouseEnter('instagram')} onMouseLeave={handleMouseLeave}>
                  <FontAwesomeIcon icon={faInstagram} aria-hidden="true" style={getIconStyles('instagram')} />
                </Link>
                <Link href="#" onMouseEnter={() => handleMouseEnter('youtube')} onMouseLeave={handleMouseLeave}>
                  <FontAwesomeIcon icon={faYoutube} aria-hidden="true" style={getIconStyles('youtube')} />
                </Link>
                <Link href={whatsappLink} onMouseEnter={() => handleMouseEnter('whatsapp')} onMouseLeave={handleMouseLeave}>
                  <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" style={getIconStyles('whatsapp')} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTopOne;
