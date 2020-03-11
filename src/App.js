import React from 'react';
import { GlobalStyle } from './GlobalStyle.js';
import { IconStyle } from './assets/iconfont/iconfont';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import routes from './routes/index';

const App = () => (
  <HashRouter>
    <GlobalStyle></GlobalStyle>
    <IconStyle></IconStyle>
    {renderRoutes(routes)}
  </HashRouter>
);

export default App;
