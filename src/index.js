import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import store from './redux/state';


 let rerenderEntreeTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
              <App state = {store.getState()} addPost = {store.addPost}
               updateNewPostChange = {store.updateNewPostChange}/>
            </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
      );
      
    }
    
    rerenderEntreeTree(store.getState());
    store.subscribe(rerenderEntreeTree);
