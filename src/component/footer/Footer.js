import React from 'react';
import { BsTwitter,BsFacebook,BsInstagram } from 'react-icons/bs';
import  {Link }from "react-router-dom";


const Footer = () => {
  return (
    <>
  
<div className="w-100">
  
  <footer className="text-center text-white" style={{backgroundColor: "rgb(58, 216, 103)"}}>
   
    <div className="container">
     
      <section >
      
        <div className="row text-center d-flex justify-content-center pt-2">
          
          <div className="col-md-2 mt-1">
            <h6 className="text-uppercase ">
              <Link to="/" className="text-white fw-bold text-decoration-none">Home</Link>
            </h6>
          </div>
          
          <div className="col-md-2 mt-1">
            <h6 className="text-uppercase ">
              <Link to="/about" className="text-white fw-bold text-decoration-none">About Us</Link>
            </h6>
          </div>
         
        
          <div className="col-md-2 mt-1">
            <h6 className="text-uppercase ">
              <Link to="/greenloans" className="text-white fw-bold text-decoration-none">Help</Link>
            </h6>
          </div>
         
          <div className="col-md-2 mt-1">
            <h6 className="text-uppercase ">
              <Link to="/startup" className=" fw-bold text-decoration-none text-white">Contact</Link>
            </h6>
          </div>
        
        </div>
       
      </section>
     
      <hr  className='m-1'/>

      <section className="text-center pb-2 ">
        <a href="" className="text-white me-4">
         <BsTwitter />
        </a>
       
        <a href="" className="text-white me-4">
        <BsFacebook />
        </a>
        <a href="" className="text-white me-4">
          <BsInstagram />
        </a>
        
        
      </section>
    </div>
   

    <div
         className="text-center p-1"
         style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
         >
      © 2020 Copyright:
      GlaasW
    </div>
  
  </footer>
 
</div>

    
    </>
  )
}

export default Footer