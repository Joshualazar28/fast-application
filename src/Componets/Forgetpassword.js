import React from 'react'

// ----------Import Iamges to Assets------------

import Reactangle from '../assets/Rectangle 1100.png'
import logo from '../assets/Logo.png'

// ----------------- Using Functioal Component--------------------
 

function Forgetpassword() {
    return (
        <div>

            <div class="container login-container">
                <div class="row">
                    <div class="col-md-6 login-form-1 mt-5">



                        <img src={Reactangle} className='img-fluid frame     ' />

                    </div>

                    <div class="col-md-6 login-form-2 mt-5 ">

                        <div className='signbox'>

// -------------------------------LOGO-------------------------------------
                            <img src={logo} className='img-fluid logo2' />


                            <h4>Forget Password</h4>
                            <form className='login-form- mt-1 py-1'>
                                <div class="form-group  mt-1 pt-1 ">
                                    <input type="text" class="form-control mb-3 mt-1" placeholder="Your Email " value="" />
                                    <p className='paswword'>A password will be sent to you address</p>
                                </div>
                               
                               
                                <div class="form-group mt-5 pt-5">
                                    <input type="submit" class="btnSubmit border btn mt-3 " value="Sent" />
                                </div>


                                <a href="#" class="ForgetPwd " id="create" value="Login">CREATE AN ACCOUNT</a>

                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forgetpassword
