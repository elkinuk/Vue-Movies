import { Toggle } from '@/shared';

export default {
  name: 'SearchForm',
  components: { Toggle },
  data: () => ({
    searchValue: '',
  }),
  methods: {
    handleSubmit(e) {
      e.preventDefault();
    },
  },
};
