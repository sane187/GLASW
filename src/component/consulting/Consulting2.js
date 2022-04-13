import React,{useState} from 'react';
import './consulting2.css';
import { TiTick } from 'react-icons/ti';
import { AiFillStar } from 'react-icons/ai';
import { GiCancel } from 'react-icons/gi';
import biz from "../../Assets/biz.jpg"
import fund from "../../Assets/fund.jpg"









const Consulting2 = () => {

const arr=[{name:"Biz Credit",tscore:9.9,score:580,revenue:10000,amount:"10000 - 6000000"},{name:"Fundera",tscore:9.7,score:630,revenue:20000,amount:"20000 - 1000000"},{name:"Fundit",tscore:9.0,score:780,revenue:8000,amount:"5000 - 20000000"},{name:"Fora finanace",tscore:9.2,score:700,revenue:15000,amount:"50000 - 750000"},{name:"United Finanace",tscore:9.0,score:600,revenue:250000,amount:"10000 - 500000"}]


const [first, setFirst] = useState([...arr])



  return (
    <div className='container-fluid '>
    <div className="container title-container p-2 mb-5" >
      <div className="row">
        <div className="page-header-container col-12 col-sm-12">
      <div className="title"><h1 itemProp="name headline" id="page-caption" style={{color:"#282828"}}> TOP BUSINESS LOANS <br/><span style={{color:"rgb(58, 216, 103)"}}>APRIL 2022</span></h1></div>
    </div>
  </div></div>


  <div className='container drop-container my-5'>
    <div className='container-fluid price d-flex align-items-center justify-content-start '>
<label>FILTER BY:</label>
<div className="dropdown ms-4">
  <a className="btn dropdown-toggle dt" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"white",background:"rgb(58, 216, 103)"}} data-description="Credit score">
   Show All
  </a>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a className="dropdown-item" onClick={()=>setFirst([...arr])}>Show All</a></li>
    <li><a className="dropdown-item"
     onClick={()=>{setFirst(arr.filter((item)=>item.score>720 && item.score<850) ) }}>Excellent Credit (720-850)</a></li>
    <li><a className="dropdown-item" onClick={()=>{setFirst(arr.filter((item)=>item.score>680 && item.score<719) ) }}>Good credit (680-719)</a></li>
    <li><a className="dropdown-item"  onClick={()=>{setFirst(arr.filter((item)=>item.score>620 && item.score<679) ) }}> Fair credit (620-679)</a></li>
    <li><a className="dropdown-item"  onClick={()=>{setFirst(arr.filter((item)=>item.score>580 && item.score<619) ) }}> Poor credit (580-619)</a></li>
  </ul>
</div>

<div className="dropdown ms-4 ">
  <a className="btn dropdown-toggle dt" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"white",background:"rgb(58, 216, 103)"}} data-description="Revenue">
  Show All
  </a>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
  <li><a className="dropdown-item" onClick={()=>setFirst([...arr])}>Show All</a></li>
    <li><a className="dropdown-item" onClick={()=>{setFirst(arr.filter((item)=>item.revenue<5000) ) }}>Less than $5,000</a></li>
    <li><a className="dropdown-item" onClick={()=>{setFirst(arr.filter((item)=>item.revenue>=5000 && item.revenue<50000) ) }}>$5,000 - $50,000</a></li>
    <li><a className="dropdown-item" onClick={()=>{setFirst(arr.filter((item)=>item.revenue>=50000 && item.revenue<250000) ) }}> $50,000 - $250,000</a></li>
    <li><a className="dropdown-item" onClick={()=>{setFirst(arr.filter((item)=>item.revenue>=250000 && item.revenue<500000) ) }}> $250,000 - $500,000</a></li>
  </ul>
</div>

<div className="dropdown ms-4">
  <a className="btn dropdown-toggle dt" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"white",background:"rgb(58, 216, 103)"}} data-description="Loan range">
  Show All
  </a>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a className="dropdown-item" onClick={()=>setFirst([...arr])}>Show All</a></li>
    <li><a className="dropdown-item" onClick={()=>{setFirst(arr.filter((item)=>Number(item.amount.slice(0,4)))<10000)  }}>Less than $10,000</a></li>
    <li><a className="dropdown-item" onClick={()=>{setFirst(arr.filter((item)=>Number(item.amount.slice(-6,-1))>10000 && Number(item.amount.slice(-5,-1))<20000) ) }}>$10,000 - $20,000</a></li>
  </ul>
</div>  </div>     
  

  <div className='table-responsive tt1'>
    <table className="table" style={{color: "#172b4c"}}>
  <thead>
    <tr>
      <th scope="col" className='pointer rounded-top align-middle'>Name</th>
      <th scope="col">Score</th>
      <th scope="col" style={{width:"30%"}}>Loan Features</th>
      <th scope="col">Loan Amount</th>
    </tr>
  </thead>
  <tbody>     
  {first.length? first.map((item, i)=>(                
         <tr key={item.name}>
           <td scope="row">{item.name}</td>
         <td>{item.tscore}</td>
         <td><div>${item.revenue} in monthly revenue</div><div>Minimum credit score: {item.score}</div></td> 
      <td>$ {item.amount}</td>
      </tr>
      )):"" }
  </tbody>
</table>
</div>

</div>


<div className='container ' style={{marginTop:"6vh"}}>
  <div className=''>
  <div className="cross-line-header-container"><h3 className="cross-line-header"> Editor's Choice 2022 </h3></div>
  </div>
  <div className='table-responsive mt-4 tt2'>
    <table className="table " style={{color: "#172b4c",border:"2px solid #e6e9ee"}}>
  <thead>
    <tr>
      <th scope="col" ></th>
      <th scope="col">SCORE</th>
      <th scope="col" style={{width:"30%"}}>LOAN REQUIREMENTS</th>
      <th scope="col">MAX LOAN</th>
      <th scope="col"></th>

    </tr>
  </thead>
  <tbody>  
    <tr>
      <td style={{width:"25%"}}><div className='mx-3'> <img src={biz} alt="biz" className='img-fluid'/></div></td>
      <td><div className='ms-4'><strong>9.9</strong></div>
      <p className="stars-holder rating-info-tooltip" style={{display: "inline-flex"}} data-placement="bottom" data-trigger="hover" data-html="true" data-container="body"><span className="star-icon full"><AiFillStar style={{color:"#FFFF00"}}/></span><span className="star-icon full"><AiFillStar style={{color:"#FFFF00"}}/></span><span className="star-icon full"><AiFillStar style={{color:"#FFFF00"}}/></span><span className="star-icon full"><AiFillStar style={{color:"#FFFF00"}}/></span><span className="star-icon full"><AiFillStar style={{color:"#FFFF00"}}/></span></p></td> {console.log("k")}
      <td><div className="content-container pros_list center"><div className="center"><ul className="list-unstyled"><li><TiTick style={{fontSize:"1.5rem",color:"rgb(58, 216, 103)"}}/><span className="text">Time in business: 12+ months</span></li><li><TiTick style={{fontSize:"1.5rem",color:"rgb(58, 216, 103)"}}/><span className="text">$10K in monthly revenue</span></li><li><TiTick style={{fontSize:"1.5rem",color:"rgb(58, 216, 103)"}}/><span className="text">Minimum credit score: 580</span></li></ul></div></div></td>
  <td>$10,000 - $6,000,000</td>
  

    </tr>
    </tbody></table>  
    </div>


</div>



<div className='container mb-4' style={{marginTop:"12vh"}}>

  <div style={{background:"#f5f5f5"}} className="py-5">
     

      <div className="compare-header-container text-center "><h3 className="compare-title"> Compare Side-By-Side Business Loan Features </h3>
      <p className="compare-synopsis"> Find The Right Loan For You </p>
      </div>
     

  <div className='table-responsive'>
  <table className="table">
  <thead>
    <tr>
      <th scope="col" style={{width:"25%"}} ></th>
      <th scope="col me-4" style={{width:"25%",backgroundColor:"white",border:"1px solid #dee2e6"}}><div className="content-container mx-auto"><div className='mx-auto text-center'> <img src={biz} alt="biz" className='img-fluid'/></div><div className="score-string text-center"> 9.9 </div><div className="visit-site-wrapper "> <button className='btn btn-primary '>Visit Site</button> </div></div></th>
      <th scope="col" style={{width:"25%",backgroundColor:"white",border:"1px solid #dee2e6"}}><div className="content-container mx-auto"><div className='mx-auto text-center'> <img src={fund} alt="biz" className='img-fluid'/></div><div className="score-string text-center"> 9.9 </div><div className="visit-site-wrapper "> <button className='btn btn-primary '>Visit Site</button> </div></div></th>
      <th style={{width:"15%"}}></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><div>Min Time in Business</div></th>
      <td><div>12+ months</div></td>
      <td><div>12 months</div></td>     
    </tr>
    <tr>
      <th scope="row"><div>Min Monthly Revenue</div></th>
      <td><div>$10K in monthly revenue</div></td>
      <td><div>$20,000</div></td>
    </tr>
    <tr>
      <th scope="row"><div>Min Credit Score</div></th>
      <td><div>580</div></td>
      <td><div>620</div></td>
    </tr>
    <tr>
      <th scope="row"><div>Min Credit Score</div></th>
      <td><div>580</div></td>
      <td><div>620</div></td>
    </tr>
    <tr>
      <th scope="row"><div>Min Loan credit</div></th>
      <td><div> $10,000 - $6,000,000</div></td>
      <td><div> $20,000 - $8,000,000</div></td>
    </tr>
    <tr>
      <th scope="row"><div>Equipment Loans</div></th>
      <td><div> <TiTick style={{fontSize:"1rem"}}/></div></td>
      <td><div> <GiCancel style={{fontSize:"1rem"}}/></div></td>
    </tr>
  </tbody>
</table>  
  </div>


  </div>


  </div>
   </div>
  )
}

export default Consulting2