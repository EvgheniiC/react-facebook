import React from "react";
import classes from './Post.module.css'

const Post = (props) => {

    return  <div className =  {classes.item}>
              <img src= "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"/>
                {props.message}
                  <div>
                      {props.likesCount}
                  </div>
            </div>

}

export default Post;