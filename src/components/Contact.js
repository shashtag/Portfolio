import React from "react";

class Contact extends React.Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    subject: "",
    message: "",
  };
  onFnameChange = event => {
    this.setState({ fname: event.target.value });
  };
  onLnameChange = event => {
    this.setState({ lname: event.target.value });
  };
  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };
  onSubjectChange = event => {
    this.setState({ subject: event.target.value });
  };
  onMessageChange = event => {
    this.setState({ message: event.target.value });
  };
  onFormSubmit = e => {
    e.preventDefault();
    if (this.handleValidation()) {
      alert("Form submitted");
    }
  };
  handleValidation = () => {
    if (
      this.state.fname === "" ||
      this.state.email === "" ||
      this.state.subject === "" ||
      this.state.message === ""
    ) {
      alert("All Fields are mandatory");
      return false;
    }

    let lastAtPos = this.state.email.lastIndexOf("@");
    let lastDotPos = this.state.email.lastIndexOf(".");
    if (
      !(
        lastAtPos < lastDotPos &&
        lastAtPos > 0 &&
        this.state.email.indexOf("@@") === -1 &&
        lastDotPos > 2 &&
        this.state.email.length - lastDotPos > 2
      )
    ) {
      alert("Please enter valid email!");
      return false;
    }

    return true;
  };
  render() {
    return (
      <div className="contact-main">
        <h3>CONTACT</h3>
        <form className="form" onSubmit={this.onFormSubmit}>
          <div>
            <label htmlFor="fname">Name</label>
          </div>
          <div className="name">
            <input
              type="text"
              className="contact-name"
              id="fname"
              value={this.state.fname}
              onChange={this.onFnameChange}></input>
            <input
              type="text"
              className="contact-name"
              id="lname"
              value={this.state.lname}
              onChange={this.onLnameChange}></input>
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
          </div>
          <div>
            <input
              type="email"
              id="email"
              value={this.state.email}
              onChange={this.onEmailChange}></input>
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
          </div>
          <div>
            <input
              type="text"
              id="subject"
              value={this.state.subject}
              onChange={this.onSubjectChange}></input>
          </div>
          <div>
            <label htmlFor="message">Message</label>
          </div>
          <div>
            <textarea
              id="message"
              value={this.state.message}
              onChange={this.onMessageChange}></textarea>
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
