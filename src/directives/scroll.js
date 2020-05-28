import Vue from "vue";
Vue.directive("scroll", {
  inserted: (el,binding) => {
    el.addEventListener("mousewheel", (e) => {
      var cb = binding.value;
      cb(e.deltaY > 0);
    });
  },
});
