import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react';
import { configurePersistor, configureStore } from './redux/store/store';

// CSS
import './index.css'

// Redux setup
const store = configureStore();
const persistor = configurePersistor(store);
const wrapper = document.getElementById('root');


ReactDOM.render(
  <Provider store={store}>
		<PersistGate loading={<div />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  wrapper
);
reportWebVitals();
