import React from 'react';
import emailjs from 'emailjs-com';

export default function Contact(props){

    let theme = (props.mode).toString();

    const sendMail = (e)=>{
        e.preventDefault();

        emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, e.target, `${process.env.REACT_APP_USER_ID}`)
          .then((result) => {
              console.log(result.text);
              
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }

    return(
        
        <div className="contact-outer">
            <div className={`image-container ${theme}`}>

                <div className={`contact-inner ${theme}`}>
                    <h1>Contact Us</h1>
                    <form onSubmit={sendMail}> 
                        <label htmlFor="name">FULL NAME</label>
                        <input className="contact" type="text" id="name" name="user_name" placeholder="Your Full Name"></input>
                        <label htmlFor="email">EMAIL ADDRESS</label>
                        <input className="contact" type="email" id="email" name="user_email" placeholder="Your Email Address"></input>
                        <label htmlFor="message">MESSAGE</label>
                        <textarea className="contact" id="message" name="message" placeholder="Your Message" rows="3" ></textarea>
                        <input className="send-btn" type="submit" value="SEND"></input>
                    </form>
                </div>
            </div>
        </div>

    )
}