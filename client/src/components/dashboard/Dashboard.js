import React, { Component } from 'react';

import Notification from './Notifications'
import ProjectList from '../projects/ProjectList'

class Dashboard extends Component {
   
    render() {
        return (
            <div>
                <div className="dashboard container">
                    <div className="row">
                        <div className="col s12 m6">
                            <ProjectList />
                        </div>
                        <div className="div col s12 m5 offset-m1">
                            <Notification />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default Dashboard;