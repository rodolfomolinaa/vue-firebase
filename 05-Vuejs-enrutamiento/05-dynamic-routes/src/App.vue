<template>
    <section>
        <h1>Rutas con Vue Router</h1>
        <router-link to="/" exact active-class="active" tag="li">
            <a>Home</a>
        </router-link>
        <router-link to="/contacto" exact active-class="active" tag="li">
            <a>Contacto</a>
        </router-link>
        <router-link to="/usuario/77" exact active-class="active" tag="li">
            <a>Usuario</a>
        </router-link>
        <hr>
        <router-view></router-view>
    </section>
</template>

<script>
import Home from "./components/Home.vue";
import Contacto from "./components/Contacto.vue";

export default {
    // name: "app",
    // components: {
    //     Home,
    //     Contacto
    // }
};
</script>

<style>
.active a {
    color: red;
}
</style>