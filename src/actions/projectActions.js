import axios from 'axios'
import {
  PROJECT_LIST_REQUEST,
  PROJECT_LIST_SUCCESS,
  PROJECT_LIST_FAIL,
  PROJECT_DETAILS_REQUEST,
  PROJECT_DETAILS_SUCCESS,
  PROJECT_DETAILS_FAIL,
  PROJECT_CREATE_REQUEST,
  PROJECT_CREATE_SUCCESS,
  PROJECT_CREATE_FAIL,
  PROJECT_CREATE_REVIEW_REQUEST,
  PROJECT_CREATE_REVIEW_SUCCESS,
  PROJECT_CREATE_REVIEW_FAIL,
} from "./../constants/projectConstants";

export const listprojects =  (keyword = '', pageNumber = '') => async (dispatch) => {
  try {
    dispatch({ type: PROJECT_LIST_REQUEST })

    
    const { data } = await axios.get(
      `/api/projects?keyword=${keyword}&pageNumber=${pageNumber}`
    )
    dispatch({
      type: PROJECT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PROJECT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const listprojectDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PROJECT_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/projects/${id}`)

    dispatch({
      type: PROJECT_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PROJECT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const createproject = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROJECT_CREATE_REQUEST,
    })

    // const {
    //   userLogin: { userInfo },
    // } = getState()

    const config = {
      // headers: {
      //   Authorization: `Bearer ${userInfo.token}`,
      // },
    }

    const { data } = await axios.post(`/api/projects`, {}, config)

    dispatch({
      type: PROJECT_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PROJECT_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const createprojectReview = (projectId, review) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: PROJECT_CREATE_REVIEW_REQUEST,
    })

    

    const config = {
      headers: {
        'Content-Type': 'application/json',
       
      },
    }

    await axios.post(`/api/projects/${projectId}/reviews`, review, config)

    dispatch({
      type: PROJECT_CREATE_REVIEW_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: PROJECT_CREATE_REVIEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}