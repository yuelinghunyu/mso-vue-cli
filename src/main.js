import Vue from 'vue';
import VueRouter from 'vue-router';
import "../static/common/reset.scss";
import App from './app.vue';
import router from './router';
import store from '%/index'
import "@babel/polyfill"

Vue.use(VueRouter);
new Vue({
    el:'#app',
    router,
    store,
    render:h=>h(App)
})