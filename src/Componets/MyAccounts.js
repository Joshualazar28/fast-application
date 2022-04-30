import React from 'react'
import { Link } from 'react-router-dom'

function MyAccounts() {
    return (
        <div>

            <div className='row'>
            <div className='col-2'>

                    <div class="wrapper">

                        <nav id="sidebar">
                            <div class="sidebar-header">

                            </div>

                            <ul class="list-unstyled components pt-5">


                                <li>
                                    <a className='myac ' href="#">My Account</a>
                                </li>
                                <li>
                                    <a className='acoo' href="#">Accounts details</a>
                                </li>
                                <li>
                                    <a className='acoo' href="/">Orders</a>
                                </li>
                            </ul>


                        </nav>
                        
                        </div>
                    
            </div>
                <div className='col-10  accounthome'>
                <p className='myAccounts mt-5 pt-5'> MY ACCOUNT</p>
                
                <p className='details'>Account Details</p>
            

                <div className='row '>
                <div className='col-6 '> <input type="text" class="form-control form1" placeholder="First name"/></div>
                <div className='col-6 '><input type="text" class="form-control form1" placeholder="Last name"/></div>

                </div>
                <div className='row '>
                <div className='col-12  mt-3'> <input type="text" class="form-control form2" placeholder="Display Name"/></div>
                </div>
                <div className='row '>
                <div className='col-12  mt-3'> <input type="text" class="form-control form2" placeholder="Email address"/></div>
               </div>
               <div className='row '>
               <div className='col-12  mt-3'> <input type="text" class="form-control form2" placeholder="Address"/></div>
              </div>
            
            
               
              <p className='details mt-2 pt-3'>Password Chnages</p>
              <div className='row '>
              <div className='col-12  mt-3'> <input type="text" class="form-control form2" placeholder="Current password (leave blank to leave unchanged)"/></div>
              </div>
              <div className='row '>
              <div className='col-12  mt-3'> <input type="text" class="form-control form2" placeholder="New password (leave blank to leave unchanged)"/></div>
              </div>
              <div className='row '>
              <div className='col-12  mt-3'> <input type="text" class="form-control form2" placeholder="Confirm new password"/></div>
              </div>
              
            <button type="button" class="btn3 mt-4">Save Changes</button>
             

                </div>
                


            </div>

            <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>

            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.concat.min.js"></script>
        </div>
    )
}

export default MyAccounts
