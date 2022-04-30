import React from 'react'
import Navbar from "./Navbar"
import Frame from "../assets/Frame.png"
import Icon from "../assets/Icon.png"
import Icon2 from "../assets/Icon (1).png"
import Icon3 from "../assets/Icon (2).png"
import Icon4 from "../assets/Icon (3).png"
import Icon5 from "../assets/Icon (4).png"
import Icon6 from "../assets/Icon (5).png"

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";

import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import rectangle from "../assets/Rectangle (1).png"
import info from "../assets/info.png"
import info1 from "../assets/info (1).png"
import info2 from "../assets/info (2).png"
import info3 from "../assets/info (3).png"
import pic from "../assets/Pic.png"
import count from "../assets/counting.png"
import count1 from "../assets/counting (1).png"
import count2 from "../assets/counting (2).png"
import bg from "../assets/BG.png"
import rectangle131 from "../assets/Rectangle 13 (2).png"
import rectangle132 from "../assets/Rectangle 13 (3).png"






function Home() {
  return (
    <div>

      <div className='row'>

        <div className='col-6 py-5 mt-5'>
          <div className='box2 mt-5 ml-5'>
            <hr />
            <p className='WE-PROVIDE'>WE PROVIDE <span>FASTEST</span> <br />DELIVERY SERVICE.</p>
            <p className='order'>Order food and grocery Delivery online form <br /> hundreds of restaurants and shops nearby</p>
            <button type="button" class="btn1 mt-4">READ MORE</button>
          </div>
        </div>
        <div className='col-6 py-5 mt-5'>

          <img src={Frame} className='img-fluid frame' />
        </div>

      </div>











      <div className=' backg row '>
        <div className='col-4'></div>
        <div className='col-4 mt-5'>
          <p className='what mt-5'>WHAT WE OFFER</p>
          <p className='tailored'>Tailored delivery services</p></div>
        <div className='col-4'></div>

        <div className='col-2 '></div>
        <div className='col-8 mt-5 d-flex'>
          <div className='box3'>
            <img src={Icon} className='img-fluid frame p-5' />

          </div>
          <div className='box3 px-5'>
            <img src={Icon2} className='img-fluid frame p-5' />

          </div>
          <div className='box3   px-5'>
            <img src={Icon3} className='img-fluid frame p-5' />

          </div>

        </div>
        <div className='col-2'></div>



        <div className='col-2'></div>
        <div className='col-8 mt-2 d-flex'>
          <div className='box3   px-5'>
            <img src={Icon4} className='img-fluid frame p-5' />

          </div>
          <div className='box3 px-5'>
            <img src={Icon5} className='img-fluid frame p-5 ' />

          </div>
          <div className='box3 px-5'>
            <img src={Icon6} className='img-fluid frame p-5 ' />

          </div>

        </div>
        <div className='col-2'></div>

      </div>







      <div className='row third '>
        <div className='col-4'></div>
        <div className='col-4 mt-5'>
          <p className='what mt-5'>POPULAR GOODS</p>
          <p className='tailored'>Quick Pick</p></div>
        <div className='col-4'></div>

      </div>

      <div className='row third '>
      <div className='col-3'></div>
      <div className='col-8 mt-5'>
    <div className='medicine ml-5'>
    
    <button type="button" class="btn12  ">PHARMACY</button>
    <a href="#" class="ml-4 ">GROCERY</a>
    <a href="#" class="ml-4 ">FAST FOOD</a>
    <a href="#" class=" ml-4">ELECTRONICS</a>
    <a href="#" class="ml-4 ">GIFTS</a>

    </div>  
      </div>
      <div className='col-3'></div>

    </div>



    <div className='row pt-5'>
    <div className="col-8  -danger d-flex">
    <div className="col-lg-4 ">
       <div class="card  " style={{ width: "300px",marginLeft:'130px' }}>
           <img class="card-img-top" src={img2} alt="Card image cap" />
           <div class="card-body">
               <h5 class="card-title">Decideal Dispoables Masks</h5>
               <p class="card-text">Lorem Ipsum is Simply ommy text of the printing</p>
               <h1 className="dollar">$53.99</h1>
               <a href="#" class="btn ">Add To Cart</a>
           </div>
       </div>
   </div>
   <div className="col-lg-4">
       <div class="card" style={{ width: "300px",marginLeft:'100px' }}>
           <img class="card-img-top" src={img3} alt="Card image cap" />
           <div class="card-body">
               <h5 class="card-title">Decideal Dispoables Masks</h5>
               <p class="card-text">Lorem Ipsum is Simply ommy text of the printing</p>
               <h1 className="dollar">$53.99</h1>
               <a href="#" class="btn">Add To Cart</a>
           </div>
       </div>
   </div>
   <div className="col-lg-4 ">
   <div class="card" style={{ width: "300px",marginLeft:'100px' }}>
       <img class="card-img-top" src={img2} alt="Card image cap" />
       <div class="card-body">
           <h5 class="card-title">Decideal Dispoables Masks</h5>
           <p class="card-text">Lorem Ipsum is Simply ommy text of the printing</p>
           <h1 className="dollar">$53.99</h1>
           <a href="#" class="btn ">Add To Cart</a>
       </div>
   </div>
</div>
<div className="col-lg-4 ">
<div class="card  " style={{ width: "300px",marginLeft:'100px' }}>
    <img class="card-img-top" src={img2} alt="Card image cap" />
    <div class="card-body">
        <h5 class="card-title">Decideal Dispoables Masks</h5>
        <p class="card-text">Lorem Ipsum is Simply ommy text of the printing</p>
        <h1 className="dollar">$53.99</h1>
        <a href="#" class="btn ">Add To Cart</a>
    </div>
</div>
</div>

   

   


  

  

   
   </div>
   </div>



<div className='row pt-5 mt-5'>
<div className='col-5'>
<img src={rectangle} className='img-fluid frame' />
</div>
<div className='col-7 sidecont'>
<p className='sit '>SIT IT HOME
<br></br>
WE WILL TAKE CARE</p>
<p className='weee'>We cover different industry sectors, from food and <br/>beverage, chemical, retail, durable goods and more. We <br/>offer on-demand delivery services for all your local <br/>needs across UAE, at most competitive prices</p>

<div className='row mt-5 ml-5'>
<img src={info} className='img-fluid mt-5 ml-4 frame' />
<img src={info1} className='img-fluid mt-5 ml-5 frame' />
<img src={info2} className='img-fluid mt-5 ml-5 frame' />
<img src={info3} className='img-fluid mt-5 ml-5 frame' />
</div>
<button className='btnread '>READ MORE</button>
</div>

</div>

   
<div className='row third '>
        <div className='col-4'></div>
        <div className='col-4 mt-5'>
          <p className='what mt-5'>Why Choose Us</p>
          <p className='tailored'>Effective Ways</p></div>
        <div className='col-4'></div>

      </div>

    <div className='row'>
    <div className='col-1'></div>
    <div className='col-6'>
    <img src={pic} className='img-fluid frame11' />
    <div>
    <img src={bg} className='img-fluid greenbox' />
    <img src={count} className='img-fluid greenbox1' />
    <p className='fastt'>Fast delivery within Abu Dhabi</p>
    <p className="sata">We provide delivery services within Dubai. We have mostly covered all of Dubai and the areas which have been left out will be covered in near future</p>
    
    
    </div>
    

    </div>
    <div className='col-4 ml-5'>
    <img src={count1} className='img-fluid'/>
    <p className='customized mt-4 ml-3'>Customized Solutions for all</p>
    <p className='wepro ml-3'>We provide customized delivery for all types of merchants. Whether you need dedicated delivery field executives for your business or you need our field executives to deliver orders for you. Customers also can make use of app/website to place order and get items delivered where ever they want.</p>
    
    <img src={count2} className='img-fluid mt-5'/>
    <p className='customized mt-4 ml-3'>Dedicated Field Executives</p>
    <p className='wepro ml-3'>Merchant can contact our business team and follow the procedure to become dedicated merchant. Field executives will directly work with dedicated merchants without our intervention. Dedicated merchants can select to whom the order should be assigned </p>
    
    </div>
    

    </div>


    <div className='row third '>
    <div className='col-4'></div>
    <div className='col-4 mt-5'>
      <p className='what mt-5'>BE A PART OF US</p>
      <p className='tailored'>KOIN NOW FASTEST DELIVERY SERVICES</p></div>
    <div className='col-4'></div>

  </div>

  <div className='row mb-5 mt-5'>
  <div className='col-3'></div>

  <div className='col-3 ' style={{marginLeft:"-40px"}}> 
  <div className='caartsouter'>
  <img src={rectangle131} className='img-fluid cartss' />
  <h5 className='name mt-3'>Hire a Delivery Boy</h5>
    <p className=' reach'>Reach more customers and achieve growth with us§</p>
    <button className='btn1212 '>FIND OUT MORE</button>
    </div>
  </div>
  



  <div className='col mr-5 '  style={{marginLeft:"40px"}}> 
  <div className='caartsouter'>
  <img src={rectangle132} className='img-fluid cartss' />
  <h5 className='name mt-3'>Hire a Packing Helper</h5>
    <p className=' reach'>Reach more customers and achieve growth with us§</p>
    <button className='btn1212 '>FIND OUT MORE</button>
    </div>
  </div>
  </div>
  

</div>
  )
}

export default Home
