import { Box, Paper } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { MdDeleteSweep } from "react-icons/md";
import { FaBackward } from "react-icons/fa";



function History() {
  return (
    <div>
      <h1 className='text-center my-5'>Downloaded Resume History</h1>
      <Link to={'/resume'} className='float-end me-5' style={{ marginTop: '-90px' }}><FaBackward />Back</Link>

      <Box component="section" className='container-fluid'>
        <div className="row">
          <div className="col-md-4">
            <Paper elevation={3} sx={{ my: 5, p: 5, textAlign: 'center' }}>

              <div className="d-flex justify-content-between align-items-center">
                <h6>Review At:8/29/2025 , 9:40:31 AM</h6>
                <button className='btn text-danger fs-4' ><MdDeleteSweep /></button>
              </div>

              <div className="border-rounded p-3">
                <img width={'200px'} height={'250px'} src="https://jofibo.com/images/templates/designer_resume_template_thumbnail.png" alt="resume" />
              </div>

            </Paper>
          </div>
        </div>
      </Box>

    </div>
  )
}

export default History
