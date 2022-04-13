import React, { useEffect } from 'react';
import "./body.css"
import image from '../../Assets/unnamed.png'
import image2 from '../../Assets/istockphoto-1202300276-612x612.jpg'
import Table from "../table/Table";





const Body = ({sampleData}) => {

  useEffect(() => {
    let aj=window.location.pathname
    sampleData(aj); 
  
  }, [])

  return (
    <div className="container-fluid" style={{marginTop:"6vh"}}>
    <div className="row px-md-5 " > 
    <div className='d-flex flex-column justify-content-center align-items-start col-lg-8 col-md-7 col-xs-12  ' >
     <div className='w-100 big-text'>
     GLASwomen – Green Loans Africa/Asia Start-ups Women
     </div>
         <div className='small-text mt-3'>
         
      ‘No matter how small, no matter where’
         </div>
    </div>
    <div className='col-lg-4 col-md-5 col-xs-12'  >
        <img src={image} width="100%" className='img-responsive'/>
        </div>
        </div>



        <div className="row mt-5 px-md-5" > 
        <div className='col-lg-5 col-md-5 col-xs-12 mt-lg-5'  >
        <img src={image2} width="100%" style={{borderRadius:5}} className='img-responsive'/>
        </div>
    <div className='d-flex flex-column text-center justify-content-center col-lg-7 col-md-7 col-xs-12 ' >
     <div className='w-100 vision-head'>
     Our Vision
     </div>
         <div className='mt-3 vision-body'>
         
         Our vision is to create a customer-centric platform for Women’s Sustainability start-ups in undeveloped countries in Africa and Asia.
The platform should enable newly formed and first-year start-ups to find affordable and supportive lenders in the space of Green Loan opportunities.
         </div>
    </div>
    
        </div>

        <Table />

        </div>

     
  )
}

export default Body