import Vue from 'vue';
import Router from 'vue-router';
import SearchMovie from './views/SearchMovie';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: SearchMovie },
    {
      path: '/film/:id',
      name: 'film',
      component: () => import(/* webpackChunkName: "movie" */ './views/MovieDetails'),
    },
    { path: '*', component: () => import(/* webpackChunkName: "notFound" */ './views/NotFound') },
  ],
});
