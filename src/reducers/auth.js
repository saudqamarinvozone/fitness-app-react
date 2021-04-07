const defaultState = {
    loggedIn: false,
    authToken: '',
    user: {}
}

const AuthReducer = (state = defaultState, action) => {
   
    switch(action.type){
        case "LOG_IN":
            return {
                ...state,
                loggedIn: true,
                authToken: action.payload.authToken,
                user: action.payload.user
            }
        case "LOG_OUT":
            localStorage.clear()
            return {
                ...state,
                loggedIn: false,
                authToken: '',
                user: {}
            }
        default: return state
    }
}

export default AuthReducer;
