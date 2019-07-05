import MovieListItem from '@/components/MovieListItem';
import mockedMovies from '@/core/mock-data/mocked-movies.json';
export default [
  'MovieListItem',
  () => ({
    components: { MovieListItem },
    data: () => ({
      movie: mockedMovies.movies[0],
    }),
    template: `
      <MovieListItem
        :movie="movie"
      />
    `,
  }),
];
