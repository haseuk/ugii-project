import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import Html from '@/components/html/Html';
import Navigation from '@/components/html/Navigation';
import Js from '@/components/js/Js';
import Security1 from '@/components/webSecurity/Security1';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/main' },
    { path: '/main', name: 'main', component: Main },
    { path: '/html', name: 'html', component: Html },
    { path: '/html', name: 'navigation', component: Navigation },
    { path: '/js', name: 'js', component: Js },
    { path: '/webSecurity', name: 'security1', component: Security1 },
  ]
});

export default router;