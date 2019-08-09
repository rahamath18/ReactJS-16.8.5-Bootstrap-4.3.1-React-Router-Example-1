import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
        <div>
			<h2>Contact Details</h2>
		    <br/>
			<h4><strong>Address</strong></h4>
			<h6>Address Line 1</h6>
		    <h6>Address Line 2</h6>
		    <h6>Address Line 3</h6>
		    <h4><strong>Email</strong></h4> Rahamath S - <a href = "mailto:rahamath18@yahoo.com?subject = Feedback&body = Message">rahamath18@yahoo.com</a>
        </div>
    );
  }
}

export default Contact;