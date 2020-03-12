import React from 'react';
import { GlobalStyle } from './GlobalStyle.js';
import { IconStyle } from './assets/iconfont/iconfont';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import routes from './routes/index';
import { Provider } from 'react-redux';
import store from './store/index.js';

const App = () => (
  <Provider store={store}>
    <HashRouter>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      {renderRoutes(routes)}
    </HashRouter>
  </Provider>
);

export default App;
