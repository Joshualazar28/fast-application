import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import rectangle83 from '../assets/Rectangle 83.png'
import bicart from '../assets/bi_cart-x.png'
import PURCHASE from '../assets/PURCHASE CART.png'

import { Link } from 'react-router-dom'

function ShippingCartDetails() {
  return (
    <div>


      <div className='row' style={{ height: "80px", color: 'grey' }}>
        <div className=" col d-flex justify-content-center align-items-center mt-5">
          <h2>
            SHOPPING CART <BsArrowRight />{" "}
            <span style={{ color: "red" }}>
              CHECKOUT <BsArrowRight />
            </span>{" "}
            ORDER COMPLETE
          </h2>
        </div>

      </div>


      <div className='row mt-5'>
        <div className='col-6 '>
          <div className='row ml-5'>
            <img src={rectangle83} className='img-fluid ml-5' />
            <div className='col-2-border ml-3 mt-3'>
              <p style={{ fontWeight: "600" }}>Decdeal Disposable Mask</p>


              <p>39.99 $
              </p>
              <div className='d-flex  pl-3 '>
                <p className='ml-3'>Art. No.:<br />
                  Color:

                </p>
                <p className='ml-3'>54637253 <br />
                  Mint

                </p>
                <p className='ml-3'>Size:<br />
                  Total:
                </p>
                <p className='ml-3'>21*45<br />
                  39.99
                </p>

              </div>

            </div>


          </div>
        </div>
        

        <div className='col-3 mmm border'>

        <div className='addind'>
        <p className='addme mt-5 ml-4'>Add A DISCOUNT CODE</p>
        <input type="text" placeholder=""
        style={{ marginTop: "-10px", width: "65%",marginLeft:"20px" }}/>
        <button className='addplz'>Add</button>
        <p className='addme ml-4' style={{marginTop:'18px'}}>Log in to use your member offers.</p>
        <button className='btnme1 ml-4'> LOG IN</button>
        <p className='mt-3 ml-4'>Order value:
        <br/>Shipping:
         </p>
         <p style={{marginLeft:'300px',marginTop:'-60px'}}>82.98 $
         <br/>
         0.0 $
          </p>
         <p className='mt-3 ml-4'>Total</p>
         <p style={{marginLeft:'300px',marginTop:'-30px'}}>82.98 $</p>
        <button className='btnme111 ml-4'>Continue to checkout</button>
        <div className='mt-4 mmm'></div>


                </div>
        </div>

      </div>
    </div>
  )
}

export default ShippingCartDetails
