import Link from "next/link";
import ContactForm from "../forms/ContactForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const icons = [
   { class: faFacebook, href: "#" },
   { class: faInstagram, href: "#" },
   { class: faYoutube, href: "#" },
   { class: faWhatsapp, href: "https://wa.me/+918777061431" } // Replace with your WhatsApp number
];

const ContactFormArea = () => {
   return (
      <div className="counter-area pd-bottom-120">
         <div className="container">
            <div className="row">
               <div className="col-lg-4">
                  <div className="section-title mb-0">
                     <h6 className="sub-title right-line">Get in touch</h6>
                     <h2 className="title">Write Us a Message</h2>
                     <p className="content pb-3">We will be happy to answer your questions</p>
                     <ul className="social-media style-base pt-3">
                        {icons.map((icon, i) => (
                           <li key={i}>
                              <Link href={icon.href}>
                                 <FontAwesomeIcon icon={icon.class} aria-hidden="true" />
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
               <div className="col-lg-8 mt-5 mt-lg-0">
                  <ContactForm />
               </div>
            </div>
         </div>
      </div>
   );
};

export default ContactFormArea;
