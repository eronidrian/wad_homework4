import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from "@/views/SignUpView";
import ContactView from "@/views/ContactView";
import LoginView from "@/views/LoginView";
import AddPostView from "@/views/AddPostView";
import ModifyPostView from "@/views/ModifyPostView";
import auth from "../auth";



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: async(to, from, next) => {
      let authResult = await auth.authenticated();
      if (!authResult) {
        next('/login')
      } else {
        next();
      }
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/add_post',
    name: 'add_post',
    component: AddPostView,
    beforeEnter: async(to, from, next) => {
      let authResult = await auth.authenticated();
      if (!authResult) {
        next('/login')
      } else {
        next();
      }
    }
  },
  {
    path: '/modify_post/:id',
    name: 'modify_post',
    component: ModifyPostView,
    beforeEnter: async(to, from, next) => {
      let authResult = await auth.authenticated();
      if (!authResult) {
        next('/login')
      } else {
        next();
      }
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
