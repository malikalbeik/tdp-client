// react
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

// Local Storage
import { loadState, saveState } from './localStorage';

// Routing & Links
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Redux dev tools
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// Redux Store
const persistedState = loadState();
const store = createStore(rootReducer, persistedState, reduxDevTools);

store.subscribe(_ => {
    saveState({
        ...store.getState(),
        theme: store.getState().theme
    });
});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
