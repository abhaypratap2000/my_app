import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { store } from './app/store'
import { Provider } from 'react-redux'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
  <React.StrictMode>
    <Auth0Provider
    domain="dev-dzuum5nfaqhgeqaq.us.auth0.com"
    clientId="9qWG9j2aSQs9bInfB612jB5YsU8t4AVg"
    authorizationParams={{
      redirect_uri: window.location.origin
    }} >
        <Provider store={store}>
     <App />
     </Provider>
     </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
