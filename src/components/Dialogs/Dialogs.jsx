import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialodItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogs = props.state.dialogsData
    .map((dialog) => <DialogItem id = {dialog.id} name = {dialog.name}/>)

    let messages = props.state.messagesData
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