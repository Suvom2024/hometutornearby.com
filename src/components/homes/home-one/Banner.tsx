"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import bannerThumb2 from "@/assets/img/banner/4.jpg";
import bannerThumb3 from "@/assets/img/banner/5.jpg";
import bannerThumb4 from "@/assets/img/banner/6.jpg";
import bannerThumb5 from "@/assets/img/banner/7.jpg";
import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

const Banner: React.FC = () => {
   const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
   const images = [bannerThumb2, bannerThumb3, bannerThumb4, bannerThumb5];

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change image every 5 seconds

      return () => clearInterval(interval);
   }, []);

   const backgroundStyle: React.CSSProperties = {
      backgroundImage: `url(${images[currentImageIndex].src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      transition: 'background-image 1s ease-in-out',
      height: 'calc(95vh - 50px)', // Adjust height to account for header height
      paddingTop: '200px', // Ensure space for the header
      boxSizing: 'border-box', // Ensure padding doesn't cause overflow
      display: 'flex',
      justifyContent: 'center', // Center the text horizontally
      alignItems: 'center', // Center the text vertically
      textAlign: 'center',
      position: 'relative', // To position the overlay
      marginTop: '85px', // Adjust this value to move the banner down
   };

   const overlayStyle: React.CSSProperties = {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.6)', // White with transparency
      zIndex: 1, // Make sure the overlay is above the image but below the text
   };

   const innerStyle: React.CSSProperties = {
      color: '#002147',
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
      padding: '0 20px', // Add padding to ensure content doesn't touch edges
      zIndex: 2, // Make sure the text is above the overlay
      position: 'relative', // Position relative to ensure proper stacking
   };

   const buttonStyle: React.CSSProperties = {
      display: 'inline-block',
      marginTop: '20px',
   };

   return (
      <div
         className="banner-area banner-area-1 bg-gray"
         style={backgroundStyle}
      >
         {/* Transparent overlay */}
         <div style={overlayStyle}></div>

         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-12 align-self-center">
                  <div
                     className="banner-inner"
                     style={innerStyle}
                  >
                     <h1 className="b-animate-2 title">Let's make learning fun!</h1>
                     <Link
                        className="ed-btn btn-base b-animate-3 btn-gap"
                        href="/contact"
                        style={buttonStyle}
                     >
                        Get In Touch
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Banner;
