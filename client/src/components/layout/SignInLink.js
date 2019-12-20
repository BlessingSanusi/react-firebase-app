import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authAction'

const SignInLink = (props) => {
    
    return (
        <ul className="right">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
             <li><NavLink to="/" className="btn btn-floating deep-orange darken-3">NN</NavLink></li>
        </ul>
    )
}

const mapDispatchProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchProps) (SignInLink)