import React from 'react';
import './signup.css'
import image from "../../Assets/greenbg.jpg"

const signup = () => {
  return (
    <div className='container-fluid' style={{ display:"flex",
    flexDirection:"column",justifyContent:"center",
    justifyContent:"center",
    minHeight:"92vh"}}>
        <section className="form_1 p-5" style={{background:`url(${image}) no-repeat`,backgroundSize:"cover"}} >
	<div className="container px-xl-0" >
    <form style={{display:"flex", alignItems:"center",flexDirection:"column"}}>
                <h1 className='text-center form-head' style={{color:"white"}}>SIGN IN</h1>
                <div className="form-group mt-2">
                    <label style={{color:"#fff",fontWeight:"bold"}}>Email </label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group mt-2">
                    <label style={{color:"#fff",fontWeight:"bold"}}>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className="form-group mt-2">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <span style={{color:"white",fontWeight:"bold"}} className="custom-control-label rem ms-2" htmlFor="customCheck1">Remember me</span>
                    </div>
                </div>
                <button type="submit" className="btn btn-man btn-primary mt-3" style={{width:"25"}}>Submit</button>
            </form>
	</div>
</section>
    </div>
  )
}

export default signup