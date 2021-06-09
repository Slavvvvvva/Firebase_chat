import React from 'react'
import customButtonStyle from './custom-button.module.scss'

const CustomButton = ({children, disabled, type, clickFunction}) => {

    return(
        <>
            <button
                className = {customButtonStyle.button}
                disabled = {disabled}
                type = {type}
                onClick = {clickFunction}
            >
                {children}
            </button>
        </>
    )
}

export default CustomButton