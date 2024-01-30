import React from 'react'
import cpp from '../Images/cpp.jpg'
import java from '../Images/java.png'
import python from '../Images/python.png'
import windows from '../Images/windows.png'
import linux from '../Images/linux.png'
import react from '../Images/react.png'
import node from '../Images/node.png'
import express from '../Images/express.jpeg'
import mongo from '../Images/mongo.png'
import html from '../Images/html.png'
import css from '../Images/css.png'
import javascript from '../Images/javascript.png'
import bootstrap from '../Images/bootstrap.jpg'
import eclipse from '../Images/eclipse.png'
import intellije from '../Images/intellije.png'
import mysql from '../Images/mysql.png'
import netbeans from '../Images/netbeans.png'
import php from '../Images/php.png'
import socket from '../Images/socket.png'
import vscode from '../Images/vscode.png'


export default function Skills() {
  return (
    
    <div id='section2' className="border m-lg-5 m-mb-5 mt-5 border-3 border-info p-5 rounded-5 " style={{fontFamily:"initial"}}>
 <center className="text-white"><h1>SKILLS</h1></center>
 <hr className='text-white'></hr>   
   <div className="row mt-5">
    <div className="col-lg-5 mx-auto mt-3 border  border-3 border-info rounded-5 p-3 ">
    <center className="text-white"><h4>LANGUAGES</h4></center>  
    <hr className='text-white'></hr>
    <div className="row p-1 text-center">
        <div className="col">
            <img className='img-fluid rounded-5' src={cpp} style={{width:"70px"}}/>
        </div>
        <div className="col">
            <img className='img-fluid rounded-5' src={java} style={{width:"70px"}}/>
        </div>
        <div className="col">
            <img className='img-fluid rounded-5' src={python} style={{width:"70px"}}/>
        </div>
        <div className="col">
            <img className='img-fluid rounded-5' src={javascript} style={{width:"70px",height:"70px"}}/>
        </div>
    </div>
    </div>

    <div className="col-lg-5 mx-auto mt-3 border  border-3 border-info rounded-5 p-3 ">
    <center className="text-white"><h4>PLATFORMS</h4></center>  
    <hr className='text-white'></hr>
    <div className="row p-1 text-center">
        <div className="col">
            <img className='img-fluid rounded-5' src={windows} style={{width:"70px"}}/>
        </div>
        <div className="col">
            <img className='img-fluid rounded-5' src={linux} style={{width:"70px",height:"70px"}}/>
        </div>
       
    </div>
    </div>


    <div className="col-lg-11 mx-auto mt-3 border  border-3 border-info rounded-5 p-3">
    <center className="text-white"><h4>TECHNOLOGIES / FRAMEWORK</h4></center>  
    <hr className='text-white'></hr>
   <div className="row p-1 text-center">
   <div className="col-5 col-lg-2  m-1 mx-auto">
            <img className='img-fluid rounded-5' src={react} style={{width:"70px",height:"70px"}}/>
        </div>

        <div className="col-5  col-lg-2 m-1 mx-auto ">
            <img className='img-fluid rounded-5' src={node} style={{width:"70px",height:"70px"}}/>
        </div>

        <div className="col-5 col-lg-2  m-1 mx-auto">
            <img className='img-fluid rounded-5' src={express} style={{width:"70px",height:"70px"}}/>
        </div>

        <div className="col-5  col-lg-2 m-1 mx-auto">
            <img className='img-fluid rounded-5' src={php} style={{width:"70px",height:"70px"}}/>
        </div>

        <div className="col-5  col-lg-2 m-1 mx-auto">
            <img className='img-fluid rounded-5' src={mongo} style={{width:"70px",height:"70px"}}/>
        </div>

        <div className="col-5  col-lg-2 m-1 mx-auto">
            <img className='img-fluid rounded-5' src={mysql} style={{width:"70px",height:"70px"}}/>
        </div>

        <div className="col-5  col-lg-2 m-1 mx-auto">
            <img className='img-fluid rounded-5' src={socket} style={{width:"70px",height:"70px"}}/>
        </div>

        

        <div className="col-5  col-lg-2 m-1 mx-auto">
            <img className='img-fluid rounded-5' src={css} style={{width:"70px",height:"70px"}}/>
        </div>

        <div className="col-5  col-lg-2 m-1 mx-auto">
            <img className='img-fluid rounded-5' src={bootstrap} style={{width:"70px",height:"70px"}}/>
        </div>

        <div className="col-5  col-lg-2 m-1 mx-auto">
            <img className='img-fluid rounded-5' src={html} style={{width:"70px",height:"70px"}}/>
        </div>

        <div className="col-5  col-lg-2 m-1 mx-auto">
            <img className='img-fluid rounded-5' src={eclipse} style={{width:"70px",height:"70px"}}/>
        </div>

        <div className="col-5  col-lg-2 m-1 mx-auto">
            <img className='img-fluid rounded-5' src={netbeans} style={{width:"70px",height:"70px"}}/>
        </div>

        <div className="col-5  col-lg-2 m-1 mx-auto">
            <img className='img-fluid rounded-5' src={intellije} style={{width:"70px",height:"70px"}}/>
        </div>

        <div className="col-5  col-lg-2 m-1 mx-auto">
            <img className='img-fluid rounded-5' src={vscode} style={{width:"70px",height:"70px"}}/>
        </div>
   </div>

    </div>
    
    </div>
 

    </div>
  )
}
