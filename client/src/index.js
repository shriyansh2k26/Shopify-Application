import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  AuthProvider  from './components/context/AuthContext';
import ProductProvider from '../src/components/context/ProductContext'
import CartProvider from './components/context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<CartProvider>
<AuthProvider>
    <ProductProvider>  
  <React.StrictMode>
   <App/>
  </React.StrictMode>
  </ProductProvider>
  </AuthProvider>
</CartProvider>

);

reportWebVitals();
