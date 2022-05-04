import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Import App component
import App from './App';

// Import context provider
import { UserProvider } from './contexts/user.context';
import { CategoriesProvider } from './contexts/categories.context';
import { CartProvider } from './contexts/cart.context';

// Import scss file
import './index.scss';

const rootElement = document.getElementById('root');

// We wrap <BrowserRouter> around <App /> to make react-router-dom available everywhere in the app
// We wrap context providers around <App /> to make those contexts accessable everywhere in the app
render(
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>,
  rootElement
);