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

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
          <Header/>
          <Navbar/>
          <div className = "app-wrapper-content">
            <Route path = '/dialog' component = {Dialogs}/>
            <Route path = '/profile' component = {Profile}/>
            <Route path = '/news' component = {News}/>
            <Route path = '/musik' component = {Musik}/>
            <Route path = '/settings' component = {Settingses}/>
             {/* <Dialogs/> */}
             {/* <Profile/>  */}
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
