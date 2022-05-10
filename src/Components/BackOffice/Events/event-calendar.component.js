import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
 import axios from 'axios';
import io from 'socket.io-client';
import "./CssCalendar/calendar.css";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction';
import Header from "../Header/Header";
import { Link } from 'react-router-dom';
import LeftSideOrganizer from "../LeftSide/LeftSideOrganizer";
const routeGenerator = require('./../shared/routeGenerator');

export default class EventCalendar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
        
            endpoint: 'https://codeveloperslancini.herokuapp.com'
        };
    }

    componentDidMount() {
        const { endpoint } = this.state;
        const socket = io(endpoint);
        socket.on('events', data => {
            this.setState({ events: data });
            console.log('events', this.state.events);
            let api_uri = routeGenerator.getURI(`events`);
            axios.get(api_uri)
                .then(response => {
                    this.setState({ events: response.data })
                })
                .catch((error) => {
                    console.log(error);
                })
        });

    }

    handleDateClick = (dateClickInfo) => {
        this.setState({ redirect: null });
         localStorage.setItem('eventDate', JSON.stringify(dateClickInfo.dateStr));
        this.setState({ redirect: `/createevent?date=${dateClickInfo.dateStr}`});
    }

    handleEventClick = (eventClickInfo) => {
        this.setState({ redirect: null });
        this.setState({ redirect: '/edit/event/' + eventClickInfo.event.extendedProps._id });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            
            <div>
           
            <div  className='container'>
        
               <Header></Header>
               <LeftSideOrganizer></LeftSideOrganizer>
               <div>
             
<section className='calendar'>
               
               <br/>
               <br/>
               <br/>
               <br/>
          
            <div className='app-calendar' >
            <div className="input-group-btn">
                        <Link to={"/listevent" }><button className="btn btn-sm btn-secondary">For more Events</button></Link>
                        {/* 
                         */}
                        </div>
                
                <div className="fc fc-ltr fc-unthemed" >
                    
   
                <FullCalendar
                    defaultView="dayGridMonth"
                    position
                    header={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                       
                    }}
                    plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin
                    ]}
                    events={this.state.events}
                    dateClick={this.handleDateClick}
                    eventClick={this.handleEventClick}
                 />
                
              
                </div>
            </div>
            </section>
        </div>
           
            </div>
            </div>
            
           
        )
    }

}