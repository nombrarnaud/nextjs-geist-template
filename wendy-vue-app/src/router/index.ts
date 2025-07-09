import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/services/technical-support',
      name: 'technical-support',
      component: () => import('../views/services/TechnicalSupportView.vue'),
    },
    {
      path: '/services/web-mobile-development',
      name: 'web-mobile-development',
      component: () => import('../views/services/WebMobileDevelopmentView.vue'),
    },
    {
      path: '/services/graphic-design',
      name: 'graphic-design',
      component: () => import('../views/services/GraphicDesignView.vue'),
    },
    {
      path: '/services/digital-marketing',
      name: 'digital-marketing',
      component: () => import('../views/services/DigitalMarketingView.vue'),
    },
    {
      path: '/services/cyber-security',
      name: 'cyber-security',
      component: () => import('../views/services/CyberSecurityView.vue'),
    },
  ],
})

export default router
