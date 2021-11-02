import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import store from './redux/reduxStore';


 let rerenderEntreeTree = (state) => {
   debugger
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
              <App state = {state} dispatch = {store.dispatch.bind(store)} store = {store}/>
            </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
      );
      
    }
    
    rerenderEntreeTree(store.getState());
    store.subscribe(() => {
      let state = store.getState();
      rerenderEntreeTree(state);
    });
