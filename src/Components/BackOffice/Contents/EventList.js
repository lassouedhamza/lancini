import React, { Component,useState,useEffect } from 'react';
import axios from "axios";
import Header from '../Header/Header';
import LeftSide from '../LeftSide/LeftSide';


 const EventList = _props => {
  const [data,setData]=useState([]);
  useEffect(()=>{
   getEvents();
  },[])
  const getEvents = async ()=> {
      const response=await axios.get("https://codeveloperslancini.herokuapp.com/events/getEvents");
      if (response.status === 200){
         setData(response.data);
      }
  };
  console.log("data=>",data);


 const deleteEvent = async (id) => {
     if (window.confirm("Ae you sure that you wanted to delete this event")){
         const response = await axios.delete
         ('https://codeveloperslancini.herokuapp.com/Event/deleteEvent/${id}');
         if (response.status === 200){
            
           getEvents();
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
                  <h4>Event List</h4>
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
                        
                      <th>Name Event</th>
          
                      <th>Descrption Event</th>
                      <th>Modality</th>
                     
                     
                     
                      <th>Category</th>
                     
                      
                      <th> Image</th>
                    
                      </tr>
                      </thead>
                      <tbody>
{/* 
                      {Event.map((event)=>(
          

        
          <tr>
            <td className="cart__product__item">
              <img src={Event.image} alt="" />
              <div className="cart__product__item__title">
                <h6>{Event.name_event}</h6>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            </td>
            <td className="cart__price">{Event.descrption_event} DT</td>
            <td className="cart__quantity">
              <div className="pro-qty">
                <span className="dec qtybtn">-</span>
                <input type="text" value={Event.modality}/>
                <span className="inc qtybtn">+</span>
              </div>
            </td>
            <td className="cart__quantity">
              <div className="pro-qty">
                <span className="dec qtybtn">-</span>
                <input type="text" value={Event.category}/>
                <span className="inc qtybtn">+</span>
              </div>
            </td>
            
            <td className="cart__close">
              <span className="icon_close"></span>
            </td>

          </tr>
          ))} */}
           {data && data.map((item,index)=>{
              return(
                <tr key={index}>
               
                <td> {item.name_event}</td>
              
                <td> {item.descrption_event}</td>
                <td> {item.modality}</td>
                
             
                <td> {item.category}</td>
               
                <td> {item.image}</td>
                
                <td> 
                <button  className="btn btn-outline-primary" onClick={()=> deleteEvent(item.id)}>Delete</button></td>
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
export default EventList;
