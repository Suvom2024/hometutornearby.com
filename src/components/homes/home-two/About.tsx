import Link from "next/link";

interface DataType {
   list: string[];
}[];

const list_data: DataType[] = [
   { list: [" Personalized tutoring for every student", "Expert tutors in various subjects and exams", "Supportive learning environment"] },
   // { list: [" Metus interdum metus", "Ligula cur maecenas", "Fringilla nulla"] },
];

const About = ({ style }: any) => {
   return (
      <div className={`about-area pd-top-120 ${style ? "pd-bottom-120" : ""}`}>
         <div className="container">
            <div className="about-area-inner">
               <div className="row">
                  <div className="col-lg-6 col-md-10">
                     <div className="about-thumb-wrap after-shape" style={{ backgroundImage: `url(/assets/img/about/2.png)` }}>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="about-inner-wrap">
                        <div className="section-title mb-0">
                           <h6 className="sub-title right-line">ABOUT US</h6>
                           <h2 className="title">TRUSTED FOR OVER 15 YEARS</h2>
                           <p className="content">Our experienced tutors specialize in personalized education for students of all levels, providing tailored support for those from corporate families, assisting with top university admissions, and offering comprehensive exam preparation.</p>
                           <div className="row">
                              {list_data.map((item, index) => (
                                 <div key={index} className="col-sm-9">
                                    <ul className="single-list-wrap">
                                       {item.list.map((list, i) => (
                                          <li key={i} className="single-list-inner style-check-box">
                                             <i className="fa fa-check"></i> {list}
                                          </li>
                                       ))}
                                    </ul>
                                 </div>
                              ))}
                           </div>
                           <Link className="ed-btn btn-border-black" href="/about">Read More</Link>
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
