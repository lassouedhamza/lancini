
import logo from './logo.svg';
import './App.css';
import Home from "./Components/Frontend/Home/Home";
import HomeDoner from "./Components/Frontend/Home/HomeDoner";
import HomeCreator from "./Components/Frontend/Home/HomeCreator";
import ClientRoute from "./Routes/ClientRoute";
import { BrowserRouter as Router, Routes,Route, Switch } from "react-router-dom";
import FAQ from './Components/Frontend/FAQ/FAQ';
import DFAQ from './Components/Frontend/FAQ/DFAQ';
import IFAQ from './Components/Frontend/FAQ/IFAQ';
import CFAQ from './Components/Frontend/FAQ/CFAQ';
import Header from './Components/Frontend/Header/Header';
import Project from './Components/Frontend/Project/Project';
import DProject from './Components/Frontend/Project/doner/Project';
import IProject from './Components/Frontend/Project/investor/Project';
import VProject from './Components/Frontend/Project/visitor/Project';
import Finance from './Components/Frontend/Finance/Finance';
import Login from './Components/BackOffice/Login/Login';
import AdminRoute from './Routes/AdminRoute';
import List from './Components/BackOffice/List/List';
import Form from './Components/BackOffice/Form/Form';
import HomeBack from './Components/BackOffice/Home/Home';
import Event from './Components/Frontend/Event/Event';
import EventCalendar from './Components/BackOffice/Events/event-calendar.component';
import CreateEvent from './Components/BackOffice/Events/create-event.component';
import ListEvent from './Components/BackOffice/Events/event-list.component'; 
import EditEvent from './Components/BackOffice/Events/edit-event.component'; 

import IEvent from './Components/Frontend/Event/investor/Event';


import EventList from './Components/BackOffice/Contents/EventList';
import EventDetails from './Components/Frontend/Event/EventDetails';
import IEventDetails from './Components/Frontend/Event/investor/EventDetails';
import ProjectDetails from './Components/Frontend/Project/ProjectDetails';
import DProjectDetails from './Components/Frontend/Project/doner/ProjectDetails';
import IProjectDetails from './Components/Frontend/Project/investor/ProjectDetails';
import VProjectDetails from './Components/Frontend/Project/visitor/ProjectDetails';
import ProjectListScreen from './Components/BackOffice/Project/projectListScreen';
import Addproject from './Components/Frontend/Project/Addproject';
//import Streaming from './Components/Frontend/Streaming/index';
// Screens
import PrivateScreen from "./Components/screens/PrivateScreen";
import LoginDonerScreen from "./Components/screens/LoginDonerScreen";
import RegisterScreen from "./Components/screens/RegisterScreenDoner";
import ForgotPasswordScreen from "./Components/screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./Components/screens/ResetPasswordScreen";

// Routing
import PrivateRoute from "./Routes/PrivateRoute";
import RegisterScreenDoner from './Components/screens/RegisterScreenDoner';
import RegisterInvestor from './Components/screens/RegisterInvestor';
import LoginInvestor from './Components/screens/LoginInvestor';
import LoginCreator from './Components/screens/LoginCreator';
import RegisterCreator from './Components/screens/RegisterCreator';
import ProfileDoner from './Components/screens/ProfileDoner';
import ProfileInvestor from './Components/screens/ProfileInvestor';
import ProfileCreator from './Components/screens/ProfileCreator';
import ContentCreator from './Components/BackOffice/Contents/ContentCreator';
import ContentDoner from './Components/BackOffice/Contents/ContentDoner';
import ContentInvestor from './Components/BackOffice/Contents/ContentInvestor';
import Questions from './Components/BackOffice/FAQ/Questions';
import Category from './Components/BackOffice/FAQ/Category';
import QuestionDetail from './Components/BackOffice/FAQ/QuestionDetail';
import Converter from './Components/Frontend/Converter/Converter';
import { getBankingPartners } from './Redux/slices/bankingpartners';
import Partners from './Components/Frontend/Partners/Partners';
import PartnersDetails from './Components/Frontend/Partners/PartnersDetails'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector  } from "react-redux";
import EventCreator from './Components/Frontend/Event/EventCreator';
import indexstream from './pages/Home/indexstream';
import EventCreatorDetail from './Components/Frontend/Event/EventCreatorDetail';

import IEventCreator from './Components/Frontend/Event/investor/EventCreator';

import IEventCreatorDetail from './Components/Frontend/Event/investor/EventCreatorDetail';

import SendStreamId from './Components/Frontend/ContactUs/SendStreamId';
import LoginOrganizer from './Components/BackOffice/Login/LoginOrganizer';
//Banks

import AddBankPartner from './Components/Banks/AddBankPartner';
import BanksPartnersList from './Components/Banks/BanksPartnersList';
import EditBankPartner from './Components/Banks/EditBankPartner';
import Request from './Components/Frontend/Partners/Request';
import { getEvents } from './Redux/slices/events';
import EventsDetails from './Components/Frontend/Event/EventsDetails';
import IEventsDetails from './Components/Frontend/Event/investor/EventsDetails';
//Banks Offers
import BanksOffers from './Components/Frontend/BanksOffers/BanksOffers';

//ContactUs
import ContactUs from './Components/Frontend/ContactUs/ContactUs';
import IContactUs from './Components/Frontend/ContactUs/IContactUs';
import DContactUs from './Components/Frontend/ContactUs/DContactUs';
import CContactUs from './Components/Frontend/ContactUs/CContactUs';
import Chats from './Components/Frontend/Chats.js/Chats';
//import KommunicateChat from './chat';
import eventOrganizer from './Components/BackOffice/Events/eventOrganizer';

import HomeOrganizer from './Components/BackOffice/Home/HomeOrganizer';
import Icon from './Components/Frontend/chatbot/Icon';
import Cbot from './Components/Frontend/chatbot/chatbot';

import HomeVisitor from './Components/Frontend/Home/HomeVisitor';

function App() {
  const dispatch = useDispatch();
useEffect(() => {

  dispatch(getBankingPartners());
  
}, [dispatch]);
useEffect(() => {

  dispatch(getEvents());
  
}, [dispatch]);
  return (
    <Router>
    <Switch>
    <PrivateRoute exact path="/" component={PrivateScreen} />
    <ClientRoute exact path="/ProjectDetails/:id" component={ProjectDetails} />
 
    <ClientRoute exact path="/DProjectDetails/:id" component={DProjectDetails} />
    <ClientRoute exact path="/IProjectDetails/:id" component={IProjectDetails} />
    <ClientRoute exact path="/VProjectDetails/:id" component={VProjectDetails} />
    <ClientRoute path="/ContactUs" component={ContactUs} />
    <ClientRoute path="/IContactUs" component={IContactUs} />
    <ClientRoute path="/DContactUs" component={DContactUs} />
    <ClientRoute path="/CContactUs" component={CContactUs} />
      <ClientRoute path="/Home" component={Home} />
      <ClientRoute path="/HomeDoner" component={HomeDoner} />
      <ClientRoute exact path="/HomeCreator" component={HomeCreator} />
      <ClientRoute path="/HomeVisitor" component={HomeVisitor} />
      <ClientRoute path="/Event" component={Event} />
      <ClientRoute path="/IEvent" component={IEvent} />
      <ClientRoute path="/FAQ" component={FAQ} />
      <ClientRoute path="/IFAQ" component={IFAQ} />
      <ClientRoute path="/DFAQ" component={DFAQ} />
      <ClientRoute path="/CFAQ" component={CFAQ} />
      <ClientRoute exact path="/cb" component={Cbot}/>
      <ClientRoute path="/project" component={Project} />
      <ClientRoute path="/bankings" component={Finance} />
      <ClientRoute path="/Event" component={Event} />
      <ClientRoute path="/EventsDetails/:id" component={EventsDetails} />
      <ClientRoute path="/IEvent" component={Event} />
      <ClientRoute path="/IEventsDetails/:id" component={IEventsDetails} />
      <ClientRoute path="/Chats" component={Chats} />
      <ClientRoute path="/SendStreamId" component={SendStreamId} />
      <ClientRoute exact path="/stream" component={indexstream} />
      <ClientRoute path="/EventCreator" component={EventCreator} />
      <ClientRoute path="/EventDetailsCreator" component={EventCreatorDetail} />
      <ClientRoute path="/IEventCreator" component={IEventCreator} />
      <ClientRoute path="/IEventDetailsCreator" component={IEventCreatorDetail} />
      <ClientRoute exact path="/loginDoner" component={LoginDonerScreen} />
   
      <ClientRoute exact path="/registerDoner" component={RegisterScreenDoner} />
      <ClientRoute exact path="/loginCreator" component={LoginCreator} />
      
      <ClientRoute exact path="/registerCreator" component={RegisterCreator} />
      <ClientRoute exact path="/registerInvestor" component={RegisterInvestor} />
      <ClientRoute exact path="/myProfile" component={ProfileInvestor} />
      <ClientRoute exact path="/myProfileDoner" component={ProfileDoner} />
      <ClientRoute exact path="/myProfileCreator" component={ProfileCreator} />
      <ClientRoute
        exact
        path="/forgotpassword"
        component={ForgotPasswordScreen}
      />

      <ClientRoute
        exact
        path="/passwordreset/:resetToken"
        component={ResetPasswordScreen}
      />
      <ClientRoute path="/converter" component={Converter} />
      <ClientRoute path="/Partners" component={Partners} />
      <ClientRoute path="/PartnersDetails/:id" component={PartnersDetails} />
      <ClientRoute path="/Request" component={Request} />
      <ClientRoute path="/BanksOffers" component={BanksOffers} />


      <ClientRoute path="/addproject" component={Addproject} />
      <ClientRoute path='/search/:keyword' component={Project} />
      <ClientRoute path='/isearch/:keyword' component={IProject} />
      <ClientRoute path='/vsearch/:keyword' component={VProject} />
      <ClientRoute path='/dsearch/:keyword' component={DProject} />
      <ClientRoute exact path='/search/:keyword/page/:pageNumber' component={Project} />
      <ClientRoute exact path='/isearch/:keyword/ipage/:pageNumber' component={IProject} />
      <ClientRoute exact path='/Vsearch/:keyword/ipage/:pageNumber' component={VProject} />
      <ClientRoute exact path='/dsearch/:keyword/dpage/:pageNumber' component={DProject} />
      <ClientRoute exact path="/project" component={Project} />
      <ClientRoute exact path="/Dproject" component={DProject} />
      <ClientRoute exact path="/Iproject" component={IProject} />
      <ClientRoute exact path="/Vproject" component={VProject} />
     
      <ClientRoute exact path="/project/search/:keyword/page/:pageNumber" component={Project} />
      <ClientRoute exact path="/Iproject/isearch/:keyword/ipage/:pageNumber" component={IProject} />
      <ClientRoute exact path="/Vproject/Vsearch/:keyword/ipage/:pageNumber" component={VProject} />
      <ClientRoute exact path="/Dproject/search/:keyword/dpage/:pageNumber" component={DProject} />      

      <AdminRoute exact path="/admin" component={HomeBack} />
      <AdminRoute exact path="/homeorganizer" component={HomeOrganizer} />
      <AdminRoute exact path="/login" component={Login} />
      <AdminRoute exact path="/loginOrganizer" component={LoginOrganizer} />
      <AdminRoute exact path="/List" component={List} />
      <AdminRoute exact path="/Form" component={Form} />
      <AdminRoute exact path="/investors" component={ContentInvestor} />
      <AdminRoute exact path="/creators" component={ContentCreator} />
      <AdminRoute exact path="/doners" component={ContentDoner} />
      <Route path="/CategoryQt"  component={Category} />
      <Route path="/Questions" exact component={Questions} />
      <Route path="/Questions/:id"  exact component={QuestionDetail} />
      <AdminRoute exact path="/EventCalendar" component={EventCalendar} />
      <AdminRoute exact path="/listevent" component={ListEvent} />
      <AdminRoute exact path="/events" component={eventOrganizer} />
      <AdminRoute exact path="/createevent" component={CreateEvent} />
      <AdminRoute exact path="/edit/event/:id" component={EditEvent} />
      <AdminRoute exact path="/bankslist" component={BanksPartnersList} />
      <AdminRoute exact path="/addbankspartners" component={AddBankPartner} />
      <AdminRoute exact path="/editbankpartner/:id" component={EditBankPartner} />
      
      <AdminRoute exact path="/ProjectListScreen" component={ProjectListScreen} />
      <AdminRoute exact path="/ProjectListScreen/:pageNumber" component={ProjectListScreen} />
      <ClientRoute exact path='/page/:pageNumber' component={Project} />
      <ClientRoute exact path='/ipage/:pageNumber' component={IProject} />
      <ClientRoute exact path='/Vpage/:pageNumber' component={VProject} />
      <ClientRoute exact path='/dpage/:pageNumber' component={DProject} />
      <ClientRoute exact path="/loginInvestor" component={LoginInvestor} />
    </Switch>
<Icon/>
  </Router>

  );
  //<KommunicateChat />
}

export default App;

