"use client";
import Link from "next/link";
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import StickyHireButton from '../StickyHireButton';
import React, { useState } from 'react';

interface FormData {
   userType: string;
   name: string;
   mobileNumber: string;
   email: string;
   course: string;
   subject: string;
}

const SigninForm = () => {
   const [loading, setLoading] = useState(false);

   const schema = yup
      .object({
         userType: yup.string().required().label("User Type"),
         name: yup.string().required("Please enter your name.").label("Name"),
         mobileNumber: yup.string().required("Please enter mobile number.").min(10, "Enter 10 digit mobile number.").max(10, "Enter 10 digit mobile number.").label("Mobile Number"),
         email: yup.string().required().email().label("Email"),
         course: yup.string().required("Please enter course. Eg. Class I CBSE or Class X or B.Tech etc.").label("Course"),
         subject: yup.string().required("Please enter subjects. Eg. maths, physics or all subjects etc.").label("Subject"),
      })
      .required();

   const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({ resolver: yupResolver(schema) });

   const onSubmit = async (data: FormData) => {
      setLoading(true); // Start loading
      try {
        const response = await axios.post('/api/submit-form', data);
    
        if (response.status === 200) {
          toast.success('Registration successful', { position: 'top-center' });
          reset();
        } else {
          throw new Error(response.data.message || 'Unknown error occurred');
        }
      } catch (error)
       {
        if (axios.isAxiosError(error)) {
          toast.error(`Failed to register: ${error.message}`, { position: 'top-center' });
        } else {
          console.error('Unexpected error:', error);
          toast.error('An unexpected error occurred', { position: 'top-center' });
        }
      }
      finally {
         setLoading(false); // Stop loading
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
                  <small>We don&apos;t misuse your phone number</small>
                  <p className="form_error">{errors.mobileNumber?.message}</p>
               </div>
            </div>

            <div className="form-group">
               <div className="single-input-inner style-bg-border">
                  <input type="email" {...register("email")} placeholder="Enter Email" />
                  <small>We don&apos;t misuse your email.</small>
                  <p className="form_error">{errors.email?.message}</p>
               </div>
            </div>
            <div className="form-group">
               <div className="single-input-inner style-bg-border">
                  <input type="text" {...register("course")} placeholder="Course you need help with (e.g. Class I CBSE or Class X or B.Tech etc.)" />
                  <small>eg. Class I CBSE or Class X or B.Tech etc.</small>
                  <p className="form_error">{errors.course?.message}</p>
               </div>
            </div>
            <div className="form-group">
               <div className="single-input-inner style-bg-border">
                  <input type="text" {...register("subject")} placeholder="Subject you need help with (e.g. maths, physics or all subjects etc.)" />
                  <small>maths, physics or all subjects etc.</small>
                  <p className="form_error">{errors.subject?.message}</p>
               </div>
            </div>
            <button type="submit" className="ed-btn btn-base w-100" disabled={loading}>
            {loading ? 'Submitting...' : 'GET FREE DEMO CLASS!'}
            </button>
            <div className="form-footer">
               <p>By signing up you agree to our <Link href="/terms-and-conditions">Terms and Conditions</Link></p>
            </div>
         </form>
         <StickyHireButton />
      </div>
   )
}

export default SigninForm;