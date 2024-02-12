import React from "react";
import project from "../Images/project.webp";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div
    id='section3'
      className="border m-lg-5 m-mb-5 mt-5 border-3 border-info p-5 rounded-5 "
      style={{ fontFamily: "initial" }}
    >
      <center className="text-white">
        <h1>PROJECTS</h1>
      </center>
      <hr className="text-white"></hr>
      {/* row 1 */}
      <div className="row p-3 ">
        <motion.div  initial={{ opacity: 0,x:-50 }}
          animate={{ opacity: 1,x:0 }}
          exit={{ opacity: 0,x:-50 }}
          transition={{ duration: 1 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 1 },
          }}
        whileTap={{
            scale: 1.05,
            transition: { duration: 1 },
          }} className="col-lg-3 mx-auto  mt-2 border border-3 border-info rounded-5 p-2">
          <center className="text-white mt-2">
            <h4>ICODE</h4>
          </center>
          <hr className="text-white"></hr>
          <center>
            {" "}
            <h6 className="text-white m-1 border border-primary rounded-2 p-2">
              MongoDB, ReactJS, NodeJS, ExpressJS & Flask{" "}
            </h6>
            <img
              className="img-fluid rounded-5 mt-2"
            src={project}     />
            <h6 className="text-white mt-2 border border-primary rounded-2 p-2">
              ICode is an unified competitive coding profile generation and
              digital resume platform to showcase realtime coding status from
              websites like Leetcode, Codechef, Codeforces & Github at one place
              in realtime.
            </h6>
            {/* <i class="fa-brands fa-github text-info m-2" style={{fontSize:"2em"}}></i> */}
            <a
              href="https://icode-c3mw.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fa-solid fa-link text-info m-2"
                style={{ fontSize: "2em" }}
              ></i>
            </a>
          </center>
        </motion.div>

        <motion.div  initial={{ opacity: 0,x:-50 }}
          animate={{ opacity: 1,x:0 }}
          exit={{ opacity: 0,x:-50 }}
          transition={{ duration: 1 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 1 },
          }}
        whileTap={{
            scale: 1.05,
            transition: { duration: 1 },
          }} className="col-lg-3 mx-auto  mt-2 border border-3 border-info rounded-5 p-2">
          <center className="text-white mt-2">
            <h4>CODE ALONG</h4>
          </center>
          <hr className="text-white"></hr>
          <center>
            {" "}
            <h6 className="text-white m-1 border border-primary rounded-2 p-2">
              MongoDB, ReactJS, NodeJS, ExpressJS & Socket.io{" "}
            </h6>
            <img
              className="img-fluid rounded-5 mt-2"
              src={project}     />
            <h6 className="text-white mt-2 border border-primary rounded-2 p-2">
              A real-time text-editor where authenticated users can join and
              share the room and create/edit the documents. Created rooms can be
              further joined in future and documents can be edited anytime.
            </h6>
            <a
              href="https://code-along-ds5c.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fa-solid fa-link text-info m-2"
                style={{ fontSize: "2em" }}
              ></i>
            </a>
            <a
              href="https://github.com/SauravMuke54/Code-Along"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                class="fa-brands fa-github text-info m-2"
                style={{ fontSize: "2em" }}
              ></i>
            </a>
          </center>
        </motion.div>

        <motion.div  initial={{ opacity: 0,x:-50 }}
          animate={{ opacity: 1,x:0 }}
          exit={{ opacity: 0,x:-50 }}
          transition={{ duration: 1 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 1 },
          }}
        whileTap={{
            scale: 1.05,
            transition: { duration: 1 },
          }} className="col-lg-3 mx-auto  mt-2 border border-3 border-info rounded-5 p-2">
          <center className="text-white mt-2">
            <h4>ONE PLATFORM</h4>
          </center>
          <hr className="text-white"></hr>
          <center>
            {" "}
            <h6 className="text-white m-1 border border-primary rounded-2 p-2">
              HTML, CSS, BOOTSTRAP, JS, PHP & MYSQL{" "}
            </h6>
            <img
              className="img-fluid rounded-5 mt-2"
              src={project}       />
            <h6 className="text-white mt-2 border border-primary rounded-2 p-2">
            It is a business social media whose main aim is to provide every individual business owner to promote their businesses at local level and customer can search for the marketed products  based on the category they select.
            </h6>
        
            <a
              href="https://github.com/SauravMuke54/One-Platform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                class="fa-brands fa-github text-info m-2"
                style={{ fontSize: "2em" }}
              ></i>
            </a>
          </center>
        </motion.div>
      </div>

      {/* row 2 */}

      <div className="row p-3 ">
        <motion.div   initial={{ opacity: 0,x:-50 }}
          animate={{ opacity: 1,x:0 }}
          exit={{ opacity: 0,x:-50 }}
          transition={{ duration: 1 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 1 },
          }}
        whileTap={{
            scale: 1.05,
            transition: { duration: 1 },
          }} className="col-lg-3 mx-auto  mt-2 border border-3 border-info rounded-5 p-2">
          <center className="text-white mt-2">
            <h4>CONFIRM PHOTO</h4>
          </center>
          <hr className="text-white"></hr>
          <center>
            {" "}
            <h6 className="text-white m-1 border border-primary rounded-2 p-2">
              MongoDB, ReactJS, NodeJS, ExpressJS {" "}
            </h6>
            <img
              className="img-fluid rounded-5 mt-2"
            src={project}     />
            <h6 className="text-white mt-2 border border-primary rounded-2 p-2">
              A simple admin-client application where admin can create and manage the user. Mainly the user can upload the photo and admin can verify that photo. 
            </h6>
            {/* <i class="fa-brands fa-github text-info m-2" style={{fontSize:"2em"}}></i> */}
            <a
              href="https://github.com/SauravMuke54/WEBYAPAR-SOLUTIONS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fa-brands fa-github text-info m-2"
                style={{ fontSize: "2em" }}
              ></i>
            </a>
          </center>
        </motion.div>

        <motion.div  initial={{ opacity: 0,x:-50 }}
          animate={{ opacity: 1,x:0 }}
          exit={{ opacity: 0,x:-50 }}
          transition={{ duration: 1 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 1 },
          }}
        whileTap={{
            scale: 1.05,
            transition: { duration: 1 },
          }} className="col-lg-3 mx-auto  mt-2 border border-3 border-info rounded-5 p-2">
          <center className="text-white mt-2">
            <h4>REPOSITORY LISTER</h4>
          </center>
          <hr className="text-white"></hr>
          <center>
            {" "}
            <h6 className="text-white m-1 border border-primary rounded-2 p-2">
              HTML, CSS, JS ,BOOTSTRAP & GITHUB_API{" "}
            </h6>
            <img
              className="img-fluid rounded-5 mt-2"
              src={project}     />
            <h6 className="text-white mt-2 border border-primary rounded-2 p-2">
             A simple github public repository lister which shows the available public repository of the user along with some information like reporsitory description, tags etc.            </h6>
            <a
              href="https://fyle-el2m.onrender.com/#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fa-solid fa-link text-info m-2"
                style={{ fontSize: "2em" }}
              ></i>
            </a>
            <a
              href="https://github.com/SauravMuke54/FYLE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                class="fa-brands fa-github text-info m-2"
                style={{ fontSize: "2em" }}
              ></i>
            </a>
          </center>
        </motion.div>

        <motion.div  initial={{ opacity: 0,x:-50 }}
          animate={{ opacity: 1,x:0 }}
          exit={{ opacity: 0,x:-50 }}
          transition={{ duration: 1 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 1 },
          }}
        whileTap={{
            scale: 1.05,
            transition: { duration: 1 },
          }} className="col-lg-3 mx-auto  mt-2 border border-3 border-info rounded-5 p-2">
          <center className="text-white mt-2">
            <h4>DISCUSSION FORUM</h4>
          </center>
          <hr className="text-white"></hr>
          <center>
            {" "}
            <h6 className="text-white m-1 border border-primary rounded-2 p-2">
            MongoDB, ReactJS, NodeJS, ExpressJS {" "} {" "}
            </h6>
            <img
              className="img-fluid rounded-5 mt-2"
              src={project}       />
            <h6 className="text-white mt-2 border border-primary rounded-2 p-2">
            A disscussion forum where user can post their queries, and also comment on the available posts, search the queries by tag name like education, sport etc.  </h6>
        
            <a
              href="https://github.com/SauravMuke54/DiscussionForum"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                class="fa-brands fa-github text-info m-2"
                style={{ fontSize: "2em" }}
              ></i>
            </a>
          </center>
        </motion.div>
      </div>
    </div>
  );
}
