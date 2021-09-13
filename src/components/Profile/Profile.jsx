import React from "react";
import MyPosts from "./MyPosts/MyPosts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import classes from './Profile.module.css'


const Profile = (props) => {

    return  <div>
                <ProfileInfo/>
                <MyPosts/>
            </div>


  

}

export default Profile;