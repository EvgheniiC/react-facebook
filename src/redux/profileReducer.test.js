import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer";

let state = {
  posts: [{
      id: 1,
      message: "Hi,howe are you?",
      likesCount: 12
    },
    {
      id: 2,
      message: "Im fine, and you?",
      likesCount: 2
    },
    {
      id: 3,
      message: "Im all right!",
      likesCount: 55
    },
    {
      id: 4,
      message: "Its my first post?",
      likesCount: 32
    }
  ]
};


test(' message of new post schould be correct', () => {
  let action = addPostActionCreator("Test profileReducer");
  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(5);
});

test('new post should be added', () => {
  let action = addPostActionCreator("Test profileReducer");
  let newState = profileReducer(state, action);

  expect(newState.posts[4].message).toBe("Test profileReducer");
});

test('after deleting length of message schould be decrement', () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);

   expect(newState.posts.length).toBe(3);
});