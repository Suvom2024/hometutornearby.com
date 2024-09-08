"use client";
import Link from "next/link";
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { getDatabase, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";
import axios from 'axios';
import StickyHireButton from '../StickyHireButton';
import firebaseConfig from './firebaseConfig'; // Import Firebase configuration

console.log('Initializing Firebase with config:', firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

interface FormData {
   userType: string;
   name: string;
   mobileNumber: string;
   email: string;
   course: string;
   subject: string;
}

const SignupForm = () => {
   const schema = yup
      .object({
         userType: yup.string().required("Please select a user type.").label("User Type"),
         name: yup.string().required("Please enter your name.").label("Name"),
         mobileNumber: yup
            .string()
            .required("Please enter a mobile number.")
            .min(10, "Enter a 10-digit mobile number.")
            .max(10, "Enter a 10-digit mobile number.")
            .label("Mobile Number"),
         email: yup.string().required("Please enter your email.").email("Enter a valid email.").label("Email"),
         course: yup.string().required("Please enter a course.").label("Course"),
         subject: yup.string().required("Please enter subjects.").label("Subject"),
      })
      .required();

   const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
      resolver: yupResolver(schema)
   });

   const onSubmit = async (data: FormData) => {
      console.log('Form Data:', data);

      const db = getDatabase(app); // Get a reference to the database
      const newUserRef = ref(db, 'users/' + Date.now()); // Create a unique user reference

      try {
         await set(newUserRef, data); // Save data to Firebase
         await axios.post('/api/save-registration', data); // Send data to the backend to save in Excel
         toast.success('Registration successful', { position: 'top-center' });
         reset();
      } catch (error) {
         toast.error('Failed to register', { position: 'top-center' });
         console.error('Error saving data to Firebase or Excel:', error);
      }
   };

   return (
      <div>
         <form onSubmit={handleSubmit(onSubmit)} className="signin-inner">
            <div className="form-header">
               <h3>FREE Registration</h3>
            </div>
            <div className="form-group">
               <label className="form-label" style={{ fontSize: '1.0rem' }}>I am a</label>
               <div className="form-radio-group" style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ marginRight: '20px' }}>
                     <input type="radio" {...register("userType")} value="Student/Parent" id="student" />
                     <label htmlFor="student">Student/Parent</label>
                  </div>
                  <div>
                     <input type="radio" {...register("userType")} value="Teacher" id="teacher" />
                     <label htmlFor="teacher">Teacher</label>
                  </div>
               </div>
               <p className="form_error">{errors.userType?.message}</p>
            </div>
            <div className="form-group">
               <div className="single-input-inner style-bg-border">
                  <input type="text" {...register("name")} placeholder="Name" />
                  <small>Enter your full name</small>
                  <p className="form_error">{errors.name?.message}</p>
               </div>
            </div>
            <div className="form-group">
               <div className="single-input-inner style-bg-border">
                  <input type="text" {...register("mobileNumber")} placeholder="Mobile Number" />
                  <small>We don't misuse your phone number</small>
                  <p className="form_error">{errors.mobileNumber?.message}</p>
               </div>
            </div>
            <div className="form-group">
               <div className="single-input-inner style-bg-border">
                  <input type="email" {...register("email")} placeholder="Enter Email" />
                  <small>We don't misuse your email.</small>
                  <p className="form_error">{errors.email?.message}</p>
               </div>
            </div>
            <div className="form-group">
               <div className="single-input-inner style-bg-border">
                  <input type="text" {...register("course")} placeholder="Courses you teach" />
                  <small>e.g., Class I CBSE or Class X or B.Tech, etc.</small>
                  <p className="form_error">{errors.course?.message}</p>
               </div>
            </div>
            <div className="form-group">
               <div className="single-input-inner style-bg-border">
                  <input type="text" {...register("subject")} placeholder="Subjects you teach" />
                  <small>e.g., maths, physics, or all subjects, etc.</small>
                  <p className="form_error">{errors.subject?.message}</p>
               </div>
            </div>
            <div className="form-group mb-4">
               <button type="submit" className="ed-btn btn-base w-100">FIND STUDENTS NOW!</button>
            </div>
            <div className="form-footer">
               <p>By signing up, you agree to our <Link href="/terms-and-conditions">Terms and Conditions</Link></p>
               <p>Already a member? <Link href="/login"><strong>Login</strong></Link></p>
            </div>
         </form>
         <StickyHireButton />
      </div>
   )
}

export default SignupForm;
