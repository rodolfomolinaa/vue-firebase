<template>
    <section>
        <h1>Cantidad: {{cantidad}}</h1>
        <button @click="aumentarAsync(12)">Aumentar</button>
        <button @click="reducirAsync({cantidad: 15})">Reducir</button>
    </section>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
    computed: mapState(["cantidad"]),
    methods: mapActions(['aumentarAsync', 'reducirAsync'])
    // methods: mapMutations(["aumentar", "reducir"]),
    // methods: {
    //     aumentar() {
    //         this.$store.commit("aumentar");
    //     },
    //     reducir() {
    //         this.$store.commit("reducir");
    //     }
    // }

    // methods: {
    //   aumentar(){
    //     this.$store.dispatch('aumentarAsync')
    //   },
    //   reducir(){
    //     this.$store.dispatch('reducirAsync')
    //   }
    // }
};
</script>
