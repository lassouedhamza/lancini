import React, { Component,useState,useEffect,useRef} from 'react';
import axios from "axios";
import Header from '../Header/Header';
import LeftSide from '../LeftSide/LeftSide';


const ContentInvestor = () => {
  const buttonRef = useRef();
 const [data,setData]=useState([]);
 useEffect(()=>{
     getInvestors();
 },[])
 const getInvestors = async ()=> {
     const response=await axios.get("https://codeveloperslancini.herokuapp.com/auth/getAllInvestor");
     if (response.status === 200){
         setData(response.data);
     }
 };
 console.log("data=>",data);


const onDeleteUser = async (id) => {
    if (window.confirm("Ae you sure that you wanted to desactivate this user")){
        const response = await axios.put
        ('https://codeveloperslancini.herokuapp.com/auth/deleteInvestor/${id}');
        if (response.status === 200){
            
            getInvestors();
        }
    }
}
 
    return (
        <>
        <Header></Header>
        <LeftSide></LeftSide>
        <div className="main-content">
        <section className="section">
       
       
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h4>Assign Task Table</h4>
                  <div className="card-header-form">
                    <form>
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search"/>
                        <div className="input-group-btn">
                          <button className="btn btn-primary"><i className="fas fa-search"></i></button>
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
                        
                      <th>username</th>
              
                      <th>lastname</th>
                      <th>email</th>
                      <th>AmountcanInvest</th>
                     
                      <th>Legalname</th>
                      <th>Typeinvestor</th>
                     
                      
                      <th> Position</th>
                      <th>Company</th>
                      <th> SectorInterest</th>
                      <th> Valid</th>
                      <th> Actions</th>
                      </tr>
                      </thead>
                      <tbody>
          {data && data.map((item,index)=>{
            
              return(
                
                  <tr key={index}>
                   
                   <td> {item.username}</td>
                 
                   <td> {item.lastname}</td>
                   <td> {item.email}</td>
                   <td> {item.AmountcanInvest}</td>
                   <td> {item.Legalname}</td>
                   <td> {item.Typeinvestor}</td>
                  
                   <td> {item.Position}</td>
                   <td> {item.Company}</td>
                   <td> {item.SectorInterest}</td>
                   <td> {item.valid}</td>
                   <td> 
                   <button className="btn btn-primary mt-2"
                   ref={buttonRef} onClick={()=> onDeleteUser(item.id)}>desactivate</button></td>
                  </tr>
              )
          })}
           
          </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
       
          </div>
        </section>
        <div className="settingSidebar">
          <a href="javascript:void(0)" className="settingPanelToggle"> <i className="fa fa-spin fa-cog"></i>
          </a>
          <div className="settingSidebar-body ps-container ps-theme-default">
            <div className=" fade show active">
            
          
             
              <div className="p-15 border-bottom">
                <div className="theme-setting-options">
                  <label className="m-b-0">
                    <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input"
                      id="mini_sidebar_setting"/>
                    <span className="custom-switch-indicator"></span>
                    <span className="control-label p-l-10">Mini Sidebar</span>
                  </label>
                </div>
              </div>
              <div className="p-15 border-bottom">
                <div className="theme-setting-options">
                  <label className="m-b-0">
                    <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input"
                      id="sticky_header_setting"/>
                    <span className="custom-switch-indicator"></span>
                    <span className="control-label p-l-10">Sticky Header</span>
                  </label>
                </div>
              </div>
              <div className="mt-4 mb-4 p-3 align-center rt-sidebar-last-ele">
                <a href="#" className="btn btn-icon icon-left btn-primary btn-restore-theme">
                  <i className="fas fa-undo"></i> Restore Default
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
export default ContentInvestor
