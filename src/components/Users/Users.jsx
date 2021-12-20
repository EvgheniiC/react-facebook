import React from "react";
import styles from "./Users.module.css";
import * as axios from "axios"
import userPhoto from "../../../src/assets/img/man.png"

class Users extends React.Component {

  componentDidMount(){
      axios.get(`http://localhost:3004/users?_page=${this.props.currentPage}&_limit=${this.props.pageSize}`).then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`http://localhost:3004/users?_page=${pageNumber}&_limit=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
    }) }

  render(){

    let pagesCount = Math.ceil(this.props.totalUsersCounts/this.props.pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++){
      pages.push(i);
    }  
    return  <div>
              <div>
                { pages.map(p => {
                  return <span className = {this.props.currentPage == p && styles.selectedPage} onClick={ (e) => {this.onPageChanged(p); }}>{p}</span>
                })}
              </div>
                {
                  this.props.users.map(u => <div key = {u.id}>
                    <span>
                      <div>
                        <img src= {u.photos.small !== null ? u.photos.small : userPhoto} className = {styles.userPhoto}/>
                      </div>
                      <div>
                        {u.followed ?
                          <button onClick = {() => {this.props.unfollow(u.id)}}>UNFOLLOW</button> :
                          <button onClick = {() => {this.props.follow(u.id)}}>FOLLOW</button>}
                        
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

}

export default Users;