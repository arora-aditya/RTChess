import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { PeerConnectionProvider } from './module/PeerConnection/PeerConnection';
import { GlobalStyle } from './styles/globalStyle';
import App from './App';

ReactDOM.render(
  <PeerConnectionProvider>
      <Fragment>
        <GlobalStyle />
        <App />
      </Fragment>
  </PeerConnectionProvider>,
  document.getElementById('root'),
);
