/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';

import { Header } from '@/shared';

storiesOf('Header', module).add('basic', () => ({
  components: { Header },
  template: '<Header/>',
}));
