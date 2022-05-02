import React from "react";
import Profile from "./Profile.jsx";
import { connect } from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import { getUserProfile } from "../../redux/profileReducer";
import { withAuthRediect } from "../../hoc/withAuthRediect.js";


class ProfileContainer extends React.Component {

    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile = {this.props.profile}/>
    )}
}

let AuthRedirectComponent = withAuthRediect(ProfileContainer);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let WithURLDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps,{getUserProfile})(WithURLDataContainerComponent);