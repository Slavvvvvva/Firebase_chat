import React, { useEffect } from 'react'
import mainPageStyle from './mainPage.module.scss'
import chatIcon from '../../Assets/Icons/chat.svg'
import ChatRoomItem from '../../components/ChatRoomItem/ChatRoomItem'
import Navigation from '../../components/Navigation/Navigation'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectChatList } from '../../Redux/chatroom/chatroom-selectors'
import {asyncGetChatList} from '../../Redux/chatroom/chatroom-actions'


const MainPage = ({chatList, asyncGetChatList }) => {

    useEffect( () => {
        asyncGetChatList()
    },[asyncGetChatList])

    if (!chatList) return <p>loading</p>

    const renderChatList = chatList.map( (chat, indx) => {
        return(
            <ChatRoomItem
                    chatName = {chat.name}
                    chatDescription = {chat.description}
                    chatImg = {chat.imageUrl||chatIcon}
                    patch = {chat.name}
                    key = {`${indx}jkdjndki`}
            />    
        )
    })

    return (
        <>
            <div className={mainPageStyle.header} >
                <h1>Chat rooms</h1>
                <input type = 'search' placeholder = 'Search'></input>
            </div>
            <div className = {mainPageStyle.chatlist} >
                 {renderChatList}
            </div>
            <Navigation/>
            
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    chatList: selectChatList
})

export default connect(mapStateToProps, {asyncGetChatList})(MainPage)