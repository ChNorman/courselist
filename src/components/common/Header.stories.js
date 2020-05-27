import React from 'react';
import {action} from '@storybook/addon-actions';
import { BrowserRouter as Route} from 'react-router-dom'

import Header from './Header'

export default {
    title: 'Header',
    component: Header,
};

export const Display = () => (
<Route>
    <Header />
</Route>);
