import React from 'react'
import { connect } from 'react-redux'
import { selectCurrentUser } from '../../Redux/user/user-selector'
import profilePageStiles from './profile_page.module.scss'
import {asyncLogOutUser} from '../../Redux/user/user-actions' 
import { createStructuredSelector } from 'reselect'
import CustomButton from '../../components/CustomButton/CustomButton'
import UserIcon from '../../components/UserIcon/UserIcon'
import Navigation from '../../components/Navigation/Navigation'

const ProfilePage = ({asyncLogOutUser, currentUser}) => {

    return(
        <div className = {profilePageStiles.profile_vrapper}>
            <div className = {profilePageStiles.user_info_vrapper}>
                <UserIcon
                    image = {currentUser.photoURL}
                    online = {false}
                />
                <p className = {profilePageStiles.user_nickname}> {currentUser.displayName || 'User name not exist' } </p>
                <CustomButton clickFunction = { () => asyncLogOutUser() } > LogOut </CustomButton>
            </div>
            
            <Navigation/>
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
  })
  
  export default connect(mapStateToProps, {asyncLogOutUser})(ProfilePage)