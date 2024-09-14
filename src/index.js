import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { Auth0Provider } from '@auth0/auth0-react';
import { authConfig } from './authConfig';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={authConfig.domain}
      clientId={authConfig.clientId}
      redirectUri={authConfig.redirectUri}
      audience="ВАШ_AUTH0_API_IDENTIFIER" // Необязательно, если используется API
      scope="openid profile email" // Необязательно, скопы для запроса
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);



