import React from 'react'
import formStyles from './form-input.module.scss'

const FormInput = ({handleChainge, label, ...otherProps}) => {
    return (
        <div className = {formStyles.form_vrapper}>
            {
                label ? 
                <label className={formStyles.lebel}>{label}</label>
                : null
            }
            <input
                className = {formStyles.input}
                onChange = {handleChainge}
                {...otherProps}
            />
            
        </div>
    )

}
export default FormInput