<template>
    <section>
        <h2>Home</h2>
        <router-link :to="'/equipo/' + id">Equipo</router-link>
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
