import React from "react";
import MyPosts from "./MyPosts/MyPosts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import classes from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer.jsx";


const Profile = (props) => {
    return  <div>
                <ProfileInfo profile = {props.profile}/>
                <MyPostsContainer store = {props.store} 
                />
            </div>
}

export default Profile;