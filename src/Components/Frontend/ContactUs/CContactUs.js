import React, { Component, useRef }from 'react'
import Footer from '../Footer/Footer'
import HeaderCreator from '../Header/HeaderCreator'
import emailjs from '@emailjs/browser';
import Quotes from './Quotes';

class  CContactUs  extends Component{

    state = {
        name: '',
        phone:'',
        email: '',
        subject: '',
        message: '',
      }
      handleSubmit(e) {
        e.preventDefault()
        const { name,phone, email, subject, message } = this.state
        let templateParams = {
          from_name: email,
          to_name: 'iCiIKRlBzDfl_d15X',
          subject: subject,
          message: message,
          phone:phone,
          name:name
         }
         emailjs.send(
          'service_fmvjs4k',
          'template_qkmtprj',
           templateParams,
          'iCiIKRlBzDfl_d15X'
         )
         this.resetForm()
     }

     resetForm() {
        this.setState({
          name: '',
          phonee:'',
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
   <HeaderCreator></HeaderCreator>
 
   <section className="contact-section section-gap-extra-bottom">
        <div className="container">
           
            <div className="row align-items-center justify-content-center">
                <div className="col-lx-4 col-lg-5 col-sm-10">
                    <Quotes></Quotes>
                    {/* <div className="contact-info-text mb-md-70">
                        <div className="common-heading mb-30">
                            <span className="tagline">
                                <i className="fas fa-plus"></i> Donate Projects
                                <span className="heading-shadow-text">Donate</span>
                            </span>
                            <h2 className="title">Ready to Get More Information</h2>
                        </div>
                        <p>
                            Sedut perspiciatis unde omnis natus voluptatem accusantium dolore dantiumy totam apeam eaquey quaventore veritatis architecto beatae.
                        </p>
                        <a href="events.html" className="main-btn mt-35">Get Free Quote <i className="far fa-arrow-right"></i></a>
                    </div> */}
                </div>
                <div className="col-xl-6 col-lg-7 offset-xl-1">
                    <div className="contact-info-boxes">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-md-6 col-sm-10">
                                <div className="info-box text-center wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="icon">
                                        <i className="flaticon-place"></i>
                                    </div>
                                    <div className="info-content">
                                        <h5>Our Location</h5>
                                        <p>
                                        1, 2 rue André Ampère - 2083 - Pôle Technologique - El Ghazala.
                                        </p>
                                    </div>
                                </div>
                                <div className="info-box text-center mt-30 mb-sm-30 wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="icon">
                                        <i className="flaticon-envelope"></i>
                                    </div>
                                    <div className="info-content">
                                        <h5>Email Address</h5>
                                        <p>
                                            lanciniapp@gmail.com <br/>
                                            www.lancini.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-10">
                                <div className="info-box text-center wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="icon">
                                        <i className="flaticon-phone-call-1"></i>
                                    </div>
                                    <div className="info-content">
                                        <h5>Support 24/7</h5>
                                        <p>
                                            +216 28092318 <br/>
                                            28092318 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-from-area">
                <div className="row no-gutters">
                    <div className="col-lg-5">
                        <div className="contact-maps">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d48372.81123152747!2d-73.96448279177292!3d40.733408396164116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1627206548218!5m2!1sen!2sbd" loading="lazy"></iframe>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="contact-form">
                            <form onSubmit={this.handleSubmit.bind(this)}>
                                <h3 className="form-title">Send Us Message</h3>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-field mb-25">
                                            <label for="name">Your Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={this.state.name}
                                                onChange={this.handleChange.bind(this, 'name')}
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
        </div>
    </section>
            <Footer></Footer>
   </>
      )
    
  }
}
  export default CContactUs