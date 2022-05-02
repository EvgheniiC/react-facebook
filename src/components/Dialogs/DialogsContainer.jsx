import React from "react";
import { sendMessageCreator, updateNewMessageBodyActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux"
import { withAuthRediect } from "../../hoc/withAuthRediect";
import {compose} from "redux";

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

export default compose(connect(mapStateToProps,mapDispatchToProps),withAuthRediect)(Dialogs);