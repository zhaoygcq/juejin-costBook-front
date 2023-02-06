import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'lib-flexible/flexible';
import { BrowserRouter as Router } from 'react-router-dom';
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)