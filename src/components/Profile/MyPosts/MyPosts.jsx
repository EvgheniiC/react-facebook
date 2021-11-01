import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

const MyPosts = (props) => {

  let newPostElement = React.createRef()

    let post = props.posts
                .map((post) => <Post message = {post.message} likesCount = {post.likesCount}/>)

    let addPost = () => {
      // props.addPost()
      // props.updateNewPostChange("")
      props.dispatch(addPostActionCreator())
    }
    let onPostChange = () => {
      let text = newPostElement.current.value
      // props.updateNewPostChange(text)
      let action = (updateNewPostTextActionCreator(text))
      props.dispatch(action)
    }
    
    return  <div className = {classes.postBlock}>
                <h3>My post</h3>
                <div>
                  <textarea cols="10" rows="2"
                   ref = {newPostElement} value= {props.newPostText} onChange = {onPostChange} />
                </div>
                <div>
                  <button onClick = { addPost }>Add post</button>
                </div>
               <div className={classes.posts}>
                    {post}
               </div>
            </div>

}

export default MyPosts;