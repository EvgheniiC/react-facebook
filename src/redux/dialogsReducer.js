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
    ]
  };

const dialogsReducer = (state = initialState,action) => {
    switch(action.type){
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
              ...state, 
              messagesData: [ ...state.messagesData, {id: 7, message: body}]
            }
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) =>({
    type : SEND_MESSAGE,
    newMessageBody
  })

export default dialogsReducer;