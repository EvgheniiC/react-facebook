import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialodItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

      let newDialogElement = React.createRef()

      let addDialog = () => {
            let text = newDialogElement.current.value
            alert(text)
      }

      let dialogs = props.state.dialogsData
      .map((dialog) => <DialogItem id = {dialog.id} name = {dialog.name}/>)

      let messages = props.state.messagesData
      .map((message) => <Message message = {message.message}/>)

      return(  
            <div className = {classes.dialogs}>
                  <div className = {classes.dialogsItems}>
                        {dialogs}
                  </div>
                  <div className = {classes.messages}>
                        {messages}
                        <div>
                              <button onClick = { addDialog }>Add Dialog</button>
                              <textarea cols="10" rows="2" ref = {newDialogElement}></textarea>
                        </div>
                  </div>
            </div>
      )}

export default Dialogs;