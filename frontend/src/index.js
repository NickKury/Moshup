import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider  } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ModalProvider } from "./components/context/Modal";
import sessionReducer from './store/session';
import { combineReducers} from 'redux'

import configureStore from './store';
import { restoreCSRF, csrfFetch } from './store/csrf';
import * as sessionActions from './store/session';
import * as genreActions from './store/genre'

const store = configureStore();

// if (process.env.NODE_ENV !== "production") {
  //   window.store = store;
  // }
  
  
  if (process.env.NODE_ENV !== 'production') {
    restoreCSRF();
    
    window.csrfFetch = csrfFetch;
    window.store = store;
    window.sessionActions = sessionActions;
    window.genreActions = genreActions;
  }
  
  const rootReducer = combineReducers({
    session: sessionReducer,
  });


  function Root() {
    return (
      <Provider store={store}>
        <ModalProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ModalProvider>
      </Provider>
    );
  }
  
  ReactDOM.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
    document.getElementById('root')
  );
