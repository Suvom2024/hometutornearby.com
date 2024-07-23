import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import icon_1 from "@/assets/img/icon/12.png";
import icon_2 from "@/assets/img/icon/13.png";
import icon_3 from "@/assets/img/icon/14.png";
import icon_4 from "@/assets/img/icon/15.png";

interface DataType {
   id: number;
   icon: StaticImageData;
   title: string;
   desc: string[];
}[];

const work_data: DataType[] = [
   {
      id: 1,
      icon: icon_1,
      title: "Student",
      desc: [
         "REGISTER",
         "Sign up: Register for free or as a premium member on our website.",
         "Free member: Offers access to verified teachers.",
         "Premium member: Grants access to experienced teachers with proven results.",
         "",
         "SEARCH FOR TUTOR",
         "We will provide verified teacher information via WhatsApp or call.",
         "Premium will have 3-5 preference choices per consignment.",
         "",
         "EXCEL IN STUDIES",
         "Tuition monitoring: Regularly oversee home tuition sessions.",
         // "Feedback: Provide evaluations of tutors to assist other students/parents.",
         "Results: Observe and assess the student’s improvement under personalized tutoring."
      ]
   },
   {
      id: 2,
      icon: icon_2,
      title: "Teacher",
      desc: [
         "REGISTER",
         "Sign up: Register as a free or premium member on our website.",
         "Free member: Gain access to opportunities with verified teaching positions.",
         "Premium member: Connect with high-quality, serious parents for more leads each month.",
         "",
         "SEARCH FOR STUDENT",
         "We will provide verified candidates located near your area.",
         "Premium will have 3-5 leads every month.",
         "",
         "EARN MONEY",
         "Generate income from your work and gain financial independence from your parents or guardians."
      ]
   }
];

const WorkArea = () => {
   return (
      <div className="work-area pd-top-110">
         <div className="container">
            <div className="section-title">
               <div className="row">
                  <div className="col-lg-6 align-self-center">
                     <h6 className="sub-title right-line">What we do</h6>
                     <h2 className="title">How it works?</h2>
                  </div>
                  <div className="col-lg-6 align-self-center">
                     {/* <p className="content mt-lg-0">We will be happy to answer your questions. flick quartz, vex nymphs when MTV ax quiz</p> */}
                  </div>
               </div>
            </div>
            <div className="row">
               {work_data.map((item) => (
                  <div key={item.id} className="col-lg-6 col-md-6">
                     <div className="single-intro-inner style-icon-bg bg-gray text-center">
                        <div className="thumb">
                           <Image src={item.icon} alt="img" />
                           {/* <div className="intro-count">{item.id}</div> */}
                        </div>
                        <div className="details">
                           <h5>{item.title}</h5>
                           {item.desc.map((desc, index) => (
                              <p key={index} style={{ fontWeight: desc === "REGISTER" || desc === "SEARCH FOR TUTOR" || desc === "EXCEL IN STUDIES" || desc === "SEARCH FOR STUDENT" || desc === "EARN MONEY" ? 'bold' : 'normal' }}>
                                 {desc}
                              </p>
                           ))}
                           {/* <Link className="read-more-text" href="/blog-details">Read More <i className="fa fa-angle-right"></i></Link> */}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default WorkArea;