import React from "react";
import styles from "./Users.module.css";
import usersPhoto from "../../assets/images/users.png";
import { NavLink } from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import User from "../Users/User";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
  return <div>
      <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                 totalUsersCount={totalUsersCount} pageSize={pageSize}/>
      <div>
      {
                users.map(u => <User user={u}
                                     followingInProgress={props.followingInProgress}
                                     key={u.id}
                                     unfollow={props.unfollow}
                                     follow={props.follow}
                    />
                )
            }
          </div>
          </div>
}

export default Users;