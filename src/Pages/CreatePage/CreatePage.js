import React, { useState } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import createPageStyles from './create_page.module.scss'
import FormInput from '../../components/FormInput/FormInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { connect } from 'react-redux'
import {asyncCeateNewChatroom} from '../../Redux/chatroom/chatroom-actions'
import { createStructuredSelector } from 'reselect'
import { selectAsyncMessege } from '../../Redux/chatroom/chatroom-selectors'

const CreatePage = ({asyncCeateNewChatroom, asyncMessege}) => { 

    let [chatRoomData, chaingeChatRoomData] = useState({
        name: '',
        description: '',
        imageUrl: null
    })

    const handleSubmitCreateChat = async e => {
        e.preventDefault()
        asyncCeateNewChatroom(chatRoomData)
        chaingeChatRoomData({ ...chatRoomData, name: '', description: '', imageUrl: null })
    }

    const handleChaingeChatRoomData = e => {
        const { value, name } = e.target
        chaingeChatRoomData({...chatRoomData, [name]: value })
    }

    return (
        <div className = {createPageStyles.create_page_vrapper} >
            <div className = {createPageStyles.description_vrapper} >
                <p className = {createPageStyles.description} > You can create new open chatroom</p>
            </div>
            <div className = {createPageStyles.input_vrapper} >
                <form
                    className = {createPageStyles.form}
                    onSubmit = {handleSubmitCreateChat}
                > 
                   <FormInput
                        handleChainge = {handleChaingeChatRoomData}
                        name = 'name'
                        value = {chatRoomData.name}
                        label = 'Chatroom name'
                   />
                   <FormInput
                        handleChainge = {handleChaingeChatRoomData}
                        name = 'description'
                        value = {chatRoomData.description}
                        label = 'Chatroom description'
                   />
                   <CustomButton disabled> Select chat icon </CustomButton>
                   <CustomButton type = 'submit' > Create </CustomButton>
                   {asyncMessege}
                </form>
            </div>
            <Navigation/>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    asyncMessege: selectAsyncMessege
})

export default connect(mapStateToProps,{asyncCeateNewChatroom})(CreatePage)