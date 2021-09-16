import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  {id: 1, name: "Dima"},
  {id: 2, name: "Petia"},
  {id: 3, name: "Valera"},
  {id: 4, name: "Cosc"},
  {id: 5, name: "Free"},
  {id: 6, name: "Vasia"}
];

let messagesData = [
  {id: 1, message: "Hi"},
  {id: 2, message: "Is"},
  {id: 3, message: "Your"},
  {id: 4, message: "Day"},
  {id: 5, message: "Yo"},
  {id: 6, message: "Davai"}
];

let posts = [
  {id: 1, message: "Hi,howe are you?", likesCount : 12},
  {id: 2, message: "Im fine, and you?", likesCount : 2},
  {id: 3, message: "Im all right!", likesCount : 55},
  {id: 4, message: "Its my first post?", likesCount : 32}
];

ReactDOM.render(
  <React.StrictMode>
    <App posts = {posts} messagesData = {messagesData} dialogsData = {dialogsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
