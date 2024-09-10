import React from 'react';
import ReactDOM from 'react-dom/client';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../node_modules/socket.io/client-dist/socket.io.min.js';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import UserContextProvider from './Context/UserContext.js';
import CartContextProvider from './Context/CartContext.js';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
                            <UserContextProvider>
                                <CartContextProvider>
                                            <App />
                                </CartContextProvider>
                            </UserContextProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
