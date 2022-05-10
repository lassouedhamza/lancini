import * as api from "../../api/index";
import { createSlice } from '@reduxjs/toolkit';

export const getBankingPartners = () => async dispatch => {
  try {
    let { data } = await api.fetchBankingPartners();
    dispatch(getAllBankingPartners(data));
  } catch (error) {
    console.log(error.response);
  }
};

export const createBankingPartner = (bankingpartner) => async dispatch => {
  try {
    const data = await api.createBankingPartners(bankingpartner);

    dispatch(addBankingPartner(data.data));
  } catch (error) {
    console.log(error.response);
  }
};

export const updateBankingPartner = (id, category) => async dispatch => {
  try {
    const  data = await api.updateBankingPartners(id, category);

const datas = {"_id": id, ...data.data}
console.log(datas)
    dispatch(editBankingPartner(datas));
  } catch (error) {
    console.log(error.response);
  }
};


export const deletBankingPartner = (id) => async (dispatch) => {
  try {
    await api.deleteBankingPartners(id);

    dispatch(removeBankingPartner(id));
  } catch (error) {
    console.log(error.response);
  }
};


export const bankingpartnersSlice = createSlice({
  name:"bankingpartners",
  initialState:{
    bankingpartners:[],
    
  },
  reducers:{
      getAllBankingPartners(state,action){
          state.bankingpartners=action.payload;
      }, 
      addBankingPartner(state,action){
        state.bankingpartners.push(action.payload)
    },
    removeBankingPartner(state,action){
        const index = state.bankingpartners.findIndex((prod)=> prod._id === action.payload);
        if(index!==-1){
            state.bankingpartners.splice(index,1)
        }
    },
    editBankingPartner(state,action){
         const index = state.bankingpartners.findIndex((prod)=> prod._id === action.payload._id);
        if(index!==-1){   
            state.bankingpartners[index]=action.payload;
        }
    }
  }
  
  });

  export const {getAllBankingPartners,addBankingPartner,removeBankingPartner ,editBankingPartner,deselectBankingPartner,selectBankingPartner} =bankingpartnersSlice.actions
  export default bankingpartnersSlice.reducer;