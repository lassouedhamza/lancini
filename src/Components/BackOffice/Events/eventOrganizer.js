import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import moment from 'moment';
import Header from "../Header/Header";
import "./CssCalendar/calendar.css";
import PrintIcon from '@material-ui/icons/Print'
import jsPDF from 'jspdf';
import 'jspdf-autotable'
import LeftSide from "../LeftSide/LeftSide";


const routeGenerator = require('../shared/routeGenerator');
 // download data in pdf format
 const downloadData=()=>{

    const pdf = new jsPDF();
    pdf.autoTable({html:'#table'})
    pdf.save('ListOfEvent.pdf');
  
  }
const Event = props => (
    
    <tr>
        {/* <td>{props.event.username}</td> */}
        <td>{props.event.title}</td>
        <td>{props.event.description}</td>
        <td>{props.event.date}</td>
        <td>{props.event.modality}</td>
        <td>{props.event.category}</td>
        <td>{props.event.sponsors}</td>
        <td>{props.event.participant_number}</td>
        <td>{props.event.fee_participation}</td>
        <td>{props.event.program}</td>
        
    </tr>
)


export default class eventOrganizer extends Component {

    constructor(props) {
        super(props);

        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.onChangeEndDate = this.onChangeEndDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.deleteEvent = this.deleteEvent.bind(this);

        this.state = {
            startDate: new Date(moment().startOf('year')),
            endDate: new Date(moment().endOf('month')),
            events: []
        };
    }

    componentDidMount() {
        let api_uri = routeGenerator.getURI("events");
        axios.get(api_uri)
            .then(response => {
                this.setState({ events: response.data });
            })
            .catch((error) => {
                console.log(error);
            })
    }


    onChangeStartDate(date) {
        this.setState({
            startDate: date
        });
    }

    onChangeEndDate(date) {
        this.setState({
            endDate: date
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const startdate = (moment(this.state.startDate).format('YYYY-MM-DD'));
        const enddate = (moment(this.state.enddate).format('YYYY-MM-DD'));
        let api_uri = routeGenerator.getURI(`events/daterange?startdate=${startdate}&enddate=${enddate}`);
        console.log(api_uri);
        axios.get(api_uri)
        .then(response => {
            console.log(response);
            this.setState({ events: response.data });
        })
        .catch((error) => {
            console.log(error);
        })
    }

    eventList() {
        return this.state.events.map(currentEvent => {
            return <Event event={currentEvent} deleteEvent={this.deleteEvent} key={currentEvent._id} />;
        })
    }

    deleteEvent(id) {
        let api_uri = routeGenerator.getURI("events/delete/" + id);
        axios.delete(api_uri)
            .then(response => { console.log(response.data) });

        this.setState({
            events: this.state.events.filter(el => el._id !== id)
        })
    }

    render() {
        return (
            <div>
 <Header></Header>
            <LeftSide></LeftSide> 



            <div className="main-content">
        <section className="section">
    
       
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h4>Events</h4>
                  <div className="card-header-form">
                    <form>
                      <div className="input-group">
                 
                        <div className="input-group-btn">
                           
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-striped" id='table'>
                      <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Modality</th>
                            <th>Category</th>
                            <th>Sponsors</th>
                            <th>Participant Number</th>
                            <th>Fee Participation</th>
                            <th>Program</th>
                            <th></th>
                        </tr>
                      </thead>
                     
                       
                      <tbody>
                        {this.eventList()}
                    </tbody>
                     
                      
                      
                  
                 
                    </table>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <td> <button className='btn btn-sm btn-primary'
                      onClick={downloadData}>
               Export to Pdf
              </button></td>
        </section>
      
      </div>
      
    
  
         

            </div>
        )
    }
}