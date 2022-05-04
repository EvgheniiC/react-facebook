import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialodItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";
import { reduxForm, Field } from "redux-form";

const Dialogs = (props) => {

      let state = props.dialogsPage

      let newDialogElement = React.createRef()

      let dialogs = state.dialogsData
            .map((dialog) => <DialogItem id={dialog.id} key={dialog.id} name={dialog.name} />)

      let messages = state.messagesData
            .map((message) => <Message message={message.message} key={message.id} />)

      let addNewMessage = (values) => {
            props.sendMessage(values.newMessageBody)
      }

      if (!props.isAuth) return <Redirect to={"/login"} />

      return (
            <div className={classes.dialogs}>
                  <div className={classes.dialogsItems}>
                        {dialogs}
                  </div>
                  <div className={classes.messages}>
                        {messages}
                        <AddMessageFormRedux onSubmit={addNewMessage} />
                  </div>
            </div>
      )
}

const AddMessageForm = (props) => {
      return (
            <form onSubmit={props.handleSubmit}>
                  <Field component={"textarea"} name={"newMessageBody"}
                        placeholder={"Your massege"} />

                  <div> <button>Send</button> </div>
            </form>
      )
}

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);
export default Dialogs;