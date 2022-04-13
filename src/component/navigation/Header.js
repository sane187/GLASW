import React,{useEffect, useState} from 'react';
import './header.css'
import image from '../../Assets/logo.jpg'
import { AiOutlineUser } from 'react-icons/ai';
import  {Link }from "react-router-dom";




const Header = (prop) => {

console.log(prop.aj)
useEffect(() => {
  if( prop.aj=="/about"){
    document.getElementById("nav-about").style.border="2px solid green";
    document.getElementById("nav-home").style.border="none"
  }
  if(prop.aj=="/"){
    document.getElementById("nav-home").style.border="2px solid green";
    document.getElementById("nav-about").style.border="none"
  }
}, [prop.aj])




    window.addEventListener("scroll",function(){
        let nav=document.getElementById("navbar-top");
        if(window.pageYOffset==0){
         
          nav.classList.remove("fixed-top");
          nav.classList.add("pt-4");
        }
        if(window.pageYOffset>0){
         
          nav.classList.add("fixed-top");
          nav.classList.remove("pt-4");
         }
      })
      

  return ( <>
<nav className="navbar navbar-default navbar-expand-lg bg-white navbar-light pt-4" style={{padding: "10px 80px 10px 80px"}} id="navbar-top">  
  
    <div className="container-fluid">
      <Link to="/" className="navbar-brand"   style={{color: "#3ad867",
    fontSize: "2rem",
    fontWeight: 700,display:"inline-flex"}}><img src={image} alt="logo" style={{height:"2.8rem",width:"4rem",marginRight:"-5px"}} /> GLASW </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" ></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link ms-3 fw-bold menu-link" aria-current="page" href="#" id="nav-home">HOME</Link>
          </li>
          <li className="nav-item" >
            <Link to="/about" className="nav-link ms-3 fw-bold menu-link nav-about" id="nav-about" onClick={()=>{
           
            }} >ABOUT</Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-link ms-3 fw-bold mb-2 mt-auto " href="#"><AiOutlineUser style={{display:"inline-block",fontSize:"2rem",color:"05386b"}}/></Link>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle ms-3 fw-bold px-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{background:"#3ad867",color:"white",borderRadius:"5px"}}>Consulting Services</a>
            <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
              <li><Link to="/startup" className="dropdown-item">Business Start-up Consulting</Link></li>
              <li><Link to="/greenloans" className="dropdown-item" >Green loans Consultation</Link></li>
              <li><a className="dropdown-item" >Marketing Business Consulting</a></li>
            </ul>
          </li>
         
         
        </ul>
        
      </div>
    </div>
  </nav>
  
  </>
  )
}

export default Header