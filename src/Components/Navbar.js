import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-black p-2" style={{fontFamily:"initial"}}>
  <a class="navbar-brand border border-primary rounded-5 p-2 " href="#"><b><i>SauravMuke</i></b></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse justify-content-end me-5 " id="navbarSupportedContent">
    <ul class="navbar-nav ">
      <li class="nav-item active ">
        <a class="nav-link text-white " href="#home"><h5>Home</h5> </a>
      </li>
      <li class="nav-item active">
        <a class="nav-link text-white" href="#section1"><h5>Experience</h5> </a>
      </li>
      <li class="nav-item active">
        <a class="nav-link text-white" href="#section1"><h5>Education</h5> </a>
      </li>
      <li class="nav-item active">
        <a class="nav-link text-white" href="#section2"><h5>Skills</h5> </a>
      </li>
      <li class="nav-item active">
        <a class="nav-link text-white" href="#section3"><h5>Projects</h5></a>
      </li>

     
    </ul>
    
  </div>
</nav>
    </div>
  )
}
