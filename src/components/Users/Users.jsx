import React from "react";
import styles from "./Users.module.css";
import * as axios from "axios"
import userPhoto from "../../../src/assets/img/man.png"

const Users = (props) => {
  
  if (props.users.lenght === 0){
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
      debugger
      props.setUsers(response.data.items)
    })
  }
 

    return  <div>
              {
                props.users.map(u => <div key = {u.id}>
                  <span>
                    <div>
                      <img src= {u.photos.small !== null ? u.photos.small : userPhoto} className = {styles.userPhoto}/>
                    </div>
                    <div>
                      {u.followed ?
                       <button onClick = {() => {props.unfollow(u.id)}}>UNFOLLOW</button> :
                       <button onClick = {() => {props.follow(u.id)}}>FOLLOW</button>}
                      
                    </div>
                  </span> 
                  <span>
                    <span>
                      <div>{u.name}</div>
                      <div> {u.status}</div>
                    </span>
                    <span>
                      <div>{"u.location.country"}</div>
                      <div>{"u.location.city"}</div>
                    </span>
                  </span>              
                </div>)
              }
             
            </div>

}

export default Users;