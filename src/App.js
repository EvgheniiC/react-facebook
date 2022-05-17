import './App.css';
import React,{Component} from 'react'
import Navbar from './components/Navbar/Navbar';
import {Route, withRouter} from 'react-router-dom' 
import Musik from './components/Musik/Musik';
import News from './components/News/News';
import Settingses from './components/Settingses/Settingses';
import Friends from './components/Friends/Friends';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { initializeApp } from "../../react-facebook/src/redux/appReducer";
import { connect } from "react-redux";
import {compose} from "redux";
import Preloader from './components/common/Preloader/Preloader';
import {Provider} from "react-redux";
import { BrowserRouter } from 'react-router-dom'; 
import store from './redux/reduxStore';

// import DialogsContainer from './components/Dialogs/DialogsContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';

const DialogsContainer = React.lazy(() => import ('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import ('./components/Profile/ProfileContainer'))

class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if(!this.props.initialized) {
      return <Preloader/>
    }
  return (
          <div className="app-wrapper">
          <HeaderContainer/>
          <Navbar />
          <div className = "app-wrapper-content">
          <React.Suspense fallback={<Preloader/>}>
            <Route path = '/dialogs' render = {() =>
             <DialogsContainer />
            }
             />
            <Route path = '/profile/:userId?'
             render = {() => 
             <ProfileContainer/> }
             />
            <Route path = '/news' render = {() => <News/>}/>
            <Route path = '/musik' render = {() => <Musik/>}/>
            <Route path = '/settings' render = {() => <Settingses/>}/>
            <Route path = '/users' render = {() => <UsersContainer/>}/>
            <Route path = '/login' render = {() => <LoginPage/>}/>
            <Route path = '/friends' render = {() => <Friends/>}/>
            </React.Suspense>
          </div>
      </div>
  );
}
}

const mapStateToProps = (state) =>({
  initialized: state.app.initialized
})

let AppContainer = compose(withRouter,
  connect(mapStateToProps, { initializeApp }))
  (App);

 const MainJSApp = (props) => {
  return <BrowserRouter>
    <Provider store = {store}>
       <AppContainer/>
    </Provider>
  </BrowserRouter>
}
export default MainJSApp;