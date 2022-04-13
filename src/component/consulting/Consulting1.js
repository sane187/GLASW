import React from 'react'
import './consulting.css'



const Consulting1 = () => {
  return (
    <div className="container-fluid ban" style={{height:"87vh"}} >

<div className='text-white fit w-50 d-flex flex-column px-md-4 px-lg-5 my-auto h-100 justify-content-center'>

<div>
    <h1 className='c-head '>Let's talk about improving your business...</h1>
   </div>

   <div className='form-cont mt-4'>


  <div className="mb-3 d-flex"> 
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your name' />
  <input type="email" className="form-control ms-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your email' />
  </div>

  <div className="mb-3">
  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="subject" placeholder='Subject' />
  </div>

  <div className="mb-3" >
  <input type="text" className="form-control " id="exampleInputEmail1" aria-describedby="subject" placeholder='Message' style={{height:"15vh"}}/>
  </div>

  <div className="mb-3">    
  <button type="submit" className="btn btn-primary" style={{width:"auto"}}>Submit</button>

</div>
   

</div>







</div>
    </div>
  )
}

export default Consulting1