import * as api from "../../api/index";
import { createSlice } from '@reduxjs/toolkit';

let initialState = {
event: [],
selectedEvent: {},
errors: "",
};
export const getEvents = () => async dispatch => {
  try {
    let { data } = await api.fetchEvents();
    dispatch(getAllEvents(data));
  } catch (error) {
    console.log(error.response);
  }
};

// export const createEvents = (events) => async dispatch => {
//   try {
//     const data = await api.createEvents(events);

//     dispatch(addEvents(data.data));
//   } catch (error) {
//     console.log(error.response);
//   }
// };

// export const updateEvents = (id, category) => async dispatch => {
//   try {
//     const  data = await api.updateEvents(id, category);

// const datas = {"_id": id, ...data.data}
// console.log(datas)
//     dispatch(editEvents(datas));
//   } catch (error) {
//     console.log(error.response);
//   }
// };


// export const deletEvents = (id) => async (dispatch) => {
//   try {
//     await api.deleteEvents(id);

//     dispatch(removeEvents(id));
//   } catch (error) {
//     console.log(error.response);
//   }
// };


export const eventsSlice = createSlice({
  name:"event",
  initialState:{
    event:[],
    
  },
  reducers:{
      getAllEvents(state,action){
          state.event=action.payload;
      }, 
      addEvents(state,action){
        state.event.push(action.payload)
    },
    // removeEvents(state,action){
    //     const index = state.events.findIndex((prod)=> prod._id === action.payload);
    //     if(index!==-1){
    //         state.events.splice(index,1)
    //     }
    // },
    // editEvents(state,action){
    //      const index = state.events.findIndex((prod)=> prod._id === action.payload._id);
    //     if(index!==-1){   
    //         state.events[index]=action.payload;
    //     }
    // }
  }
  
  });

  export const {getAllEvents,
    // addEvents,removeEvents ,editEvents,
    deselectEvents,selectEvents} =eventsSlice.actions
  export default eventsSlice.reducer;