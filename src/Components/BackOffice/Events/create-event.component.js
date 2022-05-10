import React, { useState,useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Header from "../Header/Header";


import LeftSideOrganizer from '../LeftSide/LeftSideOrganizer';
const routeGenerator = require('../shared/routeGenerator');


  const CreateEvent = ({ props }) => {
    

  
        const [title, setTitle] = useState('')
        const [description, setdescription] = useState('')
        const [date, setDate] = useState(new Date())
        const [modality, setmodality] = useState('')
        const [eventImage, seteventImage] = useState('')
        const [uploading, setUploading] = useState(false)
        const [category, setcategory] = useState('')
        const [sponsors, setsponsors] = useState('')
        const [participant_number, setparticipant_number] = useState('')
        const [fee_participation, setfee_participation] = useState('')
        const [program, setprogram] = useState('')
    
        const  componentDidMount= async (e) => {
        // var urlParams = new URLSearchParams(window.location.search);
        // console.log(urlParams.get('date'));
        let eventDate = new URLSearchParams(window.location.search).get('date');
        // if (localStorage && localStorage.getItem('eventDate')) {
        //     eventDate = JSON.parse(localStorage.getItem('eventDate'));
        // }
        this.setState({ date: new Date(eventDate) });
        
      
    }

  

//     onChangeTitle(e) {
//         this.setState({
//             title: e.target.value
//         });
//     }

//     onChangeDescription(e) {
//         this.setState({
//             description: e.target.value
//         });
//     }

//     onChangeDate(date) {
//         this.setState({
//             date: date
//         });
//     }
//     onChangeModality(e) {
//       this.setState({
//           modality: e.target.value
//       });
//   }
//   onChangeCategory(e) {
//     this.setState({
//         category: e.target.value
//     });
// }
// onChangeSponsors(e) {
//   this.setState({
//       sponsors: e.target.value
//   });
// }
// onChangeParticipant_Number(e) {
//   this.setState({
//       participant_number: e.target.value
//   });
// }
// onChangeFee_Participation(e) {
//   this.setState({
//       fee_participation: e.target.value
//   });
// }
// onChangeProgram(e) {
//   this.setState({
//       program: e.target.value
//   });
// }

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

    seteventImage(data)
    setUploading(false)
  } catch (error) {
    console.error(error)
    setUploading(false)
  }
}

 const   onSubmit= (e) => {
        e.preventDefault();
        
        const newEvent = {
            // username: this.state.username,
            title: title,
            description: description,
            date: date,
            modality: modality,
            category: category,
            sponsors: sponsors,
            participant_number: participant_number,
            fee_participation: fee_participation,
            program: program,
            eventImage: eventImage,
        };

        let api_uri = routeGenerator.getURI("events/add");
        axios.post(api_uri, newEvent).then(res => console.log(res.data));

       window.location = '/listevent';
    }

    
        return (

<div>

            <Header></Header>
            <LeftSideOrganizer></LeftSideOrganizer>
            <div>
     <div className="main-content">
        <section className="section">
          <div className="section-body">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="card">
                <form onSubmit={onSubmit}>
                    <div className="card-header">
                      <h4>Create New Event</h4>
                    </div>
                    <div className="card-body">
                      <div className="form-group">
                      <label>Title: </label>
                      <input
                            type="text"
                            required
                            className="form-control"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                             placeholder='Enter a title'
                        />
                      </div>
                      <div className="form-group">
                      <label>Description: </label>
                      <input type="text"
                            required
                            className="form-control"
                            value={description}
                            onChange={(e) => setdescription(e.target.value)}
                             placeholder='Enter a description'
                        />
                      </div>
                      <div className="form-group">
                      <label>Date: </label>
                     
                            <DatePicker
                                className="form-control"
                                required
                                selected={date}
                                onChange={(e) => setDate(e.target.value)}
                                showTimeSelect
                                dateFormat="Pp" placeholder='Enter the date of the event'
                            />
                        
                      </div>
                     
                      <div className="form-group">
                      <label>Modality: </label>
               
                          <select className="custom-select form-select-sm"   aria-label=".form-select-sm example"value={modality}
                             onChange={(e) => setmodality(e.target.value)}
                             required> 
                            <option value="" > </option>
                            <option value="presential"> Presential</option>
                            <option value="online"> Online</option>
                          

                          </select>
                     
                     
                      </div>
                      <div className="form-group">
                      <label>Category: </label>
                
                          <select className="custom-select form-select-sm"   aria-label=".form-select-sm example"value={category}
                           onChange={(e) => setcategory(e.target.value)}
                           placeholder='choose the category' required>  
                            <option value=""> </option>
                            <option value="Education"> Education</option>
                            <option value="Commercial"> Commercial</option>
                            <option value="Art"> Art</option>
                            <option value="Technlogy"> Technlogy</option>
                            <option value=" Health"> Health</option>
                            <option value="Design"> Design</option>
                            <option value="Agriculture"> Agriculture</option>
                            <option value="Liberal"> Liberal</option>
                            
                            
                          

                          </select>
                     
                     
                      </div>
                      <div className="form-group">
                      <label>Sponsors: </label>
                      <input type="text"
                           
                            className="form-control"
                            value={sponsors}
                            onChange={(e) => setsponsors(e.target.value)}
                             placeholder='Enter list of sponsors' required
                        />
                      </div>
                      <div className="form-group">
                      <label>Participant Number: </label>
                      <input type="text"
                            required
                            className="form-control"
                            value={participant_number}
                            onChange={(e) => setparticipant_number(e.target.value)}
                            placeholder='Enter the participant number'
                        />
                      </div>
                      <div className="form-group">
                      <label>Fee Participation: </label>
                      <input type="text"
                        
                            className="form-control"
                            required
                            value={fee_participation}
                            onChange={(e) => setfee_participation(e.target.value)}
                            placeholder='Enter the fee participation'
                        />
                      </div>
                      <div className="form-group">
                      <label>Program: </label>
                      <input type="text"
                            required
                            className="form-control"
                            value={program}
                            onChange={(e) => setprogram(e.target.value)}
                             placeholder='Enter a program'
                        />
                      </div>
                      <div className="form-group">
                      <label>image: </label>
                      <input required type="file" id='image-file'
                label='Choose File'
                
                custom
                
                onChange={uploadFileHandler}/>
                      </div>
                      
                    </div>
                    <div className="card-footer text-right">
                      <input type="submit" value="Create Event" className="btn btn-primary"/>
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
        );
    }
    export default CreateEvent ;



