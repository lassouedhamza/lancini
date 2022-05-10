import * as api from "../../api/index";
import React ,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios";
import Header from '../BackOffice/Header/Header';
import LeftSide from '../BackOffice/LeftSide/LeftSide';
import { Link , useHistory, useParams } from 'react-router-dom';
import { selectBankingPartner, updateBankingPartner } from '../../Redux/slices/bankingpartners';

const EditBankPartner = () => {
    const selectBankingPartner = useSelector(selectBankingPartner);
    const dispatch = useDispatch();
    const {id}= useParams();
    const history = useHistory();
    const [formData , setFormData]= useState({
        bank_name : "",
        description:"",
        offer:"",
        email:""
    });
    const {bank_name, description,offer,email}  = formData;

    const onChange = (e) => 
    setFormData({ ...formData,[e.target.name]: e.target.value});
    const bankingpartners = useSelector(state => state.bankingpartners.bankingpartners)
    const onSubmit = async (e)=> {
        e.preventDefault();
        const [res,err] = await api.updateBankingPartners(bankingpartners._id)
        if (err){
           

        }else{
            dispatch(updateBankingPartner(res))
        }
        
    };
    useEffect(()=>{
        const rendred = {
            bank_name : selectBankingPartner.bank_name,
            description : selectBankingPartner.description,
            offer : selectBankingPartner.offer,
            email : selectBankingPartner.email
        }
        setFormData(rendred);
        if (!selectBankingPartner) history("/bankslist");
    }, [selectBankingPartner,history]);
   

    return (
    <div>

    <Header></Header>
    <LeftSide></LeftSide>
    <div>
<div className="main-content">
<section className="section">
  <div className="section-body">
    <div className="row">
      <div className="col-12 col-md-6 col-lg-6">
        <div className="card">
        <form  onSubmit={onSubmit}>
            <div className="card-header">
              <h4>New Bank Partner {id}</h4>
            </div>
            <div className="card-body">
            <div className="form-group">
                <label>Bank Name</label>
                <input
          className="my-2"
          name="bank_name"
          type="text"
          placeholder="Bank Name"
          value={bank_name}
          onChange={(e)=>onChange(e)}
         
          
        />
              </div>
              <div className="form-group">
                <label>Description</label>
                <input
          className="my-2"
          name="description"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e)=>onChange(e)}
       
          
        />
              </div>
              <div className="form-group">
                <label>Offer</label>
                <input
          className="my-2"
          name="offer"
          type="text"
          placeholder="Bank Name"
          value={offer}
          onChange={(e)=>onChange(e)}
          
        />
              </div>
             
              <div className="form-group">
                <label>Email</label>
                <input
          className="my-2"
          name="email"
          type="text"
          placeholder="Bank Name"
          value={email}
          onChange={(e)=>onChange(e)}
         
          
        />
              </div>
              </div>
            <div className="card-footer text-right">
              <input type="submit" value="Update Bank Partner" className="btn btn-primary"/>
              <Link to={`/bankslist` }><button className="btn btn-sm btn-primary">Cancel</button></Link>
            </div>
         
          </form>
        </div>
        
      </div>

    </div>
  </div>
</section>

</div>
</div>
</div>
  )
}

export default EditBankPartner