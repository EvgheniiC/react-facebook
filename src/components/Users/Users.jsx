import React from "react";
import styles from "./Users.module.css";

const Users = (props) => {

  if (props.users.lenght === 0){
  props.setUsers(
    [
      {id: 1, photoURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIAwu6j26w8cXfrJaFyiFkI3syKCc5Z0HpDw&usqp=CAU",followed : false, fullName: "Evghenii", status : "I am hier", location :{city : 'Bremen', country: 'DE'}},
      {id: 2, photoURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIAwu6j26w8cXfrJaFyiFkI3syKCc5Z0HpDw&usqp=CAU", followed : true, fullName: "Alex", status : "I am hier", location :{city : 'Moskow', country: 'RU'}},
      {id: 3, photoURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIAwu6j26w8cXfrJaFyiFkI3syKCc5Z0HpDw&usqp=CAU", followed : false, fullName: "Vladimir", status : "I am hier", location :{city : 'Tiraspol', country: 'MD'}},
      {id: 4, photoURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIAwu6j26w8cXfrJaFyiFkI3syKCc5Z0HpDw&usqp=CAU", followed : false, fullName: "Martin", status : "I am hier", location :{city : 'Rostock', country: 'DE'}}
    ]
  )
  }

    return  <div>
              {
                props.users.map(u => <div key = {u.id}>
                  <span>
                    <div>
                      <img src= {u.photoURL} className = {styles.userPhoto}/>
                    </div>
                    <div>
                      {u.followed ?
                       <button onClick = {() => {props.unfollow(u.id)}}>UNFOLLOW</button> :
                       <button onClick = {() => {props.follow(u.id)}}>FOLLOW</button>}
                      
                    </div>
                  </span> 
                  <span>
                    <span>
                      <div>{u.fullName}</div>
                      <div> {u.status}</div>
                    </span>
                    <span>
                      <div>{u.location.country}</div>
                      <div>{u.location.city}</div>
                    </span>
                  </span>              
                </div>)
              }
             
            </div>

}

export default Users;