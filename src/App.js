import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import appStyle from './App.module.scss'
import MainPage from './Pages/MainPage/MainPage'
import ChatRoomPage from './Pages/ChatRoomPage/ChatRoomPage'
import LoginPage from './Pages/LoginPage/LoginPage'
import { connect } from 'react-redux'
import {asyncIsUserLogined, asyncLogOutUser} from './Redux/user/user-actions'
import { useEffect } from 'react'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './Redux/user/user-selector'
import ProfilePage from './Pages/ProfilePage/ProfilePage'

const App = ({asyncIsUserLogined, currentUser}) => {

  useEffect( () =>{
    asyncIsUserLogined()
  },[asyncIsUserLogined])

  return (
    <HashRouter>
      <div className={appStyle.body}>
        <Switch>
          <Route path='/chatroom/:chatRoomName' render = {() => !currentUser ? (<Redirect to='/login' />) : (<ChatRoomPage/>)} />
          <Route path='/login' render = {() => currentUser ? (<Redirect to='/' />) : (<LoginPage/>)} />
          <Route path='/profile' render = {() => !currentUser ? (<Redirect to='/login' />) : ( <ProfilePage/> )} />
          <Route path='/create' render = {() => !currentUser ? (<Redirect to='/login' />) : (<h1> Create new chatroom page </h1>)} />
          <Route path='/' render = {() => !currentUser ? (<Redirect to='/login' />) : (<MainPage/>)} />
          <Route path='/*' render = {() => <h1> 404 page not found </h1>} />
        </Switch>
      </div>
    </HashRouter>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps, {asyncIsUserLogined})(App)
