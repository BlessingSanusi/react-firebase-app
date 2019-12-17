const initState = {
projects: [
    {id: '1', ProjectName:'React Redux', projectDescription:'Learning and contributing to new project using react and redux'},
    {id: '2', ProjectName:'Office Christmas Party', projectDescription:'Coordinating and decorating the office for its christmas party'},
    {id: '3', ProjectName:'Voluteering', projectDescription:'Volunteering at the homeless shelter with everyone at the office'},
    {id: '4', ProjectName:'Debugging', projectDescription:'Debugging the react project with Jane Doe'}
]

}

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('project created', action.project)
    }
    return state
} 

export default projectReducer;