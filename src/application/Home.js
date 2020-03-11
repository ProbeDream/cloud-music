import React from 'react';
import {renderRoutes} from "react-router-config";
const Home = props => <div className="Home">{renderRoutes(props.route.routers)}</div>;
export default React.memo(Home);
