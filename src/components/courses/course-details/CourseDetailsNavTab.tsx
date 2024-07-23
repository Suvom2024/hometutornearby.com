"use client"
import faq_data from "@/data/FaqData";
import Link from "next/link";
import { useState } from "react";

const tab_title: string[] = ["Description", "Curriculum", "FAQ", "Review",];

interface ContentType {
   desc_1: JSX.Element;
   list_1: string[];
   rating: {
      width: string;
      count: number;
   }[];
}

const tab_content: ContentType = {
   desc_1: (<>Specialized tutoring for TOEFL and GRE, equipping students with the skills needed to excel in these exams.</>),
   list_1: ["TOEFL Preparation: Our TOEFL tutoring program focuses on developing your English language skills in reading, writing, listening, and speaking. We provide practice tests, vocabulary-building exercises, and strategies to improve your score.", "GRE Preparation: Our GRE tutoring covers all sections of the exam, including quantitative reasoning, verbal reasoning, and analytical writing. We offer personalized study plans, practice questions, and test-taking strategies.",],
   rating: [{ width: "100%", count: 5 }, { width: "0%", count: 4 }, { width: "0%", count: 3 }, { width: "0%", count: 2 }, { width: "0%", count: 1 },],
}

const { desc_1, list_1, rating } = tab_content;

const CourseDetailsNavTab = () => {

   const [activeTab, setActiveTab] = useState(0);

   // Handle tab click event
   const handleTabClick = (index: any) => {
      setActiveTab(index);
   };

   const [openItemId, setOpenItemId] = useState(1); // Initially open the first item

   const toggleAccordion = (itemId: any) => {
      setOpenItemId((prevOpenItemId) =>
         prevOpenItemId === itemId ? null : itemId
      );
   };

   return (
      <>
         {/* <div className="course-details-nav-tab text-center">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
               {tab_title.map((tab, index) => (
                  <li key={index} className="nav-item">
                     <a onClick={() => handleTabClick(index)} style={{ cursor: "pointer" }} className={activeTab === index ? 'nav-link active' : ' nav-link'} >{tab}</a>
                  </li>
               ))}
            </ul>
         </div> */}
         <div className="tab-content" id="myTabContent">
            <div className={`tab-pane fade ${activeTab === 0 ? 'show active' : ''}`}>
               <div className="course-details-content">
                  <p>{desc_1}</p>
                  <div className="row pt-2">
                     <div className="col-sm-12">
                        <ul className="single-list-wrap">
                           {list_1.slice(0, 3).map((list, i) => (
                              <li key={i} className="single-list-inner style-check-box">
                                 <i className="fa fa-check"></i> {list}
                              </li>
                           ))}
                        </ul>
                     </div>
                     {/* <div className="col-sm-6 mt-3 mt-sm-0">
                        <ul className="single-list-wrap">
                           {list_1.slice(3, 6).map((list, i) => (
                              <li key={i} className="single-list-inner style-check-box">
                                 <i className="fa fa-check"></i> {list}
                              </li>
                           ))}
                        </ul>
                     </div> */}
                  </div>
               </div>
            </div>

            <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`}>
               <div className="course-details-content">
                  <h4 className="title">Overview</h4>
                  <p>We will be happy to answer your questions</p>
                  <div id="accordion" className="accordion-area mt-4">
                     {faq_data.filter((items) => items.page === "home_3").map((item) => (
                        <div key={item.id} className="card single-faq-inner style-no-border">
                           <div className="card-header" id={`ff-${item.id}`}>
                              <h5 className="mb-0">
                                 <button
                                    className={`btn-link ${openItemId === item.id ? "show" : "collapsed"
                                       }`}
                                    type="button"
                                    onClick={() => toggleAccordion(item.id)}
                                    aria-expanded={
                                       openItemId === item.id ? "true" : "false"
                                    }
                                    aria-controls={`collapse${item.id}`}
                                 >
                                    {item.question}
                                    <i className="fa fa-eye"></i>
                                 </button>
                              </h5>
                           </div>
                           <div
                              id={`collapse${item.id}`}
                              className={`accordion-collapse collapse ${openItemId === item.id ? "show" : ""
                                 }`}
                              aria-labelledby={`ff-${item.id}`}
                              data-bs-parent="#accordion"
                           >
                              <div className="card-body">{item.answer}</div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            <div className={`tab-pane fade ${activeTab === 2 ? 'show active' : ''}`}>
               <div className="course-details-content">
                  <h4 className="title">Overview</h4>
                  <p>We will be happy to answer your questions. flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab</p>
                  <div id="accordiontwo" className="accordion-area mt-4">
                     {faq_data.filter((items) => items.page === "home_3").map((item, i) => (
                        <div key={item.id} className="card single-faq-inner">
                           <div className="card-header" id={`ff-${item.id}`}>
                              <h5 className="mb-0">
                                 <button
                                    className={`btn-link ${openItemId === item.id ? "show" : "collapsed"
                                       }`}
                                    type="button"
                                    onClick={() => toggleAccordion(item.id)}
                                    aria-expanded={
                                       openItemId === item.id ? "true" : "false"
                                    }
                                    aria-controls={`collapse${item.id}`}
                                 >
                                    {item.question}
                                    <i className="fa fa-eye"></i>
                                 </button>
                              </h5>
                           </div>
                           <div
                              id={`collapse${item.id}`}
                              className={`accordion-collapse collapse ${openItemId === item.id ? "show" : ""
                                 }`}
                              aria-labelledby={`ff-${item.id}`}
                              data-bs-parent="#accordion"
                           >
                              <div className="card-body">{item.answer}</div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            <div className={`tab-pane fade ${activeTab === 3 ? 'show active' : ''}`}>
               <div className="ratings-list-inner mb-4">
                  <div className="row">
                     <div className="col-md-4 align-self-center text-center">
                        <div className="total-avarage-rating">
                           <h2>5.0</h2>
                           <div className="rating-inner">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                           </div>
                           <p>Rated 5 out of 3 Ratings</p>
                        </div>
                     </div>
                     <div className="col-md-8">
                        <ul>
                           {rating.map((rating, i) => (
                              <li key={i}>
                                 <Link href="#">
                                    <span className="counter-label"><i className="fa fa-star"></i>{rating.count}</span>
                                    <span className="progress-bar-inner">
                                       <span className="progress">
                                          <span className="progress-bar" style={{ width: rating.width }}></span>
                                       </span>
                                    </span>
                                    <span className="counter-count">{rating.width}</span>
                                 </Link>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default CourseDetailsNavTab
