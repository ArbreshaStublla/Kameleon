import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SignUp from "../components/SignUp.vue";
import LoginPage from "../components/LoginPage.vue";
import TeamPage from "../modules/TeamPage.vue";
import Bashkepunimet from "../modules/Bashkepunimet/CollaborationsPage.vue"
import ErrorPage from "../modules/Error/ErrorPage.vue"; 

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[
      {
        path: 'team',
        name: 'Team',
        component: TeamPage
      },
      {
        path: 'bashkepunimet',
        name: 'Bashkepunimet',
        component: Bashkepunimet
      },
    ]
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
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
