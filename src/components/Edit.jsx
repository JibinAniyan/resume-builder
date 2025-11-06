import  React, { useState,useRef} from 'react'
import { MdEditDocument, } from "react-icons/md";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { FaXmark } from "react-icons/fa6";
import { updateResumeAPI } from '../services/allAPI';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    maxHeight: '80vh',
    overflowY: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function Edit({ resumeDetails, setResumedetails }) {
    const [open, setOpen] = useState(false);
        const skillRef = useRef()
    

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

      // Adding skils

    const addSkill = (skill) => {
        if (resumeDetails.userSkills.includes(skill)) {
            alert("The Given Skill already added, Please add another!!!")
        } else {
            setResumedetails({ ...resumeDetails, userSkills: [...resumeDetails.userSkills, skill] })
            //to clear add skill to text
            skillRef.current.value = ""
        }
    }

    // Removing SKills

    const removeSkill = (skill) => {
        setResumedetails({ ...resumeDetails, userSkills: resumeDetails.userSkills.filter(item => item != skill) })
    }

    //resume updating
  const handleResumeUpdate = async ()=>{
    const{id,username,jobtiles,location}= resumeDetails
    if (!username && !jobtiles && !location) {
        alert("please fill the form")
    }else{
        console.log("api call");
       try{
        const result = await updateResumeAPI(id,resumeDetails)
        console.log(result);
        if (result.status==200) {
            alert("resumeupdated successfully")
            handleClose()
        }
       } catch(err){
        console.log(err);
        
       }
       
    }
}


    return (
        <div>
            <button onClick={handleOpen} className='btn fs-3 text-warning'><MdEditDocument /></button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Resume Details
                    </Typography>

                    <Box id="modal-modal-description" sx={{ mt: 2 }}>
                        {/* personal data */}
                        <div>
                            <h3> personal Details</h3>
                            <div className='row p-3' >
                                <TextField value={resumeDetails.username} onChange={e => setResumedetails({ ...resumeDetails, username: e.target.value })} id="standard-basic" label="Full Name" variant="standard" />
                                <TextField value={resumeDetails.jobTitle} onChange={e => setResumedetails({ ...resumeDetails, jobTitle: e.target.value })} id="standard-basic" label="Job titles" variant="standard" />
                                <TextField value={resumeDetails.location} onChange={e => setResumedetails({ ...resumeDetails, location: e.target.value })} id="standard-basic" label="Location" variant="standard" />
                            </div>

                        </div>
                        {/* contact data */}
                        <div>
                            <h3> Contact Details</h3>
                            <div className='row p-3' >
                                <TextField value={resumeDetails.email} onChange={e => setResumedetails({ ...resumeDetails, email: e.target.value })} id="standard-basic" label="Email" variant="standard" />
                                <TextField value={resumeDetails.mobile} onChange={e => setResumedetails({ ...resumeDetails, mobile: e.target.value })} id="standard-basic" label="Phone Number" variant="standard" />
                                <TextField value={resumeDetails.github} onChange={e => setResumedetails({ ...resumeDetails, github: e.target.value })} id="standard-basic" label="Github Profile Link" variant="standard" />
                                <TextField value={resumeDetails.linkedin} onChange={e => setResumedetails({ ...resumeDetails, linkedin: e.target.value })} id="standard-basic" label="Linkedin Profile Link" variant="standard" />
                                <TextField value={resumeDetails.portfolio} onChange={e => setResumedetails({ ...resumeDetails, portfolio: e.target.value })} id="standard-basic" label="Portfolio Link" variant="standard" />
                            </div>
                        </div>
                        {/*Education Details  */}
                        <div>
                            <h3> Education Details</h3>
                            <div className='row p-3' >
                                <TextField value={resumeDetails.course} onChange={e => setResumedetails({ ...resumeDetails, course: e.target.value })} id="standard-basic" label="Course Name" variant="standard" />
                                <TextField value={resumeDetails.collage} onChange={e => setResumedetails({ ...resumeDetails, collage: e.target.value })} id="standard-basic" label="College Name" variant="standard" />
                                <TextField value={resumeDetails.university} onChange={e => setResumedetails({ ...resumeDetails, university: e.target.value })} id="standard-basic" label="University" variant="standard" />
                                <TextField value={resumeDetails.passoutYear} onChange={e => setResumedetails({ ...resumeDetails, passoutYear: e.target.value })} id="standard-basic" label="Year of Passout" variant="standard" />
                            </div>
                        </div>
                        {/* Professional Details */}
                        <div>
                            <h3>Professional Details</h3>
                            <div className='row p-3' >
                                <TextField value={resumeDetails.jobType} onChange={e => setResumedetails({ ...resumeDetails, jobType: e.target.value })} id="standard-basic" label="job or Internship" variant="standard" />
                                <TextField value={resumeDetails.company} onChange={e => setResumedetails({ ...resumeDetails, company: e.target.value })} id="standard-basic" label="Company Name" variant="standard" />
                                <TextField value={resumeDetails.cLocation} onChange={e => setResumedetails({ ...resumeDetails, cLocation: e.target.value })} id="standard-basic" label="Company Location" variant="standard" />
                                <TextField value={resumeDetails.duration} onChange={e => setResumedetails({ ...resumeDetails, duration: e.target.value })} id="standard-basic" label="Duration" variant="standard" />
                            </div>
                        </div>
                        {/* skills */}

                        <div>
                            <h3>Skills</h3>
                            <div className='d-flex align-items-center justify-content-between'>
                                <input ref={skillRef} placeholder='Add Skills' type="text" className='form-control' />
                                <Button onClick={() => addSkill(skillRef.current.value)} variant='text'>ADD</Button>
                            </div>
                         
                            <h5>Added Skills:</h5>
                            <div className='d-flex flex-wrap justify-content-center my-3'>
                                {
                                    resumeDetails.userSkills?.length > 0 ?
                                        resumeDetails.userSkills?.map((skill, index) => (
                                            <Button variant='contained' className='m-1'>{skill} <FaXmark onClick={() => removeSkill(skill)} className='ms-2' /></Button>

                                        ))
                                        :
                                        <p className='fw-bold'>No Skills are added yet!!!</p>
                                }
                            </div>
                        </div>

                        {/* summary */}
                        <div>
                            <h3>  Summary</h3>
                            <div className="p-3 row">
                                <TextField onChange={e => setResumedetails({ ...resumeDetails, summary: e.target.value })} id="standard-basic-summary" label="write a short summary of yourself" variant="standard" multiline rows={3} defaultValue={'Enthusiastic and detail-oriented MERN Stack Developer with hands-on experience in building dynamic and responsive web applications using MongoDB, Express.js, React.js, and Node.js. Skilled in designing RESTful APIs, developing reusable React components, and managing state efficiently. Adept at integrating front-end interfaces with back-end services and ensuring seamless user experiences. Passionate about writing clean, maintainable code and continuously learning new technologies to enhance application performance.'} />

                            </div>
                        </div>
                        {/* button for update */}
                       <div className='text-center'>
                        <button onClick={handleResumeUpdate} className='btn btn-warning '>update</button>
                       </div>
                    </Box>
                </Box>
            </Modal>

        </div>
    )
}

export default Edit
