import { Link } from "react-router-dom"
import "../CSS/Navbar.css"
import { useDispatch, useSelector } from "react-redux"
import { LOGOUT } from "../Redux/AuthReducer/auth.ActionTypes"
export const Navbar =()=>{
const {token}=useSelector(state=>state.authReducer)
 console.log(token)
const dispatch=useDispatch()
const handelLogout=()=>{
dispatch({type:LOGOUT})
}

    return <div>
      <nav>
         {token?<Link to="/bmi"><p className="navlink">BMI</p></Link>:null}   
         {!token?<Link to="/"><p className="navlink">Login</p></Link>:<p className="navlink" onClick={handelLogout}>Logout</p>}
         <Link to="signup"> <p className="navlink" id="sign">Signup</p></Link>
      </nav>
         
    </div>
}