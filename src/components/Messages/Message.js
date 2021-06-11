import classNames from 'classnames/bind'
import React from 'react'
import UserIcon from '../UserIcon/UserIcon'
import yourMessageStyle from './message.module.scss'



const Message = ({notYour, children, time}) => {

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
    let timeClass = cx({
        time: true,
        not_your_time: notYour
    })
    let nameClass = cx({
        name: true,
        not_your_name: notYour
    })

    let name = 'Super nick name'
    return(
        <div className = {messageVrapperClass} >
            <UserIcon/>
            <div className = {textVrapperClass} >
                <p className = {textClass}>{children}</p>
            </div>
            <p className = {timeClass}>{time}</p>
            <p className = {nameClass}>{name}</p>
        </div>
    )
}

export default Message