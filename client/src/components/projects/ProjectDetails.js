import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

const ProjectDetails = (props) => {
    const { project, auth } = props;

    if(!auth.uid){
        return <Redirect to ='/signin' />
    }
    
    if (project){
return (
    <div className="container section project-details">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">{ project.projectName} </span>
    <p>{project.projectDescription}</p>
    <p className="bold">Project Deadline: {project.deadline}</p>
                </div>
                <div className="card-action grey lighten-5 grey-text">
<div>Posted By: {project.authorFirstName} {project.authorLastName}</div>
                    <div>November 23rd, 3pm</div>
                </div>
            </div>
        </div>
)
    }
    else{
        return (
            <div className="container center">
                <h5>Your project is loading...</h5>
                </div>
            )
    }

 
    
}

const mapStateToProps = (state, newProps) => {

    const id = newProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    

    return{
        // projects: projects[id]
        // projects: state.firestore.data[projects] && state.firestore.data.projects[id]
        project: project,
        auth : state.firebase.auth
    }
}

export default compose(
    
connect(mapStateToProps),
firestoreConnect(props => {

    return [
         { collection: "projects"},
    ];
})

)(ProjectDetails)