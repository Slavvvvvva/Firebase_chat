import React from 'react'
import mainPageStyle from './mainPage.module.scss'
import chatIcon from '../../Assets/Icons/chat.svg'
import ChatRoomItem from '../../components/ChatRoomItem/ChatRoomItem'
import Navigation from '../../components/Navigation/Navigation'

const MainPage = () => {


    return (
        <>
            <div className={mainPageStyle.header} >
                <h1>Chat rooms</h1>
                <input type = 'search' placeholder = 'Search'></input>
            </div>
            <div className = {mainPageStyle.chatlist} >
                <ChatRoomItem
                    chatName = 'Exemple Name 1'
                    chatDescription = 'exemple very long description 1 very long description 1 exemple very long description 1 exemple very long description 1 exemple very long description 1'
                    chatImg = {chatIcon}
                    patch = 'Exemple Name 1'
                />
                <ChatRoomItem
                    chatName = 'Exemple Name 2'
                    chatDescription = 'exemple very long description 2'
                    chatImg = {chatIcon}
                    patch = 'Exemple Name 2'
                />
                <ChatRoomItem
                    chatName = 'Exemple Name 3'
                    chatDescription = 'exemple very long description 3'
                    chatImg = {chatIcon}
                    patch = 'Exemple Name 3'
                />
                <ChatRoomItem
                    chatName = 'Exemple Name 3'
                    chatDescription = 'exemple very long description 3'
                    chatImg = {chatIcon}
                    patch = {3}
                />
                <ChatRoomItem
                    chatName = 'Exemple Name 3'
                    chatDescription = 'exemple very long description 3'
                    chatImg = {chatIcon}
                    patch = {3}
                /><ChatRoomItem
                    chatName = 'Exemple Name 3'
                    chatDescription = 'exemple very long description 3'
                    chatImg = {chatIcon}
                    patch = {3}
                />
                <ChatRoomItem
                    chatName = 'Exemple Name 3'
                    chatDescription = 'exemple very long description 3'
                    chatImg = {chatIcon}
                    patch = {3}
                />
            </div>
            <Navigation/>
            
        </>
    )
}

export default MainPage