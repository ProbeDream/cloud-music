import React from 'React';
import { Redirect } from 'react-router';
import Home from '../application/Home';
import Recommend from '../application/Recommend';
import Singers from '../application/Singers';
import Rank from '../application/Rank';

export default [
  {
    path: '/',
    component: Home,
    routes: [
      { path: '/', exact: true, render: () => <Redirect to={'/Recommend'} /> },
      { path: '/recommend', component: Recommend },
      { path: '/Singer', component: Singers },
      { path: '/Rank', component: Rank }
    ]
  }
];
