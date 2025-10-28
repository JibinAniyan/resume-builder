import React from 'react'
import UserInputs from '../components/UserInputs'
import Preview from '../components/Preview'

function UserForm() {
  return (
    <div className='container' >
      <div className="row p-5">
        <div className="col-lg-6">
<UserInputs/>
        </div>
        <div className="col-lg-6">
<Preview/>
        </div>
      </div>
    </div>
  )
}

export default UserForm