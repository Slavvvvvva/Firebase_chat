import React, { useEffect, useRef } from 'react'
import { useHistory, useParams } from 'react-router'
import AutogrowTextarea from '../../components/AutogrowTextarea/AutogrowTextarea'
import Message from '../../components/Messages/Message'
import chatRoomStyle from './chat-room-page.module.scss'
import {acyncGetMesege} from '../../Redux/chatroom/chatroom-actions'
import {selectCurrentUser} from '../../Redux/user/user-selector'
import {selectMessege} from '../../Redux/chatroom/chatroom-selectors'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'


const ChatRoomPage = ({currentUser, message, acyncGetMesege, chatRoomDescription}) => {

    const {chatRoomName} = useParams()
    const history = useHistory()

    const autoscrollDiv = useRef(null)
    const autoscroll = (options) => {
        autoscrollDiv.current?.scrollIntoView(options)
    }
    
    useEffect( () => {
        acyncGetMesege(chatRoomName)
    },[acyncGetMesege, chatRoomName])

    useEffect(() => {
        autoscroll({ behavior: "auto" })
    }, []);

    useEffect(() => {
        autoscroll({ behavior: "smooth" })
    }, [message]);

   

    if(!message) return (<p>Loading</p>)

    const renderMeseges = message.map( (mesItem, index) => {
        
        return(
            <Message
                notYour = {!(mesItem.uid === currentUser.uid )}
                time ={(mesItem.createdAt )? mesItem.createdAt.toDate().toLocaleTimeString('it-IT') : null}
                key = {`${index}kll`}
            >
                {mesItem.text}
            </Message>
        )
    })


    return (
        <>
            <div className={chatRoomStyle.header}>
                <button
                    className = {chatRoomStyle.back_botton}
                    onClick = {() => history.push('/')}
                />
                <p className = {chatRoomStyle.chat_name} >{chatRoomName}</p>
                <p className = {chatRoomStyle.chat_description} >{chatRoomDescription}</p>
            </div>
            <div className = {chatRoomStyle.message_vrapper}>
                {renderMeseges}
                <div ref = {autoscrollDiv}></div>
            </div>
            <div className = {chatRoomStyle.input_vrapper}>
                <AutogrowTextarea/>
            </div>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    message: selectMessege,
  })
  
export default connect(mapStateToProps, {acyncGetMesege})(ChatRoomPage)