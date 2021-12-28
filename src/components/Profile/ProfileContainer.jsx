import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";


class ProfileContainer extends React.Component {

    // getUserId(){
    //     let userId = this.props.match.params.userId
    //     return userId
    // }
    componentDidMount () {
        let userId = this.props.match.params.userId
        // let userId = this.getUserId()
        if (!userId){
            userId = 1
        }
        axios.get(`http://localhost:3004/users?id=` + userId).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render () {
    return  <div>
                <Profile {...this.props} profile = {this.props.profile}/>
            </div>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let WitchURLDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps,{setUserProfile}) (WitchURLDataContainerComponent);