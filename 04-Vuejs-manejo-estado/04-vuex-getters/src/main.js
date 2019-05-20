import Vue from "vue";
import Tareas from "./Tareas.vue";
import {store} from "./store";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(Tareas)
}).$mount("#app");
