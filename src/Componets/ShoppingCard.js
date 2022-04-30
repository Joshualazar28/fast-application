import React from 'react'

// ----------Import Iamges to Assets------------

import vector from '../assets/Vector (1).png'
import bicart from '../assets/bi_cart-x.png'

// ----------Import Iamges to Assets------------
import { Link } from 'react-router-dom'

// ----------------- Using Functioal Component--------------------

function ShoppingCard() {
  return (
    <div>


      <div className='shoppingcard border '>
        <div className='row'>
          <div className='col-8'>
            <p className='shp mt-5 ml-4'>SHOPPING CART</p>

          </div>
          <div className='col-4 mt-5 px-5 '>
            <img src={vector} className='img-fluid crsss' />

          </div>
          <hr className='whitee ' />
        </div>

        <div className='row mt-5'>


          <div className='col mt-5 ml-5 pl-5'>
            <img src={bicart} className='img-fluid mt-4 pt-4 ml-5' />

            <p className='nopro mt-3 ml-2 pl-1'>NO PRODUCTS IN THE CART</p>

            <button type="button" class="btn6">RETURN TO SHOP</button>

          </div>
        </div>

      </div>
    </div>
  )
}

export default ShoppingCard
