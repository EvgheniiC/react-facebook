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
        ]
    },
    sidebar : {
      friendsOnline: [
        {id: 1, name: "Dima"},
        {id: 2, name: "Petia"},
        {id: 3, name: "Valera"}
      ]
    }
  },
  getState(){
    return this._state;
  },
  _callSubscrieber() {
    console.log("State was changed")
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount : 0
    }; 
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscrieber(this._state);
  },
  updateNewPostChange(newText) {
    this._state.profilePage.newPostText = newText
    this._callSubscrieber(this._state);
  },
  subscribe(observer) {
    this._callSubscrieber = observer;
  }
}
  // window.store = store
  export default store