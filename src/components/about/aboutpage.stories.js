import React from 'react';
import {action} from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import AboutPage from './AboutPage';

export default {
    component: AboutPage,
    title: 'AboutPage',

    // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = () => <AboutPage />