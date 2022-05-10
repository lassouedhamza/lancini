import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';
import {donerLoginReducer} from "./reducers/donerReducers";
const reducer = combineReducers({
  donerLogin:donerLoginReducer
});
const initialState ={};
const middleware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)
));
export default store;