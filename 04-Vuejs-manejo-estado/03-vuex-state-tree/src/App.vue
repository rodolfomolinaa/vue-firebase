<template>
  <h1>Hola me llamo {{nombres}} {{apellidos}} y soy {{profesion}} </h1>
</template>

<script>
import {mapState} from 'vuex';
export default {
  // computed: {
  //   nombre() {
  //     return this.$store.state.nombre;
  //   }
  // }
  // computed: mapState({
  //   nombres: state => state.nombre,
  //   apellidos: state => state.apellidos,
  // })

  computed: mapState(['nombres', 'apellidos', 'profesion'])

};
</script>


