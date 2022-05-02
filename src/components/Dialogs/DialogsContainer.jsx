import React from "react";
import { sendMessageCreator, updateNewMessageBodyActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux"
import { withAuthRediect } from "../../hoc/withAuthRediect";

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

let AuthRedirectComponent = withAuthRediect(Dialogs);
  
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer;