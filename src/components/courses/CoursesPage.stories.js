import React from 'react';
import {action} from '@storybook/addon-actions';

import CoursesPage from './CoursesPage'

export default {
    component: CoursesPage,
    title: 'Courses Page',

    // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = () => <CoursesPage />