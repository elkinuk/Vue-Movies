import { storiesOf } from '@storybook/vue';

import { SearchForm, MovieListItem, MovieList, MovieCard } from './components';

storiesOf('Components', module)
  .add(...SearchForm)
  .add(...MovieListItem)
  .add(...MovieList)
  .add(...MovieCard);
