import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux"
import {setAuthUserData} from "../../redux/authReducer"

class HeaderContainer extends React.Component{
  
  componentDidMount() {
    //for live
    // axios.get('http://localhost:8000/users', {withCredentials : true}).then(response => {
    //   if( response.data.resultcode === 0){
    //     let {id,email,login} = response.data.data;
    //     this.props.setAuthUserData(id,email,login)
    //   } 
  // })
  // for exem
  this.props.setAuthUserData(21244,"magamedali","magamedali")
}

  render() {
    return <Header {...this.props}/>
  }

}
const mapStateToProps= (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect(mapStateToProps,{setAuthUserData}) (HeaderContainer);