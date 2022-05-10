import React, { Component, useState } from 'react'
import Footer from '../Footer/Footer'
import HeaderCreator from '../Header/HeaderCreator'
import emailjs from '@emailjs/browser'


class Request extends Component {
   
    state = {
        first_name: '',
        last_name: '',
        phone:'',
        bankemail: '',
        subject: '',
        message: '',
      }
      handleSubmit(e) {
        e.preventDefault()
        const { first_name,last_name,phone,bankemail, subject, message } = this.state
        let templateParams = {
            bankemail: bankemail,
            first_name: 'cYgFw6wqRSLRbAMPV',
          subject: subject,
          message: message,
          phone:phone,
          first_name:first_name,
          last_name:last_name
         }
         emailjs.send(
          'service_8msz1nh',
          'template_lwa1sks',
           templateParams,
          'cYgFw6wqRSLRbAMPV'
         )
         this.resetForm()
     }

     resetForm() {
        this.setState({
            first_name: '',
            last_name: '',
            phone:'',
            bankemail: '',
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
  <HeaderCreator></HeaderCreator>
  <section className="contact-section section-gap-extra-bottom">
   <div class="container">
   <div className="contact-from-area">
   <div class="container">
   <h3 className="form-title">Send to the bank your loan's request  </h3> 
   </div>         
   <div className="col-lg-7">
                        <div className="contact-form">
                            <form  onSubmit={this.handleSubmit.bind(this)}>
                                <h3 className="form-title">Send your request </h3>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-field mb-25">
                                            <label for="name">First Name</label>
                                            <input
                                                type="text"
                                                name="first_name"
                                                value={this.state.first_name}
                                                onChange={this.handleChange.bind(this, 'first_name')}
                                                placeholder="Name"
                                            />
                                        </div>
                                        <div className="form-field mb-25">
                                            <label for="name">Last Name</label>
                                            <input
                                                type="text"
                                                name="last_name"
                                                value={this.state.last_name}
                                                onChange={this.handleChange.bind(this, 'last_name')}
                                                placeholder="Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-field mb-25">
                                            <label for="phone-number">Phone Number</label>
                                            <input
                                                type="phone"
                                                name="phone"
                                                value={this.state.phone}
                                                onChange={this.handleChange.bind(this, 'phone')}
                                                placeholder="Enter phone"
                                            />
                                        </div>
                                    </div>
                                    {/* <div className="col-lg-6">
                                        <div className="form-field mb-25">
                                            <label for="youremail"> Your email address</label>
                                            <input
                                                type="email"
                                                name="youremail"
                                                value={this.state.youremail}
                                                onChange={this.handleChange.bind(this, 'youremail')}
                                                placeholder="Enter your email"
                                            />
                                        </div>
                                    </div> */}
                                    <div className="col-lg-6">
                                        <div className="form-field mb-25">
                                            <label for="bankemail">Bank Email Address</label>
                                            <input
                                                type="email"
                                                name="bankemail"
                                                value={this.state.bankemail}
                                                onChange={this.handleChange.bind(this, 'bankemail')}
                                                placeholder="Enter the bank email"
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
                                            <button className="main-btn"  type="submit" >Send <i className="far fa-arrow-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                
                    </div>
   </div>
   </section>
    <Footer></Footer>      
   </>
  );
                                }
}

export default Request