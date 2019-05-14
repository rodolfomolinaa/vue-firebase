const eventBus = new Vue();

Vue.component('listado-productos', {
    props: ['productos'],
    template:
        `
        <section>
            <ul>
                <li v-for="producto in productos">
                    <button @click="eliminarProducto(producto.precio)">-</button>
                    <button @click="agregarProducto(producto.precio)" >+</button>
                    {{producto.nombre}} - 
                    <small>$ {{producto.precio.toFixed(2)}}</small>
                    
                </li>
            </ul>
        </section>
        `,
    methods: {
        agregarProducto(precio) {
            eventBus.$emit('agregado', precio)
        },
        eliminarProducto(precio) {
            eventBus.$emit('eliminado', precio)
        }
    }
});

Vue.component('carrito-compra', {
    template:
        `
        <section>
            <h1>$ {{total.toFixed(2)}} </h1>
            <h3> {{cantidadProductos}} Productos </h3>
        </section>
        `,
    data() {
        return {
            cantidadProductos: 0,
            total: 0,
        }
    },
    created() {
        eventBus.$on('agregado', precio => {
            if (this.total >= 0) {
                this.total += precio;
                this.cantidadProductos++;
            }

        });
        eventBus.$on('eliminado', precio => {
            if (this.total > 0) {
                this.total -= precio;
                this.cantidadProductos--;
            }
        })
    }
});

new Vue({
    el: 'main',
    data: {
        productos: [
            { nombre: 'Libro ES6', precio: 39 },
            { nombre: 'Laptop', precio: 1300 },
            { nombre: 'Café', precio: 2 },
            { nombre: 'Auriculares', precio: 80 },
            { nombre: 'Moleskine', precio: 19 },
        ]
    }
})