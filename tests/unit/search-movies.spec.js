import { shallowMount } from '@vue/test-utils';

import SearchMovie from '../../src/router/views/SearchMovie';

import mockedMovies from '@/core/mock-data/mocked-movies.json';

describe('SearchMovie', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(SearchMovie);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('Search movie', () => {
    const searchInput = wrapper.find('.search-form__input');
    const searchSubmit = wrapper.find('.search-form__submit');

    searchInput.element.value = mockedMovies.movies[0].title;
    searchSubmit.trigger('click');

    const moviesCount = wrapper.find('.movie-item"').length;

    expect(moviesCount).toEqual(1);
  });
});
