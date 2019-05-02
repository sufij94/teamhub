export const createProject = (project) => {
    return (dispatch, getState) => {
        // make async call to database
        dispatch({ type: 'CREAT_PROJECT', project});
    }
};