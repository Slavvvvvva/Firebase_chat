import React from 'react'
import { useHistory, useParams } from 'react-router'
import AutogrowTextarea from '../../components/AutogrowTextarea/AutogrowTextarea'
import Message from '../../components/Messages/Message'
import chatRoomStyle from './chat-room-page.module.scss'

const ChatRoomPage = () => {

    const {chatRoomName} = useParams()
    const history = useHistory()
    console.log(history)
    const chatRoomDescription = 'some  description'

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
                <Message notYour = {true}/>
                <Message notYour = {false}/>
                <Message notYour = {true}/>
                <Message notYour = {false}/>
                <Message notYour = {true}/>
                <Message notYour = {false}/>
                <Message notYour = {true}/>
                <Message notYour = {true}/>
            </div>
            <div className = {chatRoomStyle.input_vrapper}>
                <AutogrowTextarea/>
            </div>
        </>
    )
}

export default ChatRoomPage