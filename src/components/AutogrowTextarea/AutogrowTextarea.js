import React, { useState } from 'react'
import TextareaAutosize from 'react-autosize-textarea/lib'
import textareaStyles from './autogrow-textarea.module.scss'
import firebase from '../../Firebase/firebase'
import {firestore} from '../../Firebase/firebase'
import { useParams } from 'react-router'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../Redux/user/user-selector'

const AutogrowTextarea = ({currentUser}) => {

	const [textAreaValue, setTextAreaValue] = useState('')
	const {chatRoomName} = useParams()

	const handleChange = (event) => {
		setTextAreaValue(event.target.value)
	}

	const sendMessege = async () => {
		console.log(textAreaValue)
		firestore.collection(`${chatRoomName}`).add({
			uid: currentUser.uid,
			displayName: currentUser.displayName,
			photoURL: currentUser.photoURL,
			text: textAreaValue,
			createdAt: firebase.firestore.FieldValue.serverTimestamp()
		})
	}

	return (
		<>
			<TextareaAutosize
				value={textAreaValue}
				rows={1}
				maxRows={13}
				className={textareaStyles.textarea}
				placeholder='Messege'
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
    currentUser: selectCurrentUser
  })
  
export default connect(mapStateToProps, {})(AutogrowTextarea)