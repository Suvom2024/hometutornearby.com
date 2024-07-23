import Image, { StaticImageData } from "next/image";

import icon_1 from "@/assets/img/icon/17.png"
import icon_2 from "@/assets/img/icon/18.png"
import icon_3 from "@/assets/img/icon/16.png"

interface DataType {
   id: number;
   icon: StaticImageData;
   title: string;
   desc: string;
}[];

const contact_list: DataType[] = [
   {
      id: 1,
      icon: icon_1,
      title: "Our Phone",
      desc: "000 2324 39493",
   },
   {
      id: 2,
      icon: icon_2,
      title: "Our Email",
      desc: "name@website.com",
   },
   {
      id: 3,
      icon: icon_3,
      title: "Our Address",
      desc: "2 St, Loskia, amukara.",
   },
]
const ContactArea = () => {
   return (
      <div className="contact-list pd-top-120 pd-bottom-90">
         <div className="container">
            <div className="row justify-content-center">
               {contact_list.map((item) => (
                  <div key={item.id} className="col-lg-4">
                     <div className="contact-list-inner">
                        <div className="media">
                           <div className="media-left">
                              <Image src={item.icon} alt="img" />
                           </div>
                           <div className="media-body align-self-center">
                              <h5>{item.title}</h5>
                              <p>{item.desc}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default ContactArea
