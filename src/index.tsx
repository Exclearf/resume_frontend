import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './resetStyles.css'
import Container from './Container';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
);
