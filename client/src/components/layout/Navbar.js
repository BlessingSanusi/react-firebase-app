import React from 'react'
import { Link } from 'react-router-dom'

import SignInLink from './SignInLink'
import SignOutLink from './SignOutLink'

import {connect} from 'react-redux'

const Navbar = (props) => {

    const { auth, profile } = props;
    // console.log(auth)
    const links = auth.uid ? <SignInLink profile={profile} /> : <SignOutLink />
    return (
       
        <nav className="nav-wrapper blue-grey darken-3">
            <div className="container">
            <Link to="/" className="brand-logo left">Project Manager</Link>
            
            <ul id="nav-mobile" className="right hide-on-small-only">
            { links }
            </ul>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
   
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}
export default connect(mapStateToProps)(Navbar)