
import {Routes,Route} from "react-router-dom";
import { Login } from "../AllPages/Login&Signup/Login";
import { Signup } from "../AllPages/Login&Signup/Signup";
import { Bmi } from "../AllPages/BMI/Bmi";


export  const AllRoutes=()=>{

 return  <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/bmi" element={<Bmi/>} />
         </Routes>
 
}