import React from 'react'
import UserInputs from '../components/UserInputs'
import Preview from '../components/Preview'

function UserForm() {

  //create state for using resume details

  const [resumeDetails, setResumedetails] = React.useState({
    username: "",
    jobTitle: "",
    location: "",
    email: "",
    mobile: "",
    github: "",
    linkedin: "",
    portfolio: "",
    course: "",
    collage: "",
    university: "",
    passoutYear: "",
    jobType: "",
    company: "",
    cLocation: "",
    duration: "",
    userSkills: [],
    summary: ""

  })


  return (
    <div className='container' >
      <div className="row p-5">
        <div className="col-lg-6">
          <UserInputs resumeDetails={resumeDetails} setResumedetails={setResumedetails} />
        </div>
        <div className="col-lg-6">
          {
            resumeDetails.username &&
            <Preview resumeDetails={resumeDetails} />

          }
        </div>
      </div>
    </div>
  )
}

export default UserForm