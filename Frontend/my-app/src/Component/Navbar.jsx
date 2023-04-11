import { Link } from "react-router-dom"
import "../CSS/Navbar.css"
import { useSelector } from "react-redux"
export const Navbar =()=>{
const {token}=useSelector(state=>state.authReducer)
 console.log(token)

const handelLogout=()=>{

}

    return <div>
      <nav>
      
        <p className="navlink">Home</p>
        
         {!token?<Link to="/"><p className="navlink">Login</p></Link>:<p className="navlink" onClick={handelLogout}>Logout</p>}
         <Link to="signup"> <p className="navlink" id="sign">Signup</p></Link>
      </nav>
         
    </div>
}