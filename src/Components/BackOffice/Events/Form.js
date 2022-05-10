import React, { Component } from 'react';
import Header from "../Header/Header";

import LeftSide from "../LeftSide/LeftSide";

function Form(props){
  
        return(
        <>
         <Header></Header>
            <LeftSide></LeftSide>
     <div className="main-content">
        <section className="section">
          <div className="section-body">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="card">
                  <form>
                    <div className="card-header">
                      <h4>Default Validation</h4>
                    </div>
                    <div className="card-body">
                      <div className="form-group">
                        <label>Your Name</label>
                        <input type="text" className="form-control" required=""/>
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" required=""/>
                      </div>
                      <div className="form-group">
                        <label>Subject</label>
                        <input type="email" className="form-control"/>
                      </div>
                      <div className="form-group mb-0">
                        <label>Message</label>
                        <textarea className="form-control" required=""></textarea>
                      </div>
                    </div>
                    <div className="card-footer text-right">
                      <button className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
                
              </div>
        
            </div>
          </div>
        </section>
        <div className="settingSidebar">
          <a href="javascript:void(0)" className="settingPanelToggle"> <i className="fa fa-spin fa-cog"></i>
          </a>
          <div className="settingSidebar-body ps-container ps-theme-default">
            <div className=" fade show active">
              <div className="setting-panel-header">Setting Panel
              </div>
              <div className="p-15 border-bottom">
                <h6 className="font-medium m-b-10">Select Layout</h6>
                <div className="selectgroup layout-color w-50">
                  <label className="selectgroup-item">
                    <input type="radio" name="value" value="1" className="selectgroup-input-radio select-layout" checked/>
                    <span className="selectgroup-button">Light</span>
                  </label>
                  <label className="selectgroup-item">
                    <input type="radio" name="value" value="2" className="selectgroup-input-radio select-layout"/>
                    <span className="selectgroup-button">Dark</span>
                  </label>
                </div>
              </div>
              <div className="p-15 border-bottom">
                <h6 className="font-medium m-b-10">Sidebar Color</h6>
                <div className="selectgroup selectgroup-pills sidebar-color">
                  <label className="selectgroup-item">
                    <input type="radio" name="icon-input" value="1" className="selectgroup-input select-sidebar"/>
                    <span className="selectgroup-button selectgroup-button-icon" data-toggle="tooltip"
                      data-original-title="Light Sidebar"><i className="fas fa-sun"></i></span>
                  </label>
                  <label className="selectgroup-item">
                    <input type="radio" name="icon-input" value="2" className="selectgroup-input select-sidebar" checked/>
                    <span className="selectgroup-button selectgroup-button-icon" data-toggle="tooltip"
                      data-original-title="Dark Sidebar"><i className="fas fa-moon"></i></span>
                  </label>
                </div>
              </div>
              <div className="p-15 border-bottom">
                <h6 className="font-medium m-b-10">Color Theme</h6>
                <div className="theme-setting-options">
                  <ul className="choose-theme list-unstyled mb-0">
                    <li title="white" className="active">
                      <div className="white"></div>
                    </li>
                    <li title="cyan">
                      <div className="cyan"></div>
                    </li>
                    <li title="black">
                      <div className="black"></div>
                    </li>
                    <li title="purple">
                      <div className="purple"></div>
                    </li>
                    <li title="orange">
                      <div className="orange"></div>
                    </li>
                    <li title="green">
                      <div className="green"></div>
                    </li>
                    <li title="red">
                      <div className="red"></div>
                    </li>
                  </ul>
                </div>
              </div>
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

export default Form;