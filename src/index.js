import React  from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './index.css';
import Layout from './pages/Layout/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>    
  <Layout />
  </React.StrictMode>
);
