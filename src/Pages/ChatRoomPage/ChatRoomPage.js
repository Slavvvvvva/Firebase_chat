import React from 'react'
import { useParams } from 'react-router'
import chatRoomStyle from './chat-room-page.module.scss'

const ChatRoomPage = () => {
    const {chatRoomName} = useParams()
    const chatRoomDescription = 'some  description'
    return (
        <>
            <div className={chatRoomStyle.header}>
                <button className = {chatRoomStyle.back_botton} />
                <p className = {chatRoomStyle.chat_name} >{chatRoomName}</p>
                <p className = {chatRoomStyle.chat_description} >{chatRoomDescription}</p>
            </div>
            <div className={chatRoomStyle.message_vrapper}>
            </div>
            <div className = {chatRoomStyle.input_vrapper}>
            </div>
        </>
    )
}

export default ChatRoomPage