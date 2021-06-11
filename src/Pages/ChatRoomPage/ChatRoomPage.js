import React from 'react'
import { useHistory, useParams } from 'react-router'
import AutogrowTextarea from '../../components/AutogrowTextarea/AutogrowTextarea'
import Message from '../../components/Messages/Message'
import chatRoomStyle from './chat-room-page.module.scss'
import {firestore} from '../../Firebase/firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import {selectCurrentUser} from '../../Redux/user/user-selector'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'


const ChatRoomPage = ({currentUser}) => {

    const {chatRoomName} = useParams()
    const history = useHistory()
    console.log(history)
    const chatRoomDescription = 'some  description'

	const [messages, loading] = useCollectionData(
		firestore.collection(`${chatRoomName}`).orderBy('createdAt')
	)

    console.log(messages)
    if(loading) return (<p>Loading</p>)

    const renderMeseges = messages.map( (mesItem, index) => {
        
        return(
            <Message
                notYour = {!(mesItem.uid === currentUser.uid )}
                time ={mesItem.createdAt.toDate().toLocaleTimeString('it-IT')}
            >
                {mesItem.text}
            </Message>
        )
    })


    return (
        <>
            <div className={chatRoomStyle.header}>
                <button
                    className = {chatRoomStyle.back_botton}
                    onClick = {() => history.push('/')}
                />
                <p className = {chatRoomStyle.chat_name} >{chatRoomName}</p>
                <p className = {chatRoomStyle.chat_description} >{chatRoomDescription}</p>
            </div>
            <div className = {chatRoomStyle.message_vrapper}>
                {renderMeseges}
            </div>
            <div className = {chatRoomStyle.input_vrapper}>
                <AutogrowTextarea/>
            </div>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
  })
  
export default connect(mapStateToProps, {})(ChatRoomPage)