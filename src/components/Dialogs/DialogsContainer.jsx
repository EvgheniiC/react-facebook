import React from "react";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

      let state = props.store.getState().dialogsPage

      let newDialogElement = React.createRef()

      let addDialog = () => {
            let text = newDialogElement.current.value
            alert(text)
      }
      
      let newMessageBody = props.store.newMessageBody

      let onSendMessageClick = () =>{
            props.store.dispatch(sendMessageCreator())
      }
      let onNewMessageChahge = (body) =>{
            props.store.dispatch(updateNewMessageBodyActionCreator(body))
      }

      return <Dialogs
            sendMessage = {onSendMessageClick}
            updateNewMessageBody = {onNewMessageChahge}
            dialogsPage = {state}
        />
}

export default DialogsContainer;