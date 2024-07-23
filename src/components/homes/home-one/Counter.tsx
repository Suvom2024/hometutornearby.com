import Image, { StaticImageData } from "next/image";

import icon_1 from "@/assets/img/icon/1.png";
import icon_2 from "@/assets/img/icon/2.png";
import icon_3 from "@/assets/img/icon/3.png";
import Count from "@/components/common/Count";

interface DataType {
   id: number;
   icon: StaticImageData;
   count: number;
   title: string;
}[];

const counter_data: DataType[] = [
   {
      id: 1,
      icon: icon_1,
      count: 1300,
      title: "Learners & counting",
   },
   {
      id: 2,
      icon: icon_2,
      count: 50,
      title: "Total courses",
   },
   {
      id: 3,
      icon: icon_3,
      count: 1245,
      title: "Successful students",
   },
]

const Counter = () => {
   return (
      <div className="counter-area bg-gray">
         <div className="container">
            <div className="counter-area-inner pd-top-120 pd-bottom-70" style={{ backgroundImage: `url(/assets/img/other/1.png)` }}>
               <div className="row">
                  <div className="col-lg-8 mb-5 mb-lg-0">
                     <div className="section-title mb-0">
                        <h6 className="sub-title right-line">Funfact</h6>
                        <h2 className="title">Strength in Numbers</h2>
                        <p className="content pb-3">At Home Town Tutor, we believe that success is a collective effort. Our approach harnesses the power of collaborative learning and community support to help students achieve their highest potential.</p>
                        <div className="btn-counter bg-base mt-4">
                           <h3 className="left-val align-self-center"><span className="counter"><Count number={1.2} /></span>k+</h3>
                           <div className="right-val align-self-center">
                              Successful <br /> students
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 align-self-center">
                     <ul className="single-list-wrap">
                        {counter_data.map((item) => (
                           <li key={item.id} className="single-list-inner style-box-bg">
                              <div className="media">
                                 <div className="media-left">
                                    <Image src={item.icon} alt="img" />
                                 </div>
                                 <div className="media-body align-self-center">
                                    <h5><span className="counter"><Count number={item.count} /></span>+</h5>
                                    <p>{item.title}</p>
                                 </div>
                              </div>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Counter
