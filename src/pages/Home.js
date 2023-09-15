import React from 'react';
import UpLanding1 from "../Images/UpLanding1.jpeg"
import './Home.css';

function Home() {
    return (
        <div className='home-page'>
            <div className='icons-container'>
                <i className='fa fa-facebook' id="facebook-icon"> </i>
                <a href="https://api.whatsapp.com/send?phone=+254701353971" target="_blank" rel="noopener noreferrer"> 
                <i className='fa fa-whatsapp' id="whatsapp-icon"></i>
                </a> 
                <a href='https://instagram.com/_uprime?igshid=OGQ5ZDc2ODk2ZA==' target="_blank" rel="noopener noreferrer">
                <i className='fa fa-instagram' id="instagram-icon"></i>
                </a>
                <i className='fa fa-linkedin' id='linkedin-icon'></i>
            </div>
            <div className='text1'>
                <h1 id='h1'>ACCELERATING</h1>
            </div>
            <div className='text2'>
                <h2 id='h2'>YOUR SLOW MOVING BUSINESS</h2>
            </div>
            <div className='image-container'>
                <img src={UpLanding1} id="image"alt='snail&car'/>
            </div>
            <div className='contact-container'>
                <p id='contact'>CONTACT US TODAY:  
                <i className='fa fa-phone' id='phone'>  +254 701353 971</i>
                <i className='fa fa-envelope' id='mail'> :mwayiupright@gmail.com</i></p>
            </div>
        </div>
    );
}

export default Home;