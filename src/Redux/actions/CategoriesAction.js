import axios from "axios";
import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  GET_CATEGORIES,
  GET_CATEGORY,
  GET_ERRORS,
} from "../types";
export const AddCategory = (form, setAlertShow, setAlertMessage) => (dispatch) => {
  axios
    .post("/api/categories", form)
    .then((res) => {
      dispatch({
        type: ADD_CATEGORY,
        payload: res.data.data,
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

export const GetCategories = () => (dispatch) => {
  axios
    .get("/api/categories")
    .then((res) => {
      dispatch({
        type: GET_CATEGORIES,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const UpdateCategory = (form, id) => (dispatch) => {
  axios
    .put(`/api/categories/${id}`, form)
    .then((res) => {
      dispatch({
        type: ADD_CATEGORY,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};
export const GetSingleCategory = (id, setForm) => (dispatch) => {
  axios
    .get(`/api/categories/${id}`)
    .then((res) => {
      setForm(res.data)
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const DeleteCategories = (id) => (dispatch) => {
  if (window.confirm("do you want to delete this category")) {
    axios
      .delete(`/api/categories/${id}`)
      .then((res) => {
        dispatch({
          type: DELETE_CATEGORY,
          payload: id,
        });
        dispatch({
          type: GET_ERRORS,
          payload: res.message,
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

export const FindAllCategories = ()=> async (dispatch)=>{
  await axios
  .get("/api/categories")
  .then(res => {
      dispatch({
          type: GET_CATEGORIES,
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


export const ConfigAlert= (setAlertMessage, setAlertShow, message)=>{
  setAlertMessage(message)
  setAlertShow(true)
  setTimeout(() => {
    setAlertShow(false)
  }, 4000);
}