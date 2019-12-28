import React from 'react'
import moment from 'moment'

let notify ={
    borderRadius: '10px'
}

const Notifications = (props) => {
    const {notifications} = props;
    return (
        <div className="section">
            <div className="card z-depth-1" style={notify}>
                <div className="card-content">
                    <span className="card-title">
                        Notifications
                    </span>
                    <ul className="notify">
                       { notifications && notifications.map(note=> {
                       return (
                           <li key={note.id}>
                       <span className="deep-orange-text">{note.user} </span>
                       <span>{note.content}</span>
                       <div className="grey-text note-date">
                           Created: {moment(note.time.toDate()).fromNow()}
                       </div>
                           </li>
                       )
                       })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default  Notifications