import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    return  <div>
                My post
               <div className={classes.posts}>
                 <Post message = "Hi, how are you?" like = "20"/>
                 <Post message = "It's ma first post!" like = "15"/>
               </div>
            </div>

}

export default MyPosts;