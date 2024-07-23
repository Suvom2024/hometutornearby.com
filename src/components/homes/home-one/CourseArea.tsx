"use client";
import React, { useState, CSSProperties } from "react";
import course_data from "@/data/CourseData";

const tab_title: string[] = ["International Students", "National Students"];

const CourseArea = () => {
   const [activeTab, setActiveTab] = useState(0);
   const [hoveredCourse, setHoveredCourse] = useState<number | null>(null);

   const handleTabClick = (index: number) => {
      setActiveTab(index);
   };

   const courseBoxStyle: CSSProperties = {
      overflow: 'hidden',
      position: 'relative',
      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
   };

   const courseBoxHoverStyle: CSSProperties = {
      transform: 'translateY(-10px)',
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
   };

   const imageStyle: CSSProperties = {
      width: '100%',
      height: 'auto',
      transition: 'transform 0.3s ease-in-out',
   };

   const imageHoverStyle: CSSProperties = {
      transform: 'scale(1.1)',
   };

   const crissCrossBoxStyle: CSSProperties = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '1.5rem',
      opacity: 0,
      transition: 'opacity 0.3s ease-in-out',
   };

   const crissCrossBoxHoverStyle: CSSProperties = {
      opacity: 1,
   };

   return (
      <div className="course-area pd-top-100 pd-bottom-90">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-8 col-lg-10 col-md-11">
                  <div className="section-title style-white text-center">
                     <h2 className="title">Courses Offered</h2>
                  </div>
               </div>
            </div>
            <div className="edmt-nav-tab style-white text-center">
               <ul className="nav nav-tabs" id="myTab" role="tablist">
                  {tab_title.map((tab, index) => (
                     <li key={index} className="nav-item">
                        <a onClick={() => handleTabClick(index)} style={{ cursor: "pointer" }} className={activeTab === index ? 'nav-link active' : 'nav-link'}>{tab}</a>
                     </li>
                  ))}
               </ul>
            </div>
            <div className="tab-content" id="myTabContent">
               {tab_title.map((category, index) => (
                  <div key={index} className={`tab-pane fade ${activeTab === index ? 'show active' : ''}`}>
                     <div className="row">
                        {course_data.filter(item => item.category === category).map(course => (
                           <div key={course.id} className="col-lg-4 col-md-6">
                              <div
                                 className="single-course-inner animated-card"
                                 style={hoveredCourse === course.id ? { ...courseBoxStyle, ...courseBoxHoverStyle } : courseBoxStyle}
                                 onMouseEnter={() => setHoveredCourse(course.id)}
                                 onMouseLeave={() => setHoveredCourse(null)}
                              >
                                 <div className="image">
                                    <img
                                       src={course.imageUrl}
                                       alt={course.title}
                                       style={hoveredCourse === course.id ? { ...imageStyle, ...imageHoverStyle } : imageStyle}
                                    />
                                    <div
                                       className="criss-cross-box"
                                       style={hoveredCourse === course.id ? { ...crissCrossBoxStyle, ...crissCrossBoxHoverStyle } : crissCrossBoxStyle}
                                    >
                                       {course.title}
                                    </div>
                                 </div>
                                 <div className="details">
                                    <div className="details-inner">
                                       <h6>{course.title}</h6>
                                       <p>{course.description}</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default CourseArea;
