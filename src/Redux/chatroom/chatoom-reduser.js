import {ChatroomAcitonTypes} from './chatroom-action-types'

const INITIAL_STATE =  {
    chatList: null,
    message: null,
    asyncMessege: null
    
}

const chatReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ChatroomAcitonTypes.SET_CTATROOM_LIST: 
            return {...state, chatList: action.payload}
        case ChatroomAcitonTypes.SET_ASYNC_MESSAGE: 
            return {...state, asyncMessege: action.payload}
        case ChatroomAcitonTypes.SET_MESEGES: 
            return {...state, message: action.payload}
        default: 
            return state
    }
}

export default chatReducer