// components/WorkArea.tsx
import React from 'react';
import WorkCardClient from '../../WorkCardClient';
import icon_1 from '@/assets/img/icon/12.png';
import icon_2 from '@/assets/img/icon/13.png';

const work_data = [
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

const WorkArea: React.FC = () => {
   return (
      <div style={{ paddingTop: '110px' }}>
         <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               marginBottom: '40px'
            }}>
               <div style={{
                  textAlign: 'center',
                  maxWidth: '80%', // Optional: to control the maximum width of the section
               }}>
                  <div className="section-title">
                     <h6 className="sub-title double-line">What We Do</h6>
                     <h2 className="title">How It Works?</h2>
                  </div>
               </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
               {work_data.map((item) => (
                  <div key={item.id} style={{ flex: '1 1 calc(50% - 20px)', boxSizing: 'border-box' }}>
                     <WorkCardClient
                        icon={item.icon}
                        title={item.title}
                        desc={item.desc}
                     />
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default WorkArea;
