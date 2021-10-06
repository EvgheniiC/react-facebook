import './App.css';
import React,{Comment} from 'react'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom' 
import Musik from './components/Musik/Musik';
import News from './components/News/News';
import Settingses from './components/Settingses/Settingses';
import Friends from './components/Friends/Friends';

const App = (props) => {
  return (
          <div className="app-wrapper">
          <Header/>
          <Navbar state = {props.state.sidebar}/>
          <div className = "app-wrapper-content">
            <Route path = '/dialogs' render = {() => <Dialogs
             state ={props.state.dialogsPage}/>}/>
            <Route path = '/profile'
             render = {() => <Profile
             profilePage = {props.state.profilePage}
             dispatch = {props.dispatch} /> }
             />
            <Route path = '/news' render = {() => <News/>}/>
            <Route path = '/musik' render = {() => <Musik/>}/>
            <Route path = '/settings' render = {() => <Settingses/>}/>
            <Route path = '/friends' render = {() => <Friends/>}/>
          </div>
      </div>
  );
}

export default App;
