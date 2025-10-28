import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div>
      {/* LandingPage */}
      <section style={{ width: '100%', height: '100vh', backgroundImage: "url('https://images.pexels.com/photos/935949/pexels-photo-935949.jpeg?cs=srgb&dl=pexels-nappy-935949.jpg&fm=jpg')", backgroundAttachment: 'fixed', backgroundPosition: 'top', backgroundSize: 'cover' }} className='container-fluid row align-items-center' >
        <div className='row' >
          <div className='col-md-4' ></div>
          <div className='col-md-4 shadow border py-5 rounded mt-5 text-center' style={{ backgroundColor: "rgba(255,255,255,0.5)" }} >
            <h3>Designed to get hired.
              Your skills,Your story,
              Your next job - all in one
            </h3>
            <Link to={'/resume'} className='btn text-white mt-2' style={{ backgroundColor: 'purple' }} >Make your resume</Link>

          </div>
          <div className='col-md-4' ></div>

        </div>

      </section>
      {/* tools */}
      <section className='m-5' >

        <h1 className='text-center' >Tools</h1>
        <div className='container row align-items-center ' >
          <div className='col-md-6 ' >
            <div className='my-3' >
              <h4 className='fw-bold' >Resume</h4>
              <h5>Create unlimited new resumes and easily edit them afterwards.</h5>
              <h4 className='fw-bold' >Cover letters</h4>
              <h5>Easily write professional cover letters.</h5>
              <h4 className='fw-bold' >Jobs</h4>
              <h5>Automatically receive new and relevant job posting.</h5>
              <h4 className='fw-bold' >Applications</h4>
              <h5>Effortlessly manage and track your job applications in an organized manner.</h5>
            </div>

          </div>
          <div className='col-md-6' >


            <img width={'90%'} className='p- ms-5' src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png" alt="no img" />


          </div>
        </div>


      </section>

      {/* image */}
      <section style={{ height: '75vh', width: '100%', backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'top', backgroundImage: 'url("https://images.pexels.com/photos/3184285/pexels-photo-3184285.jpeg?cs=srgb&dl=pexels-fauxels-3184285.jpg&fm=jpg")' }} >

      </section>

      {/* testimony */}
      <section className='m-5' >
        <h1 className="text-center my-5">Testmonial</h1>
        <div className="row container">
          <div className="col-md-6">
            <h2 className='mb-5' >Trusted by professionals world wide.</h2>
            <h5 className='mb-4 '> At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.
            </h5>

            <h5 className='mb-4' >In fact, users who used LiveCareer reported getting hired an average of 48 days faster.
            </h5>
            <h5>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</h5>
          </div>
          <div className="col-md-6">
            <div className="row ms-5">
              <div className="col 3">
                <img width={'100px'} src="https://www.shutterstock.com/image-photo/passport-photo-portrait-young-man-600nw-2437772333.jpg" alt="person" />
              </div>
               <div className="col 3">
                <img width={'100px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-hxkzC8ulbVek42bIXT_PIUwNsKl7inMvdw&s" alt="person" />
              </div>
                <div className="col 3">
                <img width={'100px'} src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Passport_photo_of_man_with_chinstrap_beard.jpg" alt="person" />
              </div>
                <div className="col 3">
                <img width={'100px'} src="https://img.freepik.com/premium-photo/passport-photo-portrait-young-man-white-background_1028938-330506.jpg" alt="person" />
              </div>
            </div>
               <div className="row ms-5">
              <div className="col 3">
                <img width={'100px'} src="https://www.shutterstock.com/image-photo/passport-photo-portrait-young-man-600nw-2437772333.jpg" alt="person" />
              </div>
               <div className="col 3">
                <img width={'100px'} src="https://www.shutterstock.com/image-photo/passport-photo-portrait-young-man-600nw-2437772333.jpg" alt="person" />
              </div>
                <div className="col 3">
                <img width={'100px'} src="https://www.shutterstock.com/image-photo/passport-photo-portrait-young-man-600nw-2437772333.jpg" alt="person" />
              </div>
                <div className="col 3">
                <img width={'100px'} src="https://www.shutterstock.com/image-photo/passport-photo-portrait-young-man-600nw-2437772333.jpg" alt="person" />
              </div>
            </div>
               <div className="row ms-5">
              <div className="col 3">
                <img width={'100px'} src="https://www.shutterstock.com/image-photo/passport-photo-portrait-young-man-600nw-2437772333.jpg" alt="person" />
              </div>
               <div className="col 3">
                <img width={'100px'} src="https://www.shutterstock.com/image-photo/passport-photo-portrait-young-man-600nw-2437772333.jpg" alt="person" />
              </div>
                <div className="col 3">
                <img width={'100px'} src="https://www.shutterstock.com/image-photo/passport-photo-portrait-young-man-600nw-2437772333.jpg" alt="person" />
              </div>
                <div className="col 3">
                <img width={'100px'} src="https://www.shutterstock.com/image-photo/passport-photo-portrait-young-man-600nw-2437772333.jpg" alt="person" />
              </div>
            </div>
             
          </div>
 
        </div>


      </section>

    </div>
  )
}

export default LandingPage