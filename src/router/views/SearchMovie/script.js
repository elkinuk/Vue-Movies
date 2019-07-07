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
    sortMovieType: 'date',
  }),
  methods: {
    setSearchMovie(data) {
      this.searchMovieValue = data.searchValue;
      this.searchMovieType = data.searchType;
    },
    setSortMovies(data) {
      this.sortMovieType = data;
    },
    searchMovie(movies) {
      switch (this.searchMovieType) {
        case 'title':
          movies = this.searchMovieValue
            ? movies.filter(
                movie => movie.title.toLowerCase().indexOf(this.searchMovieValue.toLowerCase()) + 1,
              )
            : movies;
          break;
        case 'genre':
          movies = this.searchMovieValue
            ? movies.filter(movie =>
                movie.genres.find(
                  el => el.toLowerCase().indexOf(this.searchMovieValue.toLowerCase()) + 1,
                ),
              )
            : movies;
          break;
        default:
          movies;
      }
      return movies;
    },
    sortMovies(movies) {
      switch (this.sortMovieType) {
        case 'date':
          movies.sort((a, b) => {
            new Date(a.release_date) > new Date(b.release_date);
            if (new Date(a.release_date) < new Date(b.release_date)) {
              return -1;
            }
            if (new Date(a.release_date) > new Date(b.release_date)) {
              return 1;
            }
            return 0;
          });
          break;
        case 'rating':
          movies.sort((a, b) => {
            if (a.vote_average < b.vote_average) {
              return -1;
            }
            if (a.vote_average > b.vote_average) {
              return 1;
            }
            return 0;
          });
          break;
        default:
          movies;
      }
      return movies;
    },
  },
  computed: {
    movies: function() {
      let movies = this.searchMovie(mockedMovies.movies);
      movies = this.sortMovies(movies);
      return movies;
    },
    moviesLength: function() {
      return this.movies ? this.movies.length : 0;
    },
  },
};
