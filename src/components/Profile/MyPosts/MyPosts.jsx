import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postElements = props.posts
  .map((post) => <Post message = {post.message} likesCount = {post.likesCount}/>)
  
  let newPostElement = React.createRef()

  let onAddPost = () => {
    props.addPost()
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
  }
    
    return  <div className = {classes.postBlock}>
                <h3>My post</h3>
                <div>
                  <textarea cols="10" rows="2"
                   ref = {newPostElement} value= {props.newPostText} onChange = {onPostChange} />
                </div>
                <div>
                  <button onClick = { onAddPost }>Add post</button>
                </div>
               <div className={classes.posts}>
                    {postElements}
               </div>
            </div>

}

export default MyPosts;