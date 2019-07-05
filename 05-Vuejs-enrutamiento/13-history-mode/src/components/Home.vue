<template>
    <section>
        <h2>Home</h2>
        <router-link :to="{name: 'equipo', params: {id: id}}">Equipo </router-link>
        <router-link :to="{name: 'contacto', params: {id: id}}">Contacto</router-link>
    </section>
</template>

<script>
export default {
    data() {
        return {
            id: 'Rodolfo'
        }
    }
}
</script>
