//jshint esversion:6

import React from "react";

class Input extends React.Component {
    constructor(props) {
        super(props);

        // bind submit function
        this.handleSubmit = this.handleSubmit.bind(this);
        // create reference to input field
        this.input = React.createRef();
    }

    handleSubmit(event) {
        // Get value of input field
        let value = this.input.current.value;
        console.log(value);
        event.preventDefault();
        // Validate 'value' and submit using your own api or something
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div class="styled-input wide">
                    <input type="text" required />
                    <label>Name</label>
                </div>

            </form>
        );
    }
}


export default Input;