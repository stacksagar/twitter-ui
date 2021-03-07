import React from 'react';
import ReactDOM from 'react-dom'; 
import './assets/css/styles.css'
import './assets/css/custom.css'
import App from './App'; 
import { BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  // <Router basename={process.env.PUBLIC_URL}>
  <React.StrictMode> 
    < App />
  </React.StrictMode>
  // </Router>
  , document.getElementById('root')
);