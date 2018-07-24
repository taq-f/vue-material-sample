import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import App from './components/App.vue'
import Route1 from './components/Route1.vue'
import Route2 from './components/Route2.vue'

Vue.use(VueRouter)
Vue.use(VueMaterial)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/foo' },
    { path: '/foo', component: Route1 },
    { path: '/bar', component: Route2 },
  ],
})

new Vue({
  el: '#app',
  components: { App },
  template: '<app />',
  router,
});
