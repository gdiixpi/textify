import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props){
    
    let theme = (props.mode).toString();

    const handleMenuBtn = ()=>{
        var path1 = document.querySelector('.path1');
        var path2 = document.querySelector('.path2');
        var mline = document.querySelector('.mline');

        path1.classList.toggle('cross');
        path2.classList.toggle('cross');
        mline.classList.toggle('hide');

        var navbar = document.querySelector('nav ul');

        navbar.classList.toggle('active');
    }

    return(
        <nav className={theme}>
            <div>
                <h1><Link to='/'>{props.title}</Link></h1>
            </div>    
            <div>
                <ul>
                    <li onClick={handleMenuBtn}><Link to='/'>Home</Link></li>
                    <li onClick={handleMenuBtn}><Link to='/about'>About</Link></li>
                    <li onClick={handleMenuBtn}><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>      
            <div className="menu-btn">
                
                <svg className="svgburg" onClick={handleMenuBtn} width="40" height="40" viewBox="0 0 45 43" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
  
                    <path className="path1" d="M1.5 7L27.5 33C27.5 33 30.5 36 36.5 40.5C42.5 45 48 33.5 41.5 33C35 32.5 2 33 2 33" stroke="white" strokeWidth="2"/>
    
                    <path className="path2" d="M2 33L28 7C28 7 33.5 1 37 1C40.5 1 43 6.20692 40 7C37 7.79308 1 7 1 7" stroke="white" strokeWidth="2"/>
    
                    <path className="mline" d="M1.5 20H28.5" stroke="white" strokeWidth="2"/>
                </svg>
            </div>    
        </nav>
    )
}