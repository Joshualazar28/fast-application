import React from 'react'


// ----------Import Iamges to Assets------------

import  hiring from '../assets/Hiring-rafiki 1 (1).png'
import copy from "../assets/img2 copy.jpg"
import image1 from "../assets/Rectangle 288.png"
import image2 from "../assets/Rectangle 289 (1).png"
import image3 from "../assets/Rectangle 290 (1).png"
import image4 from "../assets/Rectangle 291 (1).png"
import image5 from "../assets/Rectangle 292.png"


// ----------Import Iamges to Assets End------------


// ----------------- Using Functioal Component--------------------

function Hire() {
  return (
    <div>




    <div className='row serivese1 border '>
    <div className='col-6 '>
    <hr className='hre'></hr>
    
    <p className='hiree' style={{color:'#1C7584 '}}>Hire</p>
    <p className='hiree1'>HOME >> HIRE</p>

    </div>
    <div className='col-6  '>
    <img src={hiring} className='img-fluid frame0' />
    
    </div>

    </div>



    <div className='container-fluid  mt-5'>
    <div className="row mt-5">
    <div className="col-lg-6  py-4">
    <div className='row'>
        <div className="col-lg-5   mt-4  picc">
        
  <img src={copy} className='img-fluid frame h-75    w-100' />
  </div>
    </div>
</div>
        <div className="col-lg-6  mt-5 ">
            <p className="who ml-5 mt-5 ">Why Join Us</p>
            <p className='fast ml-5'>We are a food packaging and delivery company operating in all emirates of U.A.E. We are offering Direct Deliveries to home, offices and schools. We have a team of qualified drivers and bike riders with good understanding of routes and with modern communication devices like smart phones to ensure timely delivery to the clients.

            <br/>
            We are also providing helpers for food packaging and wrapping. Food packers are responsible for preparing and packing food and drink products for distribution and sale. Packagers are also responsible for cleaning packaging materials, loading items into containers and weighing and labeling the items
                
                Fastest Delivery Services is a hyper-local delivery company.We provideb last mine fillament services to found grocery online and offline retail.Our technology enabed solutions help our customers get better visibilty & control of their orders and vains in class customers .we are giving and adding fleet on month-on-month basic.
            </p>
            <button type="button" class="btn1 mt-4">Contact us</button>
           
        </div>
       
    </div>
    </div>




    <div className='row serivese1'>
<div className='col-4'></div>
<div className='col-4 mt-5'>
  <p className='what mt-5'>GALLERY</p>
  <p className='tailored'>Fastest Delivery Service</p></div>
<div className='col-4'></div>

</div>



<div className='row mb-5 pb-5 serivese1 '>
<div className='col-12 ml-5'>
<img src={image1} className='img-fluid ' />
<img src={image2} className='img-fluid ' />
<img src={image3} className='img-fluid ' />
<img src={image4} className='img-fluid ' />
<img src={image5} className='img-fluid ' />

</div>


</div>


    </div>
  )
}

export default Hire
