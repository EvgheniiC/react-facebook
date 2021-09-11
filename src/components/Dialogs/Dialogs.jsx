import React from "react";
import classes from './Dialogs.module.css'

const Dialogs = (props) => {

    return  <div className = {classes.dialogs}>
              <div className = {classes.dialogsItems}>
                  <div className = {classes.dialog + " " + classes.active}>
                    Zeka
                  </div>
                  <div className = {classes.dialog}>
                    Vasia
                  </div>
                  <div className = {classes.dialog}>
                    Petia
                  </div>
                  <div className = {classes.dialog}>
                    Valera
                  </div>
                  <div className = {classes.dialog}>
                    Cosc
                  </div>
                  <div className = {classes.dialog}>
                    Free
                  </div>
              </div>
              <div className = {classes.messages}>
                <div className = {classes.message}>Hallo</div>
                <div className = {classes.message}>React</div>
                <div className = {classes.message}>Bey</div>
              </div>
            </div>

}

export default Dialogs;