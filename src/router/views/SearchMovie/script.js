import SearchForm from '@/components/SearchForm';
import MovieList from '@/components/MovieList';
import { SubHeader, Toggle } from '@/shared';

import mockedMovies from '@/core/mock-data/mocked-movies.json';

export default {
  name: 'SearchMovie',
  components: { SearchForm, SubHeader, Toggle, MovieList },
  data: () => ({
    movies: mockedMovies.movies,
  }),
};
