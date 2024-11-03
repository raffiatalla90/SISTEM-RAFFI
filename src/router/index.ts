import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BlogView from '../views/BlogView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';
import BlogBiasaView from '../views/BlogBiasaView.vue';
import BusinessView from '../views/BusinessView.vue';
import PrivacyPolicyView from '@/views/PrivacyPolicyView.vue';
import AuthorView from '@/views/AuthorView.vue';

export type RouteName = 'home' | 'blog' | 'about' | 'contact' | 'BlogBiasa' | 'Business'| 'PrivacyPolicy';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/BlogBiasaView',
      name: 'BlogBiasaView',
      component: BlogBiasaView, // Corrected from BlogBiasaViewView to BlogBiasaView
    },
    {
      path: '/Business',
      name: 'BusinessView',
      component: BusinessView, // Corrected from BlogBiasaViewView to BlogBiasaView
    },
    {
      path: '/PrivacyPolicy',
      name: 'PrivacyPolicyView',
      component: PrivacyPolicyView,
    },
    {
      path: '/Author',
      name: 'AuthorView',
      component: AuthorView,
    }
  ],
});

export default router;