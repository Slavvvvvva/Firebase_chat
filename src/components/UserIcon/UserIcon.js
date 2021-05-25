import React from 'react'
import userIconStyle from './user-icon.module.scss'
import standartIcon  from '../../Assets/Icons/iconfinder_user-alt_285645.svg'

const UserIcon = ({online, image}) => {
    online = true
    return(
        <div className = {userIconStyle.user} >
            <img
                className = {userIconStyle.userImg}
                alt = 'user avatar'
                src = {image ? image : standartIcon}
            />
            {online && <div className = {userIconStyle.online} />}
        </div>
    )
}

export default UserIcon