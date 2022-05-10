import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from "axios";
import HeaderCreator from "../Header/HeaderCreator";
import Footer from "../Footer/Footer";
import {
  listprojects,
 
  createproject,
} from "../../../actions/projectActions";
import { PROJECT_CREATE_RESET } from "../../../constants/projectConstants";
import jwt_decode from 'jwt-decode';
import { FilePond, registerPlugin } from 'react-filepond'

import FilePondPluginImagePreview from 'filepond-plugin-image-preview'

import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'

registerPlugin(FilePondPluginImagePreview)
const Addproject = ({ history, match }) => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')
  const [video, setVideo] = useState('')
  const [email, setEmail] = useState("");
  const [verification, setVerification] = useState('')
  const [category, setCategory] = useState('')
  const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState('')
  const [username, setUsername] = useState("");
  const [uploading, setUploading] = useState(false)
  const [files, setFiles] = useState([])
  const dispatch = useDispatch()
  const projectList = useSelector((state) => state.projectList)
  const { loading, error, projects } = projectList
//   const projectDelete = useSelector((state) => state.projectDelete)
//   const {
//     loading: loadingDelete,
//     error: errorDelete,
//     success: successDelete,
//   } = projectDeletez
const [Userid, setUserId] = useState("");
const [Position,setPosition]=useState("");
function  componentWillMount() {
 console.log(jwt_decode(sessionStorage.getItem('authToken')).id)
 let decode=jwt_decode(sessionStorage.getItem('authToken')).id;
 //console.log(localStorage.getItem('authToken'))
 setUserId(decode)
 console.log(Userid)
 
 axios.get('https://codeveloperslancini.herokuapp.com/auth/findCreatorById/'+decode,{mode:'cors'}).then(
   (response) => {
     let data=response.data
     console.log(response.data)
     setUsername(data.username)
     setPosition(data.Position)
     setEmail(data.email)
    })}

    if(!Userid){
      componentWillMount()
    
    }
  const projectCreate = useSelector((state) => state.projectCreate)
  const {
    // loading: loadingCreate,
    // error: errorCreate,
    success: successCreate,
    project: createdproject,
  } = projectCreate


  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
      

      const { data } = await axios.post('/api/upload', formData, config)

      setImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }
  //video
  const uploadvideoHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('/api/upload', formData, config)

      setVideo(data)
    setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }
  //verification
  const uploadverificationHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('/api/upload', formData, config)

      setVerification(data)
    setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

//   const userLogin = useSelector((state) => state.userLogin)
//   const { userInfo } = userLogin

  useEffect(() => {
 
    dispatch({ type: PROJECT_CREATE_RESET })
    
    // if (!userInfo.isAdmin) {
    //   history.push('/login')
    // }
 

    if (successCreate) {
        
      history.push(`/project`)
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


  const createprojectHandler = (e) => {
    e.preventDefault()
    const { data } =  axios.post(
        "api/projects",
        {
            name,price,Userid,category,image,description,username,video,Position,verification,email
        }
    );
   window.location = '/HomeCreator';
  }

  return (
    <>
<HeaderCreator/>
<section class="contact-section section-gap-extra-bottom">
        <div class="container">
            
            
<div class="contact-from-area">
                <div class="row no-gutters">
                   
                    <div class="col">
                        <div class="contact-form">
                            <form onSubmit={createprojectHandler}>
                                <h3 class="form-title">add project</h3>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-field mb-25">
                                            <label for="name"> Name</label>
                                            <input type="text"  placeholder='Enter name'
                                             value={name}
                                             required
                                             onChange={(e) => setName(e.target.value)} id="name"/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-field mb-25">
                                            <label for="phone-number">cost</label>
                                            <input required type="number"  placeholder='DT'
                value={price}
                onChange={(e) => setPrice(e.target.value)} />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-field mb-25">
                                            <label for="email">category</label>
                                            <select className="custom-select form-select-sm"   aria-label=".form-select-sm example"value={category}
                            onChange={(e) => setCategory(e.target.value)}placeholder='choose the category'> 
                            <option value="Technlogy"> Technology</option>
                            <option value="Education"> Education</option>
                            <option value="Commercial"> Commercial</option>
                            <option value="Art"> Art</option>
                            
                            <option value=" Health"> Health</option>
                            <option value="Design"> Design</option>
                            <option value="Agriculture"> Agriculture</option>
                            <option value="Liberal"> Liberal</option>
                            
                            
                          

                          </select>
                                        </div>
                                    </div>


                                    <div class="col-lg-6">
                                        <div class="form-field mb-25">
                                            <label for="subject">Image</label>
                                            
                 <input required type="file" id='image-file'
                label='Choose File'
                
                custom
                
                onChange={uploadFileHandler}/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-field mb-25">
                                            <label for="subject">Video</label>
                                            
                 <input required type="file" id='video-file'
                label='Choose File'
                
                custom
                
                onChange={uploadvideoHandler}/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-field mb-25">
                                            <label for="subject">verification</label>
                                            
                 <input required type="file" id='video-file'
                label='Choose File'
                
                custom
                
                onChange={uploadverificationHandler}/>
                                        </div>
                                    </div>

                                    {/* <div class="col-lg-6">
                                        <div class="form-field mb-25">
                                            <label for="subject">tttttttttttttttttttttttttttttttttt</label>
                                            
                                            <FilePond value={image}  server="https://codeveloperslancini.herokuapp.com/api/upload"/>
                                        </div>
                                    </div> */}
                                    <div class="col-12">
                                        <div class="form-field mb-30">
                                            <label for="message">Description</label>
                                            <textarea required id="message" placeholder=""
                                            
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)} ></textarea>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-field">
                                            <button type="submit" class="main-btn">submit<i class="far fa-arrow-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    </section>
<Footer/>
</>
) }
export default Addproject ;