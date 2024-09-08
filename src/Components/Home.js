import React from 'react'
import '../Stylesheets/Home.css'
import Guy from "../Images/home.png.png"
import { Link } from 'react-router-dom'

function Home() {
  return (   
   <div className="home-page">

 <section className="section-1">
 <div className="home-left">
  <h1 className='entry-heading'>Get the Best <br />
    Products</h1>
    <Link to='/products' className="start-btn">GET STARTED</Link>
 </div>

<div className="home-right">
  <img src={Guy} alt="" />
</div>
</section>
  <h1 className='heading-2'>Our <span>Features...!</span> </h1>

<section className="section-2">
<div className="card">
<div className="icon"><i class="ri-restaurant-fill red"></i></div>
<h2 className='card-main-h red'>Crockery</h2>
<p className='card-des'>We specialize in providing a wide range of crockery that combine with elegant designs in all range over the globe.</p>
</div>
<div className="card">
<div className="icon"><i class="ri-computer-fill"></i></div>
<h2 className='card-main-h red'>Electronics</h2>
<p className='card-des'>Discover the latest in technology with our extensive collection of electronics. From smartphones and laptops.</p>
</div>
<div className="card">
<div className="icon"><i class="ri-truck-fill"></i></div>
<h2 className='card-main-h red'>Free Delivery</h2>
<p className='card-des'>Enjoy free delivery on all orders! Whether you're stocking up on kitchen essentials , we've got you covered.</p>
</div>
<div className="card padding">
<div className="icon"><i class="ri-discount-percent-fill"></i></div>
<h2 className='card-main-h red'>Amazing Discounts</h2>
<p className='card-des'>We provide Amazing Discounts on your products every month with very Exciting Offers with good cash back.</p>
</div>



</section>

<section className="section-3">
  <h1 className='grey font'><span>Flash Sale</span> ending soon..!</h1>
  <h2 className='grey font'>Order now to get big<span> Discounts</span></h2>
  <Link to='/products' className="start-btn">Order Now</Link>
</section>

   </div>
  )
}

export default Home