import MovieCard from '@/components/MovieCard';
import MovieList from '@/components/MovieList';

import { SubHeader } from '@/shared';

import mockedMovies from '@/core/mock-data/mocked-movies.json';

export default {
  name: 'SearchMovie',
  components: { MovieCard, SubHeader, MovieList },
  data: () => ({
    movies: mockedMovies.movies,
  }),
  computed: {
    currentMovie: function() {
      return this.movies.find(el => el.id === +this.$route.params.id);
    },
    genres: function() {
      return this.currentMovie.genres[0];
    },
  },
};
