import React, { useEffect, useState } from 'react'

import Preview from '../components/Preview'
import { getResumeAPI } from '../services/allAPI'
import { Link, useParams } from 'react-router-dom'
import { FaDownload } from "react-icons/fa";
import { IoIosRefreshCircle } from "react-icons/io";
import { FaBackward } from "react-icons/fa";
import Edit from '../components/Edit';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';


function ViewResume() {
  const { id } = useParams()
  console.log(id);

  const [resume, setResume] = useState({})

  useEffect(() => {
    getResumeDetails()
  }, [])

  const getResumeDetails = async () => {
    const result = await getResumeAPI(id)
    console.log(result);
    if (result.status == 200) {
      setResume(result.data)
    }

  }

  // resume download

  const handleDownloadResume = async ()=>{
    //create pdf document
    const doc = new jsPDF();
    const preview = document.getElementById("preview")

    //screenshot of preview-html2Canvas
    const canvas = await html2canvas(preview,{scale:2})
    // console.log(canvas);

    //convert canvas to image
    const resumeImg = canvas.toDataURL('image/png')
    console.log(resumeImg);
    
    //add scrnsht to pdf
    const imgWidth = doc.internal.pageSize.getWidth()
    const imgHeight = doc.internal.pageSize.getHeight()
    doc.addImage(resumeImg,'PNG',0,0,imgWidth,imgHeight)

    //download pdf
    doc.save('resume.pdf')

  }
  return (
    <>

      <div className='row container my-5'>
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-8 col-12'>

            <div className='d-flex justify-content-center align-items-center mt-5'>
              <button onClick={handleDownloadResume} className='btn fs-4 text-primary'><FaDownload /></button>
              <Edit resumeDetails={resume} setResumedetails={setResume}/>
              <Link to={'/history'} className='btn fs-3 text-danger'><IoIosRefreshCircle /></Link>
              <Link to={'/resume'} className='btn fs-3 text-success'><FaBackward /></Link>
            </div>

           <div id='preview'> <Preview resumeDetails={resume} /></div>

          </div>
        </div>
      </div>

    </>
  )
}

export default ViewResume
