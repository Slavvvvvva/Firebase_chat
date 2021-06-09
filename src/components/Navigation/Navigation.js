import React from 'react'
import navigationStyle from './navigation.module.scss'
import NavigationButton from '../NavigationButton/NavigationButton'
import profile from '../../Assets/Icons/profile.svg'
import settings from '../../Assets/Icons/settings.svg'
import chats from '../../Assets/Icons/chats.svg'

const Navigation = () => {

    return(
        <nav className = {navigationStyle.navigation} >
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
    )
}

export default Navigation