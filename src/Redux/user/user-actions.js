import {UserAcitonTypes} from './user-action-types'
import firebase, { getCurrentUser } from '../../Firebase/firebase'
import 'firebase/auth'

export const setCurrentUser = user => ({
    type: UserAcitonTypes.SET_CURRENT_USER,
    payload: user
})

export const setErrorMessages = error => ({
    type: UserAcitonTypes.SET_ERROR_MESSAGES,
    payload: error
})

export const logOutUser = () =>({
    type: UserAcitonTypes.LOG_OUT_USER
})

export const asyncCeateAndSetCurrentUser = ({email, password}) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => { 
                let user = userCredential.user
            dispatch(setCurrentUser(user))
            })
            .catch((error) => {
                let {errorCode, errorMessage} = error
                dispatch(setErrorMessages(errorCode+''+errorMessage))
            })
    }
}

export const asyncLoginAndSetCurrentUser = (email, password) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                let user = userCredential.user;
                dispatch(setCurrentUser(user))
            })
            .catch((error) => {
                let {errorCode, errorMessage} = error
                dispatch(setErrorMessages(errorCode+''+errorMessage))
            })
    }
}

export const asyncIsUserLogined = () => {
    return (dispatch) => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                dispatch(setCurrentUser(user))
            }
            else{
                dispatch(logOutUser())
            }
        })
    }
}

export const asyncLogOutUser = () => {
    return (dispatch) => {
        firebase.auth().signOut()
            .then(() => {
                dispatch(logOutUser())
            })
            .catch((error) => {
                let {errorCode, errorMessage} = error
                dispatch(setErrorMessages(errorCode+''+errorMessage))
            })
    }
}