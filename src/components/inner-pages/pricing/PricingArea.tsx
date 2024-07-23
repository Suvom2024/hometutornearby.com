import Link from "next/link";
import { CSSProperties } from "react";

const pricing_data = [
   {
      id: 1,
      title: "Premium Membership",
      price: 500,
      currency: "Rs.",
      contacts: 10,
      validity: "6 Months",
      demoClassText: "GET FREE DEMO CLASS",
      demoClassSubText: "Best value for your money!",
      benefits: [
         "Professional & Experienced Tutors",
         "Best Home Tutors at Affordable Price",
         "Contact Tutors Directly",
         "Free Tutor replacement support for 6 months.",
         "Premium Phone/Whatsapp/Chat Support.",
         "100% money back guarantee."
      ]
   },
   {
      id: 2,
      title: "Basic Membership",
      price: 635,
      currency: "Rs.",
      contacts: 5,
      validity: "3 Months",
      demoClassText: "GET FREE DEMO CLASS",
      demoClassSubText: "Best value for your money!",
      benefits: [
         "Experienced Tutors",
         "Affordable Price",
         "Contact Tutors Directly",
         "Free Tutor replacement support for 3 months.",
         "Basic Phone/Whatsapp Support."
      ]
   }
];

const PricingArea = () => {
   const ribbonStyle: CSSProperties = {
      backgroundColor: "#8B0000",
      color: "#fff",
      textAlign: "center",
      fontSize: "20px",
      fontWeight: "bold",
      padding: "10px 0",
      position: "relative",
      top: 0,
      left: -35,
      width: "120%",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      background: "linear-gradient(to bottom right, #8B0000 50%, #a20d0d 100%)",
      clipPath: "polygon(0 0, 100% 0, 97% 100%, 3% 100%)",
      marginBottom: "20px",
      borderRadius: "25px", // Rounded corners
   };

   const ribbonTextStyle: CSSProperties = {
      display: "block",
      lineHeight: "1.2",
   };

   return (
      <div className="pricing-area pd-top-120 pd-bottom-90">
         <div className="container">
            <div className="row justify-content-center">
               {pricing_data.map((item) => (
                  <div key={item.id} className="col-lg-5 col-md-6 mb-4">
                     <div className="single-pricing-inner-wrap">
                        <div className="single-pricing-inner">
                           <div style={ribbonStyle}>
                              <span style={ribbonTextStyle}>Upto 50% extra contacts</span>
                              <span style={ribbonTextStyle}>free of cost in case you don't find tutor</span>
                              <span style={ribbonTextStyle}>with given contacts.</span>
                           </div>
                           <h6 className="title">{item.title}</h6>
                           <div className="price-area">
                              <span className="new-price">{item.currency}{item.price}</span>
                           </div>
                           <div className="pricing-details">
                              <p>Tutor Contacts: <span>{item.contacts}</span></p>
                              <p>Validity: <span>{item.validity}</span></p>
                           </div>
                           <p className="demo-class-subtext">{item.demoClassSubText}</p>
                           <ul className="pricing-list">
                              {item.benefits.map((benefit, index) => (
                                 <li key={index} className="check"><i className="fa fa-check"></i>{benefit}</li>
                              ))}
                           </ul>
                           <Link href="#">
                              <button className="ed-btn btn-base btn-radius w-100">{item.demoClassText}</button>
                           </Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default PricingArea;
