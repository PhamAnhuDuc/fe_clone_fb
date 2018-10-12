import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import { createStore , applyMiddleware} from 'redux';
import appReducers from './reducers/index';

import App from './components/App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';

const store = createStore(
	appReducers,
	applyMiddleware(thunk)
);
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
serviceWorker.unregister();
