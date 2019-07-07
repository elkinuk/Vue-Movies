<template>
  <div>
    <SearchForm/>
    <SubHeader>
        <template v-slot:left>
          <span>Films by Cartoon genres</span>
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
