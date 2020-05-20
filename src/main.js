import Vue from "vue";
import App from "./app.vue";
var root = document.getElementById("root");
new Vue({
  render: (h) => h(App),
}).$mount(root);
