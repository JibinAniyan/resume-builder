import React from 'react'
import { IoDocument } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { FaDownload } from "react-icons/fa";


function ResumeGerator() {
  return (
<section className=' container-fluid' >

  <h2 className='text-center m-5' >Create a job winning resume in minutes</h2>
<div style={{height:'60vh'}}  className="row justify-content-center align-items-center ">
  <div className="col-md-1"></div>
  <div className="col-md-4 border shadow rounded text-center p-5 ">
<IoDocument className='text-primary fs-1 mb-3' />
<h4>Add your information</h4>
<h6>add pre-written examples to each section</h6>
<h3>step 1</h3>

  </div>
  <div className="col-md-2"></div>
  <div className="col-md-4 border shadow rounded text-center p-5 ">
<FaDownload className='text-danger fs-1 mb-3' />
<h4>Download your resume</h4>
<h6>Download and start applying</h6>
<h3>step 2</h3>

  </div>
  <div className="col-md-1"></div>
 <Link to={'/form'} className='btn text-white ' style={{backgroundColor:'purple', width:'100px'}} > Lets start </Link>
</div>
</section>  )
}

export default ResumeGerator     