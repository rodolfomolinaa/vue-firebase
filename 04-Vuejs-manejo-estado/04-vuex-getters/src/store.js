import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    tareas:[
      {id: 1, nombre: 'Aprender Vue Routing', completado: false},
      {id: 2, nombre: 'Organizar lecciones restantes', completado: false},
      {id: 3, nombre: 'Grabar lecciones mini curso ES6', completado: false},
      {id: 4, nombre: 'Preparar landing page curso', completado: false},
      {id: 5, nombre: 'Diseñar acciones de marketing', completado: false},
    ]
  },
  getters: {
    tareasCompletadas: state => state.tareas.filter(tarea => tarea.completado).length
  }
});
