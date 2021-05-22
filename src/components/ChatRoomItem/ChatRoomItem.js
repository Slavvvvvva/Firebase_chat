import React from 'react'
import { NavLink } from 'react-router-dom'
import chatItemStyle from './chat-room-item.module.scss'

const ChatRoomItem = ({chatName, chatDescription, chatImg, patch}) => {
    return (
        <NavLink to = {`/chatroom/${patch}`} className = {chatItemStyle.chatItem} >
            <img
                className = {chatItemStyle.icon}
                src = {chatImg}
                alt = 'chat room icon'
            />
            <div className = {chatItemStyle.text_vrapper}>
                <p className = {chatItemStyle.name} > {chatName} </p>
                <p className = {chatItemStyle.description} > {chatDescription} </p>
            </div>
        </NavLink>
    )
}
export default ChatRoomItem