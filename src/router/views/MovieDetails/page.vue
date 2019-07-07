<template>
  <div>
    <h1> film id - {{ $route.params.id }}</h1>
    <MovieCard :movie="movies[0]"/>
    <SubHeader>
      <template v-slot:left>
        <span>Films by Cartoon genres</span>
      </template>
      <template v-slot:right>
        <span>Here it is 10 films</span>
      </template>
    </Subheader>
    <MovieList :movies="movies"/>
  </div>
</template>

<script src="./script.js"></script>
