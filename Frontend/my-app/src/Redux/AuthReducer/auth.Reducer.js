import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCESS, SIGNUP_FAILED, SIGNUP_REQUEST, SIGNUP_SUCESS } from "./auth.ActionTypes";


const init={
    isAuth:false,
    token:null,
    loading:false,
    error:false,
    
}

 
const authReducer=(state=init,action)=>{
    
 switch (action.type) {
 
    
 case LOGIN_REQUEST:{
    return {
        ...state,loading:true
    }
 }

 case LOGIN_SUCESS:{
    return {
        
        ...state,loading:false,token:action.payload,isAuth:true
    }
 }

 case LOGIN_FAILED :{
    return {
        ...state,loading:false,token:null,error:false,isAuth:false
    }

 }

 case SIGNUP_FAILED :{
    return {
        ...state,loading:false,token:null,error:false,isAuth:false,  
    }

 }

 case SIGNUP_REQUEST:{
    return {
        ...state,loading:true,   
    }
 }

 case SIGNUP_SUCESS:{
    return {
        
        ...state,loading:false,token:null,isAuth:false, 
    }
 }


 default : {
    return state
 }  

}
}

export default authReducer;