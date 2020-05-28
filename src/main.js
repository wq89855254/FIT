import Vue from "vue";
import App from "./app.vue";
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/format.css'
import './assets/js/test'
// 全局引入自定义指令
import './directives/scroll';
Vue.use(ElementUI)
new Vue({
    router,
    render: (h) => h(App),
}).$mount('#root');