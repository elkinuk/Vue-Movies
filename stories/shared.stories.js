import { storiesOf } from '@storybook/vue';

import Footer from '../src/shared/Footer/story';
import Header from '../src/shared/Header/story';
import LinkButton from '../src/shared/LinkButton/story';
import SubHeader from '../src/shared/SubHeader/story';
import Toggle from '../src/shared/Toggle/story';
import FluidLetters from '../src/shared/FluidLetters/story';

storiesOf('Shared', module)
  .add(...Header)
  .add(...Footer)
  .add(...LinkButton)
  .add(...SubHeader)
  .add(...FluidLetters)
  .add(...Toggle);
