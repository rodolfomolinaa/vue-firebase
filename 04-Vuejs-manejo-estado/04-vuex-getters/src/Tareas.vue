<template>
  <main>
    <tareas-restantes></tareas-restantes>
    <ul>
      <li v-for="tarea in tareas" :key="tarea.id"> {{tarea.nombre}} </li>
    </ul>
  </main>
</template>

<script>
import {mapState}from 'vuex';
import TareasRestantes from './components/TareasRestantes.vue'
export default {
  // computed: {
  //   tareas() {
  //     return this.$store.state.tareas;
  //   }
  // }
  components: {TareasRestantes},
  computed: mapState(['tareas'])

};
</script>
