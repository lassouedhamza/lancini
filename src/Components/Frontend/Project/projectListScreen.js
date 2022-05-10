import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  listprojects,
 
  createproject,
} from "./../../../actions/projectActions";
import { PROJECT_CREATE_RESET } from "./../../../constants/projectConstants";

const ProjectListScreen = ({ history, match }) => {
  const dispatch = useDispatch()
  const projectList = useSelector((state) => state.projectList)
  const { loading, error, projects } = projectList
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
      dispatch(listprojects())
    }
  }, [
    dispatch,
    // history,
    // userInfo,
   
    successCreate,
    createdproject,
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
      <div className='align-items-center'>
        
          <h1>projects</h1>
        
        <div className='text-right'>
          <button className='my-3' onClick={createprojectHandler}>
            <i className='fas fa-plus'></i> Create project
          </button>
        </div>
      </div>
    
        <table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project._id}>
                <td>{project._id}</td>
                <td>{project.name}</td>
                <td>${project.price}</td>
                <td>{project.category}</td>
                <td>{project.brand}</td>
                <td>
                  <Link to={`/admin/project/${project._id}/edit`}>
                    <button variant='light' className='btn-sm'>
                      <i className='fas fa-edit'></i>
                    </button>
                  </Link>
                  <button
                    variant='danger'
                    className='btn-sm'
                    // onClick={() => deleteHandler(project._id)}
                  >
                    <i className='fas fa-trash'></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      
    </>
  )
}
export default ProjectListScreen ;