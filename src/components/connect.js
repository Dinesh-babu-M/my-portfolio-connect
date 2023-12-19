import React from 'react'
import './connect.css';
import {useRef} from 'react';
import emailjs from '@emailjs/browser';


const Connect = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ebct08g', 'template_sj2umnc', form.current, 'arXwqTctDAICqQhTq')
       .then((result) => {


      	// Show a success alert
      	alert(`Email sent successfully! Thank you....,`);
       
      }, (error) => {
       	console.log(error.text);

      	// Show an error alert
      	alert(`Please try again later...`);
      });


    e.target.reset();
  };



  return (
    <section>
      <div className='container'>
        <div className='connect-container'>
          <h1>Contact Us</h1>
          <form ref={form} onSubmit={sendEmail} className='form-container'>
            <input type="text" placeholder='Name' name='user_name' required />
            <input type="email" placeholder='Email' name='user_email' required />
            <input type="text" placeholder='Email Subject' name='subject' required />
            <textarea name="message" cols="20" rows="6" placeholder='Your Message' required/>
            <button type='submit' className='btn' >Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Connect;