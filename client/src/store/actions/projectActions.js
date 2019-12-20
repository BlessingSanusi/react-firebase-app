export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
    //async call to firebase database
        const firestore = getFirestore();
        firestore.collection('projects').add({
           ...project,
            authorFirstName: 'Mary',
            authorLastName: 'Smith',
            authorId: '23456',
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
          }).catch(err => {
            dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
          });
        }
}