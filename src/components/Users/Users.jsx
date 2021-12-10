import React from "react";
import styles from "./Users.module.css";
import * as axios from "axios"
import userPhoto from "../../../src/assets/img/man.png"

const Users = (props) => {
  
  let getUsers = () => {
  if (props.users.length === 0){
    axios.get("http://localhost:3004/users").then(response => {
      debugger // http://localhost:3004/users
      props.setUsers(response.data.items)
    })
  }
}

    return  <div>
       <button onClick = {getUsers}> Get Users </button>
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