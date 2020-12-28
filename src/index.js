import React from 'react';
import ReactDOM from 'react-dom'
import Navbar from './Navbar'
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
  <div style={{marginTop:'5px'}}>
    <Navbar></Navbar>
    <App />
  </div>
  </BrowserRouter>
    ,
  document.getElementById('root')
);


