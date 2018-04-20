import React, {Component} from 'react';

export default class Dashboard extends Component {
    constructor() {
    super();

    this.state = {
        posts: [],
        search: '',
        userposts: true
    };


    }


    render() {
        return(
            <div>
                <h1>Dashboard</h1>
            </div>
        ) 
    }

}

