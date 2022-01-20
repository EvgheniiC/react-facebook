import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../../src/assets/img/man.png";
import { NavLink } from "react-router-dom";
import * as axios from "axios"

let Users = (props) => {

  //http://localhost:3004/users?followed=true
  let pagesCount = Math.ceil(props.totalUsersCounts / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return <div>
    <div>
      {pages.map(p => {
        return <span className={props.currentPage == p && styles.selectedPage}
                     onClick={(e) => { props.onPageChanged(p); }}>{p}</span>
      })}
    </div>
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <NavLink to={'/profile/' + u.id}>
              <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto} />
            </NavLink>
          </div>
          <div>
            {u.followed ?
              <button disabled= {props.folowingInProgress.some(id =>id === u.id)}  onClick={() => {
                props.toggleFolowingProgress(true, u.id);
                axios.delete(`http://localhost:3004/users}`, {withCredentials : true}).then(response => {
                  props.unfollow(u.id);
                  props.toggleFolowingProgress(false, u.id);
              })
              }}>UNFOLLOW</button> :
              <button disabled= {props.folowingInProgress.some(id =>id === u.id)} onClick={() => { 
                props.toggleFolowingProgress(true, u.id);
                axios.post(`http://localhost:3004/users}`,{},{withCredentials : true}).then(response => {
                  props.follow(u.id);
                  props.toggleFolowingProgress(false, u.id);
              })
                }}>FOLLOW</button>}

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