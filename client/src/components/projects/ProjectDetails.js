import React from 'react'

const ProjectDetails = (props) => {
    console.log(props)
    const id = props.match.prams.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id} </span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nisi eligendi voluptates animi provident quam quas incidunt odio ad minima deserunt enim eaque ratione quae autem neque ea, sequi ex!</p>
                </div>
                <div className="card-action grey lighten-5 grey-text">
                    <div>Posted By: Blessing Sanusi</div>
                    <div>November 23rd, 3pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails