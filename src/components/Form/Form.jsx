import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {useFormik} from "formik";
import * as Yup from "yup";

export const ContactUs = () => {
    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            phone:"",
            message:"",
        },
        validationSchema:Yup.object({
            name:Yup.string().max(30, "name must be 30 characters or less").required("Name is required"),
            email:Yup.string().email("Invalid email address").required("email is required"),
            phone:Yup.number("invalid input"),
            message:Yup.string().max(400, "message must be 400 characters or less")
        }),
        onSubmit: (values, {resetForm}) => {
            // alert(values)
            sendEmail()
            resetForm()
            
            
        }
    })
    
  const form = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();
    emailjs.sendForm('service_3vfuu8s', 'template_pb50xsr', form.current, `WjKDGRZJY4bv9g1uh`)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
    
  };

  return (
    <form ref={form} onSubmit={formik.handleSubmit} 
        className="mt-4 flex flex-col gap-4 w-full">
        <div className="flex flex-col">
            <label htmlFor="inpt" className={`${(formik.touched.name && formik.errors.name ) ? "font-semibold text-red-500":""} text-white font-normal cursor-pointer`}>
                {(formik.touched.name && formik.errors.name) ? formik.errors.name : "Name"}
                </label>
            <input 
            id="inpt"
            name="name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange} 
            value={formik.values.name}
            type="text" 
            placeholder="e.g. Stephen King" 
            className="border rounded-md px-4 py-2 focus:outline-blue-500 focus:outline-1" />
        </div>
        <div className="flex flex-col">
            <label htmlFor="inpt1" className={`${(formik.touched.email && formik.errors.email) ? "font-semibold text-red-500":""} text-white font-normal cursor-pointer`}>
                {formik.touched.email && formik.errors.email ? formik.errors.email : "Email"}
            </label>
            <input 
            name="email"
            type="email" 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
            value={formik.values.email} 
            placeholder="e.g. stephenking@lorem.com" 
            id="inpt1" 
            className="border rounded-md px-4 py-2 focus:outline-blue-500 focus:outline-1" />
        </div>
        <div className="flex flex-col">
            <label htmlFor="inpt2" className="font-normal text-white cursor-pointer">{formik.errors.phone ? formik.errors.phone : "Mobile Number"}</label>
            <input
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange} 
            type="text" 
            placeholder="e.g. +1 234 567 890" 
            id="inpt2" 
            className="border rounded-md px-4 py-2 focus:outline-blue-500 focus:outline-1" />
        </div>
        <div className="flex flex-col">
            <label htmlFor="inpt3" className="font-normal text-white cursor-pointer">{formik.errors.message ? formik.errors.message : "Message"}</label>
            <textarea
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange} 
            type="text" 
            placeholder="e.g enter message" 
            id="inpt3"  />
        </div>
        <button disabled={formik.errors.email && formik.errors.name} onClick={console.log(formik.errors.name, formik.errors.email, formik.errors.phone)} className="btn_pry" type="submit">Send</button>
        
    </form>
  );
};