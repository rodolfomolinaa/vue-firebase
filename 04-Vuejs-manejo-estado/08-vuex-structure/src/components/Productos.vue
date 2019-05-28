<template>
    <section>
        <h1>Agregar un producto</h1>
        <form @submit.prevent="agregar">
            <input type="text" placeholder="Nombre" v-model="nombre" required>
            <input type="number" placeholder="Precio" v-model="precio" required>
            <input type="submit" value="Agregar">
        </form>
        <hr>
        <ul>
            <li v-for="(producto, indice) in productos" :key="indice">
                {{producto.nombre}} - {{ '$ '+ producto.precio.toFixed(2)}}
                <button @click="comprarProducto(indice)">+</button>
            </li>
        </ul>
    </section>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
export default {
    data() {
        return {
            nombre: '',
            precio: 0
        }
    },
    computed: mapState(['productos']),
    methods: {
        ...mapMutations(['comprarProducto']),
        agregar(){
            this.$store.commit('agregarProducto', {
                nombre: this.nombre,
                precio: Number(this.precio),
            });
            this.nombre = '';
            this.precio = 0;
        }
    }
}
</script>

