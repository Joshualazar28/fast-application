import React from 'react'
// ----------Import Iamges to Assets------------
import { Link } from 'react-router-dom'

import Reactangle from '../assets/Rectangle 1100.png'
import logo from '../assets/Logo.png'

// ----------------- Using Functioal Component--------------------


function Login() {
    return (
        <div>


            <div class="container login-container">
                <div class="row">
                    <div class="col-md-6 login-form-1 mt-5">

                        <img src={Reactangle} className='img-fluid frame' />

                    </div>
                    <div class="col-md-6 login-form-2 mt-5 ">

                        <div className='signbox'>


                            <img src={logo} className='img-fluid logo2' />

                            <h4>Sign into you account</h4>
                            <form className='login-form-2'>
                                <div class="form-group  ">
                                    <input type="text" class="form-control" placeholder="Your Email " value="" />
                                </div>
                                <div class="form-group">
                                
                                    <input type="password" class="form-control" placeholder="Your Password *" value="" />
                                </div>
                                <div class="form-group">
                                    <a href="#" class="ForgetPwd" value="Login">Forget Password?</a>
                                </div>
                                <div class="form-group">
                                    <input type="submit" class="btnSubmit border btn " value="LOGIN" />
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

export default Login
