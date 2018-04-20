import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function Nav() {
    return(
        <div>
            <h1>Nav</h1>
            <Link to="dashboard"> <button>Home</button></Link>
            <Link to="new"><button>New Post</button></Link>
            <Link to="auth"><button>Logout</button></Link>
        </div>
    )
}

function mapStateToProps(param) {
    const {username, profile_pic} = param;
    return {username, profile_pic};
}

export default connect(mapStateToProps)(Nav)