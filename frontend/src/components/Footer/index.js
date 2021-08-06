import React from "react";
import './Footer.css'


const Footer = () =>{
    return(
        <div className='footer'>
                <div className="about-logos"> 
                        <img className="user-object--avi" src="https://avatars.githubusercontent.com/u/75050631?v=4" alt="Nick" />
                       <div className='icons'>Moshup was developed by Nick Kury
                        <a id='git' className="fab fa-github" href="https://github.com/NickKury"/>
                        <a id='link' className="fab fa-linkedin" href="https://www.linkedin.com/in/nick-kury/"/>
                        </div> 
                
                </div>
        </div>
    )  
}

export default Footer;