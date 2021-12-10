import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from 'pages/App';

import 'styles/reset.scss';
import 'styles/main.scss';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
