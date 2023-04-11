import {legacy_createStore,combineReducers,applyMiddleware,compose} from "redux"
import thunk from "redux-thunk";
import authReducer from "./AuthReducer/auth.Reducer";

const store =legacy_createStore(combineReducers({
    authReducer,
     
}),compose(applyMiddleware(thunk)))

export default store;