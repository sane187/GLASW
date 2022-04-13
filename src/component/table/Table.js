import React from 'react'
import './table.css'
import business from '../../Assets/business.png';
import training from '../../Assets/training.jpg';
import user from '../../Assets/userf.jpg';





const table = () => {
  return (
    <div className='container-fluid mb-4 ca' >

     <h1 className='text-center heading' style={{color:"#03a66a"}}> How Are We Doing This?</h1>

    <div className="row px-lg-5 mt-5"> 

    <div className='d-flex flex-column justify-content-start align-items-center col-lg-4 col-md-4 col-xs-12 mt-sm-4'  >
     
         <div className="card border-0 " >
  <img src={business} className="card-img-top img-fluid rounded-3"style={{width:"auto",height:"35vh"}} alt="..." />
  <div className="card-body">
    <p className="card-text mt-2">We designed the business models for Women's start-ups in Sustainability.</p>
  </div>
</div>
    </div>



    <div className='d-flex flex-column justify-content-start align-items-center col-lg-4 col-md-4 col-xs-12 mt-sm-4'   >
    <div className="card border-0" >
  <img src={user} className="card-img-top img-fluid rounded-3" style={{width:"auto",height:"35vh"}}alt="..." />
  <div className="card-body">
    <p className="card-text mt-2">We create a user-friendly platform informing and comparing start-up Green Loan options</p>
  </div>
</div>
    </div>

    <div className='d-flex flex-column justify-content-start align-items-center col-lg-4 col-md-4 col-xs-12 mt-sm-4'   >
    <div className="card border-0 "  >
  <img src={training} className="card-img-top img-fluid rounded-3" style={{height:"35vh",width:"auto"}} alt="..." />
  <div className="card-body">
    <p className="card-text mt-2">We provide Agile training/coaching to the latest emerging companies.</p>
  </div>
</div>
    </div>
    

    </div>

    
    </div>
  )
}

export default table