import React from 'react';
import { Link } from 'react-router-dom'


// ------------- React icons --------------
import {BsFacebook} from 'react-icons/bs';
import {BsLinkedin} from "react-icons/bs";
import {FaInstagramSquare} from "react-icons/fa";
import {AiFillTwitterCircle} from "react-icons/ai";
import { BsArrowRight} from "react-icons/bs"

// ----------------- Using class Component--------------------

export default class OrderComplete extends React.Component {
  render() {
    return (
        <>
     



 <div className='container-fluid'>

// -------------Shopping bar------------------------

 <div className='row'  style={{ height: "80px", color: 'grey' }}>
      <div  className=" col d-flex justify-content-center align-items-center mt-5">
      <h2>
        SHOPPING CART <BsArrowRight />{" "}
        <span style={{ color: "red" }}>
        CHECKOUT <BsArrowRight />
        </span>{" "}
        ORDER COMPLETE
    </h2>
      </div>
      </div>



// ------------------Thank you box--------------------
      <div className='container co mt-5 py-3'>
          <h1 className='thank'>Thank You.Your Order has been received</h1>
      </div>
     
       <div className='container  coo1 mt-5 '>
           <h1 className='orr '><span style={{color:"grey"}}>ORDER NUMBER</span> <br/>
               4312
           </h1>
           <h2 className='orr1'> |</h2>
           <h1 className='orr'><span style={{color:"grey"}}>DATE</span> <br/>
               APRAIL 12,2022
           </h1>
           <h2 className='orr1'> |</h2>
           <h1 className='orr'><span style={{color:"grey"}}>TOTAL</span> <br/>
               $62.99
           </h1>
           <h2 className='orr1'> |</h2>
           <h1 className='orr'><span style={{color:"grey"}}>PAYMENT METHOD</span> <br/>
               Cash on delivery
           </h1>
       </div>




    //    ---------------- Pay the Cash on delivery-------------------
       <div className='container mt-4'>
           <h1 className='pay '>PAY WITH CASH UP ON DELIVERY</h1>
       </div>

       <div className='container order '>
           <h1 className='del ml-3 mt-5'>ORDER DETAILS</h1>
              <div className='mix ml-3 mt-5'>
              <h2 className='product'>PRODUCT</h2>
              <h2 className='product1'>SUBTOTAL</h2>
              </div>
              <hr className='hr3' />
              <div className='mix ml-3'>
              <h2 className='product'>Decided Dispossible</h2>
              <h2 className='product1'>$53.33</h2>
              </div>
              <hr className='hr3' />
              <div className='mix ml-3'>
              <h2 className='product'>Subtotal</h2>
              <h2 className='product1'>$53.33</h2>
              </div>
              <hr className='hr3' />
              <div className='mix ml-3'>
              <h2 className='product'>Shiping</h2>
              <h2 className='product1'>$53.33</h2>
              </div>
              <hr className='hr3' />
              <div className='mix ml-3 '>
              <h2 className='product'>Payment Method</h2>
              <h2 className='product1'>Cash on delivery</h2>
              </div>
              <hr className='hr3' />
              <div className='mix ml-3'>
              <h2 className='product'>TOTAL</h2>
              <h2 className='product1'>$62.99</h2>
              </div>
              <hr className='hr3' />
       </div>
 </div>
      </>

    )
  }
}
