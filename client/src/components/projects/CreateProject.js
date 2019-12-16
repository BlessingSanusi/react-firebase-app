import React, { Component } from 'react'

class CreateProject extends Component {
    state = {
        ProjectName: '',
        projectDescription: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">New Project</h5>
                    <div className="input-field">
                        <label htmlFor="Project Name">Project Name</label>
                        <input type="text" id="projectName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="Project Description">Project Description</label>
                        <textarea id="projectDescription" className="materialize-textarea" onChange={this.handleChange}></textarea>
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

export default CreateProject
