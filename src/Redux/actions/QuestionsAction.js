import { ADD_QUESTION, DELETE_QUESTION, GET_CATEGORIES, GET_ERRORS, GET_QUESTION, GET_QUESTIONS } from "../types";
import axios from 'axios'
import { ConfigAlert } from "./CategoriesAction";

export const AddQuestion = (form,setAlertShow ,setAlertMessage) => (dispatch) => {
    axios
      .post("/api/questions", form)
      .then((res) => {
        dispatch({
          type: ADD_QUESTION,
          payload: res.data.data,
        });
        dispatch({
            type: GET_ERRORS,
            payload: {},
          });
        ConfigAlert(setAlertMessage, setAlertShow, "Added with success")  
      })
      .catch((err) => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        });
      });
  };

export const FindAllQuestion = ()=> async (dispatch)=>{
    await axios
    .get("/api/questions")
    .then(res => {
        dispatch({
            type: GET_QUESTIONS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    });
}


export const FindSingleQuestion = (id, setForm)=> async (dispatch)=>{
    await axios
    .get(`/api/questions/${id}`)
    .then(res => {
        dispatch({
            type: GET_QUESTION,
            payload: res.data
        })
        setForm(res.data)
    })
    .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    });
}



export const DeleteQuestions = (id) => (dispatch) => {
    if (window.confirm("do you want to delete this question?")) {
      axios
        .delete(`/api/questions/${id}`)
        .then((res) => {
          dispatch({
            type: DELETE_QUESTION,
            payload: id,
          });
        })
        .catch((err) => {
          dispatch({
            type: GET_ERRORS,
            payload: err.response.data,
          });
        });
    }
  };


export const UpdateQuestions = (id, form, history) => (dispatch) => {
    
      axios
        .put(`/api/questions/${id}`, form)
        .then((res) => {
           history.push('/questions')
        })
        .catch((err) => {
          dispatch({
            type: GET_ERRORS,
            payload: err.response.data,
          });
        });
   
  };

