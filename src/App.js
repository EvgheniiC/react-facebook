import './App.css';
import React,{Comment} from 'react'
import Navbar from './components/Navbar/Navbar';
import {Route} from 'react-router-dom' 
import Musik from './components/Musik/Musik';
import News from './components/News/News';
import Settingses from './components/Settingses/Settingses';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
  return (
          <div className="app-wrapper">
          <HeaderContainer/>
          <Navbar store = {props.store}/>
          <div className = "app-wrapper-content">
            <Route path = '/dialogs' render = {() =>
             <DialogsContainer
             store = {props.store} />
            }
             />
            <Route path = '/profile/:userId?'
             render = {() => 
             <ProfileContainer
             store = {props.store} /> }
             />
            <Route path = '/news' render = {() => <News/>}/>
            <Route path = '/musik' render = {() => <Musik/>}/>
            <Route path = '/settings' render = {() => <Settingses/>}/>
            <Route path = '/users' render = {() => <UsersContainer/>}/>
            <Route path = '/friends' render = {() => <Friends/>}/>
          </div>
      </div>
  );
}

export default App;
