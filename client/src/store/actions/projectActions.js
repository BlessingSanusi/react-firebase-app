export const createProject = (project) => {
    return (dispatch, getState) => {
//async call to firebase database
        dispatch({type: 'CREATE_PROJECT', project: project})
    }
}