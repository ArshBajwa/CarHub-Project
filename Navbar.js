import React from 'react'

 function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
  <a className="navbar-brand" href="/" >
      <img src={"/logo.jpg"} alt="" width="100" height="70"/>
    
    </a>

    
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active mx-4" aria-current="page" href="/">Home</a>
        <a className="nav-link active mx-5"  href="/">Services</a>
        <a className="nav-link active mx-5" href="/">Projects</a>
        <a className="nav-link active mx-5" href="/">Workshop Tour</a>
        <a className="nav-link active mx-5" href="/">About Us</a>
        <a className="nav-link active mx-5" href="/">Contact Us</a>
        
      </div>
    </div>
  </div>
</nav>
    
    </>
  )
}

export default Navbar
