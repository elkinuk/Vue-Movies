import { storiesOf } from '@storybook/vue';

import { Footer, Header, LinkButton, SubHeader, Toggle, FluidLetters } from './shared';

storiesOf('Shared', module)
  .add(...Header)
  .add(...Footer)
  .add(...LinkButton)
  .add(...SubHeader)
  .add(...FluidLetters)
  .add(...Toggle);
