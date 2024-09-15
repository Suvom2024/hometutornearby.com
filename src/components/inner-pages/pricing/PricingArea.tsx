"use client";

import Link from "next/link";
import { CSSProperties, useState, useEffect } from "react";
import StickyHireButton from '../../StickyHireButton';

const pricing_data = [
   {
      id: 2,
      title: "Premium Membership",
      originalPrice: 10800,
      discountedPrice: 8999,
      duration: "6 months",
      savePercentage: 17,
      features: [
         "Professional & Experienced Tutors",
         "Best Home Tutors at Affordable Price",
         "Contact Tutors Directly",
         "Free Tutor replacement support for 6 months.",
         "Premium Phone/Whatsapp/Chat Support.",
         "100% money back guarantee."
      ],
      isMostPopular: true
   },
   {
      id: 3,
      title: "Basic Membership",
      originalPrice: 7500,
      discountedPrice: 5999,
      duration: "3 months",
      savePercentage: 14,
      features: [
         "Experienced Tutors",
         "Affordable Price",
         "Contact Tutors Directly",
         "Free Tutor replacement support for 3 months.",
         "Basic Phone/Whatsapp Support."
      ]
   }
];

const PricingArea = () => {
   const [hoveredCard, setHoveredCard] = useState<number | null>(null);
   const [hoveredButton, setHoveredButton] = useState<number | null>(null);
   const [isMobileView, setIsMobileView] = useState<boolean>(false);

   // Handle window resize for responsive design
   useEffect(() => {
      const handleResize = () => setIsMobileView(window.innerWidth <= 768);
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   const cardStyle = (id: number): CSSProperties => ({
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '20px',
      width: isMobileView ? '90%' : '385px',
      position: 'relative',
      border: id === 2 ? '2px solid #fdc800' : 'none',
      transition: 'all 0.3s ease',
      transform: hoveredCard === id ? 'scale(1.05)' : 'scale(1)',
      boxShadow: hoveredCard === id ? '0 8px 16px rgba(0, 0, 0, 0.2)' : '0 4px 6px rgba(0, 0, 0, 0.1)',
      marginTop: isMobileView ? '20px' : '130px',
      zIndex: hoveredCard === id ? 1 : 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginLeft: isMobileView ? 'auto' : undefined,
      marginRight: isMobileView ? 'auto' : undefined
   });

   const buttonStyle = (id: number): CSSProperties => ({
      backgroundColor: hoveredButton === id ? '#e0b800' : '#fdc800',
      color: 'black',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
      width: '100%',
      fontSize: '16px',
      marginTop: '15px',
      fontWeight: 'bold',
      transition: 'all 0.3s ease',
      transform: hoveredButton === id ? 'scale(1.05) translateY(-2px)' : 'scale(1)',
      boxShadow: hoveredButton === id ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
      position: 'relative',
      overflow: 'hidden'
   });

   const buttonAfterStyle: CSSProperties = {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '5px',
      height: '5px',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)',
      opacity: 0,
      transition: 'all 0.5s ease'
   };

   return (
      <div style={{ fontFamily: 'Arial, sans-serif', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '130vh', margin: 0, backgroundColor: '#f0f0f0' }}>
         <div style={{
            display: 'flex', gap: isMobileView ? '20px' : '60px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: isMobileView ? '50px' : '100px'
         }}>
            {pricing_data.map((item) => (
               <div
                  key={item.id}
                  style={cardStyle(item.id)}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
               >
                  {item.isMostPopular && (
                     <span style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#fdc800', color: 'black', padding: '5px 10px', borderRadius: '20px', fontSize: '14px' }}>MOST POPULAR</span>
                  )}

                  <h2 style={{ marginTop: 0 }}>{item.title}</h2>
                  <p>Best value for your money!</p>
                  <div>
                     <span style={{ textDecoration: 'line-through', color: '#888' }}>₹{item.originalPrice}</span>
                     <span style={{ backgroundColor: '#fde2e2', color: '#e06f25', padding: '4px 7px', borderRadius: '4px', fontSize: '16px', marginLeft: '10px' }}>SAVE {item.savePercentage}%</span>
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', margin: '10px 0' }}>
                     ₹{item.discountedPrice} / {item.duration}
                     <hr style={{ margin: '10px 0', border: '0', borderTop: '1px solid #ddd' }} />
                  </div>
                  <ul style={{ listStyleType: 'none', padding: 0 }}>
                     {item.features.map((feature, index) => (
                        <li key={index} style={{ marginBottom: '10px' }}>✓ {feature}</li>
                     ))}
                  </ul>
                  <div style={{ backgroundColor: 'rgb(253, 226, 226)', color: '#e06f25', fontSize: '20px', fontWeight: 'bold', marginTop: '10px', padding: '10px', borderRadius: '5px', textAlign: 'center', fontStyle: 'italic' }}>
                     <p>Upto 50% extra contacts</p>
                     <p>Free of cost in case you don't find tutor with given contacts</p>
                  </div>
                  <Link href="#" style={{ textDecoration: 'none' }}>
                     <button
                        onClick={() => alert(`You selected the ${item.title} plan!`)}
                        style={buttonStyle(item.id)}
                        onMouseEnter={() => setHoveredButton(item.id)}
                        onMouseLeave={() => setHoveredButton(null)}
                     >
                        GET FREE DEMO CLASS
                        <span style={{
                           ...buttonAfterStyle,
                           opacity: hoveredButton === item.id ? 1 : 0,
                           width: hoveredButton === item.id ? '300px' : '5px',
                           height: hoveredButton === item.id ? '300px' : '5px'
                        }} />
                     </button>
                  </Link>
               </div>
            ))}
         </div>
         <StickyHireButton />
      </div>
   );
};

export default PricingArea;
