<template>
  <section>
    <h1>Rutas con Vue Router</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/contacto">Contacto</router-link>
    <hr>
    <router-view></router-view>
  </section>
</template>

<script>
import Home from "./components/Home.vue";
import Contacto from "./components/Contacto.vue";

export default {
  name: "app",
  components: {
    Home,
    Contacto
  }
};
</script>
