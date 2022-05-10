import {
    PROJECT_LIST_REQUEST,
    PROJECT_LIST_SUCCESS,
    PROJECT_LIST_FAIL,
    PROJECT_DETAILS_REQUEST,
    PROJECT_DETAILS_SUCCESS,
    PROJECT_DETAILS_FAIL,
    PROJECT_CREATE_RESET,
    PROJECT_CREATE_FAIL,
    PROJECT_CREATE_SUCCESS,
    PROJECT_CREATE_REQUEST,
    PROJECT_CREATE_REVIEW_REQUEST,
    PROJECT_CREATE_REVIEW_SUCCESS,
    PROJECT_CREATE_REVIEW_FAIL,
    PROJECT_CREATE_REVIEW_RESET,
  } from '../constants/projectConstants'
  
  export const projectListReducer = (state = { projects: [] }, action) => {
    switch (action.type) {
      case PROJECT_LIST_REQUEST:
        return { loading: true, projects: [] }
      case PROJECT_LIST_SUCCESS:
        return {
          loading: false,
          projects: action.payload.projects,
          pages: action.payload.pages,
          page: action.payload.page,
        }
      case PROJECT_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  export const projectDetailsReducer = (
    state = { project: { reviews: [] } },
    action
  ) => {
    switch (action.type) {
      case PROJECT_DETAILS_REQUEST:
        return { loading: true, ...state }
      case PROJECT_DETAILS_SUCCESS:
        return { loading: false, project: action.payload }
      case PROJECT_DETAILS_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const projectCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case PROJECT_CREATE_REQUEST:
        return { loading: true }
      case PROJECT_CREATE_SUCCESS:
        return { loading: false, success: true, project: action.payload }
      case PROJECT_CREATE_FAIL:
        return { loading: false, error: action.payload }
      case PROJECT_CREATE_RESET:
        return {}
      default:
        return state
    }
  }

  export const projectReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case PROJECT_CREATE_REVIEW_REQUEST:
        return { loading: true }
      case PROJECT_CREATE_REVIEW_SUCCESS:
        return { loading: false, success: true }
      case PROJECT_CREATE_REVIEW_FAIL:
        return { loading: false, error: action.payload }
      case PROJECT_CREATE_REVIEW_RESET:
        return {}
      default:
        return state
    }
  }