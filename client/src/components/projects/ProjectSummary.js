import React from 'react'

const ProjectSummary = ({project}) => {
    return (
        
        
            <div className="card z-depth-1 project-summary">
                <div className="card-content  grey lighten-4 grey-text text-darken-3">
                    <span className="card-title">{project.projectName}</span>
                    <p>Posted by: {project.authorFirstName} {project.authorLastName}</p>
                    <div>
                    <p className="grey-text">November 23, 1pm</p>
                    </div>
                </div>
            </div>
   
    )
}


export default  ProjectSummary