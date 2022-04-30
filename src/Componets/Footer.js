import React from 'react'
import Logo from '../assets/Group 244.png'

function Footer() {
  return (
    <div>


      <footer class="page-footer  p-5 font-small blue pt-4">


        <div class="container-fluid text-center text-md-left border-danger">


          <div class="row">


            <div class="col-md-6 mt-md-0 mt-3">


              <h5 class="text-uppercase ">
                <img className='footerlogo' src={Logo} />

              </h5>
              <p class="p-3 update ">Updates right to you inbox</p>
              <form>
                <div class="row ">
                  <div class="col-5 ">
                    <input type="text" class="form-control" placeholder="Email Adress" />
                
                    </div>

                  <div className='col-5'>
                    <button type="button" class="btn">READ MORE</button>

                  </div>

                  <div class="row ">
                  <div class="col-6 "></div>
                  <p class="p-5 fast  "> © Fast Delivery Service 2022</p>
                  </div>

                </div>
              </form>

            </div>


            <hr class="clearfix w-100 d-md-none pb-3" />


            <div class=" box col-md-2 mb-md-0 mb-3   ">
              <h5 class="text fw-bold">Our story</h5>
              <ul class="list-unstyled p-2">
                <li class="p-2">
                  <a class="a-black" href="#!">FAQ</a>
                </li>
                <li class="p-2">
                  <a class="a-black" href="#!">Contact</a>
                </li>

              </ul>

            </div>

            <div class="col-md-2 mb-md-0 mb-3 ">
              <h5 class="text fw-bold">Pages</h5>

              <ul class="list-unstyled p-2">
                <li class="p-2">
                  <a class="a-black" href="#!">Home</a>
                </li>
                <li class="p-2">
                  <a class="a-black" href="#!">Services</a>
                </li>
                <li class="p-2">
                  <a class="a-black" href="#!">Contact us</a>
                </li>
                <li class="p-2">
                  <a class="a-black" href="#!">Hire</a>
                </li>

              </ul>

            </div>

            <div class="col-md-2 mb-md-0 mb-3 ">
              <h5 class="text fw-bold">Privacy policy</h5>

              <ul class="list-unstyled p-2">
                <li class="p-2">
                  <a class="a-black" href="#!">Terms & contition</a>
                </li>


              </ul>
            </div>

          </div>
        </div>
        
      </footer>
    </div>
  )
}

export default Footer
