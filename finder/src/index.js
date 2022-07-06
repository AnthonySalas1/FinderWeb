import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/App.css';
import "./styles/loginpage.css";
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react';
//import Banner from './Landing/banner';
//import Navbar from './Landing/navbar';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev--bnscgr3.us.auth0.com"
      clientId="y4UASngpma3T0DhVY8vzP7f9LbT83fK0"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
