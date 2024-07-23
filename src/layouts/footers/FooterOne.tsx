import Image from "next/image";
import Link from "next/link";

import footerLogo from "@/assets/img/footer-logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const course_data: string[] = ["Advanced Economics", "Quantum Physics", "Data Structures", "Constitutional Law", "Mechanics"];

const FooterOne = () => {
  return (
    <footer className="footer-area bg-gray">
      {/* <div className="footer-subscribe">
        <div className="container">
          <form className="footer-subscribe-inner">
            <div className="row">
              <div className="col-lg-5">
                <div className="single-input-inner style-border-bottom">
                  <input type="text" placeholder="Your Full Name" />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="single-input-inner style-border-bottom">
                  <input type="text" placeholder="Your Email Address" />
                </div>
              </div>
              <div className="col-lg-2">
                <Link className="ed-btn btn-base" href="#">Subscribe</Link>
              </div>
            </div>
          </form>
        </div>
      </div> */}
      <div className="footer-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row">
                <div className="col-lg-5 col-md-6">
                  <div className="widget widget_contact">
                    <h4 className="widget-title">Contact Us</h4>
                    <ul className="details">
                      <li><i className="fa fa-map-marker"></i> Gurgaon , New Delhi</li>
                      <li><i className="fa fa-envelope"></i> hometutor@gmail.com</li>
                      <li><i className="fa fa-phone"></i> +91 87962 44651</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="widget widget_nav_menu">
                    <h4 className="widget-title">Course</h4>
                    <ul>
                      {course_data.map((list, i) => (
                        <li key={i}><Link href="/course">{list}</Link></li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* <div className="col-lg-3 col-md-6">
                  <div className="widget widget_contact">
                    <h4 className="widget-title">Twitter Feed</h4>
                    <ul className="details">
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 text-center align-self-center">
              <Link href="/"><Image src={footerLogo} alt="img" /></Link>
            </div>
            <div className="col-lg-4 col-md-6 text-center align-self-center">
              <ul className="social-media mt-md-0 mt-3">
                <li><Link className="facebook" href="#"><FontAwesomeIcon icon={faFacebook} /></Link></li>
                <li><Link className="instagram" href="#"><FontAwesomeIcon icon={faInstagram} /></Link></li>
                <li><Link className="youtube" href="#"><FontAwesomeIcon icon={faYoutube} /></Link></li>
                <li><Link className="whatsapp" href={`https://wa.me/+918777061431`}><FontAwesomeIcon icon={faWhatsapp} /></Link></li>
              </ul>
            </div>
            <div className="col-lg-4 text-center align-self-center mt-lg-0 mt-3">
              {/* <p>copyright 2024 by edumint.com</p>  */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterOne;
