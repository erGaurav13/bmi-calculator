import { useState } from "react";
import "../../CSS/Login.css"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Calculate } from "../../Redux/BMI/bmi.action";
 
const init={
    height:"",
    weight:"",
    token:""
}

export const Bmi=()=>{
const dispatch= useDispatch();  
const {token}=useSelector(state=>state.authReducer)
const navigate=useNavigate();

if(!token){
   navigate("/")
}


const [data,setData]= useState(init)
const handelChange=(e)=>{
 const {name,value}=e.target;
 setData({...data,[name]:value})
}

const handelSubmit=(e)=>{
   e.preventDefault();
   setData({...data,token})
   dispatch(Calculate(data))
}
 console.log(data)

return  <div id="container">
 
<div className="Login-form-Box">
       <h2>B-M-I </h2>
      <form action="">
         <label htmlFor="height">
            Height:
            <input type="number" name="height" onChange={handelChange} placeholder="Enter your Height in Meter"/>
         </label>
            Weight:
         <label htmlFor="weight">
            <input type="number" name="weight" onChange={handelChange} placeholder="Enter your Weight in KG"/>
         </label>  
          <button  id="btn" onClick={handelSubmit} >  Calculate </button>      
      </form>
    
</div>

</div>
}