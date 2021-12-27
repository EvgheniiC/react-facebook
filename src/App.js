import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Musik from './components/Musik/Musik';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settingses from './components/Settingses/Settingses';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  
  return (
          <div className="app-wrapper">
          <Header/>
          <Navbar store = {props.store}/>
          <div className = "app-wrapper-content">
            <Route path = '/dialogs' render = {() =>
             <DialogsContainer
             store = {props.store} />
            }
             />
            <Route path = '/profile'
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
