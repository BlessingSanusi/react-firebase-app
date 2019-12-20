import React, { Component } from 'react'
import { connect } from 'react-redux'
import {createProject} from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
    state = {
        projectName: '',
        projectDescription: '',
        deadline: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.createProject(this.state)
        // e.target.reset();
        this.props.history.push('/');
    }
    render() {

        const {auth} = this.props;

        if (!auth.uid){
            return <Redirect to ='/signin' />
        }

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">New Project</h5>
                    <div className="input-field">
                        <input type="text" id="projectName" onChange={this.handleChange}/>
                        <label htmlFor="Project Name">Project Name</label>
                    </div>
                    <div className="input-field">
                    <textarea id="projectDescription" className="materialize-textarea" onChange={this.handleChange}></textarea>
                        <label htmlFor="Project Description">Project Description</label>
                    </div>
                    <div className="input-field">
                    <input type="text" id="deadline" onChange={this.handleChange}/>
                        <label htmlFor="Deadline">Project Deadline</label>              
                    </div>
                   
                    <div className="input-field">
                        <button className="btn deep-orange darken-3">
                           Create
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
