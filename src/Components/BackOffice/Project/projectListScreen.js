import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from "../Header/Header";

import LeftSide from "../LeftSide/LeftSide";
import {
  listprojects,
 
  createproject,
} from "./../../../actions/projectActions";
import { PROJECT_CREATE_RESET } from "./../../../constants/projectConstants";
import Paginate from './Paginate'
const ProjectListScreen = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1
  const dispatch = useDispatch()
  const projectList = useSelector((state) => state.projectList)
  const { loading, error, projects , page, pages} = projectList
//   const projectDelete = useSelector((state) => state.projectDelete)
//   const {
//     loading: loadingDelete,
//     error: errorDelete,
//     success: successDelete,
//   } = projectDelete

  const projectCreate = useSelector((state) => state.projectCreate)
  const {
    // loading: loadingCreate,
    // error: errorCreate,
    success: successCreate,
    project: createdproject,
  } = projectCreate

//   const userLogin = useSelector((state) => state.userLogin)
//   const { userInfo } = userLogin

  useEffect(() => {
 
    dispatch({ type: PROJECT_CREATE_RESET })

    // if (!userInfo.isAdmin) {
    //   history.push('/login')
    // }
 

    if (successCreate) {
      history.push(`/admin/project/${createdproject._id}/edit`)
    } else {
      dispatch(listprojects('', pageNumber))
    }
  }, [
    dispatch,
    // history,
    // userInfo,
   
    successCreate,
    createdproject,
    pageNumber,
  ])

//   const deleteHandler = (id) => {
//     if (window.confirm('Are you sure')) {
//       dispatch(deleteproject(id))
//     }
//   }

  

  const createprojectHandler = () => {
    dispatch(createproject())
  }

  return (
    <>
    <Header></Header>
    <LeftSide></LeftSide> 
        <div className="main-content" style={{width:"80%"}}>
        <section className="section">
       
       
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h4>projects</h4>
                
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                        
                        <th>NAME</th>
                        <th>COST</th>
                        <th>CATEGORY</th>
                         <th>COLLECTED</th>   
                        </tr>
                      </thead>
                     
                       
                      <tbody>
                      {projects.map((project) => (
                        <tr key={project._id}>
                          
                          <td>{project.name}</td>
                          <td>{project.price}DT</td>
                          <td>{project.category}</td>
                          <td>{project.p}%</td>
                          
                        </tr>
                      ))}
                    </tbody>
                     
                      
                      
                  
                 
                    </table>
                    <Paginate pages={pages} page={page} isAdmin={true} />
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
export default ProjectListScreen ;