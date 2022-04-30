import React from 'react'

// ----------Import Iamges to Assets------------

import frame from '../assets/Frame (3).png'
import Icon from "../assets/Icon.png"
import Icon2 from "../assets/Icon (1).png"
import Icon3 from "../assets/Icon (2).png"
import Icon4 from "../assets/Icon (3).png"
import Icon5 from "../assets/Icon (4).png"
import Icon6 from "../assets/Icon (5).png"

//----------Icons end--------------
import { Link } from 'react-router-dom'

//--------------Using Functional componet----------------

function Services() {
  return (
    <div>



      <div className='row serivese'>
      <div className='col-6 '>
      <hr className='hre'></hr>
      
      <p className='hiree'>SERVICES</p>
      <p className='hiree1'>HOME >> HIRE</p>

      </div>
      <div className='col-6  '>
      <img src={frame} className='img-fluid frame3' />
      
      </div>

      </div>


      <div className=' backg row '>
      <div className='col-4'></div>
      <div className='col-4 mt-5'>
        <p className='what mt-5'>WHAT WE OFFER</p>
        <p className='tailored'>Tailored delivery services</p></div>
      <div className='col-4'></div>

      <div className='col-2 '></div>
      <div className='col-8 mt-5 d-flex'>
        <div className='box3'>
          <img src={Icon} className='img-fluid frame p-5' />

        </div>
        <div className='box3 px-5'>
          <img src={Icon2} className='img-fluid frame p-5' />

        </div>
        <div className='box3   px-5'>
          <img src={Icon3} className='img-fluid frame p-5' />

        </div>

      </div>
      <div className='col-2'></div>



      <div className='col-2'></div>
      <div className='col-8 mt-2 d-flex'>
        <div className='box3   px-5'>
          <img src={Icon4} className='img-fluid frame p-5' />

        </div>
        <div className='box3 px-5'>
          <img src={Icon5} className='img-fluid frame p-5 ' />

        </div>
        <div className='box3 px-5'>
          <img src={Icon6} className='img-fluid frame p-5 ' />

        </div>

      </div>
      <div className='col-2'></div>

    </div>


    </div>
  )
}

export default Services
