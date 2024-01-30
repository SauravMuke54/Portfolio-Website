import React from 'react'
import Education from './Education'
import Experience from './Experince'

export default function Combined() {
  return (
    <div className='row m-lg-5'>
        <div className="col-lg-6">
            <Education/>
        </div>
        <div className="col-lg-6">
            <Experience/>
        </div>
    </div>
  )
}
