import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';
import * as serviceWorker from './serviceWorker';
import '@gocrisp/store-locator/dist/store-locator.css';


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
serviceWorker.unregister();