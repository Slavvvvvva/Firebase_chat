import React, { useState } from 'react'
import TextareaAutosize from 'react-autosize-textarea/lib'
import textareaStyles from './autogrow-textarea.module.scss'
import { useParams } from 'react-router'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../Redux/user/user-selector'
import { asyncSendMesege } from '../../Redux/chatroom/chatroom-actions'
import {selectAsyncMessege} from '../../Redux/chatroom/chatroom-selectors'

const AutogrowTextarea = ({currentUser, asyncSendMesege, errorMesege}) => {

	const [textAreaValue, setTextAreaValue] = useState('')
	const {chatRoomName} = useParams()

	const handleChange = (event) => {
		setTextAreaValue(event.target.value)
	}

	const sendMessege = async () => {
		let value = textAreaValue.replace(/\s+/g, " ")
		if(value && (value !== " ") ){
			asyncSendMesege(chatRoomName, currentUser, value)
		}
		setTextAreaValue('')
	}

	return (
		<>
			<TextareaAutosize
				value={textAreaValue}
				rows={1}
				maxRows={13}
				className={textareaStyles.textarea}
				placeholder={errorMesege||'Messege'}
				onChange={handleChange}
			/>
			<button
				className = {textareaStyles.send_button}
				onClick = {sendMessege}
			/>
		</>

	)
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
	errorMesege: selectAsyncMessege,
  })
  
export default connect(mapStateToProps, {asyncSendMesege})(AutogrowTextarea)