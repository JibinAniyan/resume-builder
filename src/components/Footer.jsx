import React from 'react'
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <div style={{height:'300px', backgroundColor: 'purple',color:'white'}} className='d-flex justify-content-center align-items-center p-5 flex-column' >
        <h1>contact us</h1>
        <h5 className='fw-bolder'> <IoMail /> resume builder@gmail.com</h5>
        <h5> <FaPhoneAlt /> 9054657473</h5>
        <h4>conncet with us</h4>
        <h3> <FaWhatsapp /> <FaFacebookF /> <FaInstagram /></h3>
        <h6>Designed to build with <FaHeart /> react</h6>
    </div>
    
  )
}

export default Footer