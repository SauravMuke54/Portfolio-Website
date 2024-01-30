import React from 'react';
import profile from '../Images/profile.jpeg';

export default function Intro() {

  const downloadResume = () => {
    
    const resumePdfLink='https://drive.google.com/file/d/1kgV3GLLMIhXbE2e5nFHIHTrfkCqDTloA/view?usp=sharing'
    const link = document.createElement('a');
    link.href = resumePdfLink;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='container' id='home'>
      <div className="row p-3 mt-lg-5">
        <div className="col-lg-6 col-sm-12 text-center p-5">
          <img className='img-fluid rounded-circle border border-3 border-info shadow-dark' src={profile} alt="Profile" />
        </div>
        <div className="col-lg-6 col-sm-12 text-white text-center mt-lg-5 pt-lg-5">
          <span className='' style={{ fontFamily: "initial", fontSize: "25pt" }}>Hey Folks</span><br></br>
          <span className='' style={{ fontFamily: "initial", fontSize: "35pt" }}>I am <b className='text-info' style={{ fontSize: "40pt" }}>Saurav Muke</b></span>
          <br></br>
          <span className='' style={{ fontFamily: "initial", fontSize: "20pt" }}><b className='text-white'>Web Development Enthusiast</b></span><br></br>

          <span className='' style={{ fontFamily: "initial", fontSize: "18pt" }}>Aspiring web developer, passionate about coding and learning, and currently a dedicated student on the exciting journey of mastering web technologies.</span>
          <br></br>
          <div className="mt-3">
          <i class="fa-brands fa-github p-2"  onClick={e=>window.location.href="https://github.com/SauravMuke54"} style={{fontSize:"3em"}}></i>
          <i class="fa-brands fa-linkedin p-2" onClick={e=>window.location.href="https://www.linkedin.com/in/saurav-muke-0613b1182/"} style={{fontSize:"3em"}}></i>
          <i class="fa-solid fa-envelope p-2" onClick={e=>window.location.href="mailto:saurav54muke@gmail.com"} style={{fontSize:"3em"}}></i>
          </div>
          <br></br>
          <button className="m-2 btn btn-outline-info" onClick={downloadResume}>Resume</button>

          <button className="m-2 btn btn-outline-info " onClick={e=>window.location.href="mailto:saurav54muke@gmail.com"}>Contact Me</button>
        </div>
      </div>
    </div>
  );
}
