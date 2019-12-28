import React from 'react'
import moment from 'moment'

const ProjectSummary = ({project}) => {
    return (
        
        
            <div className="card z-depth-0 project-summary">
                <div className="card-content  blue-grey lighten-5 grey-text text-darken-3">
                    <span className="card-title">{project.projectName}</span>
                    <p>Posted by: {project.authorFirstName} {project.authorLastName}</p>
                    <div>
                    <p className="grey-text">Created At: {moment(project.createdAt.toDate()).calendar()}</p>
                    </div>
                </div>
            </div>
   
    )
}


export default  ProjectSummary