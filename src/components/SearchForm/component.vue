<template>
   <form class="form" @submit="handleSubmit">
      <input
        type="text"
        name="searchValue"
        placeholder="Search..."
        v-model="searchValue"
      />
      <Toggle
        v-on:toggle-data="handleToggle"
        :labels="['title', 'genre']"
        text="Search by"
        name="searchBy"
        :checkedValue="defaultSearchType"
      />
      <input type="submit" value="Search" />
    </form>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped>
  @import './style.scss';
</style>
