import React from 'react'
import vintage from '../assets/vintage.mp4'



function About() {
 
    
   return (
    <>
    <div className='main'>
      <div className="overlay"></div>
      <video src={vintage} autoPlay loop muted/>
      <div className='content'> 
      <h1>Welcome To Car Hub</h1>
        <h2>Your Car Deserves Some Love Too.</h2>
        <button type="button mx-3" className="btn btn-light">Explore Now</button>
       </div>
    </div>
    
 
  </>
    
  )
}
export default About
