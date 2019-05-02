const initState = {
    projects: [
        {id: '1', title: 'Step 1', content: 'Complete signup pages'},
        {id: '2', title: 'Step 2', content: 'Complete signin page'},
        {id: '3', title: 'Step 3', content: 'Hook up app with Firebase'}
    ]
}
    
const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
    }
    return state
}

export default projectReducer