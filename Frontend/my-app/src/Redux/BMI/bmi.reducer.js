 
import { CALCULATE_FAILED, CALCULATE_REQUEST, CALCULATE_SUCESS } from "./bmi.action.types";
let x=JSON.parse(localStorage.getItem("token"))||null;

const init={ 
    loading:false,
    bmi:null,
    history:[]
}

 
const bmiReducer=(state=init,action)=>{
    
 switch (action.type) {
 
    
 case CALCULATE_REQUEST:{
    return {
        ...state,loading:true
    }
 }

 case CALCULATE_SUCESS:{
  
    return {
        
        ...state,loading:false, bmi:action.payload
    }
 }

 case CALCULATE_FAILED :{
    return {
        ...state,loading:false,  bmi:null
    }

 }
 
 
 

  

 default : {
    return state
 }  

}
}

export default bmiReducer;