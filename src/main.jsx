import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import { Provider } from 'react-redux';
import store from './app/store';

import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './app/store';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
