import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LaunchProvider } from './contexts/LaunchContext.jsx';

ReactDOM.render(
  <LaunchProvider >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </LaunchProvider>,
  document.getElementById('root'),
);
