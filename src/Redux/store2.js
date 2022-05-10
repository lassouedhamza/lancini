import {configureStore} from '@reduxjs/toolkit';
import bankingpartnersReducer from "./slices/bankingpartners";

export default configureStore({
    
reducer:{
    bankingpartners: bankingpartnersReducer,
}


})