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
   const images = [ bannerThumb2, bannerThumb3, bannerThumb4, bannerThumb5];

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
   };

   return (
      <div className="banner-area banner-area-1 bg-gray" style={backgroundStyle}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-5 col-md-8 order-lg-12 align-self-center">
               </div>
               <div className="col-lg-7 order-lg-1 align-self-center">
                  <div className="banner-inner text-center text-lg-left mt-5 mt-lg-0">
                     <h1 className="b-animate-2 title" style={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Let's make learning fun!</h1>
                     <Link className="ed-btn btn-base b-animate-3 btn-gap" href="/contact">Get In Touch</Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Banner;