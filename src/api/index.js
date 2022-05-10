import axios from 'axios'

const url = 'https://codeveloperslancini.herokuapp.com';

const urll = 'https://codeveloperslancini.herokuapp.com';
const API = axios.create({ baseURL: 'https://codeveloperslancini.herokuapp.com/' });



// Banking partners

export const fetchBankingPartners = ()=> axios.get(`${url}/bankingpartners`);
export const createBankingPartners = (newBankingPartners)=> axios.post(`${url}/bankingpartners`, newBankingPartners);
export const updateBankingPartners = (id, updatedBankingPartners) => axios.patch(`${url}/bankingpartners/${id}`, updatedBankingPartners);
export const deleteBankingPartners = (id) => axios.delete(`${url}/bankingpartners/${id}`);


//events

export const fetchEvents = ()=> axios.get(`${url}/api/events`);
