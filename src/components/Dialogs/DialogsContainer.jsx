import React from "react";
import { sendMessageCreator, updateNewMessageBodyActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux"

let mapStateToProps = (state) => {
      return {
            dialogsPage : state.dialogsPage
      }
}

let mapDispatchToProps = (dispatch) => {
      return {
            sendMessage: () => {
                  dispatch(sendMessageCreator());
            },
            updateNewMessageBody: (body) => {
                  dispatch(updateNewMessageBodyActionCreator(body));
            }
      }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;