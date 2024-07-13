import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Betting from '../views/Betting.vue';
import Results from '../views/Results.vue';
import Profile from '../views/Profile.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/betting', name: 'Betting', component: Betting },
  { path: '/results', name: 'Results', component: Results },
  { path: '/profile', name: 'Profile', component: Profile },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
