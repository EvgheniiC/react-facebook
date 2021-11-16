import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialodItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

      let state = props.dialogsPage

      let newDialogElement = React.createRef()

      let dialogs = state.dialogsData
      .map((dialog) => <DialogItem id = {dialog.id} name = {dialog.name}/>)

      let messages = state.messagesData
      .map((message) => <Message message = {message.message}/>)
      
      let newMessageBody = state.newMessageBody

      let onSendMessageClick = () =>{
            props.sendMessage()
      }

      let onNewMessageChahge = (e) =>{
            let body = e.target.value
            props.updateNewMessageBody(body)
      }

      return(  
            <div className = {classes.dialogs}>
                  <div className = {classes.dialogsItems}>
                        {dialogs}
                  </div>
                  <div className = {classes.messages}>
                        {messages}
                        <div>
                            <div> <button onClick = { onSendMessageClick }>Send</button> </div>  
                             <div>
                                    <textarea 
                                    value = {newMessageBody}
                                    onChange = {onNewMessageChahge}
                                    placeholder = "Your massege">
                                    </textarea>
                              </div> 
                        </div>
                  </div>
            </div>
      )}

export default Dialogs;