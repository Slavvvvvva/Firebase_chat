import React, { useState } from 'react'
import loginPageStyle from './login-page.module.scss'
import FormInput from '../../components/FormInput/FormInput'
import {asyncCeateAndSetCurrentUser, asyncLoginAndSetCurrentUser} from '../../Redux/user/user-actions'
import { connect } from 'react-redux'


const LoginPage = ({asyncCeateAndSetCurrentUser, asyncLoginAndSetCurrentUser}) => {

    let [loginData, chaingeLoginData] = useState({
        email: '',
        password: ''
    })

    const handleSubmitLogin = async e => {
        debugger
        e.preventDefault()
        const { email, password } = loginData
        asyncLoginAndSetCurrentUser(email, password) 
        chaingeLoginData({ email: '', password: '' })
    }

    const handleChaingeLogin = e => {
        const { value, name } = e.target
        chaingeLoginData({...loginData, [name]: value })
    }

    let [signUpData, setSignUpData] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleSubmit = async e => {
        debugger
        e.preventDefault()
        console.log(signUpData)
        const { password, confirmPassword } = signUpData

        if (password !== confirmPassword) {
            alert('password dont match')
            return
        }
        asyncCeateAndSetCurrentUser(signUpData)
    }

    const handleChange = e => {
        const { name, value } = e.target

        setSignUpData({ ...signUpData, [name]: value })
    }

    const { displayName, email, password, confirmPassword } = signUpData

    return (
        <div className={loginPageStyle.login_vrapper} >
            <form onSubmit={handleSubmitLogin} className = {loginPageStyle.login_form}>
                <h2 className={loginPageStyle.title}>I already haw an acaunt</h2>
                <span className={loginPageStyle.description} > Sign in with your email and password </span>
                <FormInput
                    name ='email'
                    type ='email'
                    value ={loginData.email}
                    handleChainge = {handleChaingeLogin}
                    label ='email'
                    required
                />
                <FormInput
                    name ='password'
                    type ='password'
                    value = {loginData.password}
                    handleChainge = {handleChaingeLogin}
                    label ='password'
                    required
                />
                <button type ='submit' > Sign In </button>
            </form>
            <form onSubmit={handleSubmit} className = {loginPageStyle.login_form}>
                <h2 className={loginPageStyle.title}>Or</h2>
                <span className={loginPageStyle.description} > Create new acaunt with email and password </span>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <button type='submit'> Sign In </button>
            </form>
        </div>
    )
}

export default connect(null,{asyncCeateAndSetCurrentUser, asyncLoginAndSetCurrentUser})(LoginPage)