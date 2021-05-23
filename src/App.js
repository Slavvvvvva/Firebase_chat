import { HashRouter, Switch, Route } from 'react-router-dom'
import appStyle from './App.module.scss'
import MainPage from './Pages/MainPage/MainPage'
import ChatRoomPage from './Pages/ChatRoomPage/ChatRoomPage'

const App = () => {

  return (
    <HashRouter>
      <div className={appStyle.body}>
        <Switch>
          <Route path='/chatroom/:chatRoomName' render={() => <ChatRoomPage/>} />
          <Route path='/login' render={() => <h1> Login page </h1>} />
          <Route path='/profile' render={() => <h1> Profile page </h1>} />
          <Route path='/create' render={() => <h1> Create new chatroom page </h1>} />
          <Route exact path='/' render={() => <MainPage/>} />
          <Route path='/*' render={() => <h1> 404 page not found </h1>} />
        </Switch>
      </div>
    </HashRouter>
  )
}

export default App;
