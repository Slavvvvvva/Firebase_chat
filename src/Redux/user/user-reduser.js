import {UserAcitonTypes} from './user-action-types'

const INITIAL_STATE =  {
    currentUser: null,
    errorMasage: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserAcitonTypes.SET_CURRENT_USER: 
            return {...state, currentUser: action.payload, errorMasage: null}
        case UserAcitonTypes.SET_ERROR_MESSAGES:
            return {...state, errorMasage: action.payload}
        case UserAcitonTypes.LOG_OUT_USER: 
            return {...state, currentUser: null}
        default: 
            return state
    }
}

export default userReducer