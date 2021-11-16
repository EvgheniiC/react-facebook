import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import store from './redux/reduxStore';
import {Provider} from './StoreContext';

 let rerenderEntreeTree = () => {
   debugger
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
            <Provider store = {store}/>
              <App/>
              <Provider/>
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
