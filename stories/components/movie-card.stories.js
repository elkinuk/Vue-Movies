import MovieCard from '@/components/MovieCard';
import mockedMovies from '@/core/mock-data/mocked-movies.json';

export default [
  'MovieCard',
  () => ({
    components: { MovieCard },
    data: () => ({
      movie: mockedMovies.movies[0],
    }),
    template: `
      <MovieCard
        :movie="movie"
      />
    `,
  }),
];
