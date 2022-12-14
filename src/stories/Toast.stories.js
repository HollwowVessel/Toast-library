import React from 'react';
import { storiesOf } from '@storybook/react';

import { Toast } from 'components/Toast';

const stories = storiesOf('App test', module);

stories.add('App', () => <Toast />);
