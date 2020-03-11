import React from 'react';
import { renderRoutes } from 'react-router-config';
import Top from './style';
const Home = props => (
  <div className="Home">
      <Top>
          <span className="iconfont menu">&#xe65c;</span>
          <span className="title">WebApp</span>
          <span className="iconfont search">&#xe62b;</span>
      </Top>
      {renderRoutes(props.route.routers)}
  </div>
);
export default React.memo(Home);
