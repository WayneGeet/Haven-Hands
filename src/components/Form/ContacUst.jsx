import React from 'react';
import {useFormik} from "formik";
import * as Yup from "yup";

export const ContactUs = () => {
    const Formik = useFormik({
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
            message:Yup.string().max(400)}),
            onSubmit: (values, {resetForm}) => {
                alert(values)
                // resetForm()
            }
        })
  return (
    <div>
        <form>
        <label htmlFor="user_name" className={`${(Formik.touched.name && Formik.errors.name ) && "text-red-500"}`}>
                Name
                </label>
            <input type="text" name="name" id="user_name"
            onBlur={Formik.handleBlur}
            onChange={Formik.handleChange} 
            value={Formik.values.name} />

            <label htmlFor="email" className={`${(Formik.touched.email && Formik.errors.email ) && "text-red-500"}`}>Email</label>
            <input type="email" name="email" id="user_email"
            onBlur={Formik.handleBlur}
            onChange={Formik.handleChange} 
            value={Formik.values.email} />

            <label htmlFor="phone">Phone Number</label>
            <input type="tel" name="phone" id="phone" 
            onBlur={Formik.handleBlur}
            onChange={Formik.handleChange} 
            value={Formik.values.phone}/>

            <label htmlFor="message">Message</label>
            <input type="text" name="message" id="message" 
            onBlur={Formik.handleBlur}
            onChange={Formik.handleChange} 
            value={Formik.values.message}/>
            
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

