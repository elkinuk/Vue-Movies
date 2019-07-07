<template>
  <div>
    <SearchForm
      :defaultSearchType="searchMovieType"
      v-on:search-movie="searchMovie"/>
    <SubHeader>
        <template v-slot:left>
          <span>There are {{moviesLength}} films are found</span>
        </template>
        <template v-slot:right>
          <Toggle
            :labels="['date', 'rating']"
            text="Sort by"
            name="sortBy"
            checkedValue="date"
          />
        </template>
      </Subheader>
    <MovieList
      :movies="movies"
    />
  </div>
</template>

<script src="./script.js"></script>
