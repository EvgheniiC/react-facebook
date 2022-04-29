import React from "react";
import Profile from "./Profile.jsx";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";
import { getUserProfile } from "../../redux/profileReducer";


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

let mapDispatchToProps = (state) => ({
    profile: state.profilePage.profile
})

let WithURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapDispatchToProps,{getUserProfile})(WithURLDataContainerComponent);