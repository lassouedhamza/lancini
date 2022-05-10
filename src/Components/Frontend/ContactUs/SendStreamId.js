import React, { Component, useRef }from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import emailjs from '@emailjs/browser';

class  SendStreamId  extends Component{

    state = {
        
      
        email: '',
        subject: '',
        message: '',
      }
      handleSubmit(e) {
        e.preventDefault()
        const { email, subject, message } = this.state
        let templateParams = {
            email: email,
          to_name: 'cYgFw6wqRSLRbAMPV',
          subject: subject,
          message: message,
         }
         emailjs.send(
          'service_8msz1nh',
          'template_l4mennf',
           templateParams,
          'cYgFw6wqRSLRbAMPV'
         )
         this.resetForm()
     }

     resetForm() {
        this.setState({
          
          
          email: '',
          subject: '',
          message: '',
        })
      }
    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
      }

   render(){
    
      return (
        <>
  <Header/>
 
   <section className="contact-section section-gap-extra-bottom">
        <div className="container">
           
            

         
                <div className="row no-gutters">
                 
                    <div className="col-lg-7">
                        <div className="contact-form">
                            <form onSubmit={this.handleSubmit.bind(this)}>
                                <h3 className="form-title">Send Stream Id</h3>
                                <div className="row">
                                <div className="col-lg-6">
                                        <div className="form-field mb-25">
                                            <label for="email">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={this.state.email}
                                                onChange={this.handleChange.bind(this, 'email')}
                                                placeholder="Enter email"
                                            />
                                        </div>
                                    </div>
                                  
                                   
                                    <div className="col-lg-6">
                                        <div className="form-field mb-25">
                                            <label for="subject">Subject</label>
                                            <input
                                                type="subject"
                                                name="subject"
                                                value={this.state.subject}
                                                onChange={this.handleChange.bind(this, 'subject')}
                                                placeholder="Enter subject"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-field mb-30">
                                            <label for="message">Write Message</label>
                                            <input
                                                type="textarea"
                                                name="message"
                                                className="text-primary"
                                                value={this.state.message}
                                                onChange={this.handleChange.bind(this, 'message')}
                                               
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-field">
                                            <button className="main-btn"  type="submit" >Send Us Message <i className="far fa-arrow-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            
        </div>
    </section>
          <Footer/>
   </>
      )
    
  }
}
  export default SendStreamId