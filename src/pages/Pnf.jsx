import React from 'react'
import { Link } from "react-router-dom";
function Pnf() {
  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center p-5 flex-column' >
    <img width={'35%'} src="https://assets-v2.lottiefiles.com/a/b5548108-1152-11ee-ad9b-ef5a7b953e15/ejIEnQwOtU.gif" alt="error" />
    <h1>404!</h1>
    <h4>page not found</h4>
    <Link to={'/'} className='btn text-white mb-3 '  style={{ backgroundColor: 'purple' }} >Go to Home</Link>
    </div>
  )
}

export default Pnf