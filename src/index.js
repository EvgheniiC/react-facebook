import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import store from './redux/reduxStore';
import StoteContext from './StoteContext';


 let rerenderEntreeTree = (state) => {
   debugger
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
            <StoteContext.Provider/>
              {/* <App state = {state} dispatch = {store.dispatch.bind(store)} store = {store}/> */}
              <App/>
              <StoteContext.Provider/>
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
