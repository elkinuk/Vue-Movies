/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';

import { SubHeader } from '@/shared';

storiesOf('SubHeader', module).add('basic', () => ({
  components: { SubHeader },
  template: `
    <SubHeader>
      <template v-slot:left>
        <span>Films by Cartoon genres</span>
      </template>
      <template v-slot:right>
        <span>Here it is 10 films</span>
      </template>
    </Subheader>
  `,
}));
