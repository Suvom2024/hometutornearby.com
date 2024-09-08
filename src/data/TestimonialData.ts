import { StaticImageData } from "next/image";

import authorImg_1 from "@/assets/img/testimonial/1.png";
import authorImg_2 from "@/assets/img/testimonial/2.png";

interface DataType {
   id: number;
   page: string;
   desc: string;
   author_img: StaticImageData;
   author_name: string;
   designation: string;
}[];

const testi_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      desc: "The tutoring sessions have been incredibly beneficial. They not only helped me grasp difficult concepts in Mathematics but also made learning enjoyable. The flexible schedule fits perfectly with my school timings.",
      author_img: authorImg_2,
      author_name: "Priya Patel",
      designation: "High School Student, Mumbai",
   },
   {
      id: 2,
      page: "home_1",
      desc: "I felt well-prepared for my board exams thanks to the thorough and supportive resources available on this website. The practice materials and study aids were crucial to my success.",
      author_img: authorImg_1,
      author_name: "Karan Gupta",
      designation: "Class 12 Student, Surat",
   },
   {
      id: 3,
      page: "home_1",
      desc: "I’ve seen a remarkable improvement in my Science grades, thanks to the engaging and well-organized resources provided by this website. The approach to learning has made a real difference.",
      author_img: authorImg_2,
      author_name: "Sneha Joshi",
      designation: "Grade 10 Student, Pune",
   },
   {
      id: 4,
      page: "home_1",
      desc: "This website has been a fantastic resource for my MBA studies. The interactive sessions and career-oriented guidance have helped me significantly in grasping complex concepts.",
      author_img: authorImg_1,
      author_name: "Vikram Singh",
      designation: "MBA Student, Chandigarh",
   },
   {
      id: 5,
      page: "home_1",
      desc: "The resources available on this website have greatly enhanced my understanding of Statistics. The clarity of explanations and practical examples have been incredibly valuable for my coursework.",
      author_img: authorImg_2,
      author_name: " Neha Reddy",
      designation: "College Student, Hyderabad",
   },

   // home_2

   {
      id: 1,
      page: "home_2",
      desc: "The tutoring sessions have been incredibly beneficial. They not only helped me grasp difficult concepts in Mathematics but also made learning enjoyable. The flexible schedule fits perfectly with my school timings.",
      author_img: authorImg_2,
      author_name: "Priya Patel",
      designation: "High School Student, Mumbai",
   },
   {
      id: 2,
      page: "home_2",
      desc: "I felt well-prepared for my board exams thanks to the thorough and supportive resources available on this website. The practice materials and study aids were crucial to my success.",
      author_img: authorImg_1,
      author_name: "Karan Gupta",
      designation: "Class 12 Student, Surat",
   },
   {
      id: 3,
      page: "home_2",
      desc: "I’ve seen a remarkable improvement in my Science grades, thanks to the engaging and well-organized resources provided by this website. The approach to learning has made a real difference.",
      author_img: authorImg_2,
      author_name: "Sneha Joshi",
      designation: "Grade 10 Student, Pune",
   },
   {
      id: 4,
      page: "home_2",
      desc: "This website has been a fantastic resource for my MBA studies. The interactive sessions and career-oriented guidance have helped me significantly in grasping complex concepts.",
      author_img: authorImg_1,
      author_name: "Vikram Singh",
      designation: "MBA Student, Chandigarh",
   },
   {
      id: 5,
      page: "home_2",
      desc: "The resources available on this website have greatly enhanced my understanding of Statistics. The clarity of explanations and practical examples have been incredibly valuable for my coursework.",
      author_img: authorImg_2,
      author_name: " Neha Reddy",
      designation: "College Student, Hyderabad",
   },

   // home_3

   {
      id: 1,
      page: "home_3",
      desc: "The tutoring sessions have been incredibly beneficial. They not only helped me grasp difficult concepts in Mathematics but also made learning enjoyable. The flexible schedule fits perfectly with my school timings.",
      author_img: authorImg_2,
      author_name: "Priya Patel",
      designation: "High School Student, Mumbai",
   },
   {
      id: 2,
      page: "home_3",
      desc: "I felt well-prepared for my board exams thanks to the thorough and supportive resources available on this website. The practice materials and study aids were crucial to my success.",
      author_img: authorImg_1,
      author_name: "Karan Gupta",
      designation: "Class 12 Student, Surat",
   },
   {
      id: 3,
      page: "home_3",
      desc: "I’ve seen a remarkable improvement in my Science grades, thanks to the engaging and well-organized resources provided by this website. The approach to learning has made a real difference.",
      author_img: authorImg_2,
      author_name: "Sneha Joshi",
      designation: "Grade 10 Student, Pune",
   },
   {
      id: 4,
      page: "home_3",
      desc: "This website has been a fantastic resource for my MBA studies. The interactive sessions and career-oriented guidance have helped me significantly in grasping complex concepts.",
      author_img: authorImg_1,
      author_name: "Vikram Singh",
      designation: "MBA Student, Chandigarh",
   },
   {
      id: 5,
      page: "home_3",
      desc: "The resources available on this website have greatly enhanced my understanding of Statistics. The clarity of explanations and practical examples have been incredibly valuable for my coursework.",
      author_img: authorImg_2,
      author_name: " Neha Reddy",
      designation: "College Student, Hyderabad",
   },
];

export default testi_data;