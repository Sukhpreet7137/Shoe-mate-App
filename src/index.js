import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ContextProvider from './ContextAPI/UserContext';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Cart from './components/Cart';
import { ToastContainer,toast } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Approuter=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/cart",
    element:<Cart/>
  }
])
root.render(
    <ContextProvider>
      <ToastContainer/>
      <RouterProvider router={Approuter}/>
    </ContextProvider>
);

