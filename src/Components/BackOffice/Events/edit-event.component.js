import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
// import moment from 'moment';
import LeftSideOrganizer from "../LeftSide/LeftSideOrganizer";
import Header from "../Header/Header";
const routeGenerator = require('../shared/routeGenerator');

export default class EditExercise extends Component {
    constructor(props) {
        super(props);

        // this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeModality = this.onChangeModality.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeSponsors = this.onChangeSponsors.bind(this);
        this.onChangeParticipant_Number = this.onChangeParticipant_Number.bind(this);
        this.onChangeFee_Participation = this.onChangeFee_Participation.bind(this);
        this.onChangeProgram = this.onChangeProgram.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.deleteEvent = this.deleteEvent.bind(this);

        this.state = {
            // username: '',
            title: '',
            description: '',
            date: new Date(),
            modality: '',
            category: '',
            sponsors: '',
            participant_number: '',
            fee_participation:'',
            program:'',
            // ,
            // users: []
        }
    }

    componentDidMount() {
        let api_uri = routeGenerator.getURI("events/" + this.props.match.params.id);
        axios.get(api_uri)
            .then(response => {
                this.setState({
                    // username: response.data.username,
                    title: response.data.title,
                    description: response.data.description,
                    date: new Date(response.data.date),
                    modality: response.data.modality,
                    category: response.data.category,
                    sponsors: response.data.sponsors,
                    participant_number: response.data.participant_number,
                    fee_participation: response.data.fee_participation,
                    program: response.data.program,
                })
            })
            .catch(function (error) {
                console.log(error);
            })

     
    }

  

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }


    onChangeDate(date) {
        this.setState({
            date: date
        });
    }
    onChangeModality(e) {
        this.setState({
            modality: e.target.value
        });
    }
    onChangeCategory(e) {
        this.setState({
            category: e.target.value
        });
    }
    onChangeSponsors(e) {
        this.setState({
            sponsors: e.target.value
        });
    }
    onChangeParticipant_Number(e) {
        this.setState({
            participant_number: e.target.value
        });
    }
    onChangeFee_Participation(e) {
        this.setState({
            fee_participation: e.target.value
        });
    }
    onChangeProgram(e) {
        this.setState({
            program: e.target.value
        });
    }
    
    onSubmit(e) {
        e.preventDefault();

        const event = {
            // username: this.state.username,
            title: this.state.title,
            description: this.state.description,
            date: this.state.date,
            modality: this.state.modality,
            category: this.state.category,
            sponsors: this.state.sponsors,
            participant_number: this.state.participant_number,
            fee_participation: this.state.fee_participation,
            program: this.state.program,
        };
        
        let api_uri = routeGenerator.getURI('events/update/' + this.props.match.params.id);
        axios.post(api_uri, event)
            .then(res => console.log(res.data));

        window.location = '/listevent';
    }

    deleteEvent(e) {
        e.preventDefault();

        let api_uri = routeGenerator.getURI("events/delete/" + this.props.match.params.id);
        axios.delete(api_uri)
            .then(response => { console.log(response.data) });

            window.location = '/listevent';
    }
    
    render() {
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
    <form onSubmit={this.onSubmit}>
        <div className="card-header">
          <h4>Edit Event</h4>
        </div>
        <div className="card-body">
          <div className="form-group">
          <label>Title: </label>
          <input type="text"
                            required
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeTitle}
                        />
          </div>
          <div className="form-group">
          <label>Description: </label>
          <input type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
          </div>
          <div className="form-group">
          <label>Date: </label>
          <div>
                            <DatePicker
                                className="form-control"
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                                showTimeSelect
                                dateFormat="Pp"
                            />
                        </div>
          </div>
          <div className="form-group">
          <label>Modality: </label>
          <select className="custom-select form-select-sm"   aria-label=".form-select-sm example"required
                            
                            value={this.state.modality}
                            onChange={this.onChangeModality}> 
                            <option value=""> </option>
                            <option value="Presential"> Presential</option>
                            <option value="Online"> Online</option>
                            
                          

                          </select>
          </div>
        
         
         
          <div className="form-group">
          <label>Category: </label>
          <select className="custom-select form-select-sm"   aria-label=".form-select-sm example" required
                            
                            value={this.state.category}
                            onChange={this.onChangeCategory}> 
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
                            required
                            className="form-control"
                            value={this.state.sponsors}
                            onChange={this.onChangeSponsors}
                        />
          </div>
          <div className="form-group">
          <label>Participant Number: </label>
          <input type="text"
                            required
                            className="form-control"
                            value={this.state.participant_number}
                            onChange={this.onChangeParticipant_Number}
                        />
          </div>
          <div className="form-group">
          <label>Fee Participation: </label>
          <input type="text"
                            required
                            className="form-control"
                            value={this.state.fee_participation}
                            onChange={this.onChangeFee_Participation}
                        />
          </div>
          <div className="form-group">
          <label>Program: </label>
          <textarea
                            required
                            className="form-control"
                            value={this.state.program}
                            onChange={this.onChangeProgram}
                        />
          </div>

        </div>
        <div className="card-footer text-right">
            <tr>
                <td  align ="right">
          <input type="submit" value="Edit" className="btn btn-primary "/>
          </td>

          <td  align ="left">
         
          <input type="reset" value="Delete" className="btn btn-danger ml-1" onClick={this.deleteEvent}/>
          </td>
          </tr>
         
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
}