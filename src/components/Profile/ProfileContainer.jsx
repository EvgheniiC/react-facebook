import React from "react";
import Profile from "./Profile.jsx";
import * as axios from "axios";
import { connect } from "react-redux";
import {setUserProfile} from "../../redux/profileReducer"


class ProfileContainer extends React.Component {

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data);
        })
    }

    render() {
        return (
            <Profile {...this.props} profile = {this.props.profile}/>
    )}
}

let mapDispatchToProps = (state) => ({
    profile: state.profilePage.profile
})

export default connect(mapDispatchToProps,{setUserProfile})(ProfileContainer);