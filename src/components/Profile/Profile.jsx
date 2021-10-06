import React from "react";
import MyPosts from "./MyPosts/MyPosts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import classes from './Profile.module.css'


const Profile = (props) => {
    return  <div>
                <ProfileInfo/>
                <MyPosts 
                posts = {props.profilePage.posts}
                dispatch = {props.dispatch}
                newPostText = {props.profilePage.newPostText}/>
            </div>


  

}

export default Profile;