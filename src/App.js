// import logo from './logo.svg';
import './App.css';
import React,{Comment} from 'react'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter,Route} from 'react-router-dom' 
import Musik from './components/Musik/Musik';
import News from './components/News/News';
import Settingses from './components/Settingses/Settingses';
import Friends from './components/Friends/Friends';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
          <Header/>
          <Navbar/>
          <div className = "app-wrapper-content">
            <Route path = '/dialogs' render = {() => <Dialogs
             state ={props.state.dialogsPage}/>}/>
            <Route path = '/profile' render = {() => <Profile
             state = {props.state.profilePage}/> } />
            <Route path = '/news' render = {() => <News/>}/>
            <Route path = '/musik' render = {() => <Musik/>}/>
            <Route path = '/settings' render = {() => <Settingses/>}/>
            <Route path = '/friends' render = {() => <Friends/>}/>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
