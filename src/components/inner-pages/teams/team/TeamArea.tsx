import team_data from '@/data/TeamData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const TeamArea = () => {
   return (
      <div className="team-area pd-top-120 pd-bottom-90">
         <div className="container">
            <div className="row justify-content-center">
               {team_data.filter((items) => items.page === "home_1").map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                     <div className="single-team-inner">
                        <div className="thumb">
                           <Image src={item.thumb} alt="img" />
                           <div className="social-wrap">
                              <div className="social-wrap-inner">
                                 {/* You can replace faFacebook with any other relevant icon or remove it */}
                                 <Link className="social-share" href="#"><FontAwesomeIcon icon={faFacebook} /></Link>
                                 <ul>
                                    <li><Link href="#"><FontAwesomeIcon icon={faFacebook} /></Link></li>
                                    <li><Link href="#"><FontAwesomeIcon icon={faInstagram} /></Link></li>
                                    <li><Link href="#"><FontAwesomeIcon icon={faYoutube} /></Link></li>
                                    <li><Link href={`https://wa.me/1234567890`}><FontAwesomeIcon icon={faWhatsapp} /></Link></li> {/* Replace with your WhatsApp number */}
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="details">
                           <h4><Link href="#">{item.title}</Link></h4>
                           <span>{item.designation}</span>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default TeamArea;
