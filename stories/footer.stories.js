/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';

import { Footer } from '@/shared';

storiesOf('Footer', module).add('basic', () => ({
  components: { Footer },
  template: '<Footer/>',
}));
