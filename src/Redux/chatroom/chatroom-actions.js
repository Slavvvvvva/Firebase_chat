import { firestore } from "../../Firebase/firebase"
import { ChatroomAcitonTypes } from "./chatroom-action-types"

export const setChatList = chatList => ({
    type: ChatroomAcitonTypes.SET_CTATROOM_LIST,
    payload: chatList
})

export const setAsyncMessages = message => ({
    type: ChatroomAcitonTypes.SET_ASYNC_MESSAGE,
    payload: message
})

export const asyncCeateNewChatroom = ({name, description, imageUrl}) => {
    return (dispatch) => {
        firestore.collection(`ChatList`).add({
			name,
			description,
			imageUrl,
		})
        .then ( () => {
            dispatch(setAsyncMessages('Sending was suckcesful'))
        })
        .catch( (error) => {
            let {errorCode, errorMessage} = error
                dispatch(setAsyncMessages(errorCode+''+errorMessage))
        })    
    }
}

export const asyncGetChatList = () => {
    return (dispatch) => {
        firestore.collection(`ChatList`).get()
            .then( (querySnapshot) =>{
                let list = []
                querySnapshot.forEach((doc) => list.push(doc.data()))
                dispatch(setChatList(list))
            })                
    }
}