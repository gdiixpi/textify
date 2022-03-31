import React from "react";

export default function About(props){

    let theme = (props.mode).toString();

    return(
        
        <div className="contact-outer">
            <div className={`image-container ${theme}`}>

                <div className={`contact-inner ${theme}`}>
                    <h1>About Us</h1>
                    <p className="text">Welcome to Textify, your number one source for all utilities for text like capitalization, convert to uppercase and lowercase, etc. We're dedicated to providing the best services to users with a focus on user-friendly UI, flexibility, compatibility and uniqueness. 
                    </p>
                    <div className="skills">
                        <span>Web Design</span>
                        <span>Photoshop & Illustrator</span>
                        <span>Coding</span>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}