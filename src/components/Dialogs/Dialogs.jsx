import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialodItem/DialogItem";
import Message from "./Message/Message";


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

    let dialogs = dialogsData
    .map((dialog) => <DialogItem id = {dialog.id} name = {dialog.name}/>)

    let messages = messagesData
    .map((message) => <Message message = {message.message}/>)

    return  <div className = {classes.dialogs}>
              <div className = {classes.dialogsItems}>
                    {dialogs}
              </div>
              <div className = {classes.messages}>
                    {messages}
              </div>
            </div>

}

export default Dialogs;