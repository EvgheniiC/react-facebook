import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import { reduxForm, Field } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const MyPosts = (props) => {

  let postElements = props.posts
    .map((post) => <Post message={post.message} likesCount={post.likesCount} />)

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return <div className={classes.postBlock}>
    <h3>My post</h3>
    <AddNewPostsFormRedux onSubmit={onAddPost} />
    <div className={classes.posts}>
      {postElements}
    </div>
  </div>
}
const maxLength10 = maxLengthCreator(10);
const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={Textarea} name={"newPostText"}
        placeholder={"Your massege"} validate = {[required,maxLength10]} />
      <div> <button>Send</button> </div>
    </form>

  )
}
const AddNewPostsFormRedux = reduxForm({ form: "ProfileAddNewPostsForm" })(AddNewPostForm);

export default MyPosts;