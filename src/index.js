import React from 'react';
import ReactDOM from 'react-dom';
import './Resources/css/app.css';
import { BrowserRouter } from 'react-router-dom';
import './firebase';

import Routers from './Routers';

const App = () => {
  return (
    <BrowserRouter>
      <Routers/>
    </BrowserRouter>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));


