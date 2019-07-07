import SearchForm from '@/components/SearchForm';
import MovieList from '@/components/MovieList';
import { SubHeader, Toggle } from '@/shared';

import mockedMovies from '@/core/mock-data/mocked-movies.json';

export default {
  name: 'SearchMovie',
  components: { SearchForm, SubHeader, Toggle, MovieList },
  data: () => ({
    searchMovieValue: '',
    searchMovieType: 'title',
  }),
  methods: {
    searchMovie(data) {
      this.searchMovieValue = data.searchValue;
      this.searchMovieType = data.searchType;
    },
  },
  computed: {
    movies: function() {
      switch (this.searchMovieType) {
        case 'title':
          return this.searchMovieValue
            ? mockedMovies.movies.filter(
                movie => movie.title.toLowerCase().indexOf(this.searchMovieValue.toLowerCase()) + 1,
              )
            : mockedMovies.movies;
        case 'genre':
          return this.searchMovieValue
            ? mockedMovies.movies.filter(movie =>
                movie.genres.find(el => el.toLowerCase() === this.searchMovieValue.toLowerCase()),
              )
            : mockedMovies.movies;
        default:
          return mockedMovies.movies;
      }
    },
    moviesLength: function() {
      return this.movies ? this.movies.length : 0;
    },
  },
};
