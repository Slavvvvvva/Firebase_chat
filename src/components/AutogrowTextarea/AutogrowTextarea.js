import React, { useState } from 'react'
import TextareaAutosize from 'react-autosize-textarea/lib';
import textareaStyles from './autogrow-textarea.module.scss'


const AutogrowTextarea = () => {

	const [textAreaValue, setTextAreaValue] = useState('')

	const handleChange = (event) => {
		setTextAreaValue(event.target.value)
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
			<button className = {textareaStyles.send_button} />
		</>

	)
}

export default AutogrowTextarea