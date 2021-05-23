import React from 'react'
import NavigationButton from '../../components/NavigationButton/NavigationButton'
import mainPageStyle from './mainPage.module.scss'
import chats from '../../Assets/Icons/chats.svg'
import chatIcon from '../../Assets/Icons/chat.svg'
import profile from '../../Assets/Icons/profile.svg'
import settings from '../../Assets/Icons/settings.svg'
import ChatRoomItem from '../../components/ChatRoomItem/ChatRoomItem'

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
            <nav className = {mainPageStyle.navigation} >
                <NavigationButton
                patch ='/'
                alt = 'Go to chatrooms page'
                image = {chats} 
                />
                <NavigationButton
                patch ='/profile'
                alt = 'Go to your profile page'
                image = {profile} 
                />
                <NavigationButton
                patch ='/create'
                alt = 'Go to create new chatroom'
                image = {settings} 
                />
            </nav>
        </>
    )
}

export default MainPage