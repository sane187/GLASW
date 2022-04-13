import React from 'react'
import "./about.css";
import business from '../../Assets/business.png';
import training from '../../Assets/training.jpg';
import user from '../../Assets/userf.jpg';
import { useEffect } from "react";



const About = ({sampleData}) => {

useEffect(() => {
  let aj=window.location.pathname
  sampleData(aj); 

}, [])
 
  return (
      <>
<div id="Subheader" style={{height:"35vh" ,width:"100%" }} className="d-flex align-items-center"><div className="container-fluid">  <h3 className='text-white about ms-4'>About Our Company</h3></div></div>


    <div className='container-fluid' >
    <div className='px-md-5 mt-4'>
      
       
        <div className=' atext mt-5'>
        About The Startup Consultancy, a professional consulting services company offering business and other types of consulting services. Our goal is to help our clients be successful in business, supporting them through our various consulting services. To help them plan, execute, and manage startups, projects, and growth more efficiently. </div>
        <div className=' atext mt-3'>
At the Startup Consultancy, we’re experts with over 10 years of experience, providing consulting services for startup businesses, small businesses, and established organizations. Our success is built on our client’s success. Our consultants provide support to clients through consultations in specific areas and for specific requirements. We create for our client's long-term results that continually drive improvement and value.
</div>


<div className='container-fluid mb-4 ca' >

<h1 className='text-center headiing' style={{color:"#03a66a"}}> What are we delivering?</h1>

<div className="row px-lg-5 mt-5"> 

<div className='d-flex flex-column justify-content-start align-items-center col-lg-4 col-md-4 col-xs-12 mt-sm-4'  >

    <div className="card border-0 " >
<img src={business} className="card-img-top img-fluid rounded-3"style={{width:"auto",height:"35vh"}} alt="..." />
<div className="card-body">
<p className="card-text mt-2">We deliver value to start-ups by encouraging, supporting, and mentoring women in their business ventures.</p>
</div>
</div>
</div>



<div className='d-flex flex-column justify-content-start align-items-center col-lg-4 col-md-4 col-xs-12 mt-sm-4'   >
<div className="card border-0" >
<img src={user} className="card-img-top img-fluid rounded-3" style={{width:"auto",height:"35vh"}}alt="..." />
<div className="card-body">
<p className="card-text mt-2">We deliver valuable information, on how to start, how to grow and whom to ask for a financial support</p>
</div>
</div>
</div>

<div className='d-flex flex-column justify-content-start align-items-center col-lg-4 col-md-4 col-xs-12 mt-sm-4'   >
<div className="card border-0 "  >
<img src={training} className="card-img-top img-fluid rounded-3" style={{height:"35vh",width:"auto"}} alt="..." />
<div className="card-body">
<p className="card-text mt-2">We deliver a unique network of likeminded business women prepared to take on the challenges of change in the world of sustainability</p>
</div>
</div>
</div>


</div>


</div>




    </div>
    </div>
    </>
  )
}

export default About