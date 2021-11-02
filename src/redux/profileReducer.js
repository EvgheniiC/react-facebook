const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
  posts : [
    {id: 1, message: "Hi,howe are you?", likesCount : 12},
    {id: 2, message: "Im fine, and you?", likesCount : 2},
    {id: 3, message: "Im all right!", likesCount : 55},
    {id: 4, message: "Its my first post?", likesCount : 32}
  ],
  newPostText:"IT-Kanasutra"
};

const profileReducer = (state = initialState,action) => {
  switch(action.type){
    case ADD_POST: 
          let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount : 0
          }; 
          state.posts.push(newPost);
          state.newPostText = '';
          return state;
    case UPDATE_NEW_POST_TEXT:
          state.newPostText = action.newText
          return state;
    default:
          return state;
  }
    
}

export const addPostActionCreator = () =>({
  type : ADD_POST
})
export const updateNewPostTextActionCreator = (text) =>({
  type : UPDATE_NEW_POST_TEXT, newText: text
})

export default profileReducer;