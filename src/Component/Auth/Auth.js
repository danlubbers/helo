import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class Auth extends Component {
    constructor() {
    super();

    this.state = {
        username: '',
        password: ''
    };


}

inputUsername(name) {
    this.setState({username: name});
}

inputPassword(pw) {
    this.setState({password: pw});
}

addLogin(username, password) {
    console.log(this.state.username)
    axios.post(`/api/login`, {username: username, password: password}).then(res => {
        console.log(res)
        this.props.history.push('/dashboard')
    })
}

addRegister(username, password) {
    axios.post(`/api/register`, {username: username, password: password}).then(res => {
        this.props.history.push('/dashboard')
    }) 
}

    render() {
        // this is how i check to see if state is being set
        console.log(this.state)
        return(
            <div>
                <h1>Auth</h1>
                <div>
                    <input className="username-input" value={this.state.username} onChange={e=>{this.inputUsername(e.target.value)}}/>
                </div>
                <div>
                    <input className="password-input" value={this.state.password} onChange={e=>{this.inputPassword(e.target.value)}}/>
                </div>
                <div>
                    <button className="loginBtn" onClick={_=> this.addLogin(this.state.username, this.state.password)}>Login</button>
                    <button className="registerBtn" onClick={_=> this.addRegister(this.state.username, this.state.password)}>Register</button>
                </div>

            </div>
        ) 
    }
}

export default connect(null, {} )(Auth);
