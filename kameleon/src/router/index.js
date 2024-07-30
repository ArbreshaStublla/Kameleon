import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

import TeamPage from "../modules/TeamPage.vue";
import Bashkepunimet from "../modules/Bashkepunimet/CollaborationsPage.vue"
import ErrorPage from "../modules/Error/ErrorPage.vue"; 

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children:[
      {
        path: '/team',
        name: 'Team',
        component: TeamPage
      },
      {
        path: '/bashkepunimet',
        name: 'Bashkepunimet',
        component: Bashkepunimet
      },
    ]
  },
 
  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    component: ErrorPage
  }
];

const router = createRouter({
  history: createWebHistory(), 
  routes
});

export default router;
