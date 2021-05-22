import React from 'react'
import { NavLink } from 'react-router-dom'
import navigationButtonStyle from './navigation-button.module.scss'

const NavigationButton = ({patch, image, alt}) => {

    return(
        <NavLink to = {patch} className = {navigationButtonStyle.navigationButton}>
            <img src = {image}
                 alt = {alt}
                 className = {navigationButtonStyle.icon}
            />
        </NavLink>
    )
}

export default NavigationButton