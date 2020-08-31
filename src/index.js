import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore,applyMiddleware,compose } from "redux";
import { Provider } from "react-redux";
import firebase,{fbConfig} from './config/fbConfig'
import rootReducer from './store/reducers/rootReducer'
import * as serviceWorker from './serviceWorker';
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import thunk from "redux-thunk";
import {
    reduxFirestore,
    createFirestoreInstance,
    getFirestore
  } from "redux-firestore";

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    
        reduxFirestore(firebase, fbConfig)
      )
)

const rrfProps = {
    firebase,
    config: fbConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
  };

ReactDOM.render(
    <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
    <App />
    </ReactReduxFirebaseProvider>
    </Provider>,
document.getElementById('root'));

serviceWorker.unregister();
