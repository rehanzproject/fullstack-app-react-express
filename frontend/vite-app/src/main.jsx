import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import RootRouter from './config/router/index.jsx';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RootRouter />
    <ToastContainer position='top-center' autoClose={2000} />
  </React.StrictMode>,
)
