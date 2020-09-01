//jshint esversion:6

import React, { Component } from "react";

class Contact extends Component {
    render() {
        return (
            <div>
                <h2>GOT QUESTIONS?</h2>
                <p>The easiest thing to do is post on
        our <a href="http://forum.kirupa.com">forums</a>.
        </p>

                <div class="row">
                    <h4>We'd love to hear from you!</h4>
                </div>
                <div class="row input-container">
                    <div class="col-xs-12">
                        <div class="styled-input wide">
                            <input type="text" required />
                            <label>Name</label>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div class="styled-input">
                            <input type="text" required />
                            <label>Email</label>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div class="styled-input" style={{ float: "right" }}>
                            <input type="text" required />
                            <label>Phone Number</label>
                        </div>
                    </div>
                    <div class="col-xs-12">
                        <div class="styled-input wide">
                            <textarea required></textarea>
                            <label>Message</label>
                        </div>
                    </div>
                    <div class="col-xs-12">
                        <div class="btn-lrg submit-btn">Send Message</div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Contact;
