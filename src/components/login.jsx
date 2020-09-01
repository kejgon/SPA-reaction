// jshint esversion:6
import React, { Component } from 'react';
import Input from '../components/input';

// Message Component   
function Message(props) {
    if (props.isLoggedIn)
        return (
            <div>
                <h1>Welcome Back!!!</h1>

            </div>
        );
    else
        return (
            <div>
                <h1>Please Login First!!!</h1>
                <Input />

            </div>
        );
}

// Login Component   
function Login(props) {
    return (
        <button onClick={props.clickInfo}> Login </button>
    );
}

// Logout Component   
function Logout(props) {
    return (
        <button onClick={props.clickInfo}> Logout </button>
    );
}

class App extends Component {

    constructor(props) {
        super(props);
        //when using arrow function   
        this.handleLogin = this.handleLogin;

        //use bind when using the normal function
        this.handleLogout = this.handleLogout.bind(this);
        this.state = { isLoggedIn: false };
    }

    //using arrow function
    handleLogin = () => {
        this.setState({ isLoggedIn: true });
    }

    handleLogout() {
        this.setState({ isLoggedIn: false });
    }
    render() {
        return (
            <div className="container">
                <h1 className="header"> Login & Logout Example </h1>

                <div >
                    <Message isLoggedIn={this.state.isLoggedIn} />

                    {
                        (this.state.isLoggedIn) ? (
                            <Logout clickInfo={this.handleLogout} />
                        ) : (
                                <Login clickInfo={this.handleLogin} />
                            )
                    }
                </div>
            </div>
        );
    }
}
export default App; 