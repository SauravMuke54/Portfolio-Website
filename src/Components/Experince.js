import React from "react";
import "../App.css";
export default function Experience() {
  return (
    <div id='section1' className="container border mt-5 border-3 border-info p-5 rounded-5 " style={{fontFamily:"initial"}}>
        <center className="text-white"><h1>EXPERINCE</h1></center>
        <hr className='text-white'></hr>
      <section class="py-5 text-white">
        <ul class="timeline-with-icons">
        <li class="timeline-item mb-5">
            <span class="timeline-icon">
            <i class="fa-solid fa-briefcase"></i>
            </span>

            <h5 class="fw-bold">UBS</h5>
            <p class=" mb-2  text-white">Summer Intern</p>
            <p class="text-white">
              June 2023 - August 2023
            </p>
            <p class="text-white">
              Skills: Liquibase, Spring-Boot, Database Migration
            </p>
          </li>

          <li class="timeline-item mb-5">
            <span class="timeline-icon">
            <i class="fa-solid fa-briefcase"></i>
            </span>

            <h5 class="fw-bold">Kutumb Aspiration</h5>
            <p class=" mb-2  text-white">Web Development Intern</p>
            <p class="text-white">
             October 2022 - December 2022
            </p>
            <p class="text-white">
              Skills: React, Node, Express, Mongo, MYSQL, PHP
            </p>
          </li>



        </ul>
      </section>
    </div>
  );
}
