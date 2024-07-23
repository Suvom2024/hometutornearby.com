import Image from "next/image"

import bannerThumb from "@/assets/img/icon/4.png"

const About = () => {
   return (
      <div className="about-area pd-top-140">
         <div className="container">
            <div className="about-area-inner">
               <div className="row">
                  <div className="col-lg-6">
                     <div className="about-thumb-wrap left-icon" style={{ backgroundImage: `url(/assets/img/banner/2.png)` }}>
                        {/* <div className="about-icon"><Image src={bannerThumb} alt="img" /></div> */}
                        <div className="bottom-content">
                           "Education is the most powerful weapon which you can use to change the world." – Nelson Mandela
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="about-inner-wrap pl-xl-4 pt-5 pt-lg-0 mt-5 mt-lg-0">
                        <div className="section-title mb-0">
                           <h6 className="sub-title right-line">ABOUT US</h6>
                           <h2 className="title">TRUSTED FOR OVER 15 YEARS</h2>
                           <p className="content">Our experienced tutors specialize in personalized education for students of all levels, from corporate families to top university and exam prep.</p>
                           <ul className="single-list-wrap">
                              <li className="single-list-inner style-check-box-grid">
                                 <div className="media">
                                    <div className="media-left">
                                       <i className="fa fa-check"></i>
                                    </div>
                                    <div className="media-body">
                                       <h5>For Tutors:</h5>
                                       <p>Professional Development: We provide our tutors with continuous training and support to ensure they are equipped with the latest teaching strategies and educational resources, fostering an environment of growth and excellence.</p>
                                    </div>
                                 </div>
                              </li>
                              <li className="single-list-inner style-check-box-grid">
                                 <div className="media">
                                    <div className="media-left">
                                       <i className="fa fa-check"></i>
                                    </div>
                                    <div className="media-body">
                                       <h5>For Students:</h5>
                                       <p>Individualized Attention: Each student receives a tailored learning plan designed to address their unique strengths and areas for improvement, ensuring effective and focused learning.</p>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About
