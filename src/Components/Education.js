import React from "react";
import "../App.css";
export default function Education() {
  return (
    <div className="container border mt-5 border-3 border-info p-5 rounded-5 " style={{fontFamily:"initial"}}>
        <center className="text-white"><h1>EDUCATION</h1></center>
        <hr className='text-white'></hr>
      <section class="py-5 text-white">
        <ul class="timeline-with-icons">
          <li class="timeline-item mb-5">
            <span class="timeline-icon">
            <i class="fa-solid fa-graduation-cap"></i>
            </span>

            <h5 class="fw-bold">B.E in Computer Engineering</h5>
            <p class=" mb-2  text-white">Pune Institute Of Computer Technology</p>
            <p class="text-white">
              2021-2024
            </p>
            <p class="text-white">
              CGPA: 9.67
            </p>
          </li>
          <li class="timeline-item mb-5">
            <span class="timeline-icon">
            <i class="fa-solid fa-graduation-cap"></i>
            </span>

            <h5 class="fw-bold">Diploma in Computer Engineering</h5>
            <p class=" mb-2  text-white">Government Polytechnic Yavatmal</p>
            <p class="text-white">
              2018-2021
            </p>
            <p className="text-white">
                Percentage: 98.00%
            </p>
          </li>

          

        </ul>
      </section>
    </div>
  );
}
