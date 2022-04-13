import './App.css';
import Header from "./component/navigation/Header";
import Body from "./component/body/Body";
import Signup from "./component/signup/Signup";
import About from "./component/about/About";
import Consulting1 from "./component/consulting/Consulting1";
import Consulting2 from "./component/consulting/Consulting2";
import Footer from "./component/footer/Footer";
import  { Routes, Route, Link }from "react-router-dom";
import { useState } from 'react';


function App() {
  const [data,setData ] = useState("")
             
  return (
    <div className="App">
      <Header aj={data}/>
      <Routes>
      <Route path="/" element={<Body sampleData={(item)=> setData(item)}/>} />
     <Route path="/signup" element={<Signup />} /> 
     <Route path="/about" element={<About sampleData={(item)=> setData(item)}/>} /> 
     <Route path="/startup" element={<Consulting1 />} /> 
     <Route path="/greenloans" element={<Consulting2 />} /> 

     </Routes>
    <Footer />
    </div>
  );
}

export default App
