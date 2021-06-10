import classNames from 'classnames/bind'
import React from 'react'
import UserIcon from '../UserIcon/UserIcon'
import yourMessageStyle from './message.module.scss'



const Message = ({notYour, children}) => {
    let cx = classNames.bind(yourMessageStyle)

    let messageVrapperClass = cx({
        message_vrapper: true,
        not_your_message_vrapper : notYour,
    })
    let textVrapperClass = cx({
        text_vrapper: true,
        not_your_text_vrapper: notYour
    })
    let textClass = cx({
        text: true,
        not_your_text: notYour
    })


    return(
        <div className = {messageVrapperClass} >
            <UserIcon/>
            <div className = {textVrapperClass} >
                <p className = {textClass}>{children}</p>
            </div>
        </div>
    )
}

export default Message