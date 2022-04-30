import React from 'react'
// ----------Import Iamges to Assets------------

import media from '../assets/Group 7.png'
import map from '../assets/Rectangle 19.png'

// ----------Import Iamges to Assets End------------


// ----------------- Using Functioal Component--------------------


function Contactus() {
  return (
    <div>



      <div className='row '>
      
      <div className='col-2 '></div>
      <div className='col-8 '>

      <div className='row'>
    <div className='col-5  '></div>
    <div className='col-2  '>
    <p className='getintouch pt-5'>Get In Touch</p>
    <hr className='hr1'/>
    </div>
    <div className='col-5'></div>

      </div>

      
      </div>
      <div className='col-2  '></div>


       
        
      </div>


      <div className='row '>
      <div className='col-2 '>
      
      </div>
      <div className='col-5 '>
      <p className='mt-5 ml-5 leave'>Leave us a message</p>
      </div> 
      <div className='col-5 '></div>

      
      </div>


      <div className='row  mt-2'>
      <div className='col-2 '>

      </div>
      <div className='col-4 '>
      <div className='col-6 '> <input type="text" class="form-control form4" placeholder="First name"/></div>

      </div> 
      <div className='col-3 ml-5 pl-5  mt-3'>
      <p>Infomation technologies building,
      Victoria Island, Lagos, Nigeria.</p>
      </div>

      
      </div>



      <div className='row  mt-2'>
      <div className='col-2 '>
      
      </div>
      <div className='col-4 '>
      <div className='col-6 '> <input type="text" class="form-control form4" placeholder="Address"/></div>

      </div> 



      <div className='col-3  ml-5 pl-5 mt-3'> +234 081-1236-4568
        <p className='pt-3'>hello@info.com.ng</p>
      </div>
      

      
      </div>

      <div className='row  mt-2'>
      <div className='col-2 '>
      
      </div>
      <div className='col-4 '>
      <div className='col-6 '> <input type="text" class="form-control form5" placeholder=""/></div>

      </div> 


      <div className='col-3  ml-5'>
      <img src={media}/>
      
      <div className='col-12  mt-4'>
      <img src={map}/>
      
      </div>
     


      
      </div>

      
      </div>
      
 
      <div className='row  mt-2'>
      <div className='col-2 '>
      
      </div>
      <div className='col-5 '>
      <button type="button" class="btn4 mt-4">Send</button>

      </div> 
      <div className='col-5 '></div>

      
      </div>



    </div>
  )
}

export default Contactus
