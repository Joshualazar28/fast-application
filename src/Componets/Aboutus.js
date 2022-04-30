import React from 'react';
// ------------Icons--------------
import {BsFacebook} from 'react-icons/bs';
import {BsLinkedin} from "react-icons/bs";
import {FaInstagramSquare} from "react-icons/fa";
import {AiFillTwitterCircle} from "react-icons/ai";
import { BsArrowRight} from "react-icons/bs"
//----------Icons end--------------

// ----------Import Iamges to Assets------------
import frame3 from "../assets/Frame (3).png"
import copy from "../assets/img2 copy.jpg"
// ----------Import Iamges to Assets End------------


// ----------------- Using CLas Component--------------------
export default class OrderComplete extends React.Component {
  render() {
    return (
        <div>


      <div className='container-fluid react'>
          <div className="row">
              <div className="col-lg-6  py-5">
                  <div className="line ml-5  "></div>
                  <h1 className='usss ml-5 mt-1'>ABOUT US</h1>
                  <p className='home ml-5'>HOME >> ABOUT US</p>
              </div>
              <div className="col-lg-6  py-5">
                  <div className='container   mt-3 img1'>
          <img src={frame3} className='img-fluid frame' />
                  
                  </div>
              </div>
          </div>
      </div>


<div className='container-fluid  mt-5'>
    <div className="row mt-5">
        <div className="col-lg-6  mt-5 ">
            <p className="who ml-5 mt-5 ">Who We Are</p>
            <p className='fast ml-5'>Fastest Delivery Services is a hyper-local delivery company.We provideb last mine fillament services to found grocery online and offline retail.Our technology enabed solutions help our customers get better visibilty & control of their orders and create a source of their competitive advantages!
                <br/>
                <br/>
                Fastest Delivery Services is a hyper-local delivery company.We provideb last mine fillament services to found grocery online and offline retail.Our technology enabed solutions help our customers get better visibilty & control of their orders and vains in class customers .we are giving and adding fleet on month-on-month basic.
            </p>
            <div className='icon ml-5 '>
                <h1 className='num'>99%</h1>
                <h2 className='num1'>Customer <br/>
                support
                </h2>
                <h3 className='bss'><BsFacebook /> </h3>
                <h3 className='bs'><BsLinkedin/></h3>
                <h3 className='faa'><FaInstagramSquare/></h3>
                <h3 className='ai'><AiFillTwitterCircle/></h3>
            </div>
        </div>
        <div className="col-lg-6  py-4">
            <div className='row'>
                <div className="col-lg-5   mt-4  picc">
                
          <img src={copy} className='img-fluid frame h-75    w-100' />
          </div>
            </div>
        </div>
    </div>
</div>
<div className='container-fluid  inn mt-4'>
    <div className="container  mt-5 py-2">
        <p className='proo mt-5'>PROVIDING HIGH QUALITY DELIVERY 
            <br/>
             SERVICES TO ALL OF OUR CLIENTS
        </p>
        <h3 className='this'>This Sounds Simple But its beneficial to your Bussiness Success</h3>
        <div className='row mt-5'>
            <div className="col-lg-4  py-5 mt-3">
             <div className='picss  py-4'></div>
              <h1 className='our mt-2'>Our Vision</h1>
              <p className='wee'>We Have Transformed <br/>
                  Commentional delivery to<br/>
                  modernized instant delivery
              </p>
            </div>
            <div className="col-lg-4  mt-3 py-5">
            <div className='picss1  py-4'></div>
              <h1 className='our mt-2'>Our Vision</h1>
              <p className='wee'>We Have Transformed <br/>
                  Commentional delivery to<br/>
                  modernized instant delivery
              </p>
            </div>
            <div className="col-lg-4 py-5 mt-3">
            <div className='picss2  py-4'></div>
              <h1 className='our mt-2'>Our Vision</h1>
              <p className='wee'>We Have Transformed <br/>
                  Commentional delivery to<br/>
                  modernized instant delivery
              </p>
            </div>
        </div>
    </div>
</div>


      </div>

    )
  }
}
