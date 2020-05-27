import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { BrowserRouter as Route} from 'react-router-dom'


import HomePage from './HomePage';
export default {
  title: 'Home Page',
  component: HomePage,
};

export const Default = () => (
<Route>
  <HomePage />
</Route>);
