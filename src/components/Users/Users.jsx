import React from "react";
import styles from "./Users.module.css";
import usersPhoto from "../../assets/images/users.png";
import { NavLink } from "react-router-dom";
import * as axios from "axios"

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount/ props.pageSize);
  let pages = [];
  for(let i = 1; i<= pagesCount; i++){
    pages.push(i);
  }

  return <div>
    <div>
      {pages.map(p => {
        return <span
          className={props.currentPage === p && styles.selectedPage}
          onClick={(e) => { props.onPageRender(p) }}> {p}
        </span>
      })}
    </div>

    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <NavLink to={'/profile/' + u.id}>
                <img src={u.photos.small != null ? u.photos.small : usersPhoto} className={styles.userPhoto} />
            </NavLink>
          </div>
          <div>
            {u.followed 
              ?<button onClick={() => { 
                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, { withCredentials: true,
                headers :{
                    "API-KEY": "7fb940b8-ed29-47ee-a5b1-6eee3fd8462f"
                }
               }).then(response => {
                  if(response.data.resultCode == 0){
                    props.unfollow(u.id)
                  }
                })
              }}>UNFOLLOW</button>
              :<button onClick={() => { 
                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{}, { withCredentials: true,
                headers :{
                  "API-KEY": "7fb940b8-ed29-47ee-a5b1-6eee3fd8462f"
              }
              }).then(response => {
                  if(response.data.resultCode == 0){
                    props.follow(u.id)
                  }
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