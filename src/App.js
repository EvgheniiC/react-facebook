import './App.css';
import React,{Comment} from 'react'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from 'react-router-dom' 
import Musik from './components/Musik/Musik';
import News from './components/News/News';
import Settingses from './components/Settingses/Settingses';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  debugger
  return (
          <div className="app-wrapper">
          <Header/>
          <Navbar />
          <div className = "app-wrapper-content">
            <Route path = '/dialogs' render = {() => <DialogsContainer />
            }
             />
            <Route path = '/profile'
             render = {() => <Profile /> }
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
