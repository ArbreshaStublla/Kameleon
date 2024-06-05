import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import SignUp from "../components/SignUp"
import LoginPage from "../components/LoginPage.vue"
import TeamPage from "../modules/TeamPage.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[
      {
        path: '/team',
        name: 'Team',
        component: TeamPage
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
  
  
]

const router = createRouter({
  history: createWebHistory(), 
  routes
})

export default router
