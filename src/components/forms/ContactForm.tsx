"use client";
import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import StickyHireButton from '../StickyHireButton';

interface FormData {
   user_name: string;
   user_last_name: string;
   user_email: string;
   subject: string;
   message: string;
}

const schema = yup
   .object({
      user_name: yup.string().required().label("First Name"),
      user_last_name: yup.string().required().label("Last Name"),
      user_email: yup.string().required().email().label("Email"),
      subject: yup.string().required().label("Subject"),
      message: yup.string().required().label("Message"),
   })
   .required();

const ContactForm = () => {
   const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({ resolver: yupResolver(schema) });

   const form = useRef<HTMLFormElement>(null);

   const sendMessageToWhatsApp = (data: FormData) => {
      const { user_name, user_last_name, user_email, subject, message } = data;
      const whatsappMessage = `Name: ${user_name} ${user_last_name}%0AEmail: ${user_email}%0ASubject: ${subject}%0AMessage: ${message}`;
      const whatsappUrl = `https://wa.me/<YOUR_WHATSAPP_NUMBER>?text=${whatsappMessage}`;

      window.open(whatsappUrl, '_blank');
      reset();
      toast('Message prepared for WhatsApp', { position: 'top-center' });
   };

   return (
      <div>
         <form ref={form} onSubmit={handleSubmit(sendMessageToWhatsApp)} className="contact-form-inner mt-5 mt-md-0">
            <div className="row">
               <div className="col-lg-6">
                  <div className="single-input-inner style-bg-border">
                     <input type="text" {...register("user_name")} placeholder="First Name" name="user_name" />
                     <p className="form_error">{errors.user_name?.message}</p>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="single-input-inner style-bg-border">
                     <input type="text" {...register("user_last_name")} placeholder="Last Name" name="user_last_name" />
                     <p className="form_error">{errors.user_last_name?.message}</p>
                  </div>
               </div>
               <div className="col-6">
                  <div className="single-input-inner style-bg-border">
                     <input type="text" {...register("user_email")} placeholder="Email" name="user_email" />
                     <p className="form_error">{errors.user_email?.message}</p>
                  </div>
               </div>

               <div className="col-6">
                  <div className="single-input-inner style-bg-border">
                     <input type="text" {...register("subject")} placeholder="Subject" name="subject" />
                     <p className="form_error">{errors.subject?.message}</p>
                  </div>
               </div>
               <div className="col-12">
                  <div className="single-input-inner style-bg-border">
                     <textarea {...register("message")} placeholder="Message" name="message"></textarea>
                     <p className="form_error">{errors.message?.message}</p>
                  </div>
               </div>
               <p className="form-messege mb-0 mt-20 text-center"></p>
               <div className="col-12">
                  <button type="submit" className="ed-btn btn-base">Send Message</button>
               </div>
            </div>
         </form>
         <StickyHireButton />
      </div>
   )
}

export default ContactForm;
