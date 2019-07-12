import { storiesOf } from '@storybook/vue';

import SearchForm from '../src/components/SearchForm/story';
import MovieListItem from '../src/components/MovieListItem/story';
import MovieList from '../src/components/MovieList/story';
import MovieCard from '../src/components/MovieCard/story';

storiesOf('Components', module)
  .add(...SearchForm)
  .add(...MovieListItem)
  .add(...MovieList)
  .add(...MovieCard);
