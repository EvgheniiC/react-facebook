import React from "react";
import MyPosts from "./MyPosts/MyPosts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import classes from './Profile.module.css'


const Profile = (props) => {
    return  <div>
                <ProfileInfo/>
                <MyPosts 
                posts = {props.profilePage.posts}
                addPost = {props.addPost}
                newPostText = {props.profilePage.newPostText}
                updateNewPostChange = {props.updateNewPostChange}/>
            </div>


  

}

export default Profile;