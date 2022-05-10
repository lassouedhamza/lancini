import * as api from "../../api/index";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Header from "../BackOffice/Header/Header";
import LeftSide from "../BackOffice/LeftSide/LeftSide";
import { deletBankingPartner } from "../../Redux/slices/bankingpartners";



const BanksPartnersList = () => {
  
    const bankingpartners = useSelector(state => state.bankingpartners.bankingpartners)
    const dispatch = useDispatch();



  return (
   <>
   <div>
            <Header></Header>
            <LeftSide></LeftSide> 



            <div className="main-content">
        <section className="section">

          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h4>Banks List</h4>
                  <div className="card-header-form">
                    <form>
                      <div className="input-group">
                 
                        <div className="input-group-btn">
                         <Link className="nav-link" to={"/addbankspartners"} ><button className="btn btn-sm btn-primary">Add</button></Link> 
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Bank Name </th>
                          <th>Description</th>
                          <th>Offers</th>
                          <th>Email</th>
                          <th>Image</th>
                          <th>Action</th>
                            <th></th>
                        </tr>
                      </thead>
                     
                       
                      <tbody>
                      {bankingpartners.map((bankingpartners ,id)=>(
                            <tr key = {id}>
                                <td>{bankingpartners.bank_name}</td>
                                <td>{bankingpartners.description}</td>
                                <td>{bankingpartners.offer}</td>
                                <td>{bankingpartners.email}</td>
                                <td><img src={`/uploads/${bankingpartners.bankImage}`} alt="Image"/></td>
                                {/* <td>{bankingpartners.image}</td> */}
                                <td>
                                <Link to={`/editbankpartner/${bankingpartners._id}` }><button className="btn btn-sm btn-primary">edit</button></Link>
          
                                 <button className="btn btn-sm btn-danger ml-1" onClick={()=> dispatch(deletBankingPartner(bankingpartners._id))} >delete</button>
                                 </td>
                            </tr>
                        ))}
                    </tbody>
                     
                      
                      
                  
                 
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
        </section>
      
      </div>
      
    
  
         

            </div>
   </>
  )
}

export default BanksPartnersList