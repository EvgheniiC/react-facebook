import React from "react";
import Profile from "./Profile.jsx";
import * as axios from "axios";
import { connect } from "react-redux";
import {setUserProfile} from "../../redux/profileReducer"
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount(){
        let userID = this.props.match.params.userId;
        if(!userID){
            userID = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID).then(response => {
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

let WithURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapDispatchToProps,{setUserProfile})(WithURLDataContainerComponent);