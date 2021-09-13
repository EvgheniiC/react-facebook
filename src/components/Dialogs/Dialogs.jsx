import React from "react";
import classes from './Dialogs.module.css'
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id
    return <div className = {classes.dialog + " " + classes.active}>
              <NavLink to = {path}>  {props.name} </NavLink> 
          </div>
}

const Message = (props) => {
    return <div className = {classes.message}>
              {props.message}
          </div>
}

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: "Dima"},
        {id: 2, name: "Petia"},
        {id: 3, name: "Valera"},
        {id: 4, name: "Cosc"},
        {id: 5, name: "Free"},
        {id: 6, name: "Vasia"}
    ];

let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "Is"},
        {id: 3, message: "Your"},
        {id: 4, message: "Day"},
        {id: 5, message: "Yo"},
        {id: 6, message: "Davai"}
    ];
    return  <div className = {classes.dialogs}>
              <div className = {classes.dialogsItems}>
                  <DialogItem name = {dialogsData[0].name} id = {dialogsData[0].name} />
                  <DialogItem name = {dialogsData[1].name} id = {dialogsData[1].name} />
                  {/* <DialogItem name = "Valera" id = "3"/>
                  <DialogItem name = "Cosc" id = "4"/>
                  <DialogItem name = "Free" id = "5"/>
                  <DialogItem name = "Vasia" id = "6"/> */}
              </div>
              <div className = {classes.messages}>
                  <Message message = {messagesData[0].message}/>
                  <Message message = {messagesData[1].message}/>
       
              </div>
            </div>

}

export default Dialogs;