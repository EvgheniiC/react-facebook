import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

  // let postData = [
  //   {id: 1, message: "Hi,howe are you?", likesCount : 12},
  //   {id: 2, message: "Im fine, and you?", likesCount : 2},
  //   {id: 3, message: "Im all right!", likesCount : 55},
  //   {id: 4, message: "Its my first post?", likesCount : 32}
  // ];

    let posts = props.posts
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
                    {posts}
               </div>
            </div>

}

export default MyPosts;