/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';

import { LinkButton } from '@/shared';

storiesOf('LinkButton', module).add('basic', () => ({
  components: { LinkButton },
  props: {
    to: '/test',
  },
  template: "<LinkButton :to='to'>Link Button</LinkButton>",
}));
