<template>
    <div>
        <elemento tipo="header">Hola header</elemento>
        <elemento tipo="aside">Hola aside</elemento>
        <elemento tipo="nav">Hola nav</elemento>
        <elemento tipo="footer">Hola footer</elemento>
    </div>
</template>

<script>
import elemento from "./components/Elemento.vue";

export default {
    components: {
        elemento
    }
};
</script>

<style>
</style>
