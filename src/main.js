import Vue from 'vue';
import VueRouter from 'vue-router';
import "../static/common/reset.scss";
import App from './app.vue';
import router from './router';

Vue.use(VueRouter);
new Vue({
    el:'#app',
    router,
    render:h=>h(App)
})