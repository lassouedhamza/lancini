import React, { Component } from "react";
import Header from "../Header/Header";
import "./List.css";
import LeftSide from "../LeftSide/LeftSide";
function List(props){
     
         return(
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
                      <tr>
                        
                        <th>Task Name</th>
                        <th>Assigh Date</th>
                        <th>Due Date</th>
                        <th>Priority</th>
                        <th>Action</th>
                      </tr>
                      <tr>
                       
                        <td>Create a mobile app</td>
                     
                        <td>2018-01-20</td>
                        <td>2019-05-28</td>
                        <td>
                          <div className="badge badge-success">Low</div>
                        </td>
                        <td><a href="#" className="btn btn-outline-primary">Detail</a></td>
                      </tr>
                      <tr>
                      
                        <td>Redesign Listpage</td>
                     
                        <td>2017-07-14</td>
                        <td>2018-07-21</td>
                        <td>
                          <div className="badge badge-danger">High</div>
                        </td>
                        <td><a href="#" className="btn btn-outline-primary">Detail</a></td>
                      </tr>
                      <tr>
                        
                        <td>Backup database</td>
                      
                       
                        <td>2019-07-25</td>
                        <td>2019-08-17</td>
                        <td>
                          <div className="badge badge-info">Average</div>
                        </td>
                        <td><a href="#" className="btn btn-outline-primary">Detail</a></td>
                      </tr>
                      <tr>
                       
                        <td>Android App</td>
                      
                        <td>2018-04-15</td>
                        <td>2019-07-19</td>
                        <td>
                          <div className="badge badge-success">Low</div>
                        </td>
                        <td><a href="#" className="btn btn-outline-primary">Detail</a></td>
                      </tr>
                      <tr>
                       
                        <td>Logo Design</td>
                     
                       
                        <td>2017-02-24</td>
                        <td>2018-09-06</td>
                        <td>
                          <div className="badge badge-danger">High</div>
                        </td>
                        <td><a href="#" className="btn btn-outline-primary">Detail</a></td>
                      </tr>
                      <tr>
                      
                        <td>Ecommerce website</td>
                     
                        <td>2018-01-20</td>
                        <td>2019-05-28</td>
                        <td>
                          <div className="badge badge-info">Average</div>
                        </td>
                        <td><a href="#" className="btn btn-outline-primary">Detail</a></td>
                      </tr>
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
 
 export default List;