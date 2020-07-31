import React from 'react';
import axios from 'axios';
import '../css/contact.css';

class Contact extends React.Component {
    state = {
        fname: "",
        lname: "",
        email: "",
        subject: "",
        message: ""
    }
    onFnameChange = (event) => {
        this.setState({ fname: event.target.value })
    }
    onLnameChange = (event) => {
        this.setState({ lname: event.target.value })
    }
    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }
    onSubjectChange = (event) => {
        this.setState({ subject: event.target.value })
    }
    onMessageChange = (event) => {
        this.setState({ message: event.target.value })
    }
    onFormSubmit = (e) => {
        e.preventDefault();
        axios({
            method: "POST",
            url: "https://formspree.io/xzbjodpk",
            data: this.state
        }).then((response) => {
            console.log(response);
        })
    }
    render() {
        return (
            <div className="contact-main">
                <h3>CONTACT</h3>
                <form className="form" onSubmit={this.onFormSubmit} >
                    <div>
                        <label htmlFor="fname">Name*</label>
                    </div>
                    <div className="name">
                        <input type="text" className="contact-name" id="fname" value={this.state.fname} onChange={this.onFnameChange} ></input>
                        <input type="text" className="contact-name" id="lname" value={this.state.lname} onChange={this.onLnameChange}></input>
                    </div>
                    <div>
                        <label htmlFor="email">Email Address*</label>
                    </div>
                    <div>
                        <input type="email" id="email" value={this.state.email} onChange={this.onEmailChange}></input>
                    </div>
                    <div>
                        <label htmlFor="subject">Subject*</label>
                    </div>
                    <div>
                        <input type="text" id="subject" value={this.state.subject} onChange={this.onSubjectChange}></input>
                    </div>
                    <div>
                        <label htmlFor="message">Message*</label>
                    </div>
                    <div>
                        <textarea id="message" value={this.state.message} onChange={this.onMessageChange}></textarea>
                    </div>
                </form>
                <div>
                    <button onClick={this.onFormSubmit}>SUBMIT</button>
                </div>
            </div>
        );
    }
}
export default Contact;