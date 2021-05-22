import React from 'react'
import NavigationButton from '../../components/NavigationButton/NavigationButton'
import mainPageStyle from './mainPage.module.scss'
import chats from '../../Assets/Icons/chats.svg'
import profile from '../../Assets/Icons/profile.svg'
import settings from '../../Assets/Icons/settings.svg'

const MainPage = () => {


    return (
        <>
            <div className={mainPageStyle.header} >
                <h1>Chatrooms</h1>
                <input type = 'search' placeholder = 'Search'></input>
            </div>
            <div className={mainPageStyle.chatlist} >
            </div>
            <nav className={mainPageStyle.navigation} >
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