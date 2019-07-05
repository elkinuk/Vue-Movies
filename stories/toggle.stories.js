/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';

import { Toggle } from '@/shared';

storiesOf('Toggle', module).add('basic', () => ({
  components: { Toggle },
  template: '<Toggle/>',
}));
