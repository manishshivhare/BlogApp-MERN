import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store, persistor } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <App />
    </Provider>
  </PersistGate>
);
