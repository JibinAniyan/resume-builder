import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FaXmark } from "react-icons/fa6";



const steps = ['basic Information', 'Contact Details', 'Educational Details', 'Work Experience', 'Skills and Certifications', 'Review & Submit'];
function UserInputs() {
    const skillSuggestionArray = ['NODE JS', 'REACT', 'MONGODB', 'ANGULAR', 'EXPRESS JS', 'COMMUNICATION', 'COACHING', 'POWER BI']
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

//create state for using resume details
 
 const [resumeDetails,setResumedetails]= React.useState({
    username:"",
    jobTitle:"",
    location:"",
    email:"",
    mobile:"",
    github:"",
    linkedin:"",
    portfolio:"",
    course:"",
    collage:"",
    university:"",
    passoutYear:"",
    jobType:"",
    company:"",
    cLocation:"",
    duration:"",
    userSkills:[],
    summary:""

 })

//reference to skill input tag 
const skillRef = React.useRef()

 console.log(resumeDetails);
 



    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    // Adding skils

        const addSkill = (skill)=>{
            if (resumeDetails.userSkills.includes(skill)) {
                alert("The Given Skill already added, Please add another!!!")
            }else{
                setResumedetails({...resumeDetails,userSkills:[...resumeDetails.userSkills,skill]})
                //to clear add skill to text
                skillRef.current.value = ""
            }
        }

    // Removing SKills

       const removeSkill = (skill)=>{
        setResumedetails({...resumeDetails,userSkills:resumeDetails.userSkills.filter(item=>item!=skill)})
       }


    const renderSteps = (stepCounts) => {
        switch (stepCounts) {
            case 0: return (
                <div>
                    <h3> personal Details</h3>
                    <div className='row p-3' >
                        <TextField value={resumeDetails.username} onChange={e=>setResumedetails({...resumeDetails,username:e.target.value})} id="standard-basic" label="Full Name" variant="standard" />
                        <TextField value={resumeDetails.jobTitle}  onChange={e=>setResumedetails({...resumeDetails,jobTitle:e.target.value})} id="standard-basic" label="Job titles" variant="standard" />
                        <TextField value={resumeDetails.location} onChange={e=>setResumedetails({...resumeDetails,location:e.target.value})} id="standard-basic" label="Location" variant="standard" />
                    </div>

                </div>
            )
            case 1: return (
                <div>
                    <h3> Contact Details</h3>
                    <div className='row p-3' >
                        <TextField value={resumeDetails.email} onChange={e=>setResumedetails({...resumeDetails,email:e.target.value})} id="standard-basic" label="Email" variant="standard" />
                        <TextField value={resumeDetails.mobile} onChange={e=>setResumedetails({...resumeDetails,mobile:e.target.value})} id="standard-basic" label="Phone Number" variant="standard" />
                        <TextField value={resumeDetails.github} onChange={e=>setResumedetails({...resumeDetails,github:e.target.value})} id="standard-basic" label="Github Profile Link" variant="standard" />
                        <TextField value={resumeDetails.linkedin} onChange={e=>setResumedetails({...resumeDetails,linkedin:e.target.value})} id="standard-basic" label="Linkedin Profile Link" variant="standard" />
                        <TextField value={resumeDetails.portfolio} onChange={e=>setResumedetails({...resumeDetails,portfolio:e.target.value})} id="standard-basic" label="Portfolio Link" variant="standard" />
                    </div>
                </div>
            )
            case 2: return (
                <div>
                    <h3> Education Details</h3>
                    <div className='row p-3' >
                        <TextField value={resumeDetails.course} onChange={e=>setResumedetails({...resumeDetails,course:e.target.value})} id="standard-basic" label="Course Name" variant="standard" />
                        <TextField value={resumeDetails.collage} onChange={e=>setResumedetails({...resumeDetails,collage:e.target.value})} id="standard-basic" label="College Name" variant="standard" />
                        <TextField value={resumeDetails.university} onChange={e=>setResumedetails({...resumeDetails,university:e.target.value})} id="standard-basic" label="University" variant="standard" />
                        <TextField value={resumeDetails.passoutYear} onChange={e=>setResumedetails({...resumeDetails,passoutYear:e.target.value})} id="standard-basic" label="Year of Passout" variant="standard" />
                    </div>
                </div>
            )
            case 3: return (
                <div>
                    <h3>Professional Details</h3>
                    <div className='row p-3' >
                        <TextField value={resumeDetails.jobType} onChange={e=>setResumedetails({...resumeDetails,jobType:e.target.value})} id="standard-basic" label="job or Internship" variant="standard" />
                        <TextField value={resumeDetails.company} onChange={e=>setResumedetails({...resumeDetails,company:e.target.value})} id="standard-basic" label="Company Name" variant="standard" />
                        <TextField value={resumeDetails.cLocation} onChange={e=>setResumedetails({...resumeDetails,cLocation:e.target.value})} id="standard-basic" label="Company Location" variant="standard" />
                        <TextField value={resumeDetails.duration} onChange={e=>setResumedetails({...resumeDetails,duration:e.target.value})} id="standard-basic" label="Duration" variant="standard" />
                    </div>
                </div>
            )
            case 4: return (
                <div>
                    <h3>Skills</h3>
                    <div className='d-flex align-items-center justify-content-between'>
                        <input ref={skillRef} placeholder='Add Skills' type="text" className='form-control' />
                        <Button onClick={()=>addSkill(skillRef.current.value)} variant='text'>ADD</Button>
                    </div>
                    <h3>Suggestion</h3>
                    <div className='d-flex flex-wrap justify-content-between my-3'>
                        {
                            skillSuggestionArray.map((item, index) => (
                                <Button onClick={()=>addSkill(item)} key={index} variant='outlined' className='m-2'>{item}</Button>

                            ))
                        }

                    </div>
                    <h5>Added Skills:</h5>
                    <div className='d-flex flex-wrap justify-content-center my-3'>
                        {
                            resumeDetails.userSkills?.length>0?
                            resumeDetails.userSkills?.map((skill,index)=>(
                            <Button variant='contained' className='m-1'>{skill} <FaXmark onClick={()=>removeSkill(skill)} className='ms-2' /></Button>

                            ))
                            :
                            <p className='fw-bold'>No Skills are added yet!!!</p>
                        }
                    </div>
                </div>
            )
            case 5: return (
                <div>
                    <h3>  Summary</h3>
                    <div className="p-3 row">
                       <TextField onChange={e=>setResumedetails({...resumeDetails,summary:e.target.value})} id="standard-basic-summary" label="write a short summary of yourself" variant="standard" multiline rows={3} defaultValue={'Enthusiastic and detail-oriented MERN Stack Developer with hands-on experience in building dynamic and responsive web applications using MongoDB, Express.js, React.js, and Node.js. Skilled in designing RESTful APIs, developing reusable React components, and managing state efficiently. Adept at integrating front-end interfaces with back-end services and ensuring seamless user experiences. Passionate about writing clean, maintainable code and continuously learning new technologies to enhance application performance.'} />

                    </div>
                </div>

            )
            default: return null
        }
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = (
                            <Typography variant="caption">Optional</Typography>
                        );
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1} </Typography>
                    {/* render content according to the step */}
                    <Box>
                        {renderSteps(activeStep)}
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        {isStepOptional(activeStep) && (
                            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                Skip
                            </Button>
                        )}
                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}

export default UserInputs