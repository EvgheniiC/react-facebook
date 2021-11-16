import React from "react";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
      return <StoreContext.Consumer>
             { store => {
                  let onSendMessageClick = () =>{
                        store.dispatch(sendMessageCreator())
                  }
                  let onNewMessageChahge = (body) =>{
                        store.dispatch(updateNewMessageBodyActionCreator(body))
                  }

                  return  <Dialogs sendMessage = {onSendMessageClick}
                  updateNewMessageBody = {onNewMessageChahge}
                  dialogsPage = {store.getState().dialogsPage}/>
            }
            }
      </StoreContext.Consumer>
  
}

export default DialogsContainer;