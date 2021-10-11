const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let store = {

  _state : {
    profilePage : {
        posts : [
            {id: 1, message: "Hi,howe are you?", likesCount : 12},
            {id: 2, message: "Im fine, and you?", likesCount : 2},
            {id: 3, message: "Im all right!", likesCount : 55},
            {id: 4, message: "Its my first post?", likesCount : 32}
          ],
          newPostText:"IT-Kanasutra"
    },
    dialogsPage : {
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
    },
    sidebar : {
      friendsOnline: [
        {id: 1, name: "Dima"},
        {id: 2, name: "Petia"},
        {id: 3, name: "Valera"}
      ]
    },
  },
  getState(){
    return this._state;
  },
  subscribe(observer) {
    this._callSubscrieber = observer;
  },
  _callSubscrieber() {
    console.log("State was changed")
  },

  // addPost() {
  //   let newPost = {
  //     id: 5,
  //     message: this._state.profilePage.newPostText,
  //     likesCount : 0
  //   }; 
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText = '';
  //   this._callSubscrieber(this._state);
  // },
  // updateNewPostChange(newText) {
  //   this._state.profilePage.newPostText = newText
  //   this._callSubscrieber(this._state);
  // },
  
  dispatch(action){
    if (action.type === ADD_POST){
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount : 0
      }; 
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscrieber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT){
      this._state.profilePage.newPostText = action.newText
      this._callSubscrieber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY){
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscrieber(this._state);
    } else if (action.type === SEND_MESSAGE){
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = "";
      this._state.dialogsPage.messagesData.push({id: 7, message: body})
      this._callSubscrieber(this._state);
    }
  }

}

 export const addPostActionCreator = () =>({
    type : ADD_POST
})
export const updateNewPostTextActionCreator = (text) =>({
    type : UPDATE_NEW_POST_TEXT, newText: text
})


export const sendMessageCreator = () =>({
  type : SEND_MESSAGE
})
export const updateNewMessageBodyActionCreator = (body) =>({
  type : UPDATE_NEW_MESSAGE_BODY, body: body
})

  // window.store = store
  export default store