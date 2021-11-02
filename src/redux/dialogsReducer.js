const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    messagesData : [
        {id: 1, message: "Hi"},
        {id: 2, message: "Is"},
        {id: 3, message: "Your"},
        {id: 4, message: "Day"},
        {id: 5, message: "Yo"},
        {id: 6, message: "Davai"}
      ],
    dialogsData : [
        {id: 1, name: "Dima"},
        {id: 2, name: "Petia"},
        {id: 3, name: "Valera"},
        {id: 4, name: "Cosc"},
        {id: 5, name: "Free"},
        {id: 6, name: "Vasia"}
    ],
    newMessageBody : ""
  };

const dialogsReducer = (state = initialState,action) => {
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messagesData.push({id: 7, message: body})
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () =>({
    type : SEND_MESSAGE
  })
export const updateNewMessageBodyActionCreator = (body) =>({
    type : UPDATE_NEW_MESSAGE_BODY, body: body
  })

export default dialogsReducer;