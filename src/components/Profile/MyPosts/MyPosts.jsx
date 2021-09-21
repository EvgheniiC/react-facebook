import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let post = props.posts
                .map((post) => <Post message = {post.message} likesCount = {post.likesCount}/>)
    return  <div className = {classes.postBlock}>
                <h3>My post</h3>
                <div>
                  <textarea cols="10" rows="2"></textarea>
                </div>
                <div>
                  <button>Addpost</button>
                </div>
               <div className={classes.posts}>
                    {post}
               </div>
            </div>

}

export default MyPosts;