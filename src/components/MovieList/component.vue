<template>
  <div class="movie-list">
    <MovieItem v-for="movie in movies" :movie="movie" v-bind:key="movie.title + movie.id" />
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped>
  @import './style.scss';
</style>
