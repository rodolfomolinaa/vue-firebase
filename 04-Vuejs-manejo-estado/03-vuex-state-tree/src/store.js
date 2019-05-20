import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    nombre: 'Rodolfo Andrés',
    apellidos: 'Molina Avilés',
    profesion: 'Developer',
    Ciudad: 'San Salvador'
  },
  
});
